import prisma from '../db/db.js'


export const fetch_all_user = async(req,res)=>{
    const data = await prisma.user.findMany({
        include:{
            post:true,
            // comment:true,
        }

        // include:{
        //    post:{
        //     select:{
        //         title:true,
        //         description:true
        //       }
        //   }
        //    }


        // select:{
        //     _count:{
        //        select:{
        //         post:true
        //        }
        //     }
        // }
    });
    res.json({status:true, data:data})
}

export const fetch_single_user = async(req,res)=>{
    const {id} = req.params;
    const data = await prisma.user.findFirst({
        where:{
            id:Number(id)
        }
    })
    res.json({status:true, data:data})
}

export const create_user = async(req,res)=>{
    const {name, email, password} = req.body;
     console.log(email, name, password);

    const findUser = await prisma.user.findUnique({
        where:{
            email:email
        }
    })

    if(findUser){
        return res.json({status:200, message:"User Already Exists"})
    }

    const newuser = await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:password
        }
    })

    if(newuser){
        res.json({status:200, data:newuser})
    }
}

export const update_user = async(req,res)=>{
    const {id} = req.params;
    const name = req.body.name;
  


    const update = await prisma.user.update({
        where:{
            id:Number(id)
        },
        data:{
        name:name  
      }
    })

    res.json({sucess:true, data:update});
}


export const delete_user = async(req,res)=>{
    const {id} = req.params;
    console.log(id);

    const data = await prisma.user.delete({
        where:{
            id:Number(id)
        }
    })

    res.json({status:true, data:data})
}



