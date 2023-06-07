import Header from "../../../components/Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login-main-bg bg-white">
        <Header />
        <div className="flex justify-center items-center h-screen">
          <div className="grid-row flex flex-col gap-6 items-center mb-24">
            <div className="title text-3xl font-bold mb-3">Welcome back</div>
            <div>
              <form className="flex flex-col gap-6">
                <div className="relative">
                  <input className="email-input" type="text" required />
                  <label className="email-label">Email address</label>
                </div>
                <div>
                  <button
                    className="w-full bg-[#10A37F] text-white text-center py-3.5 rounded-md hover:bg-[#0d8d6d] transition duration-300"
                    type="submit"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
            <div className="text-sm opacity-80">
              Don&apos;t have an account?{" "}
              <Link to={"/signup"} className="ml-1 text-[#10A37F]">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
