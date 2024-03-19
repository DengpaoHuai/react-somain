import { useState } from "react";

const ListDemo = () => {
  const fakeData = [
    { value: "Hello", test: "gh" },
    { value: "World", test: "dfgghfghdfg" },
    { value: "!", test: "dfgdfg" },
  ];

  return (
    <div>
      <ul>
        {fakeData.map((item, index) => (
          <li key={index}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListDemo;
