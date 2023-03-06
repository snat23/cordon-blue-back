const usersRepository = require("../repositories/usersRepository");

exports.findUserByUsernameAndPassword = (credentials) => {
  return usersRepository.findUserByUsernameAndPassword(credentials);
};
