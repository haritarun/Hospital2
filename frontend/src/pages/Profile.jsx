
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from '../HomePage/Header'


const Profile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [details, setDetails] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const email = localStorage.getItem('email');
        if (!email) {
          showErrorPopup("No user email found. Please log in.");
          return;
        }

        const response = await axios.get(`http://localhost:3000/details?email=${email}`);
        if (response.status === 200) {
          const user = response.data;
          setDetails(user);
          setFirstName(user.firstName);
          setLastName(user.lastName);
          setEmail(user.email);
          setPhoneNumber(user.phoneNumber || '');
          setAddress(user.address || '');
          setImageUrl(user.imageUrl || '');
          localStorage.setItem('firstName', user.firstName)
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        showErrorPopup('Failed to load profile details.');
      }
    };

    fetchUserDetails();
  }, []);

  const showErrorPopup = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email) {
      showErrorPopup('Please fill in all required fields.');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zAZ]{2,}$/;
    if (!emailPattern.test(email)) {
      showErrorPopup('Please enter a valid email address.');
      return;
    }

    const phonePattern = /^\+?[1-9]\d{1,14}$/;
    if (phoneNumber && !phonePattern.test(phoneNumber)) {
      showErrorPopup('Please enter a valid phone number.');
      return;
    }

    console.log('Profile updated:', { firstName, lastName, email, phoneNumber, address, imageFile });
    const fullName =firstName + ' ' + lastName ;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  const renderImage = () => {
    if (imageUrl) {
      return <img className="object-cover w-24 h-24 p-1 rounded-full ring-2 ring-green-300" src={imageUrl} alt="Profile Avatar" />;
    } else {
      return (
        <div className="flex items-center justify-center w-24 h-24 p-1 rounded-full ring-2 ring-green-300 bg-gray-400 text-white text-3xl font-bold">
          {firstName.charAt(0).toUpperCase()}
        </div>
      );
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen bg-green-50">
      
      <div className={`flex-1 flex flex-col ${isSidebarOpen ? "overflow-hidden" : ""}`}>
        
        <main className="flex-1 bg-green-100 p-4 md:p-6">
          <div className="text-green-900 flex justify-center items-start pt-6">
            <div className="w-full sm:w-9/12 lg:w-7/12 xl:w-6/12 max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <h2 className="text-xl font-semibold text-center text-green-900">Your Public Profile</h2>

                  <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
                    <div
                      onClick={() => document.getElementById('fileInput').click()}
                      className="cursor-pointer"
                    >
                      {renderImage()}
                    </div>
                    <div className="flex flex-col space-y-3 sm:ml-8">
                      <button
                        type="button"
                        className="py-2 px-5 text-xs font-medium text-green-100 focus:outline-none bg-green-500 rounded-lg border border-green-200 hover:bg-green-900 focus:z-10 focus:ring-4 focus:ring-green-200"
                      >
                        Change picture
                      </button>
                      <button
                        type="button"
                        className="py-2 px-5 text-xs font-medium text-green-900 focus:outline-none bg-white rounded-lg border border-green-200 hover:bg-green-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-green-200"
                      >
                        Delete picture
                      </button>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="w-full space-y-4 mt-6">
                    <div className="w-full flex space-x-4">
                      <div className="w-1/2">
                        <input
                          className="w-full px-6 py-3 rounded-lg font-medium bg-indigo-50 border border-gray-200 placeholder-gray-500 text-xs focus:outline-none focus:border-green-500 focus:bg-white mt-4"
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className="w-1/2">
                        <input
                          className="w-full px-6 py-3 rounded-lg bg-indigo-50 font-medium border border-gray-200 placeholder-gray-500 text-xs focus:outline-none focus:border-green-500 focus:bg-white mt-4"
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <input
                        className="w-full px-6 py-3 rounded-lg font-medium bg-indigo-50 border border-gray-200 placeholder-gray-500 text-xs focus:outline-none focus:border-green-500 focus:bg-white"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div>
                      <input
                        className="w-full px-6 py-3 rounded-lg font-medium bg-indigo-50 border border-gray-200 placeholder-gray-500 text-xs focus:outline-none focus:border-green-500 focus:bg-white"
                        type="tel"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>

                    <div>
                      <textarea
                        className="w-full px-6 py-3 rounded-lg font-medium border bg-indigo-50 border-gray-200 placeholder-gray-500 text-xs focus:outline-none focus:border-green-500 focus:bg-white"
                        placeholder="Your address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        rows="3"
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        Save
                      </button>
                    </div>
                  </form>

                  <input
                    id="fileInput"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    </>
  );
};

export default Profile;

