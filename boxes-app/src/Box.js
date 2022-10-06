import React from "react";

function Box({
  id,
  handleRemove,
  width = 10,
  height = 10,
  backgroundColor = "green"
}) {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor
        }}
      />
      <button onClick={remove}>Remove The Box!</button>
    </div>
  );
}

export default Box;
