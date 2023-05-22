import React, { useState,useEffect }  from 'react';

export default function Scheduler() 
{
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const [seconds,setSeconds] = useState(0)
  const [minutes,setMinutes] = useState(0)
  var timer;

  useEffect(() =>{
    timer = setInterval(() => {

      setSeconds(seconds+1);

      if(seconds===59){
        setMinutes(minutes+1);
        setSeconds(0);
      }
    },1000)
    return () => clearInterval(timer);
});

const stop=()=> {
  clearInterval(timer)
}

  return (
    <>
    <div className = "scheduler">

    <div className = "nav">
      <div className = "right-side"> 
        <button className = "players-button" onClick = {() => window.location.replace("/#Players")}>Best players</button>
        <button className = "Events" onClick = {() => window.location.replace("/#Events")}>Events</button>
      </div>
      <button className = "Contacts" onClick = {() => window.location.replace("/#Contacts")}>Contacts</button>
      
    </div>

      <div className = "score">
      <div className = "score1" onClick = {() => setCount1(count1 + 1)}> {count1}</div>
      :
      <div className = "score2" onClick = {() => setCount2(count2 + 1)}> {count2}</div>
      </div>
      <div className = "time" onClick = {stop}>{minutes<10? "0"+minutes: minutes} : {seconds<10? "0"+seconds: seconds}</div>
  </div>

  <div className = "current-football-events-info">

    <div className ="black-bar">

    </div>
  
    <div className = "info"> <h1>Current football events</h1>
      On our website, you can see
      <ul>
       <li>current football events</li>
       <li>current score</li>
       <li>football time</li>
       <li>information about the game</li>
      </ul>
      <button className = "learn-more-button">Learn more</button>
      <button className = "contacts-button" onClick = {() => window.location.replace("/#Contacts")}>Contacts</button>
    </div>

  </div>
  </>
  );
}