import { BsGraphUpArrow, BsMegaphone } from 'react-icons/bs';
import { FaRegCalendarAlt, FaRegAddressCard } from 'react-icons/fa';
import { FaCode, FaUsers } from 'react-icons/fa6';
import { LuBookText } from 'react-icons/lu';
import { MdOutlineHelpOutline } from 'react-icons/md';
import { PiJoystick } from 'react-icons/pi';

const USER_GROUP = {
  name: 'user',
  items: [
    {
      title: 'Schedule',
      link: '#',
      icon: <FaRegCalendarAlt color="var(--primary-main)" />,
    },
    {
      title: 'Analytics',
      link: '#',
      icon: <BsGraphUpArrow color="var(--primary-main)" />,
    },
    {
      title: 'Stories',
      link: '/',
      icon: <LuBookText color="var(--primary-main)" />,
    },
    {
      title: 'Engagement Units',
      link: '#',
      icon: <PiJoystick color="var(--primary-main)" />,
    },
    {
      title: 'Ads',
      link: '#',
      icon: <BsMegaphone color="var(--primary-main)" />,
    },
  ],
};

const ADMIN_GROUP = {
  name: 'admin',
  items: [
    {
      title: 'CMS Users',
      link: '#',
      icon: <FaUsers color="var(--primary-main)" />,
    },
    {
      title: 'Roles',
      link: '#',
      icon: <FaRegAddressCard color="var(--primary-main)" />,
    },
    {
      title: 'Apps',
      link: '#',
      icon: <FaCode color="var(--primary-main)" />,
    },
  ],
};
const HELP_GROUP = {
  name: 'help',
  items: [
    {
      title: 'User guide',
      link: '#',
      icon: <MdOutlineHelpOutline color="var(--primary-main)" />,
    },
  ],
};

export const MENU_ITEMS = [USER_GROUP, ADMIN_GROUP, HELP_GROUP];
