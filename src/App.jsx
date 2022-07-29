/** @format */

import { useState } from "react";
import Step from "./components/Step";
import { sampleData, sampleData2 } from "./MockData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="bg-red-500"> hello world</h1>
      <div className="flex items-stretch">
        <Step SEQ_NUMBER={1}></Step>
        <Step SEQ_NUMBER="2"></Step>
        <Step SEQ_NUMBER="3" isCurrent={true}></Step>
        <Step SEQ_NUMBER="4" badgeName="intermediate"></Step>
        <Step SEQ_NUMBER="5"></Step>
        <Step SEQ_NUMBER={6} isCurrent={true} badgeName="expert"></Step>
      </div>

      <div className="flex items-stretch">
        {sampleData.map((s) => (
          <Step
            isCurrent={s.isCurrent}
            badgeName={s.badgeName}
            SEQ_NUMBER={s.SEQ_NUMBER}
            data={s}
          ></Step>
        ))}
      </div>
      <div className="flex items-stretch">
        {sampleData2.map((s) => (
          <Step
            isCurrent={s.isCurrent}
            badgeName={s.badgeName}
            SEQ_NUMBER={s.SEQ_NUMBER}
            data={s}
          ></Step>
        ))}
      </div>
    </div>
  );
}

export default App;
