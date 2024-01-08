import React from "react";
import { FiArrowDownCircle } from "react-icons/fi";

function ScrollToBottom({ color }: any) {
  const goToBottom = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={goToBottom}
      className=' animate-bounce cursor-pointer bottom-0'>
      <FiArrowDownCircle size={30} color={color ? color : "white"} />
    </div>
  );
}

export default ScrollToBottom;
