/*
* 历史账单
* 2018-07-16
* END
*/
import wepy from 'wepy'
import base from './base'

export default class Bills extends base {
  /*
  * 获取历史账单数据
  */
  static async getBills () {
    let token = this.getConfig('token')
    let param = {
      token: token,
      page: 1,
      page_size: 10
    }
    let billList = await this.post(`${this.baseUrl}/park/order/query`, param)
    return billList
  }
}