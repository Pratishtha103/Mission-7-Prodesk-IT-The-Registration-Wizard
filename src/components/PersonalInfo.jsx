import React from "react";

function PersonalInfo({formData,setFormData}){//props for form data
    return(
        <div className="flex flex-col items-center justify-center gap-6">
            <input 
                className="input-field" 
                type="text" 
                placeholder="First Name" 
                value={formData.firstName} 
                onChange={(e)=>
                    setFormData({...formData, firstName:e.target.value})
                }
                required
            />
            <input 
                className="input-field" 
                type="text" 
                placeholder="Last Name"
                value={formData.lastName} 
                onChange={(e)=>
                    setFormData({...formData, lastName:e.target.value})
                } required/>
            <input 
                className="input-field" 
                type="date" 
                placeholder="Date of Birth"
                value={formData.dateOfBirth} 
                onChange={(e)=>
                    setFormData({...formData, dateOfBirth:e.target.value})
                } required/>
        </div>
    )
}

export default PersonalInfo;