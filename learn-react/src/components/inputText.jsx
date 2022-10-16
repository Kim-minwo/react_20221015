import { useRef, useState } from "react";

function InputText() {
  const [inputs, setInputs] = useState({
    userName: "",
    email: " ",
  });
  const { userName, email } = inputs;
  // 특정 DOM 직접 접근할 때 사용
  // => useRef() 호출 => 객체를 반환
  const ref = useRef(null);
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: [value],
    });
  };
  const onRemove = () => {
    console.log(ref);
    ref.current.focus();
    setInputs({
      userName: "",
      email: "",
    });
  };

  return (
    <>
      <div>
        이름 : {userName} ({email})
      </div>
      <input
        type="text"
        onChange={handleInputs}
        value={inputs.userName}
        name="userName"
        ref={ref}
      />
      <input
        type="text"
        name="email"
        onChange={handleInputs}
        value={inputs.email}
      />
      <button onClick={onRemove}>삭제</button>
    </>
  );
}

export default InputText;
