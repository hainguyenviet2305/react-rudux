import { useContext } from "react";
import { ThemeContext } from "../main";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../reducer/tittleReducer";
import Button from 'antd/es/button';

const HomePage = () => {
  const dispatch = useDispatch();
  
  const themeContext = useContext(ThemeContext)
  const initStateRedux = useSelector((state) => state.counterSlice)
  const initStateReduxTitle = useSelector((state) => state.titleReducer)  

  const changeText = () => {
    dispatch(changeState());
    console.log("changeText");
  }

  
    return <>
    =========== context
    <div>{themeContext.theme ? 'homepage' : themeContext.title}</div>
    =========== redux
    <h3>count: {initStateRedux.value}</h3>
    <div>tittle: {initStateReduxTitle.title}</div>
    <Button onClick={() => changeText()}>change title</Button>
    </>;
  };
  
  export default HomePage;
  