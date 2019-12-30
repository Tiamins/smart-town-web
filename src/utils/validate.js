const IDCardCheck = {
  Wi: [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1],
  ValideCode: [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2],
  check(value = '') {
    let flag = true;
    const idCard = value.replace(/\s/g, '');
    if (idCard.length === 15) {
      flag = this.isValidityBrithBy15IdCard(idCard);
    } else if (idCard.length === 18) {
      const idCardList = idCard.split('');
      if (this.isValidityBrithBy18IdCard(idCard) && this.isTrueValidateCodeBy18IdCard(idCardList)) {
        flag = true;
      } else {
        flag = false;
      }
    } else {
      flag = false;
    }
    return flag;
  },
  /**
   * 判断身份证号码为18位时最后的验证位是否正确
   * @param a_idCard 身份证号码数组
   * @return
   */
  isTrueValidateCodeBy18IdCard(idCardList) {
    let sum = 0;
    if (idCardList[17].toLowerCase() == 'x') {
      idCardList[17] = 10;
    }
    for (let i = 0; i < 17; i++) {
      sum += this.Wi[i] * idCardList[i];
    }
    const valCodePosition = sum % 11;
    if (idCardList[17] == this.ValideCode[valCodePosition]) {
      return true;
    } else {
      return false;
    }
  },
  /**
   * 验证18位数身份证号码中的生日是否是有效生日
   * @param idCard 18位书身份证字符串
   * @return
   */
  isValidityBrithBy18IdCard(idCard18) {
    const year = idCard18.substring(6, 10);
    const month = idCard18.substring(10, 12);
    const day = idCard18.substring(12, 14);
    const tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 这里用getFullYear()获取年份，避免千年虫问题
    if (
      tempDate.getFullYear() != parseFloat(year) ||
      tempDate.getMonth() != parseFloat(month) - 1 ||
      tempDate.getDate() != parseFloat(day)
    ) {
      return false;
    } else {
      return true;
    }
  },
  /**
   * 验证15位数身份证号码中的生日是否是有效生日
   * @param idCard15 15位书身份证字符串
   * @return
   */ isValidityBrithBy15IdCard(idCard15) {
    const year = idCard15.substring(6, 8);
    const month = idCard15.substring(8, 10);
    const day = idCard15.substring(10, 12);
    const tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
    if (
      tempDate.getYear() != parseFloat(year) ||
      tempDate.getMonth() != parseFloat(month) - 1 ||
      tempDate.getDate() != parseFloat(day)
    ) {
      return false;
    } else {
      return true;
    }
  },
};

/* const hongkongID = id => {
  const getLetterValue = letter => {
    return letter.charCodeAt(0) - 64;
  };
  const isLetter = char => {
    return /[a-zA-Z]/.test(char);
  };
  const isLengthValid = val => {
    return val.length === 8 || val.length === 9;
  };
  const isFormatValid = val => {
    return /^[A-MP-Z]{1,2}[0-9]{6}[0-9A]$/.test(val);
  };
  const isChecksumValid = val => {
    let weight = val.length;
    let weightedSum = 0;
    const identifier = val.slice(0, -1);
    const checkDigit = val.slice(-1) === 'A' ? 10 : +id.slice(-1);
    for (let i = 0, len = identifier.length; i < len; i++) {
      const char = identifier[i];
      const charValue = isLetter(char) ? getLetterValue(char) : +char;
      weightedSum += charValue * weight;
      weight--;
    }
    const remainder = (weightedSum + checkDigit) % 11;
    return remainder === 0;
  };
  return isLengthValid(id) && isFormatValid(id) && isChecksumValid(id);
}; */

export default {
  // 利率 小于100
  rate: (rule, value, callback) => {
    if ((value && !/^\d{1,2}(?=\.{0,1}\d+$|$)/.test(value)) || value * 1 > 100) {
      callback('请输入0~100的数字');
    } else {
      callback();
    }
  },
  // 正整数
  positiveInt: (rule, value, callback) => {
    if (value && !/^\d{1,}$/.test(value)) {
      callback('请输入正整数');
    } else {
      callback();
    }
  },
  // 正数
  positiveNumber: (rule, value, callback) => {
    value = value ? value.toString().replace(/,/g, '') : '';
    if (value && (!/^\d{1,}(?=\.{0,1}\d+$|$)/.test(value) || value <= 0)) {
      callback('任务编号只能输入数字');
    } else {
      callback();
    }
  },
  // 数字  从0开始
  number: (rule, value, callback) => {
    value = value ? value.toString().replace(/,/g, '') : '';
    if (value && !/^\d{1,}(?=\.{0,1}\d{1,2}$|$)/.test(value)) {
      callback('请输入数字并且小数点不能超过两位');
    } else {
      callback();
    }
  },

  bigNumber: (rule, value, callback) => {
    value = value ? value.toString().replace(/,/g, '') : '';
    if (value && (!/^\d{1,}(?=\.{0,1}\d{1,2}$|$)/.test(value) || value <= 0)) {
      callback('请输入大于0的数字且小数点不能超过两位');
    } else {
      callback();
    }
  },

  // 数字  从0开始
  liNumber: (rule, value, callback) => {
    value = value ? value.toString().replace(/,/g, '') : '';
    if (value && !/^\d{1,}(?=\.{0,1}\d{1,3}$|$)/.test(value)) {
      callback('请输入数字并且小数点不能超过三位');
    } else {
      callback();
    }
  },

  // 身份证验证
  IDCard: (rule, value, callback) => {
    if (value && !IDCardCheck.check(value)) {
      callback('请输入正确的身份证号');
    } else {
      callback();
    }
    callback();
  },
  //  手机号验证
  Phone: (rule, value, callback) => {
    if (value && !/^1[34578]\d{9}$/.test(value)) {
      callback('请输入正确的手机号');
    } else {
      callback();
    }
  },

  //  邮箱验证
  Email: (rule, value, callback) => {
    if (value && !/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(value)) {
      callback('请输入正确的邮箱');
    } else {
      callback();
    }
  },

  //  验证证件号码
  credentials: (rule, value, callback) => {
    if (value && !/^\w{18}$/.test(value) && !/^[\w-]{20}$/.test(value)) {
      callback('请输入正确的证件号码');
    } else {
      callback();
    }
  },

  zeroToOne: (rule, value, callback) => {
    if (value > 1 || value < 0) {
      callback('请输入0~1范围的数值');
    } else {
      callback();
    }
  },

  // value非0， 利率,
  zeroToHundred: (rule, value, callback) => {
    if (value && (value * 1 > 100 || value <= 0 || !/^\d{1,}(?=\.{0,1}\d{1,2}$|$)/.test(value))) {
      callback('请输入0~100的数字且小数点不能超过两位');
    } else {
      callback();
    }
  },
  debtRate: (rule, value, callback) => {
    if (
      !value ||
      (value && !/^\d{1,2}(?=\.{0,1}\d+$|$)/.test(value)) ||
      value * 1 > 100 ||
      (value && value * 1 <= 0)
    ) {
      callback('请输入0~100的数字');
    } else {
      callback();
    }
  },

  score: (rule, value, callback) => {
    if ((value && !/^\d{1,2}(?=\.{0,1}\d+$|$)/.test(value)) || value * 1 > 10) {
      callback('请输入0~10的数字');
    } else {
      callback();
    }
  },
  code: (rule, value, callback) => {
    if (value && !/^[0-9a-zA-Z]*$/.test(value)) {
      callback('请输入数字或字母');
    } else {
      callback();
    }
  },
  //  验证公司名称
  validCompanyName: (rule, value, callback) => {
    if (value && !/^[\u4e00-\u9fa5(（）)A-Za-z]+$/.test(value)) {
      callback('请输入中文,英文或括号');
    } else {
      callback();
    }
  },
  // 验证银行卡
  bankAccount: (rule, value, callback) => {
    value = value ? value.toString().replace(/,/g, '') : '';
    if (value && !/^\d{1,}(?=\.{0,1}\d{1,2}$|$)/.test(value)) {
      callback('请输入正确的银行卡账号');
    } else {
      callback();
    }
  },
};
