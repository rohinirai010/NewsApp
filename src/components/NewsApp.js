import React, { useEffect, useState , useRef} from "react";
import News from "./News";
import "./News.css";

function NewApp() {
  const apiKey = "543b425f81a14fc7a00c0c5f57970f99";
 

  const [newsList, setNewsList] = useState([]);
  const [query,setQuery] = useState('tesla');

  const queryInputRef =useRef(null);
  
  const apiUrl =
  `https://newsapi.org/v2/everything?q=${query}&from=2023-05-03&sortBy=publishedAt&apiKey=543b425f81a14fc7a00c0c5f57970f99`; 

  useEffect(() => {
    fetchData();
  }, [query]);

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();

      setNewsList(jsonData.articles);
    } catch (e) {
      console.log(e, "error occured");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const queryValue = queryInputRef.current.value;
    setQuery(queryValue);
  }

  return (
    <div className="news-app">
      <h1 style={{fontFamily:'monospace', fontSize:'3rem', textAlign:'left' , marginBottom: '20px'}}>News Daily</h1>
      <form onSubmit={handleSubmit}>
        <input className="query-input" type="text" ref={queryInputRef}/>
        <input className="btn-submit" onClick={handleSubmit} type="submit" value="Submit"/>
      </form>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,30%)",
          justifyContent: "space-between",
          rowGap: "20px",
        }}
      >
        {newsList.map((news) => {
          return (
            <div className="news-card">
              <img src={news.urlToImage} alt={news.title} />
              <h2>{news.Title}</h2>
              <p>{news.description}</p>
              <button className="btn-read-more" onClick={() => window.open(news.url)}>Read More</button>
            </div>
          );

          {
            /* <News key={news.url} news={news}/> */
          }
        })}
      </div>
    </div>
  );
}

export default NewApp;
