# WYM_Project_03
React + TypeScript

## 项目搭建
1. 工具; React脚手架
    - create-react-app
        - 早期的项目用的是yarn
    - 同时配置TS的支持
        - create-react-app hy_ts_react_music --template typescript
    - 基于webpack来搭建 ~ 基于Node
2. 区别Vue
    - Vue是配置供选择
3. react-app-env.d.ts 文件的作用
    - react-app-env.d.ts 文件在项目中的作用是用于声明 TypeScript 类型定义的环境变量，让 TypeScript 编译器能够正确识别这些变量的类型，从而提供更好的类型检查和代码提示功能。

## 项目配置(基于webpack ~ 隐藏) 
1. 配置项目的icon
    - 图标替换的话,命名为favicon.ico
2. 配置项目的标题
    - index.html
3. 配置项目别名等（craco.config.ts）
    - 修改webpack配置 通过craco   create-react-app config
    - 路径别名 @ 
    - npm install @craco/craco@alpha -D  
        - 安装以后进行相应的配置操作
        - 但是安装好了以后,可能ts会报错
            - 需要在tsconfig.json中进行配置
        - 最后还需要合并进去 react-scripts => craco
        ```
        "scripts": {
            "star t": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"
        },
        ```
4. 配置tsconfig.json

## 代码规范的配置
1. 集成editorconfig配置; EditorConfig 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。
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
2. 配置 .prettierrc文件
- 先在控制台中安装  npm install prettier -D

- 可配置的内容: 结尾是否要加分号,单引号 or 双引号
* useTabs：使用tab缩进还是空格缩进，选择false；
* tabWidth：tab是空格的情况下，是几个空格，选择2个；
* printWidth：当行字符的长度，推荐80，也有人喜欢100或者120；
* singleQuote：使用单引号还是双引号，选择true，使用单引号；
* trailingComma：在多行输入的尾逗号是否添加，设置为 `none`，比如对象类型的最后一个属性后面是否加一个，；
* semi：语句末尾是否要加分号，默认值true，选择false表示不加；
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

- 创建.prettierignore忽略文件; 忽略文件无需格式化
```
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```
- 设置里面 editor default 

3. 使用Eslint来对项目错误进行检测
-  npx eslint --init  
    - 选项2
    - 选项1
    - react
    - 浏览器 + Node
    - 生成了eslint配置文件, 你自己可以以何种形式来进行配置 JS
- npm install eslint-plugin-prettier eslint-config-prettier -D
    - 代码规范保持与prettier一致
- 有错误的话,要么通过Ctrl + S进行格式化保存,要么通过npm run prettier
 
4. 一两个公司可能都不用配置上述东西,看东西规模; 有的可以配置了,不要太焦虑

## 项目目录结构的划分
1. 相关业务代码放置文件夹的命令

## CSS样式重置
1. npm install normalize.css 
    - index.tsx中配置
2. 自己需要配置的样式
    - asset.less
        - 想要让该文件生效需要通过craco-less来进行处理
        - 然后在craco.config.js文件中进行配置
3. 使用index.js文件进行引入操作
```
@import 是一种用于在 CSS 文件中引入其他 CSS 文件的语法。它允许将一个 CSS 文件中的样式导入到另一个 CSS 文件中，以便在一个文件中使用另一个文件的样式定义。
```

