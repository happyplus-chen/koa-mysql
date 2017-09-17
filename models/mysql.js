const mysql = require('mysql')
const pool = mysql.createPool({host: '127.0.0.1', user: 'root', password: '111111', database: 'crud'})

const query = function (sql, values) {
    return new Promise((resolve, reject) => {
        pool
            .getConnection(function (err, connection) {
                if (err) {
                    reject(err)
                } else {
                    connection.query(sql, values, (err, rows) => {
                        err
                            ? reject(err)
                            : resolve(rows)
                        connection.release()
                    })
                }
            })
    })
}

module.exports = {
    query
}