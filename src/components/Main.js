import React, { useEffect } from "react";
import { Input, Button } from "antd";
import { useState } from "react";

const Main = () => {
  const [total, setTotal] = useState(0);
  const [counterOne, setcounterOne] = useState(0);
  const [counterTow, setcounterTow] = useState(0);
  const [counterThree, setcounterThree] = useState(0);

  //Group One
  const ResetAll = (_) => {
    setTotal(0);
    setcounterOne(0);
    setcounterTow(0);
    setcounterThree(0);
  };
  //Group Tow
  const IncressOne = (e) => {
    setcounterOne(counterOne + 1);
    // console.log(counterOne);
  };
  const DecressOne = (e) => {
    setcounterOne(counterOne - 1);
  };

  /////////////////////////////////////////////////////
  // Group Three
  let IncressTow = (e) => {
    setcounterTow(counterTow + 1);
    // console.log(counterTow);
  };
  const DecressTow = (e) => {
    setcounterTow(counterTow - 1);
  };

  /////////////////////////////////////////////////////
  // Group Four
  let IncressThree = (e) => {
    setcounterThree(counterThree + 1);
    // console.log(counterTow);
  };
  const DecressThree = (e) => {
    setcounterThree(counterThree - 1);
  };

  useEffect(() => {}, [counterOne, counterTow]);

  return (
    <>
      {/* Groub one the main cart  */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input
          size="large"
          type="text"
          style={{ width: "20%" }}
          value={total}
        />

        <Button
          type="primary"
          size="large"
          style={{ marginLeft: "20px" }}
          onClick={ResetAll}
        >
          &nbsp;Reset&nbsp;
        </Button>
      </div>
      <br></br>

      {/* Groub tow  */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input
          size="large"
          type="text"
          style={{ width: "20%" }}
          value={counterOne}
        />
        <Button
          type="primary"
          size="large"
          style={{ marginLeft: "20px" }}
          onClick={IncressOne}
          disabled={counterOne >= 10 ? true : false}
        >
          +&nbsp;
        </Button>
        <Button
          type="primary"
          size="large"
          style={{ marginLeft: "20px" }}
          onClick={DecressOne}
          disabled={counterOne == 0 ? true : false}
        >
          &nbsp;-&nbsp;
        </Button>
      </div>
      <br></br>

      {/* Groub Three */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input
          size="large"
          type="text"
          style={{ width: "20%" }}
          value={counterTow}
        />

        <Button
          type="primary"
          size="large"
          style={{ marginLeft: "20px" }}
          disabled={counterTow >= 10 ? true : false}
          onClick={IncressTow}
        >
          +&nbsp;
        </Button>
        <Button
          type="primary"
          size="large"
          style={{ marginLeft: "20px" }}
          onClick={DecressTow}
          disabled={counterTow == 0 ? true : false}
        >
          &nbsp;-&nbsp;
        </Button>
      </div>
      <br></br>
      {/* Group Four */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input
          size="large"
          type="text"
          style={{ width: "20%" }}
          value={counterThree}
        />

        <Button
          type="primary"
          size="large"
          style={{ marginLeft: "20px" }}
          disabled={counterThree >= 10 ? true : false}
          onClick={IncressThree}
        >
          +&nbsp;
        </Button>
        <Button
          type="primary"
          size="large"
          style={{ marginLeft: "20px" }}
          onClick={DecressThree}
          disabled={counterThree == 0 ? true : false}
        >
          &nbsp;-&nbsp;
        </Button>
      </div>
    </>
  );
};

export default Main;
