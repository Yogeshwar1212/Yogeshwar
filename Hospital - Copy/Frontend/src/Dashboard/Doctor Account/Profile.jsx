import React, { useEffect, useState } from 'react'
import {AiOutlineDelete} from "react-icons/ai"
import uploadImageToClodinary from './../../utils/uploadCloudinary'
import { BASE_URL, token } from '../../config'
import {toast} from 'react-toastify';

const Profile = ({doctorData}) => {
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        phone:'',
        bio:'',
        gender:'',
        specialization:'',
        ticketPrice:0,
        qualifications:[],
        experiences:[],
        timeSlots:[],
        about:'',
        photo:null
      });

      useEffect(() => {
        setFormData({
            name:doctorData?.name,
            email:doctorData?.email,
            phone:doctorData?.phone,
            bio:doctorData?.bio,
            gender:doctorData?.gender,
            specialization:doctorData?.specialization,
            ticketPrice:doctorData?.ticketPrice,
            qualifications:doctorData?.qualifications,
            experiences:doctorData?.experiences,
            timeSlots:doctorData?.timeSlots,
            about:doctorData?.about,
            photo:doctorData?.photo,
        })
      },[doctorData])
      
      const handleInputChange = e =>{
          setFormData({...formData,[e.target.name]: e.target.value}) 
      }

      const handleFileInputChange = async event =>{
        const file = event.target.files[0];
        const data = await uploadImageToClodinary(file);
        setFormData({...formData, photo:data?.url})
      }

      const updateProfileHandler = async e =>{
        e.preventDefault();

        try {
            const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`,{
                method:'PUT',
                headers:{
                    'content-type': 'application/json',
                    Authorization:`Bearer ${token}`
                },
                body:JSON.stringify(formData)
            })

            const result = await res.json()

            if(!res.ok){
                throw Error(result.message)
            }

            toast.success(result.message)

        } catch (err) {
            toast.error(err.message)
        }
      }

      const addItem= (key,item) => {
        setFormData(prevFormData => ({...prevFormData, [key]:[...prevFormData[key],item]}))
    }

    const handleReusableInputChangeFunc = (key ,index, event) => {
        const {name, value} = event.target

        setFormData(prevFormData => {
            const updateItems = [...prevFormData[key]]

            updateItems[index][name] = value

            return{
                ...prevFormData,
                [key]:updateItems,
            }
        })
    }

    const deleteItem = (key,index) =>{
        setFormData(prevFormData=> ({...prevFormData, [key]:prevFormData[key].filter((_,i) => i !== index)}))
    }

      const addQualifications = e =>{
        e.preventDefault();

        addItem('qualifications',{
            startingDate:'',endingDate:'', degree:'abc',university:'kgjghy '
        })
      }

      const handleQualifications = (event,index) => {
        handleReusableInputChangeFunc('qualifications', index, event);
      }

      const deleteQualifications = (e,index) => {
        e.preventDefault(),
        deleteItem('qualifications', index)

      }
      // We compare i, which represents the current index with index, the specific index we want to exclude. 

      const addExperiences = e =>{
        e.preventDefault();

        addItem('experiences',{
            startingDate:'',endingDate:'', position:'ddd',hospital:'ffff'
        })
      }

      const handleExperiences = (event,index) => {
        handleReusableInputChangeFunc('experiences', index, event);
      }

      const deleteExperiences = (e,index)=> {
        e.preventDefault(),
        deleteItem('experiences', index)

      }

      const addTImeSlot = e =>{
        e.preventDefault();

        addItem('timeSlots',{
            day:'Sunday',startingTime:'10:00', endingTime:'04:30'
        })
      }

      const handleTimeSlot = (event,index) => {
        handleReusableInputChangeFunc('timeSlots', index, event);
      }

      const deleteTimeSlot = (e,index) => {
        e.preventDefault(),
        deleteItem('timeSlots', index)

      }

  return (
    <div>
      <h2 className='text-headingColor font-bold text-[24px] leading-9 mb-10'>Profile Information</h2>

      <form>
        <div className='mb-5'>
            <p className='form_label'>Name<span className='text-red-500'>*</span></p>
            <input className='form_input' type="text" name='name' value={formData.name} onChange={handleInputChange} placeholder='Full Name'/>
        </div>
        <div className='mb-5'>
            <p className='form_label'>Email<span className='text-red-500'>*</span></p>
            <input className='form_input' type="email" name='email' value={formData.email} onChange={handleInputChange} placeholder='Email' readOnly aria-readonly disabled={true}/>
        </div>
        <div className='mb-5'>
            <p className='form_label'>Phone Number<span className='text-red-500'>*</span></p>
            <input className='form_input' type="number" name='phone' value={formData.phone} onChange={handleInputChange} placeholder='Phone Number'/>
        </div>
        <div className='mb-5'>
            <p className='form_label'>Bio<span className='text-red-500'>*</span></p>
            <input className='form_input' type="text" name='bio' value={formData.bio} onChange={handleInputChange} placeholder='Biography'/>
        </div>

        <div className='mb-5'>
            <div className='grid grid-cols-3 gap-5 mb-[30px]'>
                <div>
                    <p className='form_label'>Gender<span className='text-red-500'>*</span></p>
                    <select name="gender" value={formData.gender} onChange={handleInputChange} className='form_input py-3.5'>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <p className='form_label'>Specialization<span className='text-red-500'>*</span></p>
                    <select name="specialization" value={formData.specialization} onChange={handleInputChange} className='form_input py-3.5'>
                        <option value="">Select</option>
                        <option value="surgeon">Surgeon</option>
                        <option value="neurologist">Neurologist</option>
                        <option value="dermatologist">Dermatologist</option>
                    </select>
                </div>
                <div>
                    <p className='form_label'>Ticket Price<span className='text-red-500'>*</span></p>
                    <input type="number" placeholder='Price' name='ticketPrice' onChange={handleInputChange} value={formData.ticketPrice} className='form_input'/>
                </div>
                
            </div>
            <div>
                <p className='form_label'>Qualifications<span className='text-red-500'>*</span></p>
                {formData.qualifications?.map((item,index) => <div key={index}>
                    <div>
                        <div className='grid grid-cols-2 gap-5'>
                            <div>
                                <p className='form_label'>Starting Date<span className='text-red-500'>*</span></p>
                                <input type="date" name="startingDate" onChange={e=> handleQualifications(e,index)} value={item.startingDate} className='form_input'/>
                            </div>
                            <div>
                                <p className='form_label'>Ending Date<span className='text-red-500'>*</span></p>
                                <input type="date" name="endingDate" onChange={e=> handleQualifications(e,index)} value={item.endingDate} className='form_input'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='grid grid-cols-2 gap-5 mt-3'>
                            <div>
                                <p className='form_label'>Degree<span className='text-red-500'>*</span></p>
                                <input type="text" name="degree" onChange={e=> handleQualifications(e,index)} value={item.degree} className='form_input'/>
                            </div>
                            <div>
                                <p className='form_label'>University<span className='text-red-500'>*</span></p>
                                <input type="text" name="university" onChange={e=> handleQualifications(e,index)} value={item.university} className='form_input'/>
                            </div>
                        </div>
                    </div>
                    <button onClick={e=> deleteQualifications(e,index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer'><AiOutlineDelete/></button>
                </div>)}
                <button onClick={addQualifications} className='bg-[#000] py-2 px-3 rounded text-white h-fit cursor-pointer'>Add Qualification</button>
            </div>
        </div>

        <div className='mb-5'>   
            <div>
                <p className='form_label'>Experiences<span className='text-red-500'>*</span></p>
                {formData.experiences?.map((item,index) => <div key={index}>
                    <div>
                        <div className='grid grid-cols-2 gap-5'>
                            <div>
                                <p className='form_label'>Starting Date<span className='text-red-500'>*</span></p>
                                <input type="date" name="startingDate" onChange={e=> handleExperiences(e,index)} value={item.startingDate} className='form_input'/>
                            </div>
                            <div>
                                <p className='form_label'>Ending Date<span className='text-red-500'>*</span></p>
                                <input type="date" name="endingDate" onChange={e=> handleExperiences(e,index)} value={item.endingDate} className='form_input'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='grid grid-cols-2 gap-5 mt-3'>
                            <div>
                                <p className='form_label'>Position<span className='text-red-500'>*</span></p>
                                <input type="text" name="position" onChange={e=> handleExperiences(e,index)} value={item.position} className='form_input'/>
                            </div>
                            <div>
                                <p className='form_label'>Hospital<span className='text-red-500'>*</span></p>
                                <input type="text" name="hospital" onChange={e=> handleExperiences(e,index)} value={item.hospital} className='form_input'/>
                            </div>
                        </div>
                    </div>
                    <button onClick={e=> deleteExperiences(e,index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer'><AiOutlineDelete/></button>
                </div>)}
                <button onClick={addExperiences} className='bg-[#000] py-2 px-3 rounded text-white h-fit cursor-pointer'>Add Experiences</button>
            </div>
        </div>

        <div className='mb-5'>   
            <div>
                <p className='form_label'>Time Slots<span className='text-red-500'>*</span></p>
                {formData.timeSlots?.map((item,index) => (<div key={index}>
                    <div>
                        <div className='grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5'>
                            <div>
                                <p className='form_label'>Day<span className='text-red-500'>*</span></p>
                                <select name="day" value={item.day} className='form_input py-3.5' onChange={e=> handleTimeSlot(e,index)}>
                                    <option value="monday">Monday</option>
                                    <option value="tuesday">Tuesday</option>
                                    <option value="wednesday">Wednesday</option>
                                    <option value="thursday">Thursday</option>
                                    <option value="friday">Friday</option>
                                    <option value="saturday">Saturday</option>
                                    <option value="sunday">Sunday</option>
                                </select>
                            </div>
                            <div>
                                <p className='form_label'>Starting Date<span className='text-red-500'>*</span></p>
                                <input type="time" name="startingTime" onChange={e=> handleTimeSlot(e,index)} value={item.startingTime} className='form_input'/>
                            </div>
                            <div>
                                <p className='form_label'>Ending Date<span className='text-red-500'>*</span></p>
                                <input type="time" name="endingTime" onChange={e=> handleTimeSlot(e,index)} value={item.endingTime} className='form_input'/>
                            </div>
                            <div className='flex items-center'><button onClick={e=> deleteTimeSlot(e,index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-5 cursor-pointer'><AiOutlineDelete/></button></div>
                        </div>
                    </div>
                    
                    
                </div>))}
                <button onClick={addTImeSlot} className='bg-[#000] py-2 px-3 rounded text-white h-fit cursor-pointer'>Add Timeslot</button>
            </div>
        </div>

        <div className="mb-5">
            <p className='form_label'>About<span className='text-red-500'>*</span></p>
            <textarea name="about" rows={5} value={formData.about} onChange={handleInputChange} className='form_input'>About You</textarea>
        </div>

        <div className="mb-5 flex items-center gap-3">
        {formData.photo && ( <figure className='w-[50px] h-[50px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                  <img src={formData.photo} className='w-full rounded-full' alt="" />
                </figure> )}

                <div className='relative w-[130px] h-[50px]'>
                  <input type="file" name='photo' id='customFile' accept='.jpg, .png' onChange={handleFileInputChange} className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'/>
                  <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>
                    Upload Photo
                  </label>
                </div>
        </div>

        <div className='mt-7'>
            <button type='submit' onClick={updateProfileHandler} className='bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg'>Update Profile</button>
        </div>

      </form>
    </div>
  )
}

export default Profile
