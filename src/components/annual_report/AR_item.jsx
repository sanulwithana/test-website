import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
const ARItem = (props) => {
  const { title, slug, image } = props;

  return (
    <div className="custom-blog-item-container"><Link
      to={"/pdf-view/" + slug} key={slug}
    >
      <article className="custom-blog-article" style={{ backgroundImage: `url(${image})` }}>
        <div className="image-overlay"></div>
        <div className="custom-content">
          <div className="custom-text-content">
            <h3 className="custom-title">{title}</h3>
          </div>
        </div>
      </article>
    </Link>
    </div>

  );
};

export default ARItem;
