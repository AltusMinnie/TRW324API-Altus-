module.exports = {
    createUser ({ name, password }) {
      console.log(`Add user ${name} with password ${password}`)
      return Promise.resolve()
    }
  }