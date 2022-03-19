import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

// 外で使えるようにエクスポートする必要がある
export default ColorfulMessage;
