import React, { useState } from 'react';
import Scheduler from './Scheduler';
import Events from './Events';
import './style.css';
import BestPlayers from './BestPlayers';
import Contacts from './Contacts';

export default function App()
{

  return (
    <>
    <Scheduler />
    <Events/>
    <BestPlayers />
    <Contacts />
    
    </>
  )

}