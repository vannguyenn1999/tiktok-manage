import { uniqueId } from 'lodash';

const randomData = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const DATA_USER = [
  {
    id: uniqueId(),
    user: {
      avatar:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/channel-NY3RntjtCzkTiCpbrgYezCtO81743472971384.jpeg',
      tiktok_id: 'onlyyoum123',
      tiktok_name: 'แนน โนะ',
      link_tiktok: 'https://www.tiktok.com/@onlyyoum123',
    },
    statistical: {
      count_view_video: randomData(),
      count_like: randomData(),
      count_comment: randomData(),
      count_view_profile: randomData(),
      count_following: randomData(),
      count_follower: randomData(),
      count_share: randomData(),
    },
  },
  {
    id: uniqueId(),
    user: {
      avatar:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/channel-mZnft73NYjdzF4A18fPFYAYJ31743474602815.jpeg',
      tiktok_id: 'nguyen_van_dong5225',
      tiktok_name: 'Phạm Văn Thắng',
      link_tiktok: 'https://www.tiktok.com/@nguyen_van_dong5225',
    },
    statistical: {
      count_view_video: randomData(),
      count_like: randomData(),
      count_comment: randomData(),
      count_view_profile: randomData(),
      count_following: randomData(),
      count_follower: randomData(),
      count_share: randomData(),
    },
  },
];

const DATA_POST = [
  {
    id: uniqueId(),
    user: {
      avatar:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/channel-NY3RntjtCzkTiCpbrgYezCtO81743472971384.jpeg',
      tiktok_id: 'onlyyoum123',
      tiktok_name: 'แนน โนะ',
      link_tiktok: 'https://www.tiktok.com/@onlyyoum123',
    },
    post: {
      id: uniqueId(),
      img_thum:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/post-UzdbFdK6Sr2ohQetorvlcD0TG1743473739035.jpeg',
      time: {
        day: '02/04/2025',
        hour: '14:25',
      },

      like: randomData(),
      comment: randomData(),
      view: randomData(),
    },
  },
  {
    id: uniqueId(),
    user: {
      avatar:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/channel-NY3RntjtCzkTiCpbrgYezCtO81743472971384.jpeg',
      tiktok_id: 'onlyyoum123',
      tiktok_name: 'แนน โนะ',
      link_tiktok: 'https://www.tiktok.com/@onlyyoum123',
    },
    post: {
      id: uniqueId(),
      img_thum:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/post-UzdbFdK6Sr2ohQetorvlcD0TG1743473739035.jpeg',
      time: {
        day: '02/04/2025',
        hour: '14:25',
      },

      like: randomData(),
      comment: randomData(),
      view: randomData(),
    },
  },
  {
    id: uniqueId(),
    user: {
      avatar:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/channel-NY3RntjtCzkTiCpbrgYezCtO81743472971384.jpeg',
      tiktok_id: 'onlyyoum123',
      tiktok_name: 'แนน โนะ',
      link_tiktok: 'https://www.tiktok.com/@onlyyoum123',
    },
    post: {
      id: uniqueId(),
      img_thum:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/post-2djEqiN8WpBhxGylWpAn2vA3E1743482381134.jpeg',
      time: {
        day: '02/04/2025',
        hour: '14:25',
      },

      like: randomData(),
      comment: randomData(),
      view: randomData(),
    },
  },
  {
    id: uniqueId(),
    user: {
      avatar:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/channel-NY3RntjtCzkTiCpbrgYezCtO81743472971384.jpeg',
      tiktok_id: 'onlyyoum123',
      tiktok_name: 'แนน โนะ',
      link_tiktok: 'https://www.tiktok.com/@onlyyoum123',
    },
    post: {
      id: uniqueId(),
      img_thum:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/post-2djEqiN8WpBhxGylWpAn2vA3E1743482381134.jpeg',
      time: {
        day: '02/04/2025',
        hour: '14:25',
      },

      like: randomData(),
      comment: randomData(),
      view: randomData(),
    },
  },
  {
    id: uniqueId(),
    user: {
      avatar:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/channel-NY3RntjtCzkTiCpbrgYezCtO81743472971384.jpeg',
      tiktok_id: 'onlyyoum123',
      tiktok_name: 'แนน โนะ',
      link_tiktok: 'https://www.tiktok.com/@onlyyoum123',
    },
    post: {
      id: uniqueId(),
      img_thum:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/post-UzdbFdK6Sr2ohQetorvlcD0TG1743473739035.jpeg',
      time: {
        day: '02/04/2025',
        hour: '14:25',
      },

      like: randomData(),
      comment: randomData(),
      view: randomData(),
    },
  },
];

export { DATA_USER, DATA_POST };
