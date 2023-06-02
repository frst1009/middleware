const express = require('express');
const { categoryController } = require('../controllers/userController');
const { validate } = require('../middleware/validate');
const { body } = require('express-validator');
const categoryRoutes = express.Router();



categoryRoutes.get('/', categoryController.getAll)
categoryRoutes.get('/:id', categoryController.getById)
categoryRoutes.post('/', 
body('name').notEmpty().withMessage('Name is required'),
body('surname').notEmpty().withMessage('Surname is required'),
body('password').notEmpty().withMessage('Password is required'),
   validate
,categoryController.add)

categoryRoutes.delete('/:id', categoryController.deleteById)
categoryRoutes.put('/:id', categoryController.update)


module.exports = {
    categoryRoutes
}