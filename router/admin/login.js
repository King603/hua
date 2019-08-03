import { Router } from 'express';
const router=Router();
router.get('/',function(req,res,next){
  res.send("登陆页面");
})
export default router;