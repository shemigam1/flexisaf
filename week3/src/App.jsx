// import { useState } from "react"

// function App() {
//   const [count, setCount] = useState(0);
//   function handleClick() {
//     setCount(count + 1);
//   }
//   return (
//     <>
//       {/* <button onClick={handleClick}>
//         Clicked {count} times
//       </button> */}

//       <MyButton count={count} onClick={handleClick} />
//     </>
//   )
// }

// function MyButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Clicked {props.count} times
//     </button>
//   );
// }




import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { text: "Welcome!" };
  }

  // componentWillMount() {
  //   this.setState({
  //     text: "flexisaf",
  //   });
  // }

  render() {
    return <h1>{this.state.text}</h1>;
  }
}

export default App;