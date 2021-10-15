import logo from './logo.svg';
import './App.css';
import AppHeader from '../src/components/Header'
import NewsItem from '../src/components/NewsItem'
import React, { useEffect, useState } from 'react'


function App() {
	const [news, setNews] = useState([])
	const [showNews, setShowNews] = useState([])
	const fetchData = async (currentStory) => {
		let baseUrl = 'https://hacker-news.firebaseio.com/v0/'
		let res = await fetch(`${baseUrl}${currentStory}.json?print=pretty`)
		let data = await res.json()
		setNews(data)
		setShowNews(data.slice(0,100))
	}
	useEffect(() => {
		fetchData("topstories")
	},[])
	const showMore = () => {
		let currentCount = showNews.length + 50
		setShowNews(news.slice(0,currentCount))
	}
  return (
    <div className="App">
    <AppHeader onCallNews={(e)=>{
			console.log(e);
			fetchData(e)
		}}/>
		<div className="AppBody">
			<ol>
				{showNews.map((item)=><li key={item}><NewsItem id={item}/></li>)}
			</ol>
			<div className="left-align">
				{
					(showNews.length !== news.length) &&
							<button onClick={showMore}>More</button>
				}
			</div>
		</div>
    </div>
  );
}

export default App;
