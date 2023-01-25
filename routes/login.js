var express=require('express');
var router=express.Router();

// Get Login page
router.get('/admin',function(req,res){
    res.render('loginpage',{msg:''})
})

router.post('/checklogin',function(req,res){
    console.log(req.query)
    if(req.body.email=='yuvi@gmail.com' && req.body.password=='1111')
    { res.render("interface")
    }
    else
    { res.render('loginpage',{msg:'Invalied ID/Password'})
    }

    
})

router.get('/result',function(req,res){
    console.log(req.query)

    
    var tn=parseInt(req.query.hin)+parseInt(req.query.eng)+parseInt(req.query.math)+parseInt(req.query.phy)+parseInt(req.query.che)
    var per=tn/5
    var div=0
    
    if(per<=64)
    { div='II'
    }
    else if(per<=54)
    { div='III'
    }
    else if(per<=100)
    { div='I'
    }
    if(req.query.hin>=85)
    { re1='D'
    }
    else if(req.query.hin<85)
    { re1='-'
    }
    if(req.query.eng>=85)
    { re2='D'
    }
    else if(req.query.eng<85)
    { re2='-'
    }
    if(req.query.math>=85)
    { re3='D'
    }
    else if(req.query.math<85)
    { re3='-'
    }
    if(req.query.phy>=85)
    { re4='D'
    }
    else if(req.query.phy<85)
    { re4='-'
    }
    if(req.query.che>=85)
    { re5='D'
    }
    else if(req.query.che<85)
    { re5='-'
    }
    var mm;
    var m;
    var f;
    var o;
    if(m=="male")
    { mm="S/o"
    }
    else if(f=="female")
    { mm='D/O'
    }
    else if(o=="other")
    { mm='other'
    }
    if(req.query.mm=='male')
    { mm='S/O'
    }
    if(parseInt(req.query.hin)<35)
    { var pf='Fail'
    }
    else if(parseInt(req.query.eng)<35)
    { var pf='Fail'
    }else if(parseInt(req.query.math)<35)
    { var pf='Fail'
    }else if(parseInt(req.query.phy)<35)
    { var pf='Fail'
    }else if(parseInt(req.query.che)<35)
    { var pf='Fail'
    }
    else if(tn>=170 && tn<=500)
    { var pf='Pass'
    }
    else if(tn<=170)
    { var pf='Fail'
    }
    
    res.render('result',{rollno:req.query.rollno,studentn:req.query.studentn,fathern:req.query.fathern,birth:req.query.birth,mm:req.query.mm,gender:req.query.gender,schoolname:req.query.schoolname,hin:req.query.hin,eng:req.query.eng,math:req.query.math,phy:req.query.phy,che:req.query.che,tn:tn,per:per,div:div,pf:pf})
})
module.exports=router