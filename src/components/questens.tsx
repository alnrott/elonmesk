import React from 'react';

function Questens({ onClose }: any) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Infermatiun</h1>
        <h2>WERE: SOLANA</h2>
        <h2>MENT PROCE: 0.2 SOL</h2>
        <h2>COLLECTIUN: 3K</h2>
        <h2>WEN MARS: APR 22</h2>
        <h2>TIME: 20PM GMT</h2>
        <button className='glow-on-hover ' onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default Questens;
