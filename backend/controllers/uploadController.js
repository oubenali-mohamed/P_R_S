const UserModel = require('../models/user')
const fs = require('fs')
const { promisify } = require('util')
const pipeline = promisify(require('stream').pipeline)
const { uploadErrors } = require('../utils/error')

module.exports.uploadProfil = async (req, res) => {
  try {
    if (
      req.file.detectedMimeType !== 'image/jpg' &&
      req.file.detectedMimeType !== 'image/png' &&
      req.file.detectedMimeType !== 'image/jpeg'
    ) {
      throw Error('invalid file')
    }

    if (req.file.size > 500000) {
      throw Error('max size')
    }
  } catch (err) {
    const errors = uploadErrors(err)
    return res.status(201).json({ errors })
  }

  const fileName = req.body.name + '.jpg'

  await pipeline(
    req.file.stream,
    fs.createWriteStream(
      `${__dirname}/../../frontend/public/uploads/profil/${fileName}`
    )
  )
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.body.userId,
      { $set: { picture: `./uploads/profil/${fileName}` } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    )

    return res.json(updatedUser)
  } catch (err) {
    const errors = uploadErrors(err)
    return res.status(500).json({ errors })
  }
}


