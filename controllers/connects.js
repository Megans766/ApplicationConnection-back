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

async function index(req, res) {
  try {
    const appEntries = await Connect.findAll()
    res.status(200).json(appEntries)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function update(req, res) {
  try {
    const appEntry = await Connect.findByPk(req.params.id)
    appEntry.set(req.body)
    appEntry.save()
    res.status(200).json(appEntry)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function deleteAppEntry(req, res) {
  try {
    const removeAppEntryRows = await Connect.findByPk(req.params.id)
    await removeAppEntryRows.destroy()
    res.status(200).json(removeAppEntryRows)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteAppEntry
}