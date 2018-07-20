/*
* 我的积分
* 2018-07-16
* END
*/
import wepy from 'wepy'
import base from './base'

export default class MyIntegral extends base {
  /*
  * 获取优惠券数据
  */
  static async getIntegral () {
    let token = this.getConfig('token')
    let param = {
      token: token
    }
    let IntergralData = await this.post(`${this.baseUrl}/park/Content/myIntegral`, param)
    return IntergralData
  }
}