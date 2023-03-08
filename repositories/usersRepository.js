const db = require("../db/db");
const { ObjectId } = require("mongodb");

exports.getUserByCredentials = async (username, password) => {
  return db
    .get()
    .collection("users")
    .findOne(
      {
        username: {
          $eq: username,
        },
        password: {
          $eq: parseInt(password),
        },
      },
      { projection: { _id: 0 } }
    );
};
