import React, { useEffect, useState } from "react";
import "./data.css";

const Data = () => {
  const [data, setData] = useState([]);
  const [sumDigits, setSumDigits] = useState(null);

  const getData = () => {
    try {
      fetch("/db/data.json")
        .then((res) => res.json())
        .then((data) => setData(data[0].address.values));

      // Work with the response...
    } catch (err) {
      if (err.response) {
        console.log("This is my error", err.response.status);
      } else if (err.request) {
        console.log("This is my error", err.request);
      } else {
        console.log("Error", err.message);
      }
    }
  };

  useEffect(() => {
    getData();
    setSumDigits(sumOfDigits());
    console.log(sumDigits);
  }, [sumDigits]);

  //1-Compute the sum of all numbers in the "address" > "values" key.
  const sumOfAllNumbers = data.reduce((previousValue, currenValue) => {
    return previousValue + currenValue;
  }, 0);

  //2-Compute the digit sum of the result in step 1.
  const sumOfDigits = () => {
    let num = sumOfAllNumbers;
    let sum = 0;
    while (num > 0) {
      let rem = num % 10;
      sum = sum + rem;
      num = parseInt(num / 10);
    }

    //3.return result
    return sum;
  };

  //console.log(JSON.stringify({ result: sumOfDigits() }));

  return (
    <div className="data-container">
      <h1 title="challenge">Challenge</h1>
      <h3 data-testid="first-header">
        Sum of all numbers in the address values key: {sumOfAllNumbers}
      </h3>
      <h3>
        digit sum of the result: {JSON.stringify({ result: sumOfDigits() })}{" "}
      </h3>
    </div>
  );
};

export default Data;
