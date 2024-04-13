import React from 'react';
import { MutatingDots } from 'react-loader-spinner'; // Replace 'some-library' with the actual library name
import './styles.scss';

const Loading = () => {
  return (
    <div className="loading-container">
      <MutatingDots
        visible={true}
        height="150"
        width="150"
        color="#f84364"
        secondaryColor="#ED3659"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
      />
    </div>
  );
};

export default Loading;