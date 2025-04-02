import { uniqueId } from 'lodash';

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
      count_view_video: Math.floor(Math.random() * 100) + 1,
      count_like: Math.floor(Math.random() * 100) + 1,
      count_comment: Math.floor(Math.random() * 100) + 1,
      count_view_profile: Math.floor(Math.random() * 100) + 1,
      count_following: Math.floor(Math.random() * 100) + 1,
      count_follower: Math.floor(Math.random() * 100) + 1,
      count_share: Math.floor(Math.random() * 100) + 1,
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
      count_view_video: Math.floor(Math.random() * 100) + 1,
      count_like: Math.floor(Math.random() * 100) + 1,
      count_comment: Math.floor(Math.random() * 100) + 1,
      count_view_profile: Math.floor(Math.random() * 100) + 1,
      count_following: Math.floor(Math.random() * 100) + 1,
      count_follower: Math.floor(Math.random() * 100) + 1,
      count_share: Math.floor(Math.random() * 100) + 1,
    },
  },
];

export { DATA_USER };
