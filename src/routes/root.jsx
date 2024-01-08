import { EyeOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext, TitleContext } from "../main";
import RootRightCmp from "./rootRight";
import WithOutContext from "../components/withOutContext";
import { UserButton } from "@clerk/clerk-react";
import "../index.scss"

export default function Root() {
  const [initialConntext, setInitContext] = useState({
    theme: false,
    title: "Hello homepage",
  });

  return (
    <>
      <ThemeContext.Provider value={initialConntext}>
        <div style={{display: "flex", height: "100%"}}>
          <div id="sidebar" >
            <h1>Demo React</h1>
            <div>
              <TitleContext.Provider value={"..."}>
                <form id="search-form" role="search">
                  <input
                    id="q"
                    aria-label="Search contacts"
                    placeholder="Search"
                    type="search"
                    name="q"
                  />
                  <div id="search-spinner" aria-hidden hidden={true} />
                  <div className="sr-only" aria-live="polite"></div>
                </form>
                <WithOutContext />
              </TitleContext.Provider>
              <form method="post">
                <button type="submit">New</button>
              </form>
              <button
                onClick={() =>
                  setInitContext({
                    ...initialConntext,
                    theme: !initialConntext.theme,
                  })
                }
              >
                <EyeOutlined />
              </button>

              <UserButton />
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Layout</Link>
                </li>
                <li>
                  <Link to="userList">User List</Link>
                </li>
                <li>
                  <Link to="testTaiwind">Tailwindcss</Link>
                </li>
                <li>
                  <Link to="customHook">customHook</Link>
                </li>
              </ul>
            </nav>
          </div>
          <RootRightCmp />
        </div>
      </ThemeContext.Provider>
    </>
  );
}
