import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getUserToken } from "../hooks/getUserToken.js";

const Navbar = ({ children }) => {
  const location = useLocation();
  const [PageTitle, setPageTitle] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const user = getUserToken();
    setCurrentUser(user.username);
    if (location.pathname === "/schedule") {
      setPageTitle("スケジュール");
    } else if (location.pathname === "/individual") {
      setPageTitle("個人練習予約");
    } else if (location.pathname === "/band") {
      setPageTitle("バンド練習予約");
    } else if (location.pathname === "/user") {
      setPageTitle("ユーザー");
    }
  }, [location]);

  return (
    <>
      <div className="flex fixed top-0 left-0 w-full h-[50px] bg-[#8696FE] text-white justify-center items-center">
        <div className="items-center font-semibold text-xl flex justify-center">
          {location.pathname.includes("user") ? `${currentUser}のプロフィール` : PageTitle}
        </div>
      </div>
      <div className="py-7">{children}</div>
    </>
  );
};

export default Navbar;
