import { useNavigate } from "react-router-dom";
const Auth = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="auth-main-bg bg-[#343541]">
        <div className="flex justify-center items-center h-screen">
          <div className="grid-row-4 flex flex-col gap-4 items-center">
            <div className="text-2xl font-bold mb-3">Open AI</div>
            <div>Welcom to ChatGPT</div>
            <div>Log in with your OpenAI account to continue</div>
            <div className="flex gap-3">
              <div className="bg-[#10A37F] py-2 px-4 rounded-md hover:opacity-70">
                <button onClick={() => navigate("/user/login")}>Log in</button>
              </div>
              <div className="bg-[#10A37F] py-2 px-4 rounded-md hover:opacity-70">
                <button onClick={() => navigate("/user/signup")}>Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
