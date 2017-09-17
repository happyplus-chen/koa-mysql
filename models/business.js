const { query } = require('./mysql.js')
async function selectAllData( ) {
  let sql = 'SELECT * FROM table1'
  let dataList = await query( sql )
  return dataList
}

const getData = async(ctx) =>{
  let dataList = await selectAllData()
  ctx.body = dataList
}

module.exports = { getData }