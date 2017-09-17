const Koa = require('koa')
const app = new Koa()
const router =  require ('./router.js')

app.use(router.routes())

app.listen(3000)
console.log('server starting at port 3000')