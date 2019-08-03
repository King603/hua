import { Router } from 'express';
const router=Router();
router.get('/',function(req,res,next){
  res.send("登陆页面");
});
router.post("/dologin",(req,res)=>{
  res.send("admin user");
});
export default router;