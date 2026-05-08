"why does this justify-items-center not work 

<div className=" min-h-screen flex justify-items-center items-center">"

"why don't these input field stack vertically ? 

<div className="flex flex-column items-center justify-center">
            <input className="input-field" type="text" placeholder="First Name" required/>
            <input className="input-field" type="text" placeholder="Last Name" required/>
            <input className="input-field" type="date" placeholder="Date of Birth" required/>
        </div>"

"what is the correct syntax 

className="bg-[rgb(53, 53, 142)]""

"why does button hover keeps pushing the content upward"

"why is this progress bar not working

<div className=" w-100 h-2 bg-amber-50 mb-10 rounded-2xl border border-[rgb(53,53,142)]">
                <div className=" bg-[rgb(53,53,142)]" style={{width: page===0 ? "33.3%":page ==1 ? "66.6%": "100%"}}></div>
            </div>"

            "<input className="input-field" type="date" placeholder="Date of Birth" required/>

this date type does not let the placeholder appear, how to make placeholder appear"

"how can i render the success page when the submit is clicked

<button 
                        className="text-sm bg-[rgb(53,53,142)] text-white px-4 py-2 font-semibold rounded-lg border-2 border-transparent hover:bg-white hover:text-[rgb(53,53,142)] hover:border-[rgb(53,53,142)]"
                        onClick={()=>{
                            if (page === FormTitles.length-1){
                                console.log(formData);
                                
                            }
                            else{
                            setPage((currPage) => currPage + 1);}
                        }
                    }
                    >
{page < FormTitles.length-1?"NEXT":"SUBMIT"}
                    </button>"

""