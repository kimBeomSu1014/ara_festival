// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { day1_artist,day2_artist } from './js/artist';

const Home = () => (
  <div className="content">
    <h2>축제에 오신 것을 환영합니다!</h2>
    <p>여기에 축제에 대한 소개 말이 들어갑니다.</p>
    <iframe src="https://giphy.com/embed/mbar54jwxlnKs5nlOc" width="120" height="120" style={{border:"none",zIndex:"1",scrolling:"no"}} className="fire" allowFullScreen></iframe>
    <p></p>
  </div>
);

const Day1 = () => 
<div className="Day_content">
  <p>1일차 아티스트!</p>
  <div className='artist'>
    {day1_artist.map((artist, index)=>(
      <div className='artist_box' key={index}>
        <div className='artist_name'>
          <span className='en_name'>{artist.en_name}</span>
          <span className='ko_name'>{artist.ko_name}</span>
        </div>
        <div className='artist_profil'>
          <img src={artist.profil}/>
        </div>
        <div className='artist_youtube'>
        <iframe width="300" height="168" src= {artist.youtube_1}
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="300" height="168" src= {artist.youtube_2}
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    ))}
  </div>
</div>;
const Day2 = () => 
  <div className="Day_content">
  <p>2일차 아티스트!</p>
  <div className='artist'>
    {day2_artist.map((artist, index)=>(
      <div className='artist_box' key={index}>
        <div className='artist_name'>
          <span className='en_name'>{artist.en_name}</span>
          <span className='ko_name'>{artist.ko_name}</span>
        </div>
        <div className='artist_profil'>
          <img src={artist.profil}/>
        </div>
        <div className='artist_youtube'>
        <iframe width="300" height="168" src= {artist.youtube_1}
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="300" height="168" src= {artist.youtube_2}
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    ))}
  </div>
</div>;
const FAQ = () => <div className="content">자주하는 질문 내용</div>;
const LostItems = () => <div className="content">분실물 내용</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <span>Acendio</span>
        </header>
        <nav className="navbar">
          <div className="scrollable-tabs">
            <Link to="/">메인</Link>
            <Link to="/day1">1일차</Link>
            <Link to="/day2">2일차</Link>
            <Link to="/faq">자주하는 질문</Link>
            <Link to="/lostitems">분실물</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/day1" element={<Day1 />} />
          <Route path="/day2" element={<Day2 />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/lostitems" element={<LostItems />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
