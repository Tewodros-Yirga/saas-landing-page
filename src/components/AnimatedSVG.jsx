export default function AnimatedSVG() {
    return (
      <div className="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-64 h-64 animate-spin-slow"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#3b82f6"
            strokeWidth="5"
            fill="none"
            strokeDasharray="283"
            strokeDashoffset="283"
            className="animate-draw-circle"
          />
        </svg>
      </div>
    );
  }