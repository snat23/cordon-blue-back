const db = require("../db/db");
const { ObjectId } = require('mongodb');


exports.getFilesInClassification = async (classification) => {
  return db
    .get()
    .collection("files")
    .find({
      classification: {
        $gte: parseInt(classification),
      },
    })
    .toArray();
};

exports.downloadById = async (id) => {
  return await db
    .get()
    .collection("files")
    .findOne({
      _id: ObjectId(id),
    });
};

exports.uploadFile = async (file, classification) => {
    const DIR = './server_files';

    await db
    .get()
    .collection('files')
    .insertOne({
        path: `${DIR}/${file.name}`,
        displayName: file.name,
        classification: parseInt(classification)
    });
}

exports.deleteFileById = async (id) => {
    return db
    .get()
    .collection('files')
    .findOneAndDelete({
        _id: ObjectId(id)
    });
}