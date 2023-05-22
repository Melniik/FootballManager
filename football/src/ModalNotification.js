import React, { useEffect, useState}  from 'react';


const ModalNotification = ({active, setActive, children}) => {
  const [state, setState] = useState('');
  const onInput = (e) => setState(e.target.value);

  const onSubmit = (e) => {
    e.target.reset();
  };

  return (
    <div class = {active ? "notification-modal active" : "notification-modal"} >
      <div class = {active ? "notification-modal-content active" : "notification-modal-content"} onClick = {e => e.stopPropagation()}>
        {children}
        <div class = "submit-notification">
        The information has been sent successfully
        </div>
        <button class = "notification-btn" onClick={() => setActive(false) && {onSubmit}}>
           OK
        </button>
      </div>
    </div>
  )
}

export default ModalNotification;