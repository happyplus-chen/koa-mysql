const Router = require('koa-router')
let router = new Router()
const test = require('./models/business')

router.get('/', async(ctx) => {
    let url = ctx.url
    // 从上下文的request对象中获取
    let request = ctx.request
    let req_query = request.query
    let req_querystring = request.querystring

    // 从上下文中直接获取
    let ctx_query = ctx.query
    let ctx_querystring = ctx.querystring
    ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
}).get('/test', async(ctx) => {
    ctx.body = 'abcdefg'
}).post('/post', async(ctx) => {
    ctx.body = 'post'
}).get('/sql', async(ctx) => {
     test.getData(ctx)
}).get('/mysql', test.getData)
module.exports = router