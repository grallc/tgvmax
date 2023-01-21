import { useState } from 'react'
import Calendar from "react-select-date";

function addZero (num: number) {
  return num > 9 ? num : "0" + num;
}
const currentDate =
  new Date().getFullYear() +
  "-" +
  (new Date().getMonth() + 1) +
  "-" +
  new Date().getDate();


const DateSelect = () => {
  const [showcld_single, setShowcld_single] = useState(false);
  const [singleDate, setSingleDate] = useState(new Date());

  return (
    <div className="date-input">
      <div
        className="dropdown"
        onClick={() => setShowcld_single(!showcld_single)}
      >
        <input
          readOnly
          value={
            addZero(singleDate?.getDate()) +
            "-" +
            addZero(singleDate?.getMonth() + 1) +
            "-" +
            singleDate?.getFullYear()
          }
          className="cldInput"
        />
      </div>
      {
        showcld_single && (
          <div className={`${!showcld_single && "d-none"} cldAbsolute`} style={{ position: 'absolute' }}>
            <Calendar
              defaultValue={{ date: currentDate }}
              showDateInputField={false}
              slotInfo={false}
              onSelect={(date) => setSingleDate(date)}
            />
          </div>
        )
      }
    </div>
  );
}

export default DateSelect