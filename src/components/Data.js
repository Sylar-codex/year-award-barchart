import React, { useEffect, useState } from "react";
import { getData } from "../utils/api";
import Chart from "./Chart";

function Data() {
  const [year, setYear] = useState([]);
  const [occur, setOccur] = useState([]);
  useEffect(() => {
    getData()
      .then((res) => {
        const newArr = [];
        res.data.resource.awards.forEach((p) => newArr.push(p));
        let sofa = newArr.filter(
          (item, i, cur) => cur.findIndex((v) => v.year === item.year) === i
        );
        const newYear = [];
        const arrLen = [];
        sofa.forEach((item) => {
          newYear.push(item.year);
          const fil = newArr.filter((a) => a.year === item.year);
          arrLen.push(fil.length);
        });
        setYear([...year, ...newYear]);
        setOccur([...occur, ...arrLen]);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Chart
        year={year.length === 0 ? ["syl"] : year}
        occur={occur.length === 0 ? [0, 0, 0, 0] : occur}
      />
    </div>
  );
}

export default Data;
