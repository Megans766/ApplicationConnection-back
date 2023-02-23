const router = require('express').Router()
const connectsCtrl = require('../controllers/connects.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.post('/', checkAuth, connectsCtrl.create)
router.get('/', checkAuth, connectsCtrl.index)
router.put('/:id', checkAuth, connectsCtrl.update)
router.delete('/:id', checkAuth, connectsCtrl.delete)

module.exports = router

