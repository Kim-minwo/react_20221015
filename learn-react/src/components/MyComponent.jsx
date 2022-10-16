import React from "react";

//함수형 컴포넌트
function MyComponent({ title, active }) {
  console.log(active);
  return <div stlye={{ backgroundColor: active && "red" }}>{title}</div>;
}

MyComponent.defaultProps = {
  title: "REACTTTTTTTTTTTTTT",
  color: "red",
};

export default MyComponent;
