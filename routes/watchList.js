const express = require('express')
const router = express.Router()
const watchListController = require('../controller/watchListController')
const auth = require('../middlewares/auth')

router.post('/',auth.check , watchListController.add)
router.delete('/:movie',auth.check , watchListController.delete)
router.get('/',auth.check , watchListController.list)

module.exports = router