const express = require('express');
const userService = require('../service/user');

const router = express.Router();
router.post('/register', async (req, res, next) => {
  // TODO move request handler to controller
  // I did not do that because it is just a tutorial
  const { firstName, middleNames, lastName } = req.body;
  try {
    const id = await userService.register(firstName, middleNames, lastName);
    res.status(201).json(id);
  } catch {
    console.error(err);
    res.status(500).json('something went wrong');
  }
});

module.exports = router;
