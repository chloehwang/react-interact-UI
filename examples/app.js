import '../public/stylesheets/main.scss';
import React from 'react';
import {render} from 'react-dom';
import { HeroVideo, Jumbotron, JumbotronCol, HoverGrid, HoverCol, DrawerContainer, MenuItem, Navbar, NavItem } from '../src/index';


render(
  <div>
  <Navbar style={{backgroundColor: 'rgba(135, 205, 218, 0.8)'}}>
    <NavItem className="nav-item">ABOUT US</NavItem>
    <NavItem className="nav-item"><a>OUR BRAND</a></NavItem>
  </Navbar>

  <HeroVideo
    videoSrc="./public/video/ocean-vid.mp4"
    videoType="video/mp4">
    Sample Heading Goes Here
  </HeroVideo>

  <Jumbotron>
    <JumbotronCol fadeEffect="fadeAppear" style={{display: 'flex', padding: '110px', justifyContent: 'center'}}>
    <img src="./public/graphic-waves.png" className="waves-graphic" />
    </JumbotronCol>
   </Jumbotron>

  <Jumbotron className="jumbo-bg">
    <JumbotronCol >
    </JumbotronCol>
    <JumbotronCol fadeEffect="fadeUp" className="jumbo-fadeUp left">
      <h1>What's New?</h1>
      <h2>Category</h2>
      <p>There are millions of songs on Spotify. Play your favorites, discover new tracks, and build the perfect collection.</p>
      <h2>Playlists</h2>
      <p>You’ll find readymade playlists to match your mood, put together by music fans and experts.</p>
      <h2>New Releases</h2>
      <p>Hear this week’s latest singles and albums, and check out what’s hot in the Top 50.</p>
      <h2>New Releases</h2>
      <p>Hear this week’s latest singles and albums, and check out what’s hot in the Top 50.</p>
    </JumbotronCol>
   </Jumbotron>


   <HoverGrid>
    <HoverCol imgSrc="" />
    <HoverCol imgSrc="" />
    </HoverGrid>

    <HoverGrid>
    <HoverCol imgSrc="" />
    <HoverCol imgSrc="" />
    <HoverCol imgSrc="" />
  </HoverGrid>
  <HoverGrid>
    <HoverCol imgSrc="" />
    <HoverCol imgSrc="" />
    </HoverGrid>

    <Jumbotron className="jumbo-bg">
    <JumbotronCol fadeEffect="fadeUp" className="jumbo-fadeUp">
      <h1 className="hello">What's New?</h1>
      <h2>Category</h2>
      <p>There are millions of songs on Spotify. Play your favorites, discover new tracks, and build the perfect collection.</p>
      <h2>Playlists</h2>
      <p>You’ll find readymade playlists to match your mood, put together by music fans and experts.</p>
      <h2>New Releases</h2>
      <p>Hear this week’s latest singles and albums, and check out what’s hot in the Top 50.</p>
    </JumbotronCol>

    <JumbotronCol >
    </JumbotronCol>
   </Jumbotron>


   <Jumbotron className="jumbo-fadeIn">
    <JumbotronCol fadeEffect="fadeInRight">
      <div>
        <h1 className="hello">What's New?</h1>
        <h2>Category</h2>
        <p>There are millions of songs on Spotify. Play your favorites, discover new tracks, and build the perfect collection.</p>
        <h2>Playlists</h2>
        <p>You’ll find readymade playlists to match your mood, put together by music fans and experts.</p>
        <h2>New Releases</h2>
        <p>Hear this week’s latest singles and albums, and check out what’s hot in the Top 50.</p>
      </div>
    </JumbotronCol>

    <JumbotronCol fadeEffect="fadeInLeft">
      <div>
        <h1 className="hello">What's New?</h1>
        <h2>Category</h2>
        <p>There are millions of songs on Spotify. Play your favorites, discover new tracks, and build the perfect collection.</p>
        <h2>Playlists</h2>
        <p>You’ll find readymade playlists to match your mood, put together by music fans and experts.</p>
        <h2>New Releases</h2>
        <p>Hear this week’s latest singles and albums, and check out what’s hot in the Top 50.</p>
      </div>
    </JumbotronCol>
   </Jumbotron>

   <Jumbotron className="jumbo-fadeIn" style={{backgroundColor: 'lightblue'}}>
    <JumbotronCol fadeEffect="fadeInRight">
      <h1 className="hello">What's New?</h1>
      <h2>Category</h2>
      <p>There are millions of songs on Spotify. Play your favorites, discover new tracks, and build the perfect collection.</p>
      <h2>Playlists</h2>
      <p>You’ll find readymade playlists to match your mood, put together by music fans and experts.</p>
      <h2>New Releases</h2>
      <p>Hear this week’s latest singles and albums, and check out what’s hot in the Top 50.</p>
    </JumbotronCol>
   </Jumbotron>

    <div style={{height: '50px'}}>
      <DrawerContainer>
        <MenuItem>sdgsd</MenuItem>
        <MenuItem className="bobo"><a>sdgsdgsdsdgdsss</a></MenuItem>
      </DrawerContainer>
    </div>


  </div>

  ,
  document.getElementById('app')
);
