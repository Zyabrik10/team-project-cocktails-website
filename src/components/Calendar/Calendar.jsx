import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { getYear, getMonth } from 'date-fns';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import {
  CalendarGlobalStyles,
  TitleWrapper,
  Select,
  Button,
} from './Calendar.styled';
import NavLeftSvg from './svg/NavLeftSvg';
import NavRightSvg from './svg/NavRightSvg';
import CalendarIcon from './svg/CalendarIcon';
import { FormInput } from 'components/Form';

export const Calendar = ({selectedDate, setSelectedDate}) => {

  const range = (start, end) => {
    return new Array(end - start).fill().map((d, i) => i + start);
  };

  const formattedDate = format(selectedDate, 'dd.MM.yyy');
  console.log(formattedDate)
  //я це залишила, щоб ти побачив що стейт міняється

  const years = range(1900, getYear(new Date()) + 1, 1);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref} type="button">
        <FormInput
          placeholder={'dd/mm/yyyy'}
        >
        <CalendarIcon/>
       </FormInput>
      </TitleWrapper>
    );
  });

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
        }}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
        formatWeekDay={day => day.substr(0, 2)}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              <NavLeftSvg />
            </Button>

            <Select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>

            <Select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>

            <Button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              <NavRightSvg />
            </Button>
          </div>
        )}
      />
      <CalendarGlobalStyles />
    </div>
  );
};
