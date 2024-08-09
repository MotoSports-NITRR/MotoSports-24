import "../globalStyles.css";
import { useState } from "react";
import { db } from "../../config/firebase.js";
import { getDocs, collection, addDoc } from "firebase/firestore";
import AlertScreen from "./alertScreen/alertPopUp.jsx";
import './contact.css';

function ContactUs() {
	const [newName, setName] = useState("");
	const [newPhone, setPhone] = useState("");
	const [newEmail, setEmail] = useState("");
	const [newMessage, setMessage] = useState("");
	const [showAlert, setShowAlert] = useState(false);
	const [alertType, setAlertType] = useState('error');
	const [alertMessage, setAlertMessage] = useState('');
  
	const handleCloseAlert = () => {
	  setShowAlert(false);
	};

	const contact_collection_ref = collection(db, "Contact_MotoSports_NITRR");

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

			setAlertMessage("Message sent successfully!");
			setShowAlert(true);
			setAlertType('success');

			setName("");
			setPhone("");
			setEmail("");
			setMessage("");
		} catch (e) {
			console.error(e);
			setAlertMessage("Message not sent! server side error");
			setShowAlert(true);
			setAlertType('error');
		}
	};

	return (
		<div className="contact-us min-w-fit flex flex-col justify-center  py-10">
    <form style={{ color: "var(--dustyWhite)" }} className="subDiv1 flex justify-evenly lg:flex-row flex-col items-center min-w-60% bg-white px-20 py-20 gap-10" onSubmit={handleSubmit} >
		<div className="flex flex-col">
        	<p className="text-center font-albulaHeavy sm:text-5xl text-3xl text-deepTawny mb-15">Contact us</p>
			<div className="subDiv2 flex flex-col lg:flex-row py-0 gap-10">
				<div className="flex flex-col justify-start">
					<div className="flex items-start flex-col my-4">
						<label htmlFor="Name" className="pb-2 text-gray-700">Name</label>
						<div className="relative">
							<input required id="Name" placeholder="Enter your name" type="text" className="px-3 border border-gray-300 h-12 w-11/12 md:w-96 rounded-md pl-10 pr-2 pb-1 text-deepTawny placeholder:text-sm placeholder:text-gray-400 flex-grow shadow-sm focus:shadow-md transition-shadow duration-300" style={{ backgroundColor: "White", minWidth: "300px", maxWidth: "400px" }} value={newName} onChange={(e) => setName(e.target.value)} />
							<span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"><i className="fas fa-user"></i></span>
						</div>
					</div>

					<div className="flex items-start flex-col my-4">
						<label htmlFor="Phone" className="pb-2 text-gray-700">Phone</label>
						<div className="relative">
							<input required id="Phone" placeholder="Enter your phone" type="tel" className="px-3 border border-gray-300 h-12 w-11/12 md:w-96 rounded-md pl-10 pr-2 pb-1 text-deepTawny placeholder:text-sm placeholder:text-gray-400 flex-grow shadow-sm focus:shadow-md transition-shadow duration-300" style={{ backgroundColor: "White", minWidth: "300px", maxWidth: "400px" }} value={newPhone} onChange={(e) => setPhone(e.target.value)} />
							<span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"><i className="fas fa-phone"></i></span>
						</div>
					</div>

					<div className="flex items-start flex-col my-4">
						<label htmlFor="Email" className="pb-2 text-gray-700">Email</label>
						<div className="relative">
							<input required id="Email" placeholder="Enter your email" type="email" className="px-3 border border-gray-300 h-12 w-11/12 md:w-96 rounded-md pl-10 pr-2 pb-1 text-deepTawny placeholder:text-sm placeholder:text-gray-400 flex-grow shadow-sm focus:shadow-md transition-shadow duration-300" style={{ backgroundColor: "White", minWidth: "300px", maxWidth: "400px" }} value={newEmail} onChange={(e) => setEmail(e.target.value)} />
							<span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"><i className="fas fa-envelope"></i></span>
						</div>
					</div>
				</div>
			

				<div className="flex flex-col justify-start">
					<div className="flex flex-col my-4">
						<label htmlFor="message" className="pb-2 text-gray-700">Message</label>
						<textarea id="message" placeholder="Message" className="px-3 border border-gray-300 w-11/12 md:w-96 rounded-md pl-2 pt-2 text-deepTawny h-40 resize-none placeholder:text-sm placeholder:text-gray-400  shadow-sm focus:shadow-md transition-shadow duration-300" style={{ backgroundColor: "White", minWidth: "300px", maxWidth: "400px" }} value={newMessage} onChange={(e) => setMessage(e.target.value)} />
					</div>
					
					<div className="flex justify-center">
						<button type="submit" className="py-3 px-5 text-lg font-bold bg-tawny hover:bg-orange-600 rounded-md text-white font-albula transition-all mt-10 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-tawny focus:ring-opacity-50">Submit</button>
					</div>
				</div>
			</div>
		</div>
        <AlertScreen message={alertMessage} onClose={handleCloseAlert} showAlert={showAlert} type={alertType}/>
    </form>
</div> 

	);
}

export default ContactUs;
