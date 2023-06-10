const API = import.meta.env.VITE_API_URL;

import { getUserToken } from "../../hooks/getUserToken";
import { useEffect, useState, useRef } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";

const Schedule = () => {
  const [individualSchedules, setIndividualSchedules] = useState([]);
  const [bandSchedules, setBandSchedules] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    getIndividualSchedules();
    getBandSchedules();
    const user = getUserToken();
    setCurrentUser(user._id);
  }, []);

  const getIndividualSchedules = async () => {
    const response = await fetch(`${API}/individual`);
    const result = await response.json();
    setIndividualSchedules(result);
  };

  const getBandSchedules = async () => {
    const response = await fetch(`${API}/band`);
    const result = await response.json();
    setBandSchedules(result);
  };

  const deleteSchedule = async (id) => {
    const response = await fetch(`${API}/delete/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    if (result.success) {
      getIndividualSchedules();
      getBandSchedules();
    }
  };

  return (
    <>
      <div className="wrap">
        <div>
          <div className="text-center text-xl lines text-black text-opacity-80">
            個人
          </div>
          {individualSchedules.map((data) => (
            <div
              className="bg-white my-2 rounded-md border-[1px] border-[#7988ec]"
              key={data._id}
            >
              <div className="flex justify-between text-lg text-white bg-[#7988ec] w-full py-1 px-2">
                {data.user.username}
                <div className="items-center flex">
                  {data.user._id === currentUser ? (
                    <button
                      onClick={() => {
                        deleteSchedule(data._id);
                      }}
                    >
                      <RiDeleteBin2Line className="text-white" size={20} />
                    </button>
                  ) : null}
                </div>
              </div>
              <div className="py-1 px-2">
                <div className="text">予約日：{data.date}</div>
                <div>{data.time[0]}</div>
                <div>{data.time[1]}</div>
                <div>{data.time[2]}</div>
                <div>{data.time[3]}</div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="text-center text-xl lines text-black text-opacity-80">
            バンド
          </div>
          {bandSchedules.map((data) => (
            <div
              className="bg-white my-2 rounded-md border-[1px] border-[#7988ec]"
              key={data._id}
            >
              <div className="flex justify-between text-lg text-white bg-[#7988ec] w-full py-1 px-2">
                {data.bandName}
                <div className="items-center flex">
                  {data.user._id === currentUser ? (
                    <button
                      onClick={() => {
                        deleteSchedule(data._id);
                      }}
                    >
                      <RiDeleteBin2Line className="text-white" size={20} />
                    </button>
                  ) : null}
                </div>
              </div>
              <div className="py-1 px-2">
                <div className="text">予約日：{data.date}</div>
                <div>{data.time[0]}</div>
                <div>{data.time[1]}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-24" ref={bottomRef} />
      </div>
    </>
  );
};

export default Schedule;
