export interface ChildItem {
  id?: number | string;
  name?: string;
  icon?: any;
  children?: ChildItem[];
  item?: any;
  url?: any;
  color?: string;
}

export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: any;
  id?: number;
  to?: string;
  items?: MenuItem[];
  children?: ChildItem[];
  url?: any;
}

import { uniqueId } from 'lodash';

const SidebarContent: MenuItem[] = [
  {
    heading: 'HOME',
    children: [
      {
        name: 'Trang chủ',
        icon: 'solar:home-angle-2-bold',
        id: uniqueId(),
        url: '/',
      },
    ],
  },
  {
    heading: 'Công cụ',
    children: [
      {
        name: 'Quản lý bình luận',
        icon: 'solar:text-circle-outline',
        id: uniqueId(),
        url: '/ui/comment',
      },

      {
        name: 'Báo cáo kênh',
        icon: 'solar:chart-square-bold',
        id: uniqueId(),
        url: '/ui/statistical',
      },
      // {
      //   name: 'Form',
      //   icon: 'solar:password-minimalistic-outline',
      //   id: uniqueId(),
      //   url: '/ui/form',
      // },
      // {
      //   name: 'Shadow',
      //   icon: 'solar:airbuds-case-charge-outline',
      //   id: uniqueId(),
      //   url: '/ui/shadow',
      // },
    ],
  },
  // {
  //   heading: "AUTH",
  //   children: [
  //     {
  //       name: "Login",
  //       icon: "solar:login-2-linear",
  //       id: uniqueId(),
  //       url: "/auth/login",
  //     },
  //     {
  //       name: "Register",
  //       icon: "solar:shield-user-outline",
  //       id: uniqueId(),
  //       url: "/auth/register",
  //     },
  //   ],
  // },
  // {
  //   heading: 'EXTRA',
  //   children: [
  //     {
  //       name: 'Icons',
  //       icon: 'solar:smile-circle-outline',
  //       id: uniqueId(),
  //       url: '/icons/solar',
  //     },
  //     {
  //       name: 'Sample Page',
  //       icon: 'solar:notes-minimalistic-outline',
  //       id: uniqueId(),
  //       url: '/sample-page',
  //     },
  //   ],
  // },
];

export default SidebarContent;
