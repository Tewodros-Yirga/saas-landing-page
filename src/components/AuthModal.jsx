import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaTimes } from "react-icons/fa";

export default function AuthModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Simulate login
      login(email, password);
    } else {
      // Simulate signup
      const userData = { email };
      localStorage.setItem("user", JSON.stringify(userData));
      login(email, password); // Automatically log the user in after signup
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 min-h-svh flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-96 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 dark:text-gray-300">
          <FaTimes />
        </button>
        <h2 className="text-2xl font-bold mb-6 dark:text-white">{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white"
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center dark:text-gray-300">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setIsLogin(!isLogin)} className="text-blue-600 dark:text-blue-400">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}