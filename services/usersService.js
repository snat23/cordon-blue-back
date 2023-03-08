const usersRepository = require("../repositories/usersRepository");

exports.getUserByCredentials = (username, password) => {
  return usersRepository.getUserByCredentials(username, password);
};
