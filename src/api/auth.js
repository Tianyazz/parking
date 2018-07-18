/*
* 授权登陆
* 2018-07-13
* END
*/
import wepy from 'wepy'
import base from './base'

export default class Auth extends base {
  /*
  * 一键登录
  */
  static async login () {
    let token = this.getConfig('token')
    if (!token) {
      let data = await this.doLogin()
      return this.setConfig('token', data.token)
    }
  }
  /*
  * 执行登陆操作
  */
  static async doLogin () {
    let login = await wepy.login()
    if (login.code) {
      let data = this.get(`${this.baseUrl}/vote/Content/getXcxToken`, {
        code: login.code
      })
      return data
    } else {
      console.log(`获取用户登录状态失败${login.errMsg}`)
    }
  }
}
