const express = require('express');
const chatController = require('../controllers/chatController');

const router = express.Router();

router
    .route('/')
    .get(chatController.chatRegisterPage)
    .post(chatController.chatRegister);

module.exports = router;