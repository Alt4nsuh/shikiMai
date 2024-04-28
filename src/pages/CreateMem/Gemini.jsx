import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
const API_KEY = "AIzaSyCcB3pv67Kqq0tOogl3nyY9lV1BKJ4NAo"; // Replace with your actual API key

const Gemini = () => {
  const [prompt, setPrompt] = useState(".");
  const [story, setStory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const genAI = new GoogleGenerativeAI(API_KEY);

  const generateStory = async () => {
    setIsLoading(true);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();
      setStory(text);
    } catch (error) {
      console.error("Error generating story:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    generateStory();
  }, []);

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateStory();
  };

  return (
    <div className="h-screen flex bg-gray flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto p-8">
          <div className="chat flex flex-col space-y-4">
            {/* User input */}
            <div className="user-bubble self-end bg-gray rounded-lg p-4 max-w-70%">
              <p>{prompt}</p>
            </div>

            {/* Generated story */}
            {isLoading ? (
              <div className="loading-bubble self-start bg-gray rounded-lg p-4 max-w-70%">
                <p>Loading...</p>
              </div>
            ) : (
              <div className="response-bubble self-start bg-gray rounded-lg p-4 max-w-70%">
                <p>{story}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Form for user input */}
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={handleInputChange}
          disabled={isLoading}
          placeholder="Type your prompt..."
          className="p-4 rounded-md border border-gray mr-4"
        />
        <button type="submit" disabled={isLoading} className="p-4 rounded-md bg-gray text-white cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed">Send</button>
        <Link to="/Menu" className="menu-link text-red-500">
          <span className="text-base font-normal">Буцах</span>
        </Link>
      </form>
    </div>
  );
};

export default Gemini;
