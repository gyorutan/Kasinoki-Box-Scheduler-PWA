const API = import.meta.env.VITE_API_URL;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");

  const inputReset = () => {
    setLoginId("");
    setLoginPw("");
  };

  const handleContinue = async (e) => {
    e.preventDefault();
    try {
      const formData = { loginId, loginPw };
      const response = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        toast.success("ログイン成功!", {
          duration: 2000,
        });
        localStorage.setItem("USER", result.token);
        navigate("/schedule");
      } else {
        toast.error("ログアウト情報が一致しません!", {
          duration: 2000,
        });
        inputReset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login-main-bg bg-white">
        <div className="flex justify-center items-center h-screen">
          <div className="fixed top-0 w-full flex justify-center py-4">
            <div className="font-bold text-center text-3xl">
              <Link to={"/"}>Box Scheduler</Link>
            </div>
          </div>
          <div className="grid-row flex flex-col gap-6 items-center">
            <div className="title text-3xl font-semibold mb-3 text-black text-opacity-80">
              Welcome back
            </div>
            <div>
              <form className="flex flex-col gap-6" onSubmit={handleContinue}>
                <div className="relative">
                  <input
                    value={loginId}
                    onChange={(e) => {
                      setLoginId(e.target.value);
                    }}
                    className="email-input"
                    type="text"
                    required
                  />
                  <label className="email-label">Login ID</label>
                </div>
                <div className="relative">
                  <input
                    value={loginPw}
                    onChange={(e) => {
                      setLoginPw(e.target.value);
                    }}
                    className="email-input"
                    type="password"
                    required
                  />
                  <label className="email-label">Password</label>
                  <AiOutlineEye
                    size={22}
                    onClick={() => {}}
                    className="absolute text-[#626262] left-[280px] top-[14px] cursor-pointer"
                  />
                </div>
                <div>
                  <button
                    className="w-full bg-[#8696FE] text-white text-center py-3.5 rounded-[3px] hover:bg-[#7988ec] transition duration-300"
                    type="submit"
                  >
                    ログイン
                  </button>
                </div>
              </form>
            </div>
            <div className="text-sm opacity-80">
              アカウントを持ってないですか？
              <Link to={"/signup"} className="ml-1 text-[#8696FE]">
                新規登録
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
