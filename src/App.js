import { useState } from "react";
import "./App.css";
import TabsContainer from "./components/TabsContainer";
function App() {
  const [activeTab, setActiveTab] = useState("tab1");

  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  const handleTabClick = (tabId) => () => {
    openTab(tabId);
  };
  return (
    <>
      <div className="App">
        <div className="conatiner">
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
        </div>
      </div>
    </>
  );
}

export default App;
