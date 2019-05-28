module.exports = {
  getUsername: async (req, res) => {
    let {id} = req.params
    const db = req.app.get('db')
    let result = await db.get_username({id})
    let username = result[0]

    res.status(201).send(username)
  }
}