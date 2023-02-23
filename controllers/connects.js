const { Connect } = require('../models')

async function create(req, res) {
  try {
    req.body.profileId = req.user.profile.id
    const appEntry = await Connect.create(req.body)
    res.status(200).json(appEntry)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function update(req, res) {
  try {
    const appEntry = await Connect.update(
      req.body,
      { where: {
        id: req.params.id,
        profileId: req.user.profile.id
      }}
    )
    res.status(200).json(appEntry)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function deleteAppEntry(req, res) {
  try {
    const removeAppEntryRows = await Connect.destroy(
      { where: { 
        id: req.params.id,
        profileId: req.user.profile.id
      }}
    )
    res.status(500).json(removeAppEntryRows)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = {
  create,
  update,
  delete: deleteAppEntry
}