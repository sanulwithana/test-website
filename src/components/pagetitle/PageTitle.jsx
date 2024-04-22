import React from 'react';

import './styles.scss'


function PageTitle(props) {
    const {title, color, description} = props;
   
    const getColorContrast = (color) => {
        const hexToRgb = (hex) => {
            const bigint = parseInt(hex.slice(1), 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;
            return `${r}, ${g}, ${b}`;
        };
        
        const rgb = hexToRgb(color);
        const [r, g, b] = rgb.split(',').map((value) => parseInt(value, 10));
        
        const contrastR = r > 128 ? Math.max(r - 50, 0) : Math.min(r + 50, 255);
        const contrastG = g > 128 ? Math.max(g - 50, 0) : Math.min(g + 50, 255);
        const contrastB = b > 128 ? Math.max(b - 50, 0) : Math.min(b + 50, 255);
        
        return `rgb(${contrastR}, ${contrastG}, ${contrastB})`;
    };
    
    

    const firstColor = color || 'rgba(4, 11, 17, 0.1)';
    const secondColor = color ? getColorContrast(color) : 'rgba(67, 67, 67, 0.9)';
    
    return (
        <section className="tf-page-title" style={{ backgroundImage: `linear-gradient(to right, ${firstColor}, ${secondColor})` }}>
    <div className="tf-containers" >
        
        <div className="row">
            <div className="col-md-12">
                <h2 className="page-title-heading" style={{ alignSelf: 'center' }}>{title.toUpperCase()}</h2>
                { description && <p className="sub-heading"  style={{ wordWrap: 'break-word',  maxWidth: '85%',paddingLeft:'15%', fontSize:"1.6rem"  }} >{description}</p>}
            </div>
        </div>
    </div>                    
</section>


    );
}

export default PageTitle;