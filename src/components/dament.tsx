import React from 'react';

function Dament({ onClose }: any) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Infermatiun</h1>
        <h2>Cumin chuun</h2>
        {/* <h2>MENT PROCE: 1 SOL</h2>
        <h2>COLLECTIUN: 10K</h2>
        <h2>WEN MARS: APR 22</h2>
        <h2>TIME: 20PM GMT</h2> */}
        <button className='glow-on-hover ' onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default Dament;
