const express=require('express');
const router = express.Router();
const controller= require('../controllers/index.controllers')
router.get('/',controller.index)
router.get('/test',controller.test)
router.get('/getUser',controller.users)


module.exports=router;