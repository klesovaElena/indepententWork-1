  
  export const getHolidayPrizes = (name, birthday, salary) => {
    let date = new Date();
    let date2 = new Date(birthday);
  
    if (
      date.getDate() == date2.getDate() &&
      date.getMonth() == date2.getMonth()
    ) {
      let holidayPrize = ( +salary * 0, 1 ) + Math.ceil(date2.getDate() * date2.getMonth());
      return String(holidayPrize);
    }
  };

  