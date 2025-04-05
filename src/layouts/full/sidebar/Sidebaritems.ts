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
        url: '/home',
      },
    ],
  },
  {
    heading: 'Công cụ',
    children: [
      {
        name: 'Quản lý tài khoản',
        icon: 'solar:shield-user-bold-duotone',
        id: uniqueId(),
        url: '/user',
      },
      {
        name: 'Quản lý bình luận',
        icon: 'solar:text-circle-outline',
        id: uniqueId(),
        url: '/comment',
      },
      {
        name: 'Báo cáo kênh',
        icon: 'solar:chart-square-bold',
        id: uniqueId(),
        url: '/statistical',
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
  {
    heading: 'Chính sách & Điều khoản',
    children: [
      {
        name: 'Chính sách bảo mật',
        icon: 'solar:notebook-minimalistic-bold',
        id: uniqueId(),
        url: '/auth/privacy',
      },
      {
        name: 'Điều khoản',
        icon: 'solar:book-2-bold',
        id: uniqueId(),
        url: '/auth/clause',
      },
    ],
  },
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
