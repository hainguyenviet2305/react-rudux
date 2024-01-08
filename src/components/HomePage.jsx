import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../main";
import { useDispatch, useSelector } from "react-redux";
import { changeState, changeTextWithIp } from "../reducer/tittleReducer";
import Button from 'antd/es/button';
import {changeNumber} from "../reducer/changeNumber";
import { fetchUserById } from "../reducer/callApiReducer";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);
export const dataChart = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const HomePage = () => {
  const dispatch = useDispatch();
  
  const themeContext = useContext(ThemeContext)
  const initStateNumber = useSelector((state) => state.numberReducer)
  const initStateReduxTitle = useSelector((state) => state.titleReducerSimple)  
  const textRef = useRef("");
  
  const updateStatusTxt = () => {
    const value = textRef.current.value;
    dispatch(changeTextWithIp(value))
  }

  const changeText = () => {
    dispatch(changeState());
    dispatch(changeNumber());
  }

  const [data, setData] = useState(true);

  const dataRedux = useSelector((state) => state.RecallApiLoading);

  useEffect(() => {
    if (data) {
      dispatch(fetchUserById());
    }
  }, [data]);

  
    return <>
    =========== context
    <div>{themeContext.theme ? 'homepage' : themeContext.title}</div>
    =========== redux
    <div>tittle: {initStateReduxTitle.title}</div>
    <div>number: {initStateNumber.number}</div>

    <input type="text" ref={textRef} />
    <Button onClick={() => updateStatusTxt()}>change title</Button>
    ==========
      {console.log(dataRedux.responApi, 'table here')}

      <Pie data={dataChart} />;
    </>;
  };
  
  export default HomePage;
  