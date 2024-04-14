import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import img2 from '../../assets/images/slider/slider-2.jpg'
const ARItem = ({ post }) => {
  return (
    <div className="custom-blog-item-container">
    <article className="custom-blog-article">
      <div className="custom-content">
        <div className="custom-image">
          <Link to={`#}`}>
            <img src={img2} alt={"saddsasasda"} />
          </Link>
        </div>
        <div className="custom-text-content">
          <h3 className="title"><Link to={`#}`}>ANNUAL REPORT 2023/2024</Link></h3>
          {/* <Link to={`#`} className="custom-btn-readmore">READ MORE <i className="fal fa-long-arrow-right"></i></Link> */}
        </div>
      </div>
    </article>
  </div>
  
  );
};

export default ARItem;
