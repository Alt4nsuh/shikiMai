import React, { useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import {Link} from 'react-router-dom';

const Safety = () => {
  const [contacts, setContacts] = useState([]);
  const [helpMessage, setHelpMessage] = useState('');

  const addContact = () => {
    const email = prompt('Enter the email address of the new contact:');
    if (email) {
      setContacts([...contacts, email]);
    }
  };

  const handleHelpMessageChange = (event) => {
    setHelpMessage(event.target.value);
  };

  const sendEmergencyAlert = () => {
    console.log("Emergency alert sent!");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl bg-white-500 text-white font-bold mb-4">Safety Page</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-2">Emergency Contacts</h2>
        <div className="flex flex-col md:flex-row mb-4 md:items-center">
          <button 
            className="flex items-center bg-blue-500 text-white py-2 px-4 rounded mb-2 md:mb-0 md:mr-4"
            onClick={addContact}
          >
            <HiPlus className="mr-2" /> Add Contact
          </button>
          <button 
            className="flex items-center bg-blue-500 text-white py-2 px-4 rounded"
            onClick={addContact}
          >
            <HiPlus className="mr-2" /> Add Contact
          </button>
        </div>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index} className="mb-1">{contact}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-2">Help Message</h2>
        <textarea
          className="w-full border rounded p-2"
          value={helpMessage}
          onChange={handleHelpMessageChange}
          rows={4}
        ></textarea>
      </div>

      <button 
        className="bg-red-500 text-white py-2 px-4 w-full h-full rounded"
        onClick={sendEmergencyAlert}
      >
        Send Emergency Alert
      </button>
      <div className="flex flex-col h-screen">
      <div className="flex justify-between bg-gray-800 text-white px-4 py-2">
        <Link to="/safety" className="text-xl font-bold">
          Safety
        </Link>
        <Link to="/mapPlace" className="text-xl font-bold">
          Places
        </Link>
        <Link to="/SafeZone" className="text-xl font-bold">
          Safety-zone
        </Link>
        <Link to="/menu" className="text-xl font-bold">
          Menu
        </Link>
      </div>
    </div>
    </div>
    
  );
};

export default Safety;
