import React from 'react';
import './Categories.css'
const Categories = () => {
    return (
        <div className="hero-section">
         <div className="card-grid">
    <a className="card" href="/#">
      <div className="card__background" style={{backgroundImage: `url(https://i.pinimg.com/originals/4f/69/c4/4f69c45288e6d9a7a28858185de4d87f.jpg)`}}></div>
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a className="card" href="/#">
      <div className="card__background" style={{backgroundImage: `url(https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1613666503-watch-1-1613666487.jpg?crop=0.8333333333333334xw:1xh;center,top&resize=480:*)`}}></div>
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a className="card" href="#/">
      <div className="card__background"style={{backgroundImage: `url(https://i.pinimg.com/736x/34/de/0c/34de0cbaddf7d33c5700fbe5a7e7a935--girl-watches-black-watches.jpg)`}}></div>
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a className="card" href="/#">
      <div className="card__background" style={{backgroundImage: `url(https://preview.free3d.com/img/2016/08/1761075741052634462/xnruy3gn-900.jpg)`}}></div>
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3>
      </div>
    </a>
  
      </div>
      
        </div>
    );
};

export default Categories;