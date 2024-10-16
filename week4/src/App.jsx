import { useEffect, useState } from "react"
import './App.css'

function App() {
  const [output, setOutput] = useState({})

  const url = 'https://jsonplaceholder.typicode.com/posts/1'
  const postUrl = 'https://jsonplaceholder.typicode.com/posts'

  const getData = async (method) => {
    switch (method) {
      case 'GET':
        const response = await fetch(url)
        const data = await response.json()
        setOutput({
          message: 'Data fetched successfully',
          data: data
        })

        break;

      case 'POST':
        const postResponse = await fetch(postUrl, {
          method: 'POST',
          body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        const postData = await postResponse.json()
        setOutput({
          message: 'Data posted successfully',
          data: postData
        })
        break;

      case 'PUT':
        const putResponse = await fetch(url, {
          method: 'PUT',
          body: JSON.stringify({
            title: 'foo',
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        const putData = await putResponse.json()
        setOutput({
          message: 'Data updated successfully',
          data: putData
        })
        break;

      case 'DELETE':
        const deleteResponse = await fetch(url, {
          method: 'DELETE',
        })
        const deleteData = await deleteResponse.json()
        setOutput({
          message: 'Data deleted successfully',
        })
        break;

      default:
        break;
    }
  }

  return (
    <>

      <div className="container">
        <h1>API CALLS DEMO</h1>
        <div className="btns">

          <button onClick={() => getData('GET')}>GET</button>
          <button onClick={() => getData('POST')}>POST</button>
          <button onClick={() => getData('PUT')}>PUT</button>
          <button onClick={() => getData('DELETE')}>DELETE</button>
        </div>

        <div className="msg">
          <p>{output.message}</p>
          <p>{output.data && JSON.stringify(output.data)}</p>
        </div>
      </div>

    </>
  )
}



export default App;