import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

// creates an array of all boxes that are displayed on the page
function BoxList() {
  const [boxes, setBoxes] = useState([]);
  const add = boxObj => {
    setBoxes(boxes => [...boxes, boxObj]);
    // take all existing values of array and start with that, then add what's after comma
    // adds an array to the state
    function add(boxObj){
      let new_boxes = [...boxes]
      new_boxes.push(boxObj)
      setBoxes(new_boxes)
    }
  };
  const remove = id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  };
  // takes the setBoxes array, filters out all boxes that do not match the id of the box selected for removal

  const boxComponents = boxes.map(box => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      handleRemove={remove}
      backgroundColor={box.backgroundColor}
    />
  ));
  // adds information for each box

  return (
    <div>
      <NewBoxForm createBox={add} />
      {boxComponents}
    </div>
  );
  // adds box to the boxes array
}

export default BoxList;
