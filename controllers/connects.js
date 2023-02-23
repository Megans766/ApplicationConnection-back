const { Connect } = require('../models')

async function create(req, res) {
  try {
    const application = await Connect.create(req.body)
    res.status(200).json(application)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = {
  create
}