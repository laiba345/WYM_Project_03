## 通过npm start 来启动

## 公司来开发项目不需要从0开始配置，是有脚手架供我们选择使用的

-   tsconfig.json
    -   配置文件，用于指定TS编译器（tsc）的编译选项，通过这个文件
        你可以配置TS编译器如何处理项目中的TS代码
    -   使用ts来做的话，组件后缀就变成了.tsx
-   react-app-env.d.ts
    -   在 React 项目中，react-app-env.d.ts 文件是由 Create React App 自动生成的声明文件。这个文件的主要作用是提供 TypeScript 对环境变量和项目的类型支持。具体来说，它包含对 react-scripts 提供的类型声明的引用，使得 TypeScript 能够识别和正确处理这些类型。
    -   这样很多文件就能直接使用，比如json文件等
-   在根index.jsx文件中，使用严格模式有助于提高代码的质量和可维护性，其用于在开发阶段
    对应用程序进行额外的检查和警告，**严格模式只会在开发环境中生效，不会影响生产环境的性能**

## 路由的使用
- useRoutes
    - 其是React Router库提供的一个钩子，用于定义和管理应用程序中的路由
    - 其允许你以声明式的方式配置路由，而不需要在组件中使用<Route>元素