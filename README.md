# 漫画书
###简介
#####1. 开发框架：React Native     react-redux     react-thunk
#####2. 开发环境：Vs Code 1.8
#####3. 项目采用React-Native   react-redux   react-thunk框架开发，目前由于没有mac设备，只完成兼容Android环境，代码模块化实现，组件封装实现代码复用
###App模块

 分为首页、发现、精选、我四大版块，以下是功能列表：

    1.使用ViewPager跟ListView展示图文列表。
    2.推荐精彩漫画列表。
    3.精选内容，分类展示，增加滑动Tab，增加用户体验。
    4.自定义扩展ListView，实现上拉加载更多数据，下拉刷新数据。
    5.添加缓存功能，增强用户体验。

项目用到的接口来自聚合数据。
###整体设计

#####1.使用官方的Navigator管理全局路由，可自由配置Scene的出场动画，处理Android端的后退键事件
#####2.使用FlexBox和jsx语法进行布局，并封装了一系列通用的组件，比如TopBar 、带上下拉功能的ListView等，便于全局复用
#####3.导入第三方库react-native-wechat实现微信分享
#####4.使用StaticContainer，阻止ListView的头部和尾部频繁刷新，优化渲染性能。
#####5.引入redux相关功能，包括redux/react-redux/redux-thunk/，设计与漫画列表和详情相关的全局state结构，使用redux管理相关的组件

###第三方库 
#####依赖方式，cd到项目根目录，执行： npm install [插件名称] -save
#####(1)redux: ^3.6.0
#####(2)react-redux: ^5.0.2
#####(3)react-thunk: ^1.0.0
#####(4)redux-thunk: ^2.1.0
#####(5)react-native-blur: ^2.0.0
#####(6)react-native-viewpager
#####(7)react-native-vector-icons: ^4.0.0
#####(8)react-native-scrollable-tab-view: ^0.7.0
#####(9)react-native-lightbox: ^0.6.0
#####(10)react-native-simple-store: ^1.1.0
###运行截图
<img width="300" height="500" src="https://github.com/songxiaoliang/ComicBook/blob/master/demo/123.png"/>
<img width="300" height="500" src="http://oleeed73x.bkt.clouddn.com/20170210110535276.jpg"/>
<img width="300" height="500" src="http://oleeed73x.bkt.clouddn.com/20170210111336377.jpg"/>
<img width="300" height="500" src="http://oleeed73x.bkt.clouddn.com/20170210111244016.jpg"/>
<img width="300" height="500" src="http://oleeed73x.bkt.clouddn.com/20170210111512390.jpg"/>
<img width="300" height="500" src="http://oleeed73x.bkt.clouddn.com/20170210111557077.jpg"/>
<img width="300" height="500" src="http://oleeed73x.bkt.clouddn.com/20170210110405349.jpg"/>
