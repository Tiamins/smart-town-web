import MATH from './math';
// 产品类型
export const categoryFilter = flag => {
  let value = '';
  switch (flag) {
    case 0:
      value = '单笔模式';
      break;
    case 1:
      value = '池模式';
      break;
    default:
      value = '债转';
      break;
  }
  return value;
};

// 产品关闭状态
export const closeStatusFilter = flag => {
  return ['正常开启', '关闭审核中', '已关闭'][flag];
};

// 产品开通状态
export const productStatusFilter = flag => {
  return ['已授权未准入', '已准入', '准入过期', '待补签协议', '已冻结'][flag];
};

// 质押状态
export const pledgeStatusFilter = flag => {
  return ['未质押', '已质押'][flag];
};

// 追索权
export const factorTypeFilter = flag => {
  let value = '';
  switch (flag) {
    case 0:
      value = '无追索';
      break;
    case 1:
      value = '有追索';
      break;
    default:
      value = '--';
      break;
  }
  return value;
};
// 是否可提前还款
export const advanceRepayFilter = flag => {
  let value = '';
  switch (flag) {
    case 0:
      value = '不可以';
      break;
    case 1:
      value = '可以';
      break;
    default:
      value = '--';
      break;
  }
  return value;
};
// 结算单还款
export const paidTreatmentFilter = flag => {
  let value = '';
  switch (flag) {
    case 0:
      value = '偿还本金和利息';
      break;
    case 1:
      value = '偿还利息';
      break;
    default:
      value = '--';
      break;
  }
  return value;
};
// 利息收取方式
export const rateChargeTypeFilter = flag => {
  let value = '';
  switch (flag) {
    case 0:
      value = '不收取';
      break;
    case 1:
      value = '余额按天收取';
      break;
    case 2:
      value = '余额按比例收取';
      break;
    case 3:
      value = '期初本金按比例收取';
      break;
    default:
      value = '--';
      break;
  }
  return value;
};
// 利息收取时机
export const rateChargeTimeTypeFilter = flag => {
  let value = '';
  switch (flag) {
    case 0:
      value = '无';
      break;
    case 1:
      value = '期初收取';
      break;
    case 2:
      value = '利随本清';
      break;
    case 3:
      value = '月账单模式';
      break;
    default:
      value = '--';
      break;
  }
  return value;
};
// 服务费收取方式
export const feerateChargeTypeFilter = flag => {
  let value = '';
  switch (flag) {
    case 0:
      value = '不收取';
      break;
    case 1:
      value = '余额按天收取';
      break;
    case 2:
      value = '余额按比例收取';
      break;
    case 3:
      value = '期初本金按比例收取';
      break;
    default:
      value = '--';
      break;
  }
  return value;
};
// 服务费收取时机
export const feerateChargeTimeTypeFilter = flag => {
  let value = '';
  switch (flag) {
    case 0:
      value = '无';
      break;
    case 1:
      value = '期初收取';
      break;
    case 2:
      value = '利随本清';
      break;
    case 3:
      value = '月账单模式';
      break;
    default:
      value = '--';
      break;
  }
  return value;
};
// 额度使用费收取方式
export const quotarateChargeTypeFilter = flag => {
  let value = '';
  switch (flag) {
    case 0:
      value = '不收取';
      break;
    case 1:
      value = '余额按天收取';
      break;
    case 2:
      value = '余额按比例收取';
      break;
    case 3:
      value = '期初本金按比例收取';
      break;
    default:
      value = '--';
      break;
  }
  return value;
};
// 额度使用费收取时机
export const quotarateChargeTimeTypeFilter = flag => {
  let value = '';
  switch (flag) {
    case 0:
      value = '无';
      break;
    case 1:
      value = '期初收取';
      break;
    case 2:
      value = '利随本清';
      break;
    case 3:
      value = '月账单模式';
      break;
    default:
      value = '--';
      break;
  }
  return value;
};
// 是否支持部分融资
export const partialLoanFilter = flag => {
  return flag ? '支持' : '不支持';
};

// 还款方式
export const payType = param => {
  let value = '';
  if (param.rateChargeType !== 0 && param.rateChargeTimeType !== 0) {
    value += `利息${rateChargeTypeFilter(param.rateChargeType)}-${rateChargeTimeTypeFilter(
      param.rateChargeTimeType
    )}  `;
  } else if (param.rateChargeType !== 0 && param.rateChargeTimeType === 0) {
    value += `利息${rateChargeTypeFilter(param.rateChargeType)}  `;
  } else if (param.rateChargeType === 0 && param.rateChargeTimeType !== 0) {
    value += `利息${rateChargeTimeTypeFilter(param.rateChargeTimeType)}  `;
  }

  if (param.feerateChargeType !== 0 && param.feerateChargeTimeType !== 0) {
    value += `服务费${feerateChargeTypeFilter(
      param.feerateChargeType
    )}-${feerateChargeTimeTypeFilter(param.feerateChargeTimeType)}  `;
  } else if (param.feerateChargeType !== 0 && param.feerateChargeTimeType === 0) {
    value += `服务费${feerateChargeTypeFilter(param.feerateChargeType)}  `;
  } else if (param.rateChargeType === 0 && param.rateChargeTimeType !== 0) {
    value += `${feerateChargeTimeTypeFilter(param.feerateChargeTimeType)}  `;
  }

  if (param.quotarateChargeType !== 0 && param.quotarateChargeTimeType !== 0) {
    value += `额度使用费${quotarateChargeTypeFilter(
      param.quotarateChargeType
    )}-${quotarateChargeTimeTypeFilter(param.quotarateChargeTimeType)}  `;
  } else if (param.quotarateChargeType !== 0 && param.quotarateChargeTimeType === 0) {
    value += `额度使用费${quotarateChargeTypeFilter(param.quotarateChargeType)}  `;
  } else if (param.quotarateChargeType === 0 && param.quotarateChargeTimeType !== 0) {
    value += `额度使用费${quotarateChargeTimeTypeFilter(param.quotarateChargeTimeType)}  `;
  }
  return value;
};

// 授权状态
export const authorityStatusFilter = flag => {
  let value = '';
  switch (flag) {
    case 0:
      value = '已授权未准入';
      break;
    case 1:
      value = '已准入';
      break;
    case 2:
      value = '准入过期';
      break;
    case 3:
      value = '待补签协议';
      break;
    case 4:
      value = '已冻结';
      break;
    default:
      value = '--';
      break;
  }
  return value;
};

// 消息通道
export const channelFilter = flag => {
  let value = '';
  switch (flag) {
    case 1:
      value = '短信';
      break;
    case 2:
      value = '邮件';
      break;
    case 3:
      value = '站内信';
      break;
    default:
      value = '未知';
  }
  return value;
};

// 分转万元
// 分转元
export const fen2wanyuan = value => {
  if (!value) return 0;
  value = value.toString().replace(/,/g, '') * 1;
  return MATH.div(value, 1000000);
};

// 分转元
export const fen2yuan = value => {
  if (value === undefined) return 0;
  value = value.toString().replace(/,/g, '') * 1;
  return MATH.div(value, 100).toFixed(2);
};

// 厘转元
export const li2yuan = value => {
  if (value === undefined) return 0;
  value = value.toString().replace(/,/g, '') * 1;
  return MATH.div(value, 1000).toFixed(3);
};

//  元转分
export const yuan2fen = value => {
  if (value === undefined) return 0;
  value = value.toString().replace(/,/g, '') * 1;
  return MATH.mul(value, 100);
};

//  元转厘
export const yuan2li = value => {
  if (value === undefined) return 0;
  value = value.toString().replace(/,/g, '') * 1;
  return MATH.mul(value, 1000);
};

// 利率转换
export const rateFiler = (value, unit) => {
  let res = value ? MATH.div(value, 1000) : 0;
  res = unit ? `${res}%` : res;
  return res;
};

// 利率转换乘1000
export const rateTransfer = value => {
  return value ? MATH.mul(value, 1000) : 0;
};
// 时间区间 开始时间00：00：00 结束时间 23：59：59
export const dateRangeFilter = dateRange => {
  const params = {};
  if (dateRange && dateRange.length === 0) return { startTime: undefined, endTime: undefined };
  params.startTime = new Date(`${dateRange[0].format('YYYY/MM/DD')} 00:00:00 UTC+8`).getTime();
  params.endTime = new Date(`${dateRange[1].format('YYYY/MM/DD')} 23:59:59 UTC+8`).getTime();
  return params;
};

// 千分位显示
export const toThousands = num => {
  num = num !== undefined ? num : '';
  return num
    .toString()
    .replace(/,/g, '')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const crcy = num => {
  return toThousands(fen2yuan(num));
};

export const licrcy = num => {
  return toThousands(li2yuan(num));
};

//  清除两边空格
export const trim = str => {
  return str.replace(/^\s+|\s+$/g, '');
};

export const numtochinese = Num => {
  let i;
  const fraction = ['角', '分'];
  const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  const unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
  const head = Num < 0 ? '欠' : '';
  Num = Math.abs(Num);
  let s = '';
  for (i = 0; i < fraction.length; i++) {
    if (i === fraction.length - 1) {
      // 末位小数进行四舍五入,解决浮点数精度导致的小数丢失问题
      s += (digit[Math.round(Num * 10 * 10 ** i) % 10] + fraction[i]).replace(/零./, '');
    } else {
      s += (digit[Math.floor(Num * 10 * 10 ** i) % 10] + fraction[i]).replace(/零./, '');
    }
  }
  s = s || '整';
  Num = Math.floor(Num);
  for (i = 0; i < unit[0].length && Num > 0; i++) {
    let p = '';
    for (let j = 0; j < unit[1].length && Num > 0; j++) {
      p = digit[Num % 10] + unit[1][j] + p;
      Num = Math.floor(Num / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return (
    head +
    s
      .replace(/(零.)*零元/, '元')
      .replace(/(零.)+/g, '零')
      .replace(/^整$/, '零元整')
  );
};
