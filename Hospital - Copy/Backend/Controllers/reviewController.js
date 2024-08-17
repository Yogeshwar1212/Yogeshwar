import Review from '../models/ReviewSchema.js'
import Doctor from '../models/DoctorSchema.js'

export  const getAllReviews = async (req, res) => {
    try{
        const reviews = await Review.find({})
        res.status(200).json({success:true, message:"Reviews found successfully", data:reviews})
        
    }catch(err){
        res.status(404).json({success:false, message:"Review not found"})
    }
}

export const createReview  = async (req,res)=>{
    if(!req.body.doctor) req.body.doctor = req.params.doctorId
    if(!req.body.user) req.body.user = req.userId

    const newReview = new Review(req.body)

    try{
        const savedReview = await newReview.save()

        await Doctor.findByIdAndUpdate(req.body.doctor, {
            $push:{reviews:savedReview._id}
        })
        return res.status(200).json({success: true, message:'Review created Successfully', data:savedReview})
        
    }
    catch(err){
        return res.status(500).json({success: false, message:err.message})
    }
}