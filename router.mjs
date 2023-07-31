import { Router } from 'express'
import Product from './src/modules/Product/index.mjs'
const router = new Router()


/**import routers */
router.use('/api',Product.ProductController)


export default router