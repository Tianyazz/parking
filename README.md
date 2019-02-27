 # **停车收费小程序**
 * 输入牌照、查询费用
 * 扫码领券
 * 微信支付，积分
 * 积分、优惠券
 ## **技术栈**
 wepy + less + iconfont svg
 ## **项目运行**
 ```
 git clone git@github.com:Tianyazz/parking.git
 
 cd  parking
 
 npm install
 
 weby build --watch
 ````
 
## **部分截图**

![image](https://github.com/SkinsTY/parking/blob/master/src/assets/image/1.jpg)

![image](https://github.com/SkinsTY/parking/blob/master/src/assets/image/2.jpg)

![image](https://github.com/SkinsTY/parking/blob/master/src/assets/image/3.jpg)

## **说明**
 初学小程序，写的一个小项目，给个star，谢谢支持

## **项目结构**
```
.
├── api
│   ├── auth.js								// 登陆接口
│   ├── base.js								// 公用方法
│   ├── bills.js							// 账单接口
├── assets
│   ├── image								// 图片文件目录
│   ├── style								// 公用样式目录
├── componets
│   ├── alert.wpy							// 弹框组件
│   ├── keyAll.wpy							// 车牌键盘组件
│   ├── parkNo.wpy							// 车牌输入框组件
├── mixins								// 混合方法目录
├── pages
│   ├── home.wpy							// 首页
│   ├── coupon.wpy							// 优惠券列表
│   ├── payment.wpy							// 费用详情、支付页面
│   ├── bill.wpy							// 账单页面
├── store								// redux 状态管理
├── utils 								// 公用方法
├── app.wpy								// 小程序入口文件
├── index.template.html
```
