import type { Meta, StoryObj } from "@storybook/react";
import SearchIcon from "@mui/icons-material/Search";
import CheckIcon from "@mui/icons-material/Check";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { CustomDropdown } from "./Dropdown";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import EmergencyShareOutlinedIcon from '@mui/icons-material/EmergencyShareOutlined';

const meta: Meta<typeof CustomDropdown> = {
  title: "Components/Dropdown",
  component: CustomDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSelect: { action: 'selected' },
  },
};

export default meta;
type Story = StoryObj<typeof CustomDropdown>;

const sampleItems = [
  {
    id: "1",
    label: "عنوان اول لیست",
    leftIcons: [CheckOutlinedIcon],
    rightIcon: PersonOutlineOutlinedIcon,
    leftIconColors: ["#676E76"],
    rightIconColor: "#676E76",
    selected: false,
  },
  {
    id: "2", 
    label: "عنوان دوم لیست",
    leftIcons: [CheckOutlinedIcon],
    rightIcon: DraftsOutlinedIcon,
    leftIconColors: ["#676E76"],
    rightIconColor: "#676E76",
    selected: true,
  },
  {
    id: "3",
    label: "عنوان سوم لیست",
    leftIcons: [CheckOutlinedIcon],
    rightIcon: EmergencyShareOutlinedIcon,
    leftIconColors: ["#676E76"],
    rightIconColor: "#676E76",
    selected: false,
  },
];

export const LeftRightIcon: Story = {
  args: {
    items: sampleItems,
  },
};

export const WithMultipleLeftIcons: Story = {
  args: {
    items: [
      {
        id: "1",
        label: "لیست با چند آیکون",
        leftIcons: [SearchIcon, CheckIcon],
        rightIcon: ArrowForwardIcon,
        leftIconColors: ["#676E76"],
        rightIconColor: "#676E76",
        selected: false,
      },
      {
        id: "2",
        label: "لیست با چند آیکون",
        leftIcons: [PersonIcon, BusinessIcon],
        rightIcon: ArrowForwardIcon,
        leftIconColors: ["#676E76"],
        rightIconColor: "#676E76",
        selected: true,
      },
    ],
  },
};

export const NoIcons: Story = {
  args: {
    items: [
      {
        id: "1",
        label: "عنوان اول لیست",
        selected: false,
      },
      {
        id: "2",
        label: "عنوان دوم لیست",
        selected: true,
      },
      {
        id: "3",
        label: "عنوان سوم لیست",
        selected: false,
      },
    ],
  },
};
