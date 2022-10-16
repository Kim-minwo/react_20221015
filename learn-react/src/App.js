import "./App.css";
import Counter from "./components/Counter";
import InputText from "./components/inputText";
import MyComponent from "./components/MyComponent";
import UserList from "./components/UserList";

const boxStyle = { backgroundColor: "red", color: "blue" };

function App() {
  return (
    // 닫혀 있는 태그를  사용해야한다. ex ) MyComponent
    // <></> (fragment)를 사용하면 부모요서 없이 감쌀 수 있다.
    // Js 값을 포함시킬 때는 {} 안에 표현식을 넣는다.
    // 클래스는 className라는 속성으로 사용한다.
    // style 적용은 style 속성에 객체를 넣는다. => CSS 속성명은 카멜케이스로 작성한다.

    // <>
    //   <MyComponent title="Component" active={true} />
    //   <MyComponent />
    //   <div className="box" style={boxStyle}>
    //     {1 + 1}
    //     <Counter />
    //   </div>
    // </>
    // <div>
    //   <Counter num={2} />
    //   <Counter num={3} />
    // </div>
    // <InputText />
    <UserList />
  );
}

export default App;
