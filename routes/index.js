/**
 * require express router
 * create controllers as many as you can in controller directory
 * require all controllers below just like '../controllers/controllerName'
 * create route like router.get('address', controller.function)
 * -----------------------------------------------------------------------
 */

var express = require('express');
var router = express.Router();

var home_controller = require('../controllers/homeController');
router.get('/', home_controller.index);

module.exports = router;
