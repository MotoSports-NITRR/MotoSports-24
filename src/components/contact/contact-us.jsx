import "../globalStyles.css";
import { useState } from "react";


function ContactUs() {
    const [details, setDetails]=useState({
        name: "",
        phone:"",
        email:"",
        message:""
    })
    function handleChange(event){
        const {name, value}=event.target;
        setDetails(pre=>{
            return{
                ...pre,
                [name]:value
            }
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(details);
    }

    return <>
        <div className="contact-us w-full flex flex-col justify-evenly lg:px-40 px-0">
            <p className="text-center font-albulaHeavy sm:text-5xl text-3xl">Contact us</p>
            <form style={{color:"var(--dustyWhite)"}} onSubmit={handleSubmit} className="flex justify-evenly lg:flex-row flex-col items-center pb-52">
                <div className="flex flex-col justify-start">
                    <div className=" flex items-start flex-col  my-4">
                        <label htmlFor="Name" className="pb-2">Name</label>
                        <input required id="Name"
                            placeholder="Enter your name"
                            type="text"
                            className="h-12 w-11/12 md:w-96 rounded-md pl-2 pb-1 text-deepTawny placeholder:text-sm placeholder:text-black border-none flex-grow"
                            style={{backgroundColor: "var(--dustyWhite)",
                                boxShadow: "inset 0 0 5px black",
                                minWidth:"300px",
                                maxWidth:"400px"
                            }}
                            onChange={handleChange}
                            name="name"
                            value={details.name} />
                    </div>
                    <div className=" flex items-start flex-col my-4">
                        <label htmlFor="Phone" className="pb-2">Phone</label>
                        <input required id="Phone"
                            placeholder="Enter your phone"
                            type="tel"
                            className="h-12 w-11/12 md:w-96 rounded-md pl-2 pb-1 text-deepTawny placeholder:text-sm placeholder:text-black border-none flex-grow"
                            style={{backgroundColor: "var(--dustyWhite)",
                                boxShadow: "inset 0 0 5px black",
                                minWidth:"300px",
                                maxWidth:"400px"
                            }}
                            onChange={handleChange}
                            name="phone"
                            value={details.phone}/>
                    </div>
                    <div className=" flex items-start flex-col my-4">
                        <label htmlFor="Email" className="pb-2">Email</label>
                        <input required id="Email"
                            placeholder="Enter your email"
                            type="email"
                            className="h-12 w-11/12 md:w-96 rounded-md pl-2 pb-1 text-deepTawny placeholder:text-sm placeholder:text-black border-none flex-grow"
                            style={{backgroundColor: "var(--dustyWhite)",
                                boxShadow: "inset 0 0 5px black",
                                minWidth:"300px",
                                maxWidth:"400px"
                            }}
                            onChange={handleChange}
                            name="email"
                            value={details.email}/>
                    </div>
                </div>
                <div className="flex flex-col justify-start">
                    <div className="flex flex-col my-4 ">
                        <label htmlFor="message" className="pb-2">Message</label>
                        <textarea
                            id="message" 
                            placeholder="Message" 
                            className=" w-11/12 md:w-96 border-white rounded-md border-none pl-2 pt-2 text-deepTawny h-40 resize-none placeholder:text-sm placeholder:text-black placeholder:pt-2"
                            style={{backgroundColor: "var(--dustyWhite)",
                                boxShadow: "inset 0 0 5px black",
                                minWidth:"300px",
                                maxWidth:"400px"
                            }}
                            onChange={handleChange}
                            name="message"
                            value={details.message} />
                    </div>
                    <div className="flex justify-center">
                        <button style={
                            {backgroundColor: "var(--tawny)",
                                color:"var(--black-bean)",
                            }
                        } type="submit" className=" font-albulaBold text-xl h-12 pl-10 pr-10 rounded-md">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </>
}
export default ContactUs;