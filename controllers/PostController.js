import prisma from "../db/db.js";


export const get_post = async (req,res)=>{
    const post = await prisma.post.findMany({
        include:{
            comment:{
                include:{
                    user:true
                }
            }
        }
    });
    res.status(200).json(post)
}

export const create_post = async(req, res)=>{
    const {user_id, title, description }  = req.body;

    const new_post = await prisma.post.create({
        data:{
            user_id,
            title,
            description
        }
    })

    res.status(200).json(new_post)
}

export const update_post = async(req,res)=>{
    const {id} = req.params;
    const description = req.body.description;
  


    const update = await prisma.post.update({
        where:{
            id:Number(id)
        },
        data:{
        description:description 
      }
    })

    res.json({sucess:true, data:update});
}

export const delete_post = async(req,res)=>{
    const {id} = req.params;
   

    const data = await prisma.post.delete({
        where:{
            id:Number(id)
        }
    })

    res.json({status:true, data:data})
}