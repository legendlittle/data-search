const express = require('express');
const controller = require('../../controllers/api');


const router = express.Router();

router.route('/data').get(
  controller.getData
);

module.exports = router;