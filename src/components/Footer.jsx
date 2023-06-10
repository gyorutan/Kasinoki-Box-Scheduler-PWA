import { AiFillSchedule } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FaUserSecret } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getUserToken } from "../hooks/getUserToken";
import { useEffect, useState } from "react";

const Footer = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const user = getUserToken();
    setCurrentUser(user);
  }, []);

  return (
    <>
      <div className="bg-[#8696FE] items-center fixed flex bottom-0 h-[52px] w-full text-white z-50">
        <div className="w-full h-[52px] items-center flex justify-center">
          <Link
            to={"/schedule"}
            className="w-full h-[52px] items-center flex justify-center hover:bg-[#7988ec]"
          >
            <div className="flex flex-col">
              <div className="flex justify-center">
                <AiFillSchedule size={28} className="transition duration-200" />
              </div>
              <span className="text-xs text-center">スケジュール</span>
            </div>
          </Link>
        </div>
        <div className="w-full h-[52px] items-center flex justify-center">
          <Link
            to={"/individual"}
            className="w-full h-[52px] items-center flex justify-center hover:bg-[#7988ec]"
          >
            <div className="flex flex-col">
              <div className="flex justify-center">
                <BsFillPersonFill
                  size={28}
                  className="transition duration-200"
                />
              </div>
              <span className="text-xs text-center">個人練習</span>
            </div>
          </Link>
        </div>
        <div className="w-full h-[52px] items-center flex justify-center">
          <Link
            to={"/band"}
            className="w-full h-[52px] items-center flex justify-center hover:bg-[#7988ec]"
          >
            <div className="flex flex-col">
              <div className="flex justify-center">
                <FaUsers size={28} className="transition duration-200" />
              </div>
              <span className="text-xs text-center">バンド練習</span>
            </div>
          </Link>
        </div>
        <div className="w-full h-[52px] items-center flex justify-center">
          <Link
            to={`/user/${currentUser._id}`}
            className="w-full h-[52px] items-center flex justify-center hover:bg-[#7988ec]"
          >
            <div className="flex flex-col">
              <div className="flex justify-center">
                <FaUserSecret size={28} className="transition duration-200" />
              </div>
              <span className="text-xs text-center">ユーザー</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
