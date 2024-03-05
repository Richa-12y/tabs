import { useEffect, useRef, useState } from "react";
import "./App.css";
import TabsContainer from "./components/TabsContainer";
function App() {
  const [activeTab, setActiveTab] = useState("tab1");
  const parentRef = useRef(null);
  const [menus, setMenus] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [selectedMenu, setSelectedMenu] = useState("");

  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  const handleTabClick = (tabId) => () => {
    openTab(tabId);
  };

  const data = [
    { name: "Richa", role: "Software Developer" },
    { name: "Shanu", role: "Software Developer" },
    { name: "Bhanu", role: "Software Developer" },
  ];

  const menuItems = [
    { icon: "✏", text: "Edit" },
    { icon: "📃", text: "Duplicate" },
    { icon: "✂", text: "Delete" },
  ];

  const handleClick = (name, selectedPerson) => {
    name.stopPropagation();
    if (name.clientX && name.clientY) {
      setModalPosition({ x: name?.clientX, y: name.clientY + window.scrollY });
    }
    setSelectedMenu(selectedPerson.name);
    setMenus(true);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest(".modal")) {
      setMenus(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {/* <div className="App"> */}
      {/* <div className="conatiner">
          <TabsContainer
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            tab1ClassName="custom-tab-1"
            tab2ClassName="custom-tab-2"
            tab1IconColor="blue"
            tab2IconColor="blue"
          />

          <div
            className={
              activeTab === "tab1" ? "tab_one_container" : "tab_two_container"
            }
          >
            <h2>Content for {activeTab === "tab1" ? "Tab 1" : "Tab 2"}</h2>
            <p>
              This is the content for {activeTab === "tab1" ? "Tab 1" : "Tab 2"}
              .
            </p>
          </div>
        </div> */}

      <div className="App">
        <div className="container-main">
          {data.map((person, index) => (
            <div className="table-container" key={index}>
              <div>{person.name}</div>
              <div>{person.role}</div>
              <div className="button-container">
                <div onClick={(e) => handleClick(e, person)}>...</div>
                {menus && selectedMenu === person.name && (
                  <div
                    ref={parentRef}
                    className="modalcontainer"
                    style={{
                      position: "absolute",
                      left: "0px",
                      top: "41px",
                    }}
                  >
                    {menuItems.map((item, index) => (
                      <div key={index} className="modalDetails">
                        <span role="img" aria-label={item.text}>
                          {item.icon}
                        </span>
                        <span className="itemText">{item.text}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
