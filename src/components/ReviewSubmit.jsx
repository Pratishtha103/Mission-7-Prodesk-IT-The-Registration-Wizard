import React from "react";

function ReviewSubmit({formData,setFormData}){
    return(
        <div className="grid grid-cols-2">
            <div>
                <p>First Name: <br /> {formData.firstName}</p>
                <br />
                <p>Last Name:<br />{formData.lastName}</p>
                <br />
                <p>Date of Birth:<br />{formData.dateOfBirth}</p>
            </div>
            <div>
                <p>Email:<br />{formData.email}</p> <br />
                <p>Password:<br />{formData.password}</p><br />
            </div>
        </div>
    )
}

export default ReviewSubmit;