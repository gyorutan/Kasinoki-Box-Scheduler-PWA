const API = import.meta.env.VITE_API_URL;

import { getUserToken } from "../../hooks/getUserToken";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { createdAt } from "../../functions/timeStamp";
import { createdTime } from "../../functions/SelectTime";
import { weekendDates } from "../../functions/IndividualSelectDate";
import Select from "../../components/Select";

const Individual = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isdisabled, setIsdisabled] = useState(false);

  useEffect(() => {
    const user = getUserToken();
    setCurrentUser(user._id);
  }, []);

  const handleReset = () => {
    setDate("");
    setTime("");
    setIsdisabled(false);
  };
  const handleReset2 = () => {
    setTime("");
    setIsdisabled(false);
  };

  const handleDate = (date) => {
    setDate(date);
  };
  const handleTime = (time) => {
    if (time.length === 1) {
      setTime(time);
    }
    if (time.length === 2) {
      setTime(time);
    }
    if (time.length === 3) {
      setTime(time);
    }
    if (time.length === 4) {
      setTime(time);
      setIsdisabled(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      currentUser,
      date,
      time,
      createdAt,
    };
    const response = await fetch(`${API}/individual`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    if (result.success) {
      toast.success("保存できました！", {
        duration: 2000,
      });
      navigate("/schedule");
    } else if (result.error) {
      toast.error("既に存在するスケジュールです！", {
        duration: 2000,
      });
      setTime("");
      setIsdisabled(false);
      return;
    }
  };

  return (
    <>
      <div className="wrap">
        <form onSubmit={handleSubmit}>
          <div className="mt-2 bg-[#8696FE] p-3 rounded-[3px]">
            <Select
              isClearable={true}
              required
              value={date}
              onChange={handleDate}
              placeholder="クリックして選択"
              label="日付を選択してください"
              options={weekendDates.map((date) => ({
                value: date,
                label: date,
              }))}
            />
          </div>
          <div className="mt-4 bg-[#8696FE] p-3 rounded-[3px]">
            <Select
              isClearable={true}
              disabled={isdisabled}
              isMulti={true}
              required
              value={time}
              onChange={handleTime}
              placeholder="クリックして選択"
              label="時間帯 (最大4つまで選択可能)"
              options={createdTime.map((time) => ({
                value: time,
                label: time,
              }))}
            />
          </div>
          <div className="flex gap-2 justify-end md:justify-start lg:justify-start">
            <div>
              <button
                onClick={() => {
                  handleReset();
                }}
                type="button"
                className="text-white bg-[#4253c7] hover:opacity-80 transition duration-300 rounded-md p-2 mt-3"
              >
                全体リセット
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  handleReset2();
                }}
                type="button"
                className="text-white bg-[#4253c7] hover:opacity-80 transition duration-300 rounded-md p-2 mt-3"
              >
                時間帯リセット
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="text-white bg-[#4253c7] hover:opacity-80 transition duration-300 rounded-md p-2 mt-3"
              >
                保存
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Individual;
