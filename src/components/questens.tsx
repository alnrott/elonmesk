import React from 'react';

function Questens({ onClose }: any) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Infermatiun</h1>
        <h2>WEN: APROL</h2>
        <h2>WERE: SOLANA</h2>
        <h2>WERE TO: MORS</h2>
        <h2>AS: STERSHEP</h2>
        <h2>WHO: US</h2>
        <button className='glow-on-hover ' onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default Questens;
