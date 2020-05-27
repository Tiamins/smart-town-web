import QQMap from '../../../static/map/qqmap-wx-jssdk.js'
const qqmapsdk = new QQMap({
  key: 'BS7BZ-PQ56F-UGMJF-NMJZN-FR7F6-E5FED'
})
const townMap = [
  {id: 0, name: '东夷小镇', type: '0'},
  // {id: 0, name: '东夷小镇'},
  {id: 1, name: '古北水镇'},
  {id: 3, name: '乌镇'},  
  {id: 4, name: '温泉小镇'},
  {id: 5, name: '影视小镇'},
  {id: 6, name: '影视小镇'},
  {id: 7, name: '艺术小镇'},
];
const categoryType = {
  0: ['景点', 'send-gift', '#409EFF'],
  1: ['酒店', 'wap-home', '#E76262'],
  2: ['民宿', 'invition', '#DD8154'],
  3: ['攻略', 'todo-list', '#E3B168'],
  4: ['美食', 'coupon', '#F56C6C'],
  5: ['购物', 'shop', '#D77820'],
  6: ['休闲娱乐', 'smile', '#DE5C92'],
  7: ['行程定制', 'friends', '#5BA775'],
};
const orderType = {
  0: '全部',
  1: '待付款',
  2: '待使用',
  3: '待发货',
  4: '待收货',
  5: '待评价',
  6: '已退款',
};
const brandType = {
0: {
  0: '自热风光',
  1: '展馆览馆',
  2: '名胜古迹',
  3: '全家游',
  4: '特色地标',
  5: '露营野餐',
},
1: {
  0: '三星级酒店',
  1: '四星级酒店',
  2: '五星级酒店',
  3: '快捷酒店',
  4: '经济酒店',
},
2: {
  0: '青年旅舍',
  1: '特色客栈',
  2: 'ins风格',
  3: '亲子主题',
  4: '情侣主题',
},
4: {
  0: '快餐',
  1: '特色小吃',
  2: '西餐',
  3: '火锅',
  4: '日料',
  5: '自助餐',
  6: '烧烤',
}, 
};
const hotelStar = [
  {id: 0, star: '经济型', type: 0},
  {id: 1, star: '舒适/三星', type: 1},
  {id: 2, star: '高档/四星', type: 2},
  {id: 3, star: '豪华/五星', type: 3},
];
const hotelPrice = [
  { id: 0, price: '150以下' },
  { id: 1, price: '150-300' },
  { id: 2, price: '300-450' },
  { id: 3, price: '450-600' },
  { id: 4, price: '600-1000' },
  { id: 5, price: '1000以上' },
];
const travelType = [
  {id: 0, name: '亲子游', type: 0},
  {id: 1, name: '蜜月游', type: 1},
  {id: 2, name: '单人游', type: 2},
  {id: 3, name: '毕业旅行', type: 3},
];
const travelPrice = [
  { id: 0, price: '500以下' },
  { id: 1, price: '1000-500' },
  { id: 2, price: '2000-1000' },
  { id: 5, price: '2000以上' },
];
const loginUrl = '/pages/user/pages/userLogin/main';
const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州']
};
export {
 brandType,
 categoryType,
 orderType,
 townMap,
 hotelStar,
 hotelPrice,
 qqmapsdk,
 loginUrl,
 citys,
 travelPrice,
 travelType,
}