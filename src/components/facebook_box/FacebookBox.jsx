import React from 'react';
import './styles.scss'; // Import the SCSS file
import img1 from '../../assets/images/icon/photo_album.png';

const FacebookBox = ({ link }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="facebook-box" onClick={handleClick}>
      <div className="gradient-box">
        <img src={img1} alt="Facebook Album" className="logo" />
        <div className="text">
          <h4 style={{color:"white"}}>Check Out The Photo Album</h4></div>
      </div>
    </div>
  );
};

export default FacebookBox;
