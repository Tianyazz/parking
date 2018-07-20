/*
* 我的优惠券
* 2018-07-13
* END
*/
import wepy from 'wepy'
import base from './base'

export default class Coupon extends base {
  /*
  * 获取优惠券数据
  */
  static async getCoupon (param) {
    let token = this.getConfig('token')
    let params = {
      token: token,
      ...param
    }
    let couponData = await this.post(`${this.baseUrl}/park/Content/coupon`, params)
    return couponData
  }
  /*
  * 扫码领券
  */
  static async drawCoupon (param) {
    let token = this.getConfig('token')
    let params = {
      token: token,
      ...param
    }
    let coupon = await this.post(`${this.baseUrl}/park/Content/getCoupon`, params)
  }
}
