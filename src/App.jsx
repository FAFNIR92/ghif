import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [gifs, setGifs] = useState(0)
  const makeApiCall = () => {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&q=fight&limit=20&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
    .then(res => {
      console.log(res.data.data)
      setGifs(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>
    
      <h1>Gifs</h1>
      { gifs ? gifs.map((gif, i) => {
        return <img key={i} src={gif.images.fixed_height.url} />
      }) : null }
      <div className="card">
        <button onClick={makeApiCall}>
          Make API Call
        </button>
      </div>
    </>
  )
}

export default App
