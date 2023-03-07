const usersRepository = require('../repositories/usersRepository');

exports.getUsers = () => {
  return usersRepository.getAllUsers();
};
