import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import img2 from '../../assets/images/slider/slider-2.jpg'
const ARItem = (props) => {
    const {title , slug , reportFile , image} = props;


  return (
    <div className="custom-blog-item-container">
    <article className="custom-blog-article" style={{ backgroundImage: `url(${image})` }}>
    <div className="image-overlay"></div>
      <div className="custom-content">
        <div className="custom-text-content">
          <h3 className= "title"><Link to={`#`}>{title}</Link></h3>
        </div>
      </div>
    </article>
  </div>
  
  );
};

export default ARItem;
