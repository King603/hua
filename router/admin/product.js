import { Router } from 'express';
var router=Router();
router.get('/',function(req,res,next){
  res.send("商品页面");
})
export default router;