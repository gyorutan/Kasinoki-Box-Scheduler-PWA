const API = import.meta.env.VITE_API_URL;

import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useEffect, useState } from "react";

const Signup = () => {
  const { param } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleContinue = async (e) => {
    e.preventDefault();

    console.log(email);
    const response = await fetch(`${API}/verify/email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    console.log(data);
    console.log(data.success);

    if (data.success) {
      navigate(`/signup/password/${email}`);
    }
  };

  useEffect(() => {
    if (param) {
      setEmail(param);
    }
  }, [param]);

  return (
    <>
      <div className="login-main-bg bg-white">
        <Header />
        <div className="flex justify-center items-center h-screen">
          <div className="grid-row flex flex-col gap-6 items-center">
            <div className="title text-3xl font-semibold mb-3 text-black text-opacity-80">
              Create your account
            </div>
            <div>
              <form className="flex flex-col gap-6" onSubmit={handleContinue}>
                <div className="relative">
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="email-input"
                    type="text"
                    required
                  />
                  <label className="email-label">Email address</label>
                </div>
                <div>
                  <button
                    className="w-full bg-[#8696FE] text-white text-center py-3.5 rounded-[3px] hover:bg-[#7988ec] transition duration-300"
                    type="submit"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
            <div className="text-sm opacity-80">
              Already have an account?
              <Link to={"/login"} className="ml-1 text-[#8696FE]">
                Log in
              </Link>
            </div>
            <div className="lines">
              <span className="text-sm flex justify-center opacity-60">OR</span>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="cursor-pointer items-center border border-[#c2c8d0] p-3 rounded-[3px] flex hover:bg-gray-200 trasition duration-200">
                <img src="../google.png" alt="" className="w-5 h-5 mx-1" />
                <span className="px-3">Continue with Google</span>
              </div>
              <div className="cursor-pointer items-center border border-[#c2c8d0] p-3 rounded-[3px] flex hover:bg-gray-200 trasition duration-200">
                <img src="../github.png" alt="" className="w-5 h-5 mx-1" />
                <span className="px-3">Continue with GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
