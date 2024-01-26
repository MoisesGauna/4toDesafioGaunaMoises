import { Router } from "express";


const realTimeRouterCart = Router();

realTimeRouterCart.get('/', (req, res)=> {
    res.render('pages/realTimeCart',
    {
      styles:"/styles",
      js:"/realTimeCart.js"
    })
  })
  
  export { realTimeRouterCart };