import { useRef, useState } from "react";
import AddUser from "./AddUser";

function UserList() {
  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "황보석",
      age: 30,
      active: true,
    },
    {
      id: 2,
      name: "김정철",
      age: 30,
      active: false,
    },
    {
      id: 3,
      name: "김관훈",
      age: 30,
      active: true,
    },
    {
      id: 4,
      name: "김민우",
      age: 30,
      active: false,
    },
  ]);

  //화면을 호출하는게 아니고 값만 변경함. 값이 변경되어도 랜더링이 다시되지않음.
  // => 특정값을 기억해놓고 사용한다.
  const nextId = useRef(5);
  const onCreate = (inputs) => {
    const { name, age } = inputs;
    setUserList(
      userList.concat({
        id: nextId.current,
        name,
        age,
      })
    );
    nextId.current++;
  };

  const onRemove = (id) => {
    const con = window.confirm("삭제하겠습니까?");
    if (con === true) {
      setUserList(userList.filter((user) => user.id !== id));
    }
  };
  const onToggle = (id) => {
    setUserList(
      userList.map((user) => {
        return user.id === id ? { ...user, active: !user.active } : user;
      })
    );
  };
  return (
    <div>
      <h2>유저목록</h2>
      <ul>
        {userList.map((user) => (
          <User
            key={user.id}
            user={user}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </ul>
      <AddUser onCreate={onCreate} />
    </div>
  );
}

function User({ user, onRemove, onToggle }) {
  const { id, name, age, active } = user;
  return (
    <li>
      <span
        style={{ color: active && "blue", cursor: "pointer" }}
        onClick={() => onToggle(id)}
      >
        {name} ({age})세{" "}
      </span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </li>
  );
}

export default UserList;
