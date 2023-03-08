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
          $eq: password,
        },
      },
      { projection: { _id: 0 } }
    );
};
