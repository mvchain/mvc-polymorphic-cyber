# artisan-browser #


**本项目的定位是后台集成方案。**

**注意：该项目目前使用element-ui@1.4.2版本，所以最低兼容 Vue 2.3.0**

## 前言
> 这是使用vue写管理后台，已写登录和设备管理页面，尚未增加权限，学习成本低，分享一下开发的经验和成果。目前的技术栈主要的采用vue+element+axios+vuex由webpack2打包。


 1.首先需要安装node环境，可以直接到中文官网http://nodejs.cn/下载安装包。
 
 2.node安装完成后，使用命令行工具中输入 node -v 和 npm -v，如果能显示出版本号，就说明安装成功。
 
 **该项目不支持低版本游览器(如ie)，

## 功能
- 登录
- 侧边栏
- table example
- form表单
- 动态侧边栏（支持多级路由）

## 开发
```bash
    # 克隆项目
    git clone http://git.sxb.lol/choosefine-artisan/artisan-browser.git

    # 安装依赖
    npm install或npm install --registry=https://registry.npm.taobao.org
    # 本地开发 开启服务
    npm run dev
```
浏览器访问 http://localhost:8080

## 发布
```bash
    # 项目打包
    npm run build

```

## 目录结构
```artisan-browser
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── services               // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── filtres                // 全局filter
│   ├── router                 // 路由
│   ├── store                  // 全局store管理
│   ├── utils                  // 全局公用方法
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口 加载组件 初始化等
├── static                     // 第三方不打包资源
│   ├── css                    // 样式
│   └── img                    // 资源
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── .postcssrc.js              // CSS预编译器
├── index.html                 // html模板
└── package.json               // package.json

```

## License

MIT
