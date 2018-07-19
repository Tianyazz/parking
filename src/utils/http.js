/*
* HTTP工具类
* END
* 2018-07-12
*/
import wepy from 'wepy'
import md5 from 'blueimp-md5'
const key = ''
export default class Http {
  static async request (method, url, data) {
    const param = {
      url: url,
      method: method,
      data: this.md5Param(data)
    }
    const res = await wepy.request(param)
    console.log(res)
    if (this.isSuccess(res)) {
      return res.data.data
    } else {
      // console.error(method, url, data, res)
      throw this.requestException(res)
    }
  }
  /*
  * 判断请求是否成功
  */
  static isSuccess (res) {
    const wxCode = res.statusCode
    // 微信请求错误
    if (wxCode !== 200) {
      return false
    }
    const wxData = res.data
    return !(wxData && wxData.code !== 0)
  }
  /*
  * 请求异常
  */
  static requestException (res) {
    const error = {}
    error.statusCode = res.statusCode
    const wxData = res.data
    const serverData = wxData.data
    if (serverData) {
      error.serverCode = wxData.code
      error.message = wxData.message
      error.serverData = serverData
    }
    return error
  }
  /*
  * 参数按照健名排序
  */
  static objSort (obj) {
    let newKey = Object.keys(obj).sort()
    let newObj = {}
    let keys = []
    for (let [key, value] of newKey.entries()) {
      keys.push(key)
      newObj[value] = obj[value]
    }
    return newObj
  }
  /*
  * 参数MD5加密
  */
  static md5Param (data) {
    let newParam = this.objSort(data)
    for (let [key, value] of Object.entries(newParam)) {
      if (typeof value === 'number') newParam[key] = value.toString()
    }
    newParam.api_secret = md5(md5(JSON.stringify(newParam)) + key)
    return newParam
  }
  static get (url, data) {
    return this.request('GET', url, data)
  }
  static post (url, data) {
    return this.request('POST', url, data)
  }
}