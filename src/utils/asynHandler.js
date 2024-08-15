const asyncHandler =(reqHandler)=>{
    (req,res,next)=>{
        Promise.resolve(reqHandler(req,res,next)).catch((err)=>next(err))
    }
}



export {asyncHandler}

// const asyncHandler =(fn)=> async (req,res,next)=>{   try catch method
//     try {
        
//     } catch (error) {
//         res.status(err.code||500).json({
//             success:false,
//             message:err.message
//         })
//     }
// } //higher order function