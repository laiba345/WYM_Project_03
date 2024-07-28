// 1.手动切换（过于依赖人为因素，可能忘记切换了）
export const BASE_URL = 'http://codercba.com:9002'
// export const BASE_URL = 'http://codercba.prod:9002'
export const TIME_OUT = 10000

// export 已经是主动导出了
// http://codercba.com:9002 这里面的数据都是网易云里面的内容，比较稳定
// 直接查看文档就可以

// 2.依赖当前环境: development/production
// console.log(process.env.NODE_ENV)
// let BASE_URL = ''
// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://codercba.dev:9002'
// } else {
//   BASE_URL = 'http://codercba.prod:9002'
// }
// export { BASE_URL }

// 3.从定义的环境变量的配置文件中, 加载变量
// .env.development 和 .env.production两个环境文件，分别加载相应的内容即可；
// 在不同的文件夹下配置不同的baseURl，配置相应的文件夹时，需要以REACT_APP开头才行；
// 查看之前看到的两个配置文件；
// console.log(process.env.REACT_APP_BASE_URL)
