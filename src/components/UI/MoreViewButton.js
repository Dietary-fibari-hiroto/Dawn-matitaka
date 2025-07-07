import { Link } from "react-router-dom";

const MoreViewButton = (items) => {
  if (items.color === "black") {
    return (
      <Link
        to={items.to}
        className={`arrow useAO flex flex-col justify-start items-start space-x-[10px]`}
      >
        <p className="string-md A-OTF-Ryumin-Pr6N-L-KL text-black">View more</p>
        <div className=" relative flex justify-center items-center ">
          <div className="arrow-rod-b "></div>
          <div className="arrow-right-b"></div>
        </div>
      </Link>
    );
  } else {
    return (
      <Link
        to={items.to}
        className={`arrow useAO flex flex-col justify-start items-start space-x-[10px]`}
      >
        <p className="string-md A-OTF-Ryumin-Pr6N-L-KL">View more</p>
        <div className=" relative flex justify-center items-center ">
          <div className="arrow-rod "></div>
          <div className="arrow-right border-[#fff]"></div>
        </div>
      </Link>
    );
  }
};

export default MoreViewButton;
