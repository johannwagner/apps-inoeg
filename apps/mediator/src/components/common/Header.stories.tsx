import { ComponentStory, Meta } from "@storybook/react";
import { Nav } from "pages/Nav";
import { Header, HeaderProps } from "./Header";

export default {
  component: Header,
  args: {
    nav: Nav,
  },
  // argTypes: { onMobileNavClick: { action: 'onMobileNavClick clicked' } },
} as Meta<HeaderProps>;

export const Default: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);
