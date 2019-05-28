module.exports = {
  register: async (req, res) => {
    let {username, password} = req.body
    const db = req.app.get('db')
    let result = await db.get_user(username)
    console.log('accessed')
    let existingUser = result[0]

    if (existingUser) {
      return res.status(409).send('Username taken')
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    let registeredUser = await db.register_user({username, hash})
    let user = registeredUser[0]

    req.session.user = {
      id: user.id,
      username: user.username
    }

    res.status(201).send(user)
  }
}