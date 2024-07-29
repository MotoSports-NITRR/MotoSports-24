import "../globalStyles.css";
import { useState } from "react";
import { db } from "../../config/firebase.js"
import {getDocs, collection , addDoc} from "firebase/firestore";


function ContactUs() {

    const [newName, setName]=useState("");
    const [newPhone , setPhone] = useState(0);
    const [newEmail , setEmail] = useState("");
    const [newMessage , setMessage] = useState("");

    const contact_collection_ref = collection(db , "contact");
    
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            console.log("reached");
    
            await addDoc(contact_collection_ref, {
                Name: newName,
                Phone: newPhone,
                Email: newEmail,
                Message: newMessage,
            });
    
            alert("Message sent successfully!");
            
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
    
        } catch (e) {
            console.error(e);
            alert("Message not sent! server side error");
        }
    };

    return <>
        <div className="contact-us w-100vw flex flex-col justify-evenly lg:px-40 px-0">
            <p className="text-center font-albulaHeavy sm:text-5xl text-3xl text-white mb-15">Contact us</p>

            <form style = {{color:"var(--dustyWhite)"}}  className="flex justify-evenly lg:flex-row flex-col items-center pb-52">
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
                            onChange={(e) => setName(e.target.value)}
                             />
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
                            onChange={(e) => setPhone(e.target.value)}
                            />
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
                            onChange={(e) => setEmail(e.target.value)}
                            />
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
                            onChange={(e) => setMessage(e.target.value)}
                            />
                    </div>
                    <div className="flex justify-center">
                        <button style={
                            {backgroundColor: "var(--tawny)",
                                color:"var(--black-bean)",
                            }}
                         type="button"  onClick={handleSubmit} className=" font-albulaBold text-xl h-12 pl-10 pr-10 rounded-md">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </>
}
export default ContactUs;