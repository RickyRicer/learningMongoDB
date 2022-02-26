const router = require('express').Router();
const { 
    createTodo, 
    getAllTodos, 
    getTodoById,
    updateTodoById,
    deleteTodoById,
} = require('../../../controllers/todoController');
// /api/users prepended to every route
// router.post('/', createUser);
// router.get('/', getAllUsers);
router.route('/')
	.get(getAllTodos)
	.post(createTodo);

router.route('/:todoId')
    .get(getTodoById)
    .put(updateTodoById)
    .delete(deleteTodoById);

module.exports = router;

// /api/users