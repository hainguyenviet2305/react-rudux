import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../main";
import { useDispatch, useSelector } from "react-redux";
import { changeState, changeTextWithIp } from "../reducer/tittleReducer";
import Button from 'antd/es/button';
import {changeNumber} from "../reducer/changeNumber";
import { fetchUserById } from "../reducer/callApiReducer";

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
    </>;
  };
  
  export default HomePage;
  