import Lottie from "lottie-react";
import animationData from "../assets/animations/animation.json"; // Replace with your animation file

export default function AnimatedIllustration() {
  return (
    <div className="flex justify-center items-center">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        className="w-96 h-96"
      />
    </div>
  );
}