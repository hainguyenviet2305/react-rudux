import { useContext } from "react";
import { ThemeContext } from "../main";
import { Outlet } from "react-router-dom";

const RootRightCmp = () => {
  const storeContext = useContext(ThemeContext);
  return (
    <div id="detail" >
      <Outlet></Outlet>
    </div>
  );
};

export default RootRightCmp;
