import React from "react";
import Translate from "./components/Translate";
//import Radiobutton from "./components/Radiobutton";

// const radiooption = [
//   {
//     label: "OneMT : IIIT Hyd",
//     value:"onemt"
//   },
//   {
//     label: "EN-IL MT : IITB",
//     value: "enilmt"
//   },
//   {
//     label: "LokSabha MT : CDAC P",
//     value: "cdacmt"
//   }
// ]
const App = () => {
  return (
    <div>
      {/* <Radiobutton option={radiooption}/> */}
      <Translate />
    </div>
  );
};
export default App;
