# waps-ui
```
0.4.3
1. 添加了service/wp_login_form，可弹窗和页面调用，此组件作为service组件，将直接和钱兔系统打通。
todo: wp_login_form 还需要回调参数

0.4.2
1. 添加wp_img，wp_cell_flex, 删除wp_cell_app
2. 调整 wp_points,wp_cell_ad

0.4.1
1. 解决了wp_card_sm图片下的空白问题
2. 完善了wp_card_sm的new_tag和阴影的设置
3. 添加了wp_points标签，用于显示用户积分
4. 完善了user_info_banner和user_info_card

0.3.9
1. 组件目录分为base基础组件和ext扩展组件
2. 组件间引用由src/.. 改为 @/..
todo: 完善用户部分组件，以及将登陆注册作为有接口支撑的业务组件
```


1. 主要用于万普开发使用，大部分是业务组件，含少部分基础组件，其他基础组件使用vant-ui
2. 部分组件基于vant-ui开发，需要先引入vant-ui
3. waps-ui组件都以wp_开头
4. 目前是体验版，一些组件支持参数还不够灵活，会随着使用场景升级
5. 目前还不支持业务组件内部事件回调，可在组件上直接加点击事件(@click.native="testFn"), 注意必须是 @click.native才会生效
6. 注意用插槽slot会收到上级一样式影响

## 安装
```
npm install vant-ui -S
npm install waps-ui -S
```
## 其他依赖安装
```
npm install axios -S
npm install vue-axios -S
npm install vue-router -S
```

##基础组件说明
###分割线
```
<wp_hr/>    //直接使用，默认颜色：#ddd
<wp_hr color='#233112'/>   //指定分隔线颜色
```

###图标
```
<wp_icon img='http://xxx.com/icon.png'/>   //直接使用，默认60px * 60px
<wp_icon img='http://xxx.com/icon.png' 
        size='50px'           //指定图片宽高，宽高相同
        title='用户设置'       //指定图标下显示文字，为空则不显示，颜色随系统设置
        info=''/>            //指定图标下第二行文字，为空则不显示，颜色#9EA1A3
```

###区域
```
<wp_area/>   //直接使用，默认不含标题，背景色#fafafa
<wp_area title='区域标题'>
    ...
</wp_area>  //会显示一个区域并带有标题,可包含内容
```

###按钮
```
<wp_button text='确定'/>   //组件调用
<wp_button text='确定' width='100px'/>   //组件调用, 指定宽度
```
或
```
<wp_button width='100px'>
    {{text}}
</wp_button>
```

##业务组件
###Banner
```
<wp_banner img='http://xxx.com/banner.png' />  //指定图片
<wp_banner img='http://xxx.com/banner.png' 
           title='显示文字'         //图片上显示一段文字
           font_color='#000'/>     //文字颜色，默认：#fff
```

###卡片
```
<wp_card img='http://xxx.com/c.png'
         title='标题'
         info='第二行信息'
         isnew='true'
/>
```

###Cell
```
<wp_cell icon='http://img.m3guo.com/group4/M00/00/2E/wKgMHFxRg8eATwEZAAC51V2Ur_c564.png' 
        title="三国志" 
        info="文件大小" 
        desc="一个超级好玩的三国游戏" 
        btntext="开启"/>
```
