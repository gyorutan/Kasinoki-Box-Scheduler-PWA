// 그룹 연습 날짜 데이터
const baseDate = new Date("2023-06-25"); // 특정 날짜를 지정하세요
const twoWeeksAgo = new Date(baseDate.getTime() - 14 * 24 * 60 * 60 * 1000);

let options = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour12: false,
  timeZone: "Asia/Seoul",
};

const dates = [];
let date = twoWeeksAgo;

while (date <= baseDate) {
  const timeStamp = date.toLocaleString("ko-KR", options);
  dates.push(timeStamp);
  date.setDate(date.getDate() + 1);
}

export const createdDate = dates;