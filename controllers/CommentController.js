import prisma from "../db/db.js";


export const get_comment = async (req,res)=>{
    const comment = await prisma.comment.findMany({
        include:{
            user:true,
            post:{
                include:{
                    user:true
                }
            }
        }
    });
    res.status(200).json(comment)
}

export const create_comment = async(req, res)=>{
    const {user_id, post_id, comment }  = req.body;

    const new_post = await prisma.comment.create({
        data:{
          post_id,
          user_id,
          comment
        }
    })

    res.status(200).json(new_post)
}

export const update_comment = async(req,res)=>{
    const {id} = req.params;
    const description = req.body.description;
  


    const update = await prisma.comment.update({
        where:{
            id:Number(id)
        },
        data:{
        description:description 
      }
    })

    res.json({sucess:true, data:update});
}

export const delete_comment = async(req,res)=>{
    const {id} = req.params;
   

    const data = await prisma.comment.delete({
        where:{
            id:Number(id)
        }
    })

    res.json({status:true, data:data})
}