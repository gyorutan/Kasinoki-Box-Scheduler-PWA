import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="auth-main-bg bg-[#363953]">
        <div className="flex justify-center items-center h-screen">
          <div className="grid-row-4 flex flex-col gap-4 items-center">
            <div className="text-4xl font-bold mb-3">ChatPod</div>
            <div>Welcome to ChatPod</div>
            <div>Log in with your ChatPod account to continue</div>
            <div className="flex gap-3">
              <div className="bg-[#8696FE] py-2 px-4 rounded-[3px] hover:opacity-80 transition duration-200">
                <Link to={"/login"}>Log in</Link>
              </div>
              <div className="bg-[#8696FE] py-2 px-4 rounded-[3px] hover:opacity-80 transition duration-200">
                <Link to={"/signup"}>Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
