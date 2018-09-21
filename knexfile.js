const knex = require('knex')(require('./knexfile'))
const mysql = require('mysql')
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ITRW324'
})
conc.connect((err) => {
    if (err) throw err
    console.log('Connected')
})

module.exports = {
    client: 'mysql',
    connection: {
        user: 'root',
        password: 'root',
        database: 'ITRW324'
    }
}

module.exports = {
    createUser ({ Name, Password }) {
      console.log(`Add user ${Name} with password ${Password}`)
      return knex('user').insert({
        Name,
        Password
      })
    }
  }