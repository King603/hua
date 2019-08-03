// 首页，默认页
import { Router } from 'express';
const router=Router();
 
router.get('/',function(req,res){
  res.send('index');
})
 
router.get('/product',function(req,res){
  res.send('product页面');
})
 
export default router;