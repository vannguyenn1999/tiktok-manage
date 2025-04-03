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

const RANDOM_DATA_USER = [
  {
    id: uniqueId(),
    user: {
      avatar:
        'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c3e05446b6f92fd35e13c2aa21162e8a~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=ee9ba33f&x-expires=1743757200&x-signature=rgSeoeAreG5FafdwFN35Cqoitbw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my',
      tiktok_id: 'fabiosaargentina11',
      tiktok_name: 'Fabiosa Argentina',
      link_tiktok: 'https://www.tiktok.com/@fabiosaargentina11',
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
        'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/881f39b20ffe3d1fe96fae69661876c2~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=073a4f45&x-expires=1743757200&x-signature=BPZSqFuA34PMP8JO4PrOz1HmM2g%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my',
      tiktok_id: 'kienthucthuvi46',
      tiktok_name: 'Kiến Thức Thú Vị 🐜',
      link_tiktok: 'https://www.tiktok.com/@kienthucthuvi46',
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
        'https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/d28404dda2f8f285719a87cfb15a629b~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=9186baff&x-expires=1743757200&x-signature=2MDRQAHxPSyvS2WIYknMJd%2BMXXE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my',
      tiktok_id: 'Truyện Hay Là Share 😇',
      tiktok_name: 'แนน โนะ',
      link_tiktok: 'https://www.tiktok.com/@truyenhaylashare',
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
        'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/b8fd3b47c80c7673cc4c02e1c57481e5~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=8121cf0d&x-expires=1743757200&x-signature=XJXPLklDMBkX8bnssk8zQW4dtqg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my',
      tiktok_id: 'chefsclub.makro',
      tiktok_name: 'Chef s Club by makro',
      link_tiktok: 'https://www.tiktok.com/@chefsclub.makro',
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
        'https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/632b9376ee3ba591b2f164a81f2c71ba~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=74623b1c&x-expires=1743757200&x-signature=nsbQaLcC1axyVK8YaDcv%2Bww7TZw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my',
      tiktok_id: 'aichia.09',
      tiktok_name: 'ải chỉa đẹp trai 💩',
      link_tiktok: 'https://www.tiktok.com/@aichia.09',
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
        'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/9bc7500b54a809fca862cd3e74a5da77~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=c8742bba&x-expires=1743757200&x-signature=2MILIyF4R7RSRAU6mU%2BZvTVlRSA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my',
      tiktok_id: 'bongdagavangtivi',
      tiktok_name: 'Bóng Đá HD',
      link_tiktok: 'https://www.tiktok.com/@bongdagavangtivi',
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
        'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/37ecfe26d426edc4ef488e2013299d5a~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=cbf9465b&x-expires=1743757200&x-signature=1HJ%2FQ7aO9cPHEbINZWCvo1y5XCc%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my',
      tiktok_id: 'tst.hai.phong',
      tiktok_name: 'TRUNG STORE-ĐỘ XE TIÊN LÃNG',
      link_tiktok: 'https://www.tiktok.com/@tst.hai.phong',
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
        'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/bd2cdb24d7f7ac222f2ea4d414ce58ab~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=b7e16430&x-expires=1743757200&x-signature=kIKsPCg4wua3kJvJh0WqA7X2ANI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my',
      tiktok_id: 'imjustbait',
      tiktok_name: 'Imjustbait',
      link_tiktok: 'https://www.tiktok.com/@imjustbait',
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
        'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/0933495973d10696dc98050c15e93db1~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=d77ee688&x-expires=1743757200&x-signature=13tf0BdK0toedl7ATBDOI5RYCQ4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my',
      tiktok_id: 'share.tai.lieu',
      tiktok_name: 'Share tài liệu',
      link_tiktok: 'https://www.tiktok.com/@share.tai.lieu',
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
        'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/3bc4148dff0dec861bf49417aa07a3dd~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=34c7366a&x-expires=1743757200&x-signature=cdukLjbgPNP0TxqH6LYD1FFXgFY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my',
      tiktok_id: 'phu_diy',
      tiktok_name: 'DIY PRO',
      link_tiktok: 'https://www.tiktok.com/@phu_diy',
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
        'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/a4962965642f59b2a5fefbf47a50eb63~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=5d1f9ec9&x-expires=1743757200&x-signature=fUnIGUQmOhuntKVKqF8fM02nWDM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my',
      tiktok_id: 'Satoru_Ueno',
      tiktok_name: 'satoru_ueno',
      link_tiktok: 'https://www.tiktok.com/@satoru_ueno',
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

const DATA_COMMENT = [
  {
    id: uniqueId(),
    user: {
      avatar:
        'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/a4962965642f59b2a5fefbf47a50eb63~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=5d1f9ec9&x-expires=1743757200&x-signature=fUnIGUQmOhuntKVKqF8fM02nWDM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my',
      tiktok_id: 'Satoru_Ueno',
      tiktok_name: 'satoru_ueno',
      link_tiktok: 'https://www.tiktok.com/@satoru_ueno',
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
    post: {
      id: uniqueId(),
      img_thum:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/post-UzdbFdK6Sr2ohQetorvlcD0TG1743473739035.jpeg',
      time: {
        day: '02/04/2025',
        hour: '14:25',
      },
      title: '0000000000000000000000000000',
      like: randomData(),
      comment: randomData(),
      view: randomData(),
    },
    comment: {
      text: 'Xin chào các bạn',
      time: {
        day: '01/04/2025',
        time: '13:15',
      },
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
    statistical: {
      count_view_video: randomData(),
      count_like: randomData(),
      count_comment: randomData(),
      count_view_profile: randomData(),
      count_following: randomData(),
      count_follower: randomData(),
      count_share: randomData(),
    },
    post: {
      id: uniqueId(),
      img_thum:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/post-UzdbFdK6Sr2ohQetorvlcD0TG1743473739035.jpeg',
      time: {
        day: '02/04/2025',
        hour: '14:25',
      },
      title: '99999999999999999999999999',
      like: randomData(),
      comment: randomData(),
      view: randomData(),
    },
    comment: {
      text: 'Tương tác !!',
      time: {
        day: '13/02/2025',
        time: '12:15',
      },
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
    statistical: {
      count_view_video: randomData(),
      count_like: randomData(),
      count_comment: randomData(),
      count_view_profile: randomData(),
      count_following: randomData(),
      count_follower: randomData(),
      count_share: randomData(),
    },
    post: {
      id: uniqueId(),
      img_thum:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/post-UzdbFdK6Sr2ohQetorvlcD0TG1743473739035.jpeg',
      time: {
        day: '02/04/2025',
        hour: '14:25',
      },
      title: '888888888888888888888888888888888',
      like: randomData(),
      comment: randomData(),
      view: randomData(),
    },
    comment: {
      text: '=))))))))))',
      time: {
        day: '01/04/2025',
        time: '13:15',
      },
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
    post: {
      id: uniqueId(),
      img_thum:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/post-UzdbFdK6Sr2ohQetorvlcD0TG1743473739035.jpeg',
      time: {
        day: '02/04/2025',
        hour: '14:25',
      },
      title: '7777777777777777777777777777',
      like: randomData(),
      comment: randomData(),
      view: randomData(),
    },
    comment: {
      text: '<3 <3 <3',
      time: {
        day: '12/01/2025',
        time: '10:34',
      },
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
    post: {
      id: uniqueId(),
      img_thum:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/post-2djEqiN8WpBhxGylWpAn2vA3E1743482381134.jpeg',
      time: {
        day: '02/04/2025',
        hour: '14:25',
      },
      title: '6666666666666666666666666666666666',
      like: randomData(),
      comment: randomData(),
      view: randomData(),
    },
    comment: {
      text: 'hahahahha',
      time: {
        day: '02/02/2025',
        time: '12:09',
      },
    },
  },
  {
    id: uniqueId(),
    user: {
      avatar:
        'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/a4962965642f59b2a5fefbf47a50eb63~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=5d1f9ec9&x-expires=1743757200&x-signature=fUnIGUQmOhuntKVKqF8fM02nWDM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my',
      tiktok_id: 'Satoru_Ueno',
      tiktok_name: 'satoru_ueno',
      link_tiktok: 'https://www.tiktok.com/@satoru_ueno',
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
    post: {
      id: uniqueId(),
      img_thum:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/post-UzdbFdK6Sr2ohQetorvlcD0TG1743473739035.jpeg',
      time: {
        day: '02/04/2025',
        hour: '14:25',
      },
      title: '555555555555555555555555555555',
      like: randomData(),
      comment: randomData(),
      view: randomData(),
    },
    comment: {
      text: 'Đoán xem',
      time: {
        day: '02/03/2025',
        time: '12:45',
      },
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
    statistical: {
      count_view_video: randomData(),
      count_like: randomData(),
      count_comment: randomData(),
      count_view_profile: randomData(),
      count_following: randomData(),
      count_follower: randomData(),
      count_share: randomData(),
    },
    post: {
      id: uniqueId(),
      img_thum:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/post-2djEqiN8WpBhxGylWpAn2vA3E1743482381134.jpeg',
      time: {
        day: '02/04/2025',
        hour: '14:25',
      },
      title: '444444444444444444444444444',
      like: randomData(),
      comment: randomData(),
      view: randomData(),
    },
    comment: {
      text: 'Cho xin cái địa chỉ ?',
      time: {
        day: '03/04/2025',
        time: '03:15',
      },
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
    statistical: {
      count_view_video: randomData(),
      count_like: randomData(),
      count_comment: randomData(),
      count_view_profile: randomData(),
      count_following: randomData(),
      count_follower: randomData(),
      count_share: randomData(),
    },
    post: {
      id: uniqueId(),
      img_thum:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/post-2djEqiN8WpBhxGylWpAn2vA3E1743482381134.jpeg',
      time: {
        day: '02/04/2025',
        hour: '14:25',
      },
      title: '333333333333333333333333333',
      like: randomData(),
      comment: randomData(),
      view: randomData(),
    },
    comment: {
      text: 'Được bạn',
      time: {
        day: '01/04/2025',
        time: '12:15',
      },
    },
  },

  {
    id: uniqueId(),
    user: {
      avatar:
        'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/a4962965642f59b2a5fefbf47a50eb63~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=5d1f9ec9&x-expires=1743757200&x-signature=fUnIGUQmOhuntKVKqF8fM02nWDM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my',
      tiktok_id: 'Satoru_Ueno',
      tiktok_name: 'satoru_ueno',
      link_tiktok: 'https://www.tiktok.com/@satoru_ueno',
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
    post: {
      id: uniqueId(),
      img_thum:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/post-2djEqiN8WpBhxGylWpAn2vA3E1743482381134.jpeg',
      time: {
        day: '02/04/2025',
        hour: '14:25',
      },
      title: '2222222222222222222222',
      like: randomData(),
      comment: randomData(),
      view: randomData(),
    },
    comment: {
      text: 'Yatoroooooooooooo !',
      time: {
        day: '01/04/2025',
        time: '12:42',
      },
    },
  },
  {
    id: uniqueId(),
    user: {
      avatar:
        'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/a4962965642f59b2a5fefbf47a50eb63~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=5d1f9ec9&x-expires=1743757200&x-signature=fUnIGUQmOhuntKVKqF8fM02nWDM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my',
      tiktok_id: 'Satoru_Ueno',
      tiktok_name: 'satoru_ueno',
      link_tiktok: 'https://www.tiktok.com/@satoru_ueno',
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
    post: {
      id: uniqueId(),
      img_thum:
        'https://asset.so9.vn/do-space/67eb474ddd79da7f1a033204/post-2djEqiN8WpBhxGylWpAn2vA3E1743482381134.jpeg',
      time: {
        day: '02/04/2025',
        hour: '14:25',
      },
      title: '1111111111111111111111',
      like: randomData(),
      comment: randomData(),
      view: randomData(),
    },
    comment: {
      text: 'Cebbbbbbbbbbbbbbbb !',
      time: {
        day: '02/01/2025',
        time: '09:06',
      },
    },
  },
];

export { DATA_USER, DATA_POST, RANDOM_DATA_USER, DATA_COMMENT };
