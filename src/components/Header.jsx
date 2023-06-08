import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="fixed w-full flex justify-center py-7">
        <div className="font-bold text-center text-3xl">
          <Link to={"/"}>ChatPod</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
