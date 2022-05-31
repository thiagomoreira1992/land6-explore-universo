import {Router} from './router.js'

const router = new Router();

// router.add('/', "pages/home.html")
// router.add('/universe', "pages/universe.html")
// router.add('/exploration', '/pages/exploration.html')
// router.add(404, '/pages/404.html')
router.add('/', "./pages/home.html", '--bgi-mountain1')
router.add('/universe', "./pages/universe.html", '--bgi-mountain2')
router.add('/exploration', './pages/exploration.html', '--bgi-mountain3')
router.add(404, "./pages/404.html", '--bgi-mountain1')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
window.teste = (teste) => router.route(teste)
