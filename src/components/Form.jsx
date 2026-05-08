import React, {useState} from "react";
import PersonalInfo from "./PersonalInfo";
import AccountDetails from "./AccountDetails";
import ReviewSubmit from "./ReviewSubmit";
import Success from "./Success";

function Form(){
    const [page, setPage] = useState(0);// tracks which page we are on
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        dateOfBirth:"",
        email:"",
        password:"",
        confirmPassword:"",
    });
    const FormTitles = ["PERSONAL INFO", "ACCOUNT DETAILS", "REVIEW & SUBMIT"]// Array of form step headers

    const PageDisplay = ()=>{
        if (page === 0){
            return <PersonalInfo formData={formData} setFormData={setFormData}/>;
        } else if (page === 1){
            return <AccountDetails formData={formData} setFormData={setFormData}/>;
        } else{
            return <ReviewSubmit formData={formData} setFormData={setFormData}/>;
        }
    }
    const isPageValid = () => {
        if (page === 0) {
            return formData.firstName !== "" && 
                formData.lastName !== "" && 
                formData.dateOfBirth !== "";
        }
        if (page === 1) {
            return formData.email !== "" && 
                formData.password !== "" && 
                formData.confirmPassword !== "" &&
                formData.password === formData.confirmPassword;
        }
        return true;
    };
    const [submitted, setSubmitted] = useState(false);
    
    if (submitted) return <Success />;

    return(
        <div className=" min-h-screen flex flex-col justify-center items-center">
            <div className=" w-100 h-3 bg-amber-50 mb-10 rounded-2xl border-2 border-white">
                <div className="h-full bg-[rgb(53,53,142)]" style={{width: page===0 ? "33.3%":page ==1 ? "66.6%": "100%"}}></div>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-2 bg-white rounded-2xl h-100 w-100 shadow-2xl">
                {/* Header based on which page we are on */}
                <div className="text-xl font-semibold p-2">
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className="mb-4">{PageDisplay()}</div>
                <div className="w-45 flex justify-between items-center">
                    <button 
                        className="text-sm bg-[rgb(53,53,142)] text-white px-4 py-2 font-semibold rounded-lg border-2 border-transparent hover:bg-white hover:text-[rgb(53,53,142)] hover:border-[rgb(53,53,142)]"
                        disabled={page == 0}
                        onClick={()=>{
                            setPage((currPage) => currPage - 1);
                        }}
                    >
                        BACK
                    </button> {/*function that determines what the previous page is*/}
                    <button 
                        className="text-sm bg-[rgb(53,53,142)] text-white px-4 py-2 font-semibold rounded-lg border-2 border-transparent hover:bg-white hover:text-[rgb(53,53,142)] hover:border-[rgb(53,53,142)]"
                        disabled={!isPageValid()}
                        className="... disabled:opacity-50 text-sm px-4 py-2 font-semibold rounded-lg border-2 border-gray-500 disabled:cursor-not-allowed "
                        onClick={()=>{
                            if (page === FormTitles.length-1){
                                console.log(formData);
                                setSubmitted(true);
                            }
                            else{
                            setPage((currPage) => currPage + 1);}
                        }
                    }
                    >
                        {page < FormTitles.length-1?"NEXT":"SUBMIT"}
                    </button>{/*function that determines what the next page is*/}
                </div>
            </div>
        </div>
    )
}

export default Form;