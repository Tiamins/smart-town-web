export default {
  add(v1, v2) {
    v1 += '';
    v2 += '';
    let r1;
    let r2;
    try {
      r1 = v1.toString().split('.')[1].length;
    } catch (e) {
      r1 = 0;
    }
    try {
      r2 = v2.toString().split('.')[1].length;
    } catch (e) {
      r2 = 0;
    }
    const m = 10 ** Math.max(r1, r2);

    return (this.mul(v1, m) + this.mul(v2, m)) / m;
  },
  sub(v1, v2) {
    return this.add(v1, -v2);
  },
  mul(v1, v2) {
    v1 += '';
    v2 += '';
    let m = 0;
    const s1 = v1.toString();
    const s2 = v2.toString();
    try {
      m += s1.split('.')[1].length;
    } catch (e) {}
    try {
      m += s2.split('.')[1].length;
    } catch (e) {}

    return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / 10 ** m;
  },
  div(v1, v2) {
    v1 += '';
    v2 += '';
    let t1 = 0;
    let t2 = 0;
    try {
      t1 = v1.toString().split('.')[1].length;
    } catch (e) {}
    try {
      t2 = v2.toString().split('.')[1].length;
    } catch (e) {}

    const r1 = Number(v1.toString().replace('.', ''));
    const r2 = Number(v2.toString().replace('.', ''));
    return (r1 / r2) * 10 ** (t2 - t1);
  },
};
