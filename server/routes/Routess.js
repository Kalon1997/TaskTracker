const { registerUser, login, logout, myProfile, openProfile} = require('../controllers/User');
const { isAuthedUser } = require('../middleware/Auth')
const express = require('express');
const { createTask, getAllTasks, changeStatus, openTask, searchTask, filter, editTask, addRemark, getRemarks} = require('../controllers/Task');

const router = express.Router();

router.route('/register').post(registerUser);       
router.route('/login').post(login);                
router.route('/logout').get(isAuthedUser, logout);  
router.route('/myProfile').get(isAuthedUser, myProfile);  

router.route('/createTask').post(isAuthedUser, createTask);
router.route('/allTasks').get( getAllTasks)
router.route('/changeStatus').put(isAuthedUser, changeStatus)
router.route('/openTask/:id').get(isAuthedUser, openTask)
router.route('/searchTask').post(isAuthedUser, searchTask)
router.route('/filter').post(isAuthedUser, filter)
router.route('/openProfile/:id').get(isAuthedUser, openProfile)
router.route('/editTask').put(isAuthedUser, editTask)
router.route('/addRemark').put(isAuthedUser, addRemark)
router.route('/getRemarks').post(isAuthedUser, getRemarks)


module.exports = router;
