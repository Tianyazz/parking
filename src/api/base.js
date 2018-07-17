/*
* 公用配置
* 2018-07-12
* END
*/
import wepy from 'wepy'
import http from '@/utils/http'

export default class Base {
  static baseUrl = wepy.$instance.globalData.baseUrl
  static get = http.get.bind(http)
  static post = http.post.bind(http)
  /*
  * 设置全局数据，登陆信息
  */
  static async setConfig (key, value) {
    await wepy.setStorage({key: key, data: value})
    wepy.$instance.globalData[key] = value
  }
  // static 
  /*
  * 获取全局数据
  */
  static getConfig (key) {
    return wepy.$instance.globalData[key]
  }
}
