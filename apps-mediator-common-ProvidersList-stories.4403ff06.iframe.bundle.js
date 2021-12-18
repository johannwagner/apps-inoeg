"use strict";(self.webpackChunk_kiebitz_apps_ffm=self.webpackChunk_kiebitz_apps_ffm||[]).push([[3139],{"./src/apps/mediator/common/ProvidersList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default});var apps_data__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apps/data.ts"),_MediatorApiContext__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/apps/mediator/common/MediatorApiContext.tsx")),_ProvidersList__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/apps/mediator/common/ProvidersList.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={component:_ProvidersList__WEBPACK_IMPORTED_MODULE_3__.H};const Default=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_MediatorApiContext__WEBPACK_IMPORTED_MODULE_2__.d,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ProvidersList__WEBPACK_IMPORTED_MODULE_3__.H,{providers:apps_data__WEBPACK_IMPORTED_MODULE_0__.a})});Default.displayName="Default",Default.parameters={storySource:{source:"() => (\n    <MediatorApiProvider>\n        <ProviderList providers={providers} />\n    </MediatorApiProvider>\n)"},...Default.parameters}},"./src/apps/mediator/common/MediatorApiContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>MediatorApiProvider,s:()=>useMediatorApi});var data=__webpack_require__("./src/apps/data.ts"),dist=__webpack_require__("./node_modules/vanellus/dist/index.js"),backend=__webpack_require__("./src/backend/backend.ts");class MediatorApi{constructor(){!function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(this,"keyPairs",null),this.mediator=new dist.Mediator("main",backend.y)}async authenticate(keyPairs){return this.keyPairs=keyPairs,!0}async isAuthenticated(){return!!this.keyPairs}async logout(){return!0}async getProviders(){return data.a}async getProvider(providerId){return data.a[Number(providerId)-1]||null}async confirmProvider(provider){return!0}async unconfirmProvider(provider){return!0}async reconfirmProvider(provider){return!0}async backupData(){return"foobar"}}var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MediatorApiContext=(0,react.createContext)(void 0),MediatorApiProvider=_ref=>{let{children}=_ref;const api=new MediatorApi;return(0,jsx_runtime.jsx)(MediatorApiContext.Provider,{value:{api},children})};MediatorApiProvider.displayName="MediatorApiProvider";const useMediatorApi=()=>{const context=(0,react.useContext)(MediatorApiContext);if(void 0===context)throw new Error("You cant use useMediatorApi without MediatorApiProvider!");return context.api};try{MediatorApiProvider.displayName="MediatorApiProvider",MediatorApiProvider.__docgenInfo={description:"",displayName:"MediatorApiProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/apps/mediator/common/MediatorApiContext.tsx#MediatorApiProvider"]={docgenInfo:MediatorApiProvider.__docgenInfo,name:"MediatorApiProvider",path:"src/apps/mediator/common/MediatorApiContext.tsx#MediatorApiProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/apps/mediator/common/ProviderRow.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>ProviderRow});var _lingui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@lingui/react/esm/index.js"),_lingui_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@lingui/core/esm/index.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/index.ts"),ui_Tag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ui/Tag.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ProviderRow=_ref=>{let{provider,selected=!1,onSelect}=_ref;const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),providerLink="/mediator/providers/".concat(provider.id),onSelectToggle=()=>{var _ref$current;onSelect(provider.id,!(null!==(_ref$current=ref.current)&&void 0!==_ref$current&&_ref$current.checked))};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("provider-table-row",{selected}),onClick:onSelectToggle,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{type:"checkbox",className:"checkbox",name:"providers[]",onChange:onSelectToggle,value:provider.id,checked:selected,ref,"aria-label":_lingui_core__WEBPACK_IMPORTED_MODULE_5__.ag._({id:"mediator.provider-row.select-row",message:"Impfanbieter auswählen oder abwählen"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ui__WEBPACK_IMPORTED_MODULE_1__.rU,{href:providerLink,children:provider.name||"Name missing"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td",{className:"py-4 px-6 text-sm text-gray-500 whitespace-nowrap",children:[provider.street,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br",{}),provider.zipCode," ",provider.city]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ui_Tag__WEBPACK_IMPORTED_MODULE_2__.V,{variant:provider.verified?"success":"warning",children:provider.verified?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_6__.cC,{id:"mediator.provider-row.valid"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_6__.cC,{id:"mediator.provider-row.invalid"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td",{className:"flex gap-4 justify-end",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ui__WEBPACK_IMPORTED_MODULE_1__.rU,{href:providerLink,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_6__.cC,{id:"mediator.provider-row.button-show"})})})]},provider.id)};ProviderRow.displayName="ProviderRow";try{ProviderRow.displayName="ProviderRow",ProviderRow.__docgenInfo={description:"",displayName:"ProviderRow",props:{provider:{defaultValue:null,description:"",name:"provider",required:!0,type:{name:"Provider"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(providerId: string, selected: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/apps/mediator/common/ProviderRow.tsx#ProviderRow"]={docgenInfo:ProviderRow.__docgenInfo,name:"ProviderRow",path:"src/apps/mediator/common/ProviderRow.tsx#ProviderRow"})}catch(__react_docgen_typescript_loader_error){}},"./src/apps/mediator/common/ProvidersList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>ProviderList});var _lingui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@lingui/react/esm/index.js"),_lingui_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@lingui/core/esm/index.js"),_carbon_icons_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@carbon/icons-react/es/__generated__/bucket-4.js"),_carbon_icons_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@carbon/icons-react/es/__generated__/bucket-10.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/index.ts"),_providers_ReconfirmProvidersModal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/apps/mediator/providers/ReconfirmProvidersModal.tsx"),_ProviderRow__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/apps/mediator/common/ProviderRow.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ProviderList=_ref=>{let{providers}=_ref;const[modal,setModal]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[selectedProviders,setSelectedProviders]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),onSelect=(providerId,isSelected)=>{setSelectedProviders(isSelected?selectedProviders.includes(providerId)?selectedProviders:[...selectedProviders,providerId]:selectedProviders.filter((selectedProviderId=>selectedProviderId!==providerId)))};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table",{className:"table w-full striped selectable",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("caption",{className:"sr-only",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_5__.cC,{id:"mediator.providers-list.caption"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr",{className:"hover:bg-primary/10 cursor-pointer",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("th",{scope:"col",className:"inline-flex items-center w-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{type:"checkbox",className:"checkbox",name:"providers[]",onChange:event=>{const checked=event.currentTarget.checked;setSelectedProviders(checked?providers.map((provider=>provider.id)):[])},checked:selectedProviders.length===providers.length,"aria-label":_lingui_core__WEBPACK_IMPORTED_MODULE_6__.ag._({id:"mediator.providers-list.select-all",message:"Alle Impfanbieter auswählen oder abwählen"})})," "]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th",{scope:"col",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_5__.cC,{id:"mediator.providers-list.name"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th",{scope:"col",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_5__.cC,{id:"mediator.providers-list.address"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th",{scope:"col",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_5__.cC,{id:"mediator.providers-list.status"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th",{scope:"col",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"sr-only",children:"Aktionen"})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody",{children:providers.map((provider=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ProviderRow__WEBPACK_IMPORTED_MODULE_3__.W,{provider,selected:selectedProviders.includes(provider.id),onSelect},provider.id)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tfoot",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tr",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th",{colSpan:5,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"flex gap-2 justify-end mt-4 ml-auto",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(ui__WEBPACK_IMPORTED_MODULE_1__.zx,{variant:"primary",size:"sm",className:"flex gap-1 items-center",disabled:0===selectedProviders.length,onClick:()=>setModal("confirm"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_carbon_icons_react__WEBPACK_IMPORTED_MODULE_7__.tEK,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{children:selectedProviders.length}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_5__.cC,{id:"mediator.providers-list.button-confirm"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(ui__WEBPACK_IMPORTED_MODULE_1__.zx,{variant:"secondary",size:"sm",className:"flex gap-1 items-center",disabled:0===selectedProviders.length,onClick:()=>setModal("unconfirm"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_carbon_icons_react__WEBPACK_IMPORTED_MODULE_8__.ogj,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{children:selectedProviders.length}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_5__.cC,{id:"mediator.providers-list.button-unconfirm"})]})]})})})})]}),modal&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_providers_ReconfirmProvidersModal__WEBPACK_IMPORTED_MODULE_2__.s,{providers:providers.filter((provider=>selectedProviders.includes(provider.id))),onClose:()=>setModal(null)})]})};try{ProviderList.displayName="ProviderList",ProviderList.__docgenInfo={description:"",displayName:"ProviderList",props:{providers:{defaultValue:null,description:"",name:"providers",required:!0,type:{name:"Provider[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/apps/mediator/common/ProvidersList.tsx#ProviderList"]={docgenInfo:ProviderList.__docgenInfo,name:"ProviderList",path:"src/apps/mediator/common/ProvidersList.tsx#ProviderList"})}catch(__react_docgen_typescript_loader_error){}},"./src/apps/mediator/providers/ReconfirmProvidersModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>ReconfirmProvidersModal});var _lingui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@lingui/react/esm/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/index.ts"),_common_MediatorApiContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/apps/mediator/common/MediatorApiContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ReconfirmProvidersModal=_ref=>{let{providers,onClose}=_ref;const[status,setStatus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle"),api=(0,_common_MediatorApiContext__WEBPACK_IMPORTED_MODULE_2__.s)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(ui__WEBPACK_IMPORTED_MODULE_1__.u_,{onClose,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ui__WEBPACK_IMPORTED_MODULE_1__.xB,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ui__WEBPACK_IMPORTED_MODULE_1__.Dx,{variant:"h3",as:"h2",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.cC,{id:"mediator.providers.reconfirm-modal.title"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ui__WEBPACK_IMPORTED_MODULE_1__.hz,{children:"running"===status&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.cC,{id:"mediator.providers.reconfirm-modal.in-progress"})||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.cC,{id:"mediator.providers.reconfirm-modal.info"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ui__WEBPACK_IMPORTED_MODULE_1__.mz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ui__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:async()=>(console.log("running"),setStatus("running"),Promise.all(providers.map((provider=>api.reconfirmProvider(provider)))).then((()=>{setStatus("success")})).then((()=>{onClose&&onClose()})).catch((error=>{console.error(error),setStatus("error")}))),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.cC,{id:"mediator.providers.reconfirm-modal.button-submit",values:{0:providers.length}})})})]})};ReconfirmProvidersModal.displayName="ReconfirmProvidersModal";try{ReconfirmProvidersModal.displayName="ReconfirmProvidersModal",ReconfirmProvidersModal.__docgenInfo={description:"",displayName:"ReconfirmProvidersModal",props:{providers:{defaultValue:null,description:"",name:"providers",required:!0,type:{name:"Provider[]"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"Function"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/apps/mediator/providers/ReconfirmProvidersModal.tsx#ReconfirmProvidersModal"]={docgenInfo:ReconfirmProvidersModal.__docgenInfo,name:"ReconfirmProvidersModal",path:"src/apps/mediator/providers/ReconfirmProvidersModal.tsx#ReconfirmProvidersModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/backend/backend.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>backend});var vanellus__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/vanellus/dist/index.js");const store=new vanellus__WEBPACK_IMPORTED_MODULE_0__.StorageStore(new vanellus__WEBPACK_IMPORTED_MODULE_0__.InMemoryStorage),temporaryStore=new vanellus__WEBPACK_IMPORTED_MODULE_0__.StorageStore(new vanellus__WEBPACK_IMPORTED_MODULE_0__.InMemoryStorage),backend=new vanellus__WEBPACK_IMPORTED_MODULE_0__.Backend({appointment:{properties:{}},apiUrls:{storage:"https://storage.kiebitz.eu/jsonrpc",appointments:"https://appointments.kiebitz.eu/jsonrpc"}},store,temporaryStore)},"./src/ui/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Tag});var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const Tag=_ref=>{let{children,className,variant,size,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("tag",size,variant,className),...props,children})};Tag.displayName="Tag";try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/Tag.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"src/ui/Tag.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}}}]);