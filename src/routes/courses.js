const express = require('express');
const router = express.Router();
const coursesController = require('../app/controllers/CoursesController');

// Trong coursesController.show(): slug = req.params.slug
router.post('/handle-form-actions', coursesController.handleFormActions);
router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:slug', coursesController.show);

module.exports = router;
