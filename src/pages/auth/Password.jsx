import { Link, useLocation, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { AiOutlineEye } from "react-icons/ai";

const Password = () => {
  const location = useLocation();
  console.log(location.pathname);
  const { email } = useParams();
  console.log(email);

  const handleSubmit = async () => {
    if (location.pathname.startsWith("/login")) {
      alert("로그인");
      // 로그인
      // try {
      // } catch (error) {
      // }
    }
    if (location.pathname.startsWith("/signup")) {
      alert("회원가입");
      // 회원가입
      // try {
      // } catch (error) {
      // }
    }
  };

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
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <input
                      value={email}
                      className="user-email-input"
                      type="text"
                      readOnly
                    />
                    <label className="edit-email-label">
                      <Link to={`/login/${email}`}>Edit</Link>
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
                <div className="text-sm opacity-80 text-[#7988ec] text-center">
                  <Link to={"#"}>Forgot password?</Link>
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
              Don&apos;t have an account?
              <Link to={"/signup"} className="ml-1 text-[#7988ec]">
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
