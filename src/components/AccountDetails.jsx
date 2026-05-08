import React, {useState} from "react";
import { Eye, EyeOff } from "lucide-react";

function AccountDetails({formData,setFormData}){
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return(
       <div className="flex flex-col items-center justify-center gap-6">
            <input className="input-field" type="email" placeholder="Email"
                value={formData.email} 
                onChange={(e)=>
                    setFormData({...formData, email:e.target.value})
                } required
            />
            {formData.email && !formData.email.includes("@") && (
                <p className="text-red-500 text-xs mt-1">Please enter a valid email address</p>
            )}
            <div className="relative">
                <input 
                    className="input-field" 
                    type={showPassword ? "text" : "password"}  
                    placeholder="Password" 
                    value={formData.password} 
                    onChange={(e)=>
                        setFormData({...formData, password:e.target.value})
                    } required
                />
                <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                </button>
            </div>
            {formData.password && formData.password.length < 8 && (
                <p className="text-red-500 text-xs mt-1">Password must be at least 8 characters</p>
            )}
            <div className="relative">
                <input 
                    className="input-field" 
                    type={showConfirmPassword ? "text" : "password"}  
                    placeholder="Confirm Password" 
                    value={formData.confirmPassword} 
                        onChange={(e)=>
                            setFormData({...formData, confirmPassword:e.target.value})
                        }
                    required
                />
                <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                    {showConfirmPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                </button>
            </div>
            {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
            )}
        </div>
    )
}

export default AccountDetails;