import { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle chatbot visibility
  const [messages, setMessages] = useState([]); // Store chat messages
  const [inputText, setInputText] = useState(""); // User input

  // Handle user input
  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    // Add user message to chat
    setMessages((prev) => [...prev, { role: "user", content: inputText }]);
    setInputText("");

    try {
      // Call OpenAI API using Fetch
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo", // Use GPT-4
          messages: [...messages, { role: "user", content: inputText }],
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log("OpenAI response:", data);

      // Add AI response to chat
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.choices[0].message.content },
      ]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
      >
        {isOpen ? "✕" : "💬"}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="w-80 md:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-4">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold dark:text-white">Chat with TaskFlow</h3>
          </div>

          {/* Chat Messages */}
          <div className="h-64 overflow-y-auto p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 ${msg.role === "user" ? "text-right" : "text-left"}`}
              >
                <div
                  className={`inline-block p-2 rounded-lg ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 dark:text-white"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;