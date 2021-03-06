const Router = require('express')
const calendar = require('@controllers/calendarsController')

const router = Router()

router.get('/', (req, res) => res.send('welcome to root'))

router.get('/calendar', calendar.getAll)
router.get('/:course/:week/', calendar.iframe)
router.get('/:course/:week/iframe.html', calendar.iframe)
router.get('/screen', calendar.screen)
router.get('/luokka', (req, res) => res.type('text/plain').send('BK107'))

module.exports = router
