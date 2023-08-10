import { useState, useEffect } from 'react'
import axios from 'axios'

const FetchData = ({ cat }) => {
    const [Data, setData] = useState("")
    const fetchData = async () => {
        await axios.get(
            cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=f5b45abf0d3343a4b32a5b57d4af5ce6`
                : "https://newsapi.org/v2/top-headlines?country=in&apiKey=f5b45abf0d3343a4b32a5b57d4af5ce6"
        )
                    .then((res) => setData(res.data.articles));
    }
    
    useEffect(() => {
        fetchData()
    }, [cat]);
    return (
        <>
            
            <div style={{ textAlign: 'center' }}>
    <h3><u>Top Headlines</u></h3>
</div>  
<div className="d-flex flex-wrap justify-content-center">
    {Data
        ? Data.map((items, index) => (
            <div key={index} className="card mx-2 my-3" style={{ width: '18rem', objectFit: "cover" }}>
                <img src={items.urlToImage} alt="image not found" className="card-img-top" style={{ maxHeight: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title my-2">{items.title}</h5>
                    <p className="card-text flex-grow-1">{items.description}</p>
                    <a href={items.url} target="_blank" rel="noopener noreferrer" className='btn btn-primary mt-auto'>View more</a>
                </div>
            </div>
        ))
        : "Loading...."}
</div>

        </>
        )
    }
export default FetchData
