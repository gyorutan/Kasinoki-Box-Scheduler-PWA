import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { AiOutlineEye } from "react-icons/ai";

const Password = () => {
  return (
    <>
      <div className="login-main-bg bg-white">
        <Header />
        <div className="flex justify-center items-center h-screen">
          <div className="grid-row flex flex-col gap-6 items-center">
            <div className="title text-3xl font-semibold mb-3">
              Enter your password
            </div>
            <div>
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <input className="user-email-input" type="text" readOnly />
                    <label className="edit-email-label">
                      <Link href={"#"}>Edit</Link>
                    </label>
                  </div>
                  <div className="relative">
                    <input className="email-input" type="text" required />
                    <label className="email-label">Password</label>
                    <AiOutlineEye
                      size={22}
                      onClick={() => {}}
                      className="absolute text-[#626262] left-[280px] top-[14px] cursor-pointer"
                    />
                  </div>
                </div>
                <div className="text-sm opacity-80 text-[#10A37F] text-center">
                  <Link to={"#"}>Forgot password?</Link>
                </div>
                <div>
                  <button
                    className="w-full bg-[#10A37F] text-white text-center py-3.5 rounded-[3px] hover:bg-[#0d8d6d] transition duration-300"
                    type="submit"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
            <div className="text-sm opacity-80">
              Don&apos;t have an account?
              <Link to={"/user/signup"} className="ml-1 text-[#10A37F]">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
