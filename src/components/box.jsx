import React, { useState } from "react";
import SmallBox from "./smallbox";
import vluz from "../value";

export default function Box() {
  const [xo, setXo] = useState(["", "", "", "", "", "", "", "", ""]);
  const [change, setChange] = useState(0);
  const [style, setStyle] = useState([
    { color: "white" },
    { color: "white" },
    { color: "white" },
    { color: "white" },
    { color: "white" },
    { color: "white" },
    { color: "white" },
    { color: "white" },
    { color: "white" }
  ]);
  const [stop, SetStop] = useState(false);

  function show(event) {
    let pos = Number(event.target.id);
    if (xo[pos] === "") {
      change === 0
        ? setXo(xo.fill("X", pos, pos + 1))
        : setXo(xo.fill("O", pos, pos + 1));

      const pass = ["048", "147", "246", "345", "012", "258", "876", "630"];
      let doned = pass.some(function (item, index) {
        if (
          xo[item[0]] === xo[item[1]] &&
          xo[item[1]] === xo[item[2]] &&
          xo[item[0]] !== ""
        ) {
          done(item);
          return true;
        } else {
          return false;
        }
      });
      !doned && (xo.some((item) => item === "") ? null : clear());
      change === 0 ? setChange(1) : setChange(0);
    }
  }
  Box.show = show;

  function done(item) {
    setStyle(function (preValue) {
      for (let i of item) {
        preValue = preValue.fill(
          { backgroundColor: "white", color: "black" },
          Number(i),
          Number(i) + 1
        );
      }
      SetStop(true);
      return preValue;
    });
  }

  function clear() {
    setXo(["", "", "", "", "", "", "", "", ""]);
    setStyle([
      { color: "white" },
      { color: "white" },
      { color: "white" },
      { color: "white" },
      { color: "white" },
      { color: "white" },
      { color: "white" },
      { color: "white" },
      { color: "white" }
    ]);
    SetStop(false);
  }
  Box.clear = clear;

  return (
    <div className="clsbox">
      {vluz.map(function (item, index) {
        return (
          <SmallBox
            style={style[index]}
            key={item.key}
            id={item.id}
            value={xo[index]}
            stop={stop}
          />
        );
      })}
      <button onClick={clear}>reset</button>
    </div>
  );
}
