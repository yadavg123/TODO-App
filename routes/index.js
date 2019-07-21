//requiring express
const express=require('express');

//creates a router as a module
const router=express.Router();

const homeController=require('../controllers/home_controller');  

//define the home page route
router.get('/',homeController.home);

//adding a task
const addTaskController=require('../controllers/add_controller');
router.post('/addTask',addTaskController.add);

//deleting a task
const deleteTaskController=require('../controllers/delete_controller');
router.post('/delete',deleteTaskController.delete);

//postponing a task
const postponeTaskController=require('../controllers/postpone_controller');
router.get('/postpone',postponeTaskController.postpone);

//removing a passed task
const removeTaskController=require('../controllers/removeOne_controller');
router.get('/remove',removeTaskController.remove);

//export this module
module.exports=router;