import { useState } from "react";

function AddUser({ onCreate }) {
  const [inputs, setInputs] = useState({
    name: "",
    age: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onClickSubmit = () => {
    onCreate(inputs);
    setInputs({
      name: "",
      age: "",
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={handleInput}
        value={inputs.name}
      />
      <input
        type="number"
        name="age"
        onChange={handleInput}
        value={inputs.age}
      />
      <button onClick={onClickSubmit}>등록</button>
    </div>
  );
}
export default AddUser;
