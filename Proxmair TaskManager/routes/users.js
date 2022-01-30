const express = require('express')
const user = express.Router()

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
} = require('../controllers/tasks')

user.route('/').get(getAllTasks).post(createTask)
user.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = user
