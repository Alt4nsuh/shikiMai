import React, { useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Footer from "../../components/Footer"

const Safety = () => {
  const [contacts, setContacts] = useState([]);
  const [helpMessage, setHelpMessage] = useState('');
  const [date, setDate] = useState(new Date());

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
    console.log('Emergency alert sent!');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl bg-white-500 text-white font-bold mb-4">To-do list</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-2">Works</h2>
        <div className="flex flex-col md:flex-row mb-4 md:items-center">
          <button
            className="flex items-center bg-blue-500 text-white py-2 px-4 rounded mb-2 md:mb-0 md:mr-4"
            onClick={addContact}
          >
            <HiPlus className="mr-2" /> Add work
          </button>
          <button
            className="flex items-center bg-blue-500 text-white py-2 px-4 rounded"
            onClick={addContact}
          >
            <HiPlus className="mr-2" /> Add work
          </button>
        </div>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index} className="mb-1">
              {contact}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-2">To-do list</h2>
        <textarea
          className="w-full border rounded p-2"
          value={helpMessage}
          onChange={handleHelpMessageChange}
          rows={4}
        ></textarea>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold w-full text-white mb-2">Calendar</h2>
        <div className="calendar-container">
          <Calendar value={date} onChange={setDate} />
        </div>
      </div>

      <button
        className="bg-red-500 text-white py-2 px-4 w-full h-full rounded mb-4"
        onClick={sendEmergencyAlert}
      >
        Set alarm
      </button>
      <Footer/>
    </div>
  );
};

export default Safety;