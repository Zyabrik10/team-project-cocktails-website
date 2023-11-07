import {
    createGlobalStyle,
    styled
} from "styled-components";


export const DataBtn = styled.div`
  padding: 6px 12px;
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    margin-top: 33px;
    margin-bottom: 33px;
    padding: 8px 12px;
    font-size: 16px;
  }
`;
export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    position: relative;

  }
  .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    padding: 14px 14px;
    background-color: #161F37;
    font-family: Inter;
    border-radius: 8px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__header {
    position: relative;
    max-width: 224px;
    background-color: #161F37;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 11px;
    margin-bottom:11px;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    font-family: Manrope;
    font-size: 16px;
    margin-top: 14px;
    margin-bottom: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 21.86px;
    text-align: center;
    color: rgba(243, 243, 243, 1);
  }
  .react-datepicker__day-name {
    margin: 0;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 19.12px;
    letter-spacing: -0.28px;
    text-align: center;
    color: rgba(243, 243, 243, 0.5);
  }
  .react-datepicker__navigation {
    margin-top: 24px;
    color: white;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 11px;
    flex-shrink: 0;
    margin: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: white;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
  }
  .react-datepicker__month {
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color:white;
    color:#161F37;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
  background-color:white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:white 50%;
    color:#161F37;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#161F37;
  }
  .react-datepicker__day--weekend {
    opacity: 100%;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 50%;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
`;

export const TitleWrapper = styled.button`
  background: transparent;
  border: none;
  width: 400px;
  padding: 0;
  @media screen and (max-width: 767.98px) {
   width: 335px;
  }
  @media screen and (max-width: 375px) {
   width: 85vw;
  }
`;

export const Select = styled.select`
color: #F3F3F3;
background: #161F37;
border: none;
font-family: Manrope;
font-size: 16px;
font-weight: 500;
letter-spacing: -0.32px;
`;

export const Button = styled.button`
  background: transparent;
  border: none;

    &:hover {
        stroke: white;
  }
`;

export const Svg = styled.svg`
 path {
    transition: stroke-opacity 0.3s;
  }
 &:hover {
    path {
      stroke-opacity: 1;
    }
  }
`

export const CalIcon = styled.svg`
 position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
`

