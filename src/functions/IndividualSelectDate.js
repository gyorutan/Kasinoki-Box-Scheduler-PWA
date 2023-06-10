// 개인연습 주말 데이터
const startDate = new Date(); // 현재 날짜를 기준으로 설정
const endDate = new Date();
endDate.setMonth(endDate.getMonth() + 2); // 현재 날짜에서 2달 후로 설정

let options = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour12: false,
  timeZone: "Asia/Seoul",
};

const originalweekendDates = [];

while (startDate <= endDate) {
  if (startDate.getDay() === 0 || startDate.getDay() === 6) {
    // 일요일(0) 또는 토요일(6)인 경우 주말로 간주
    const timeStamp = startDate.toLocaleString("ko-KR", options);
    originalweekendDates.push(timeStamp); // 주말 날짜를 배열에 추가
  }

  startDate.setDate(startDate.getDate() + 1); // 다음 날짜로 이동
}
//공휴일 추가
originalweekendDates.push("2023. 07. 17.");

export const weekendDates = originalweekendDates;