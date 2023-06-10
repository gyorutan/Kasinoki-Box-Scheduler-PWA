const API = import.meta.env.VITE_API_URL;

import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { getUserToken } from "../../hooks/getUserToken";
import { RiDeleteBin2Line } from "react-icons/ri";

const User = () => {
  const { id } = useParams();
  const bottomRef = useRef(null);
  const [individualSchedules, setIndividualSchedules] = useState([]);
  const [bandSchedules, setBandSchedules] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    getUserProfile();
    const user = getUserToken();
    setCurrentUser(user._id);
  }, []);

  const getUserProfile = async () => {
    const response = await fetch(`${API}/user/${id}`);
    const result = await response.json();
    setIndividualSchedules(result.individual);
    setBandSchedules(result.band);
  };

  const deleteSchedule = async (id) => {
    const response = await fetch(`${API}/delete/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    if (result.success) {
      getUserProfile();
    }
  };

  return (
    <>
      <div className="py-1 px-4">
        <div className="text-xl mb-1">自分のスケジュールリスト</div>
        <div>
          <div className="text-center text-xl lines text-black text-opacity-80">
            個人
          </div>
          {individualSchedules.map((data) => (
            <div
              className="bg-white my-2 rounded-md border-[1px] border-[#7988ec]"
              key={data._id}
            >
              <div className="flex justify-between text-xl text-white bg-[#7988ec] w-full py-1 px-2">
                <div className="text-lg">{data.date}</div>
                <div>
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
                <div className="text-lg">{data.bandName}</div>
                <div>
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
                <div className="text-lg">{data.date}</div>
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

export default User;
