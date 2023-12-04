const express = require('express');
const router = express.Router();
const moviesController = require('../controller/moviesController')
const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')

router.post('/', [auth.check, admin.check], moviesController.create)
router.put('/:id', [auth.check, admin.check], moviesController.update)
router.delete('/:id', [auth.check, admin.check], moviesController.delete)
router.get('/', auth.check, moviesController.list)
router.get('/:id', auth.check, moviesController.find)
router.get('/:id/reviews', moviesController.reviews)
router.post('/:id/reviews', auth.check, moviesController.addReview)

module.exports = router;
