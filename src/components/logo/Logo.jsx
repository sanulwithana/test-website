import React , {useState} from 'react';

function Logo(props) {
    const [dataLogo] = useState([
        {
            id: 1,
            name: 'RACIIT'
        },
        {
            id: 2,
            name: 'RACIIT'
        },
        {
            id: 3,
            name: 'RACIIT'
        },
        {
            id: 4,
            name: 'RACIIT'
        },
        {
            id: 5,
            name: 'RACIIT'
        },
        {
            id: 6,
            name: 'RACIIT'
        },
        {
            id: 7,
            name: 'RACIIT'
        },
        {
            id: 8,
            name: 'RACIIT'
        },
        {
            id: 9,
            name: 'RACIIT'
        },
        {
            id: 10,
            name: 'RACIIT'
        },
    ])
    return (
        <section className="logo-slider">          
                <div className="logo-slider-wrap">
                    <div className="logo-slider-inner">
                        {
                            dataLogo.map(idx => (
                                <h3 key={idx.id}>{idx.name}</h3>
                            ))
                        }

                    </div>
                    <div className="logo-slider-inner style-2">
                        {
                            dataLogo.map(idx => (
                                <h3 key={idx.id}>{idx.name}</h3>
                            ))
                        }
                    </div>
                </div>
            </section>
    );
}

export default Logo;