import User from '../models/UserSchema.js'
import Booking from '../models/BookingSchema.js'
import Doctor from '../models/DoctorSchema.js'

export const updateUser = async(req,res) => {
    const id = req.params.id;

    try{
        const updateUser = await User.findByIdAndUpdate(id, {$set:req.body}, {new:true});

        res.status(200).json({success:true, message:"Successfully Updated", data:updateUser});
    }
    catch(err){
        res.status(500).json({success:false, message:"Failed to Update"});
    }
}

export const deleteUser = async(req,res) => {
    const id = req.params.id;

    try{
        await User.findByIdAndDelete(id)

        res.status(200).json({success:true, message:"Successfully Deleted"});
    }
    catch(err){
        res.status(500).json({success:false, message:"Failed to Delete"});
    }
}

export const getSingleUser = async(req,res) => {
    const id = req.params.id;

    try{
        const user = await User.findById(id).select('-password')

        res.status(200).json({success:true, message:"User Found", data:user});
    }
    catch(err){
        res.status(404).json({success:false, message:"No user found"});
    }
}

export const getAllUser = async(req,res) => {
    const id = req.params.id;

    try{
        const users = await User.find({}).select('-password')  //exclude password from the response

        res.status(200).json({success:true, message:"Users Found", data:users});
    }
    catch(err){
        res.status(404).json({success:false, message:"Not found"});
    }
}

export const getUserProfile = async(req,res) => {
    const userId = req.userId

    try{
        const user = await User.findById(userId)

        if(!user){
            return res.status(404).json({success: false, message:'User not found'})
        }

        const {password, ...rest} = user._doc

        res.status(200).json({sucess:true, message:'Profile info is getting', data:{...rest}})
    }
    catch(err){
        res.status(500).json({success:false, message:"Something went wrong, cannot get"});
    }
};

export const getMyAppointments = async(req,res) => {
    try{
        //step 1 : retrive appointment from specific user

        const bookings = await Booking.find({user:req.userId})

        //step 2 : extract doctor id from appointment

        const doctorIds = bookings.map(el => el.doctor.id)

        //step 3 : extract doctor from extracted doctor id

        const doctors =  await Doctor.find({_id:{$in:doctorIds}}).select('-password')

        res.status(200).json({success:true, message:'Appointment are getting', data:doctors})
    }
    catch(err){
        res.status(500).json({success:false, message:"Something went wrong, cannot get"});
    }
}