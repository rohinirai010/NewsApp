import React from 'react'
import "./News.css";

function News(news) {
  return (
    <div className="news-card">
      <img src={news.urlToImage} alt={news.title} />
      <h2>{news.Title}</h2>
      <p>{news.description}</p>
    </div>
  )
}

export default News
