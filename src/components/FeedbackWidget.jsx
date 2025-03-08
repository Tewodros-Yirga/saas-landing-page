import { useState } from "react";

export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false); // Toggle feedback form visibility
  const [rating, setRating] = useState(0); // Store user rating
  const [feedback, setFeedback] = useState(""); // Store user feedback

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setIsOpen(false);
    setRating(0);
    setFeedback("");
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      {/* Floating Feedback Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-700 transition-all"
      >
        📝
      </button>

      {/* Feedback Form */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 md:p-6">
          <h3 className="text-xl font-bold mb-4 dark:text-white">We'd Love Your Feedback!</h3>
          <form onSubmit={handleSubmit}>
            {/* Rating */}
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2 dark:text-white">
                How would you rate your experience?
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={`text-2xl ${
                      star <= rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback Text */}
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2 dark:text-white">
                Your Feedback
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Tell us how we can improve..."
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                rows="4"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      )}
    </div>
  );
}