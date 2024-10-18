import { useEffect, useRef, useState } from "react"
import './App.css'

function useSayMyName(name) {
  return `my name is ${name}`
}

function App() {
  const [output, setOutput] = useState({})
  const [count, setCount] = useState(0)
  const [ref, setRef] = useState(0)
  let clicks = useRef(0)
  const name = useSayMyName('diego')

  const url = 'https://jsonplaceholder.typicode.com/posts/1'
  const postUrl = 'https://jsonplaceholder.typicode.com/posts'

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const data = await response.json()
      setOutput({
        message: 'Data fetched successfully with useEffect on initial render',
        data: data
      })
    }
    fetchData()
  }, [])

  const counter = () => {
    clicks.current = clicks.current + 1
    setRef(clicks.current)
    return setCount(count + 1)
  }

  // const getData = async (method) => {
  //   switch (method) {
  //     case 'GET':
  //       const response = await fetch(url)
  //       const data = await response.json()
  //       setOutput({
  //         message: 'Data fetched successfully',
  //         data: data
  //       })

  //       break;

  //     case 'POST':
  //       const postResponse = await fetch(postUrl, {
  //         method: 'POST',
  //         body: JSON.stringify({
  //           title: 'foo',
  //           body: 'bar',
  //           userId: 1,
  //         }),
  //         headers: {
  //           'Content-type': 'application/json; charset=UTF-8',
  //         },
  //       })
  //       const postData = await postResponse.json()
  //       setOutput({
  //         message: 'Data posted successfully',
  //         data: postData
  //       })
  //       break;

  //     case 'PUT':
  //       const putResponse = await fetch(url, {
  //         method: 'PUT',
  //         body: JSON.stringify({
  //           title: 'foo',
  //         }),
  //         headers: {
  //           'Content-type': 'application/json; charset=UTF-8',
  //         },
  //       })
  //       const putData = await putResponse.json()
  //       setOutput({
  //         message: 'Data updated successfully',
  //         data: putData
  //       })
  //       break;

  //     case 'DELETE':
  //       const deleteResponse = await fetch(url, {
  //         method: 'DELETE',
  //       })
  //       const deleteData = await deleteResponse.json()
  //       setOutput({
  //         message: 'Data deleted successfully',
  //       })
  //       break;

  //     default:
  //       break;
  //   }
  // }

  return (
    <>

      <div className="container">
        <h1>HOOKS DEMO</h1>
        <div className="btns">

          {/* <button onClick={() => getData('GET')}>GET</button> */}
          {/* <button onClick={() => getData('POST')}>POST</button> */}
          {/* <button onClick={() => getData('PUT')}>PUT</button> */}
          {/* <button onClick={() => getData('DELETE')}>DELETE</button> */}

          <button onClick={counter}>count {count}</button>
          <button onClick={() => alert(name)}>What is my name -custom hook</button>
        </div>

        <div className="msg">
          <p>The count button has been clicked {ref} times</p>
          <p>{output.message}</p>
          <p>{output.data && JSON.stringify(output.data)}</p>
        </div>
      </div>

    </>
  )
}




export default App;