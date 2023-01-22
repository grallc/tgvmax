import DatePicker from 'react-datepicker'

interface Props {
  value: Date;
  setDate: (value: Date) => void;
}

const DateSelect: React.FC<Props> = ({ value, setDate }) => {
  const isWeekday = (date: Date) => {
    const maxDate = new Date()
    maxDate.setDate(maxDate.getDate() + 30)
    return date > new Date() && date < maxDate
  };
  return (
    <div>
      <DatePicker
        selected={value}
        dateFormat="MMMM dd, yyyy"
        startDate={new Date()}
        filterDate={isWeekday}
        onChange={(date) => {
          if (date) {
            setDate(date)
          }
        }} />
    </div>
  );
}

export default DateSelect