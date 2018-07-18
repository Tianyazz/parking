/*
* 查询牌照费用、支付
* 2018-07-13
* END
*/
import wepy from 'wepy'
import base from './base'

export default class LicensePlate extends base {
  /*
  * 获取历史牌照列表
  */
  static async historyCars () {
    // let token = await this.getConfig('token')
    let param = {
      token: this.getConfig('token')
    }
    let data = await this.post(`${this.baseUrl}/park/Content/recentCar`, param)
    return data
  }
  /*
  * 查询牌照费用
  * @param: [car_plate_num] [string] [牌照]
  * @param: [member_coupon_id] [string] [优惠券ID]
  * @param: [is_use_integral] [number] [是否使用积分，1使用积分]
  */
  static async InquiryFee (param) {
    let token = this.getConfig('token')
    let params = {
      token: token,
      ...param
    }
    let fee = await this.post(`${this.baseUrl}/park/Order/computeCost`, params)
    return fee
  }
  /*
  * 获取微信支付jsconfig
  */
  static async getPayJsConfig (param) {
    let token = this.getConfig('token')
    let params = {
      token: token,
      ...param
    }
    let config = await this.post(`${this.baseUrl}/park/Pay/getPayJs`, params)
    return config
  }
}