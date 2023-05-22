import React from 'react'
import NeymarImg from './neymar 1.png'
import MbappeImg from './mbapp2 1.png'
import MessiImg from './messi 1.png'


export default function BestPlayers() 
{
  return (
    <>
    <div id = "Players" class = "best-players-header">
    Best players of the last match
  </div>

  <div class = "best-players">

    <div class = "best-players-card">
    <img src= {MbappeImg} alt="">
        </img>
      <div class ="best-player-info">
        <h2 class = "best-player-name">
          Cillian Mbappe
        </h2>
        <ul class = "achievments">
       <li>Goals:3</li>
       <li>Goal Attemtps: 5</li>
       <li>Free Kicks: 16</li>
       <li>Offsides: 4</li>
       <li>Fouls: 18</li>
       <li>Total Passes: 215</li>
       <li>Completed Passes: 278</li>
       <li>Attacks: 62</li>
       <li>Dangerous Attacks: 9</li>
       <li>Ball Possesion: 36%</li>
       <li>Shots on Goal: 4</li>
       <li>Corner Kicks: 4</li>
        </ul>
      </div>
    </div>

    <div class = "best-players-card">
    <img src= {MessiImg} alt="">
        </img>
      <div class ="best-player-info">
        <h2 class = "best-player-name">
          Lionel Messi
        </h2>
        <ul class = "achievments">
       <li>Goals:1</li>
       <li>Goal Attemtps: 2</li>
       <li>Free Kicks: 13</li>
       <li>Offsides: 1</li>
       <li>Fouls: 15</li>
       <li>Total Passes: 225</li>
       <li>Completed Passes: 189</li>
       <li>Attacks: 32</li>
       <li>Dangerous Attacks: 5</li>
       <li>Ball Possesion: 26%</li>
       <li>Shots on Goal: 0</li>
       <li>Corner Kicks: 1</li>
        </ul>
      </div>
    </div>

    <div class = "best-players-card">
      <img src= {NeymarImg} alt="">
        </img>
      <div class ="best-player-info">
        <h2 class = "best-player-name">
          Neymar
        </h2>
        <ul class = "achievments">
       <li>Goals:1</li>
       <li>Goal Attemtps: 8</li>
       <li>Free Kicks: 10</li>
       <li>Offsides: 1</li>
       <li>Fouls: 10</li>
       <li>Total Passes: 179</li>
       <li>Completed Passes: 218</li>
       <li>Attacks: 42</li>
       <li>Dangerous Attacks: 3</li>
       <li>Ball Possesion: 16%</li>
       <li>Shots on Goal: 3</li>
       <li>Corner Kicks: 1</li>
        </ul>
      </div>
    </div>
  </div>
  <div class = "black-line-best-players"></div>

    </>
  );
}