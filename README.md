# WYM_Project_03

React + TypeScript（有告诉怎么使用）

## 项目搭建

1. 工具; React 脚手架
   - create-react-app
     - 早期的项目用的是 yarn
   - 同时配置 TS 的支持
     - 下列命令 = react 项目 + ts （区别于 vue，vue 使用脚手架的时候可以选择）
     - create-react-app hy_ts_react_music --template typescript
   - 基于 webpack 来搭建 => 基于 Node => npm 包管理工具
   - 在打包的时候，public 里面的内容是直接复制的
   - 早期的项目使用的是 yarn，早期的 npm 非常的难用
     - pnpm 也非常好用，npm 用的最多
2. 区别 Vue
   - Vue 是配置供选择
3. react-app-env.d.ts 文件的作用
   - react-app-env.d.ts 文件在项目中的作用是用于声明 TypeScript 类型定义的环境变量，让 TypeScript 编译器能够正确识别这些变量的类型，从而提供更好的类型检查和代码提示功能。

## 项目配置(基于 webpack ~ 隐藏)

1. 配置项目的 icon
   - 图标替换的话,命名为 favicon.ico
2. 配置项目的标题
   - index.html
3. 配置项目别名等（craco.config.ts）**路径很深的话使用@来查找**
   - 默认情况下生成的 react 项目中，webpack 是被隐藏起来的
     - 修改 webpack 配置 通过 craco create-react-app config
     - 路径别名 @
   - 具体步骤
     - npm install @craco/craco@alpha -D (alpha 是更新的版本)
     - 创建文件 craco.config.js
       - 安装以后进行相应的配置操作（具体见该文件中的代码）
       - 但是安装好了以后,可能 ts 会报错
         - 需要在 tsconfig.json 中进行配置
       - 最后还需要合并进去 react-scripts => craco
     - package.json 中也需要修改 scripts，将
       ```
       "scripts": {
           "start": "react-scripts start",
           "build": "react-scripts build",
           "test": "react-scripts test",
           "eject": "react-scripts eject"
       },
       修改成(这样才表明通过craco配置webpack生效了)
         "scripts": {
           "start": "craco start",
           "build": "craco build",
           "test": "craco test",
           "eject": "react-scripts eject"
       },
       ```
4. 配置 tsconfig.json

## 代码规范的配置

- 区别于 Vue 项目来说，对于每个 Vue 项目，我们可以选择 eslint + prettier 的
- 对于 react 项目我们需要从 0 开始进行配置操作
- 1. 集成 editorconfig 配置;
  - EditorConfig 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。

```
root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行尾的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

- 2. 配置 .prettierrc 文件
  - 先在控制台中安装 npm install prettier -D（在项目中配置）
    - 如果不安装上面那个插件的话，保存也有用
    - 但是安装了以后，在 package.json 文件中，可以执行命令 npm run prettier，就不用一个个 Ctrl + S 保存了
    - **在 package.json 文件中的 scripts 中加上 "prettier": "prettier --write .“配置项即可**
  - 在根目录中写上.prettierrc 文件
  - 可配置的内容: 结尾是否要加分号,单引号 or 双引号
  * useTabs：使用 tab 缩进还是空格缩进，选择 false；
  * tabWidth：tab 是空格的情况下，是几个空格，选择 2 个；
  * printWidth：当行字符的长度，推荐 80，也有人喜欢 100 或者 120；
  * singleQuote：使用单引号还是双引号，选择 true，使用单引号；
  * trailingComma：在多行输入的尾逗号是否添加，设置为 `none`，比如对象类型的最后一个属性后面是否加一个，；
  * semi：语句末尾是否要加分号，默认值 true，选择 false 表示不加；
```
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}
```

- 创建.prettierignore 忽略文件; 忽略文件无需格式化

```
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

- **如果之前没有设置固定格式化，首选项 设置里面 editor default 选择 prettier 进行格式化**

3. 使用 Eslint 来对项目错误进行检测（自己重新搭建 eslint）

- npx eslint --init（手动配置很麻烦，使用命令来配置，直接生成的形式）
  - 会直接生成配置文件
  - 开始选择相应的配置
    - 选项 2
    - 选项 1
    - react
    - 浏览器 + Node
    - 生成了 eslint 配置文件, 你自己可以以何种形式来进行配置 JS
  - 如果报错的话，在.eslintrc.js 文件夹下，加入 node: true 的配置
- npm install eslint-plugin-prettier eslint-config-prettier -D
  - 代码规范保持与 prettier 一致
- 有错误的话,要么通过 Ctrl + S 进行格式化保存,要么通过 npm run prettier

4. 一两个公司可能都不用配置上述东西,看东西规模; 有的可以配置了,不要太焦虑
   **上述为项目开始前的常规配置**

---

# 项目正式开发的具体步骤

## 1. 项目目录结构的划分

（不管是哪一种项目，其本质思想都是一样的，尤其是针对目录结构的划分，这一点很关键）

- 设置好了目录以后，就知道每次写一个逻辑放在具体的文件夹中，**便于维护**。

1. 相关业务代码放置文件夹的命令

## 2. CSS 样式重置

1. npm install normalize.css（自己之前封装到仓库当中）
   - index.tsx 中配置
2. 自己需要配置的样式
   - asset.less（默认 less 文件是不生效的）
     - npm install craco-less@2.1.0-alpha.0（ant design 中有处置方案）
     - 想要让该文件生效需要通过 craco-less 来进行处理
     - 然后在 craco.config.js 文件中进行配置（**配置相关内容**）
     - 后面如果引入 ant design 的话，很多配置又需要重新配置
3. 使用 index.js 文件进行引入操作(作为最终的出口文件)

```
@import 是一种用于在 CSS 文件中引入其他 CSS 文件的语法。它允许将一个 CSS 文件中的样式导入到另一个 CSS 文件中，以便在一个文件中使用另一个文件的样式定义。
```

## 3. 路由的配置(层级比较多)

- 路由的切换可以基于哈希也可以基于 history（关键）
- 有些是路由跳转，有的是超链接 🔗（一级路由）
- 做法：将路由书写进配置文件当中，router 文件夹下的 index.tsx

1. 安装 ~ 针对浏览器开发的路由 npm install react-router-dom（针对浏览器开发，-dom）
2. 将所有的路由配置到一个单独的文件当中（router => index.tsx）
3. 相关的路由的选择使用 useRoutes 来决定
   - 在 APP 组件中引入相关的路由
   - 如果有很多的子组件需要在父组件中通过 Link 来导航
     - 引入的话,需要创建成组件实例的形式 element: <Discover />,
     - 具体的路由对象是放在
     - 写了 tsx 就需要导入 react 代码
     - **注意：在具体使用的时候，路由还需要用 Router 来进行包裹**
     ```
        <HashRouter>
            <App />
        </HashRouter> 
     ```
   - **在webpack打包的时候可以将node打印的东西全部去掉**
    - 在 index.tsx 中需要使用哈希 Router 进行包裹
   - !路由的配置最好是需要进行懒加载操作（懒加载）
- **有哪些地方需要书写ts代码呢？**
  - 1. 组件需要接收哪些属性（万物皆可any），前面也可以用接口来定义
  - 2. 具体见download组件
  - 3. 在进行类型约束以后，组件就需要传入具体的props参数
- 组件里面还可以传入div和span等标签内容，相当于children属性，可选
- **views文件夹下的demo文件夹里面写的就是我们测试的代码**
## 4. 分析好了如果是路由的话，需要创建相应的页面
  - 在页面书写完毕以后，需要对路由进行相关配置
  - 普通的路由导入加载的话在使用webpack打包的时候，会生成一个个包
  我们需要通过分包处理 => 使用import()函数 => Vue/React路由的懒加载(组件)
  - 使用了懒加载，需要使用suspense来处理应急方案
  - 路由配置好了以后，点击相应的文字就可以进行跳转操作
  - 在React中使用Suspense主要是**为了处理组件的异步加载**，尤其是在使用React Router进行路由管理时。Suspense能够在加载异步组件时显示一个备用内容（通常是一个加载指示器），直到异步操作完成。
## 5. 一个大的页面下有很多子页面的话
- 每个子页面可以用一个文件夹来表示；
- 一个发现下面，有很多子视图，每个子视图可以用一个文件夹表示
- memo函数通常是用来作优化操作的；
- 动态路由通常是用作权限管理是使用的；
- 在vue中使用<router-view>来进行占位，在react中使用<Outlet>来进行占位操作
  - 在进行占位后才能进行显示操作；

## 6. 全家桶-状态管理（346）
- 状态管理的选择
  - redux；目前React中使用最多的状态管理库
  - @reduxjs/toolkit:redux 工具 更方便的使用redux；
- 配置redux，并不使用传统的方式；
- 下载相应的配置
  - npm install @reduxjs/toolkit react-redux
  - react-redux； 将react组件和redux联系起来；
- 在vue当中是通过useStore，在react当中是通过provider来提供数据
- 整体的数据使用是放在总的index.tsx文件夹下的；
- 想要使用store中的数据，可以在store中建立module文件夹，在文件夹中存入相关数据
  - module文件夹；
  
## 7. 项目中集成axios，
- 以往都会对axios进行二次封装；
- 直接使用之前用到过的知识即可，比如说之前已经封装好的内容；
- 在进行测试的时候，可以在具体的组件内部进行网络请求测试
  - 本次在recommend组件中进行相关测试；
  - 在进行数据发布的时候，常常使用useEffect这个Hook来实现
- 获取到数据就可以进行相应的展示，但是最终的数据都是放在我们的store当中；
  - 测试的话，可以使用useState来展示；
    - 初始的话可以使用范型；
    - 类型的转换可以去 json to typescript当中
- 在react项目中如何区分开发环境和生产环境？
  - 3种方式（service => config => index.ts）
- 开启本地的一个服务操作
  - npm install -g serve
  - serve -s build(使用build文件夹作为相关资源)
- 类组件的类型定义，demo文件夹下的demo02.tsx