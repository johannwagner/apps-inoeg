import { t, Trans } from '@lingui/macro';
import { getHexId } from 'helpers/conversion';
import { formatDate, formatTime } from 'helpers/time';
import React from 'react';
import {
    FormProvider,
    Resolver,
    SubmitHandler,
    useForm,
} from 'react-hook-form';
import { useLocation, useNavigate, useParams } from 'react-router';
import { useEffectOnce } from 'react-use';
import type { Appointment } from 'types';
import {
    Button,
    Form,
    InputField,
    Modal,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalProps,
    SelectField,
    Title,
} from 'ui';

interface FormData {
    date?: string;
    time?: string;
    slots: number;
    duration: number;
}

const resolver: Resolver<FormData> = async (values) => {
    const errors: any = {};

    if (values.date === undefined) {
        errors.date = t({
            id: 'provider.schedule.create-appointment-modal.please-enter-date',
        });
    } else if (values.time === undefined) {
        errors.time = t({
            id: 'provider.schedule.create-appointment-modal.please-enter-time',
        });
    } else {
        values.startdate = new Date(`${values.date} ${values.time}`);

        if (values.startdate < new Date()) {
            errors.date = t({
                id: 'provider.schedule.create-appointment-modal.in-the-past',
            });
        }

        // we allow appointments max. 30 days in the future
        if (
            values.startdate >
            new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30)
        ) {
            errors.date = t({
                id: 'provider.schedule.create-appointment-modal.too-far-in-the-future',
                message:
                    'Bitte wählen Sie Termine die maximal 30 Tage in der Zukunft liegen',
            });
        }
    }

    if (values.slots > 50) {
        errors.slots = t({
            id: 'provider.schedule.create-appointment-modal.too-many-slots',
        });
    }

    if (values.slots < 1) {
        errors.slots = t({
            id: 'provider.schedule.create-appointment-modal.too-few-slots',
        });
    }

    return {
        values,
        errors,
    };
};

interface CreateAppointmentModal extends ModalProps {
    appointments: Appointment[];
}

export const CreateAppointmentModal: React.FC<CreateAppointmentModal> = ({
    appointments,
    onClose,
}) => {
    const navigate = useNavigate();
    const { hash } = useLocation();

    const { action, id } = useParams();

    const methods = useForm<FormData>({
        mode: 'onChange',
        resolver,
    });

    const { register, handleSubmit, formState, reset, getValues } = methods;

    const data = getValues();

    let actionUrl = '';

    if (action !== undefined) {
        actionUrl = `/${action}`;
    }

    if (id !== undefined) {
        actionUrl += `/view/${id}`;
    }

    const cancel = () => navigate(`/provider/schedule${actionUrl}`);

    let appointment: Appointment | undefined;

    if (id !== undefined) {
        appointment = appointments.find((app) => getHexId(app.id) === id);
    }

    useEffectOnce(() => {
        if (appointment !== undefined) {
            const appointmentData: FormData = {
                time: formatTime(appointment.date),
                date: formatDate(appointment.date),
                slots: appointment.slots.length,
                duration: appointment.duration,
            };

            // for (const [_, v] of Object.entries(properties)) {
            //     for (const [kk, _] of Object.entries(v.values)) {
            //         if (appointment[kk] !== undefined)
            //             appointmentData[kk] = true;
            //         else delete appointmentData[kk];
            //     }
            // }

            reset(appointmentData);
        } else {
            const date = hash !== undefined ? new Date(hash) : new Date();
            const newData: FormData = {
                duration: data.duration || 30,
                slots: data.slots || 1,
                time: formatTime(date),
                date: formatDate(date),
            };

            // let firstProperty;
            // const found = false;

            // addProps: for (const [_, v] of Object.entries(properties)) {
            //     for (const [kk, _] of Object.entries(v.values)) {
            //         if (firstProperty === undefined) {
            //             firstProperty = kk;
            //         }

            //         if (data[kk] !== undefined) {
            //             found = true;

            //             newData[kk] = true;

            //             break addProps;
            //         }
            //     }
            // }

            // if (!found) {
            //     newData[firstProperty] = true;
            // }

            reset(newData);
        }
    });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        let action;

        // we remove unnecessary fields like 'time' and 'date'
        delete data.time;
        delete data.date;

        // if (appointment !== undefined) {
        //     action = updateAppointmentAction;
        // } else {
        //     action = createAppointmentAction;
        // }

        // const promise = action(data, appointment);

        // promise.finally(() => setSaving(false));

        // promise.then(() => {
        //     // we reload the appointments
        //     openAppointmentsAction();
        //     // and we go back to the schedule view
        //     navigate(`/provider/schedule${actionUrl}`);
        // });
    };

    // const properties = {}; // settings.get('appointmentProperties');

    // const apptProperties = Object.entries(properties).map(([k, v]) => {
    //     const options = Object.entries(v.values).map(([kv, vv]) => {
    //         return {
    //             value: kv,
    //             label: vv['de'],
    //             // label: `${k}.values.${kv}`,
    //         };
    //     });

    //     return (
    //         <React.Fragment key={k}>
    //             <SelectField
    //                 options={options}
    //                 label={t({ message: v.title['de'], id: `${k}.title` })}
    //                 // onChange={(option) => changeTo(option)}
    //                 {...register(k)}
    //             />
    //         </React.Fragment>
    //     );
    // });

    return (
        <Modal onClose={onClose}>
            <FormProvider {...methods}>
                <Form
                    name="appointment-modal"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <ModalHeader>
                        <Title>
                            {appointment !== undefined ? (
                                <Trans id="provider.schedule.create.appointment-modal.edit-title">
                                    Termin bearbeiten
                                </Trans>
                            ) : (
                                <Trans id="provider.schedule.create.appointment-modal.new-title">
                                    Neuen Termin erstellen
                                </Trans>
                            )}
                        </Title>
                    </ModalHeader>

                    <ModalContent className="flex flex-col gap-6">
                        <div className="flex gap-6 w-full">
                            <InputField
                                label={t({
                                    id: 'provider.schedule.create.appointment-modal.date.label',
                                    message: 'Datum',
                                })}
                                type="date"
                                className="flex-1"
                                {...register('date')}
                            />

                            <InputField
                                label={t({
                                    id: 'provider.schedule.create.appointment-modal.time.label',
                                    message: 'Uhrzeit',
                                })}
                                type="time"
                                {...register('time')}
                            />
                        </div>

                        <InputField
                            label={t({
                                id: 'provider.schedule.create.appointment-modal.slots.label',
                                message: 'Anzahl Impfdosen',
                            })}
                            type="number"
                            step={1}
                            min={1}
                            max={50}
                            {...register('slots')}
                        />

                        <SelectField
                            label={t({
                                id: 'provider.schedule.create.appointment-modal.duration-label',
                                message: 'Vstl. Dauer',
                            })}
                            options={[
                                5, 10, 15, 20, 30, 45, 60, 90, 120, 150, 180,
                                210, 240,
                            ].map((duration) => ({
                                label: t({
                                    id: 'provider.schedule.create.appointment-modal.duration-value',
                                    message: `Dauer: ${duration} Minuten`,
                                }),
                                value: duration,
                            }))}
                            {...register('duration')}
                        />

                        {/* {apptProperties} */}
                    </ModalContent>

                    <ModalFooter>
                        <Button
                            disabled={
                                !formState.isValid || formState.isSubmitting
                            }
                        >
                            <Trans id="provider.schedule.create.appointment-modal.button">
                                Speichern
                            </Trans>
                        </Button>
                    </ModalFooter>
                </Form>
            </FormProvider>
        </Modal>
    );
};
