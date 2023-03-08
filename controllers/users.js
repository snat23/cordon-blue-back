const express = require("express");
const router = express.Router();
const usersService = require("../services/usersService");

router.get("", async (req, res) => {
  const events = await usersService.getUsers();

  res.send(events);
});

router.get("/:username/:password", async (req, res) => {
  const user = await usersService.getUserByCredentials(
    req.params.username,
    req.params.password
  );

  res.send(user);
});

module.exports = router;
