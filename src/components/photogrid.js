import React from "react";
import { StaticImage } from 'gatsby-plugin-image';

const PhotoGrid = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                <StaticImage src = "../images/image1.jpeg"/>
                <StaticImage src = "../images/image2.jpeg"/>
                <StaticImage src = "../images/image3.jpeg"/>
                <StaticImage src = "../images/image4.jpeg"/>
                <StaticImage src = "../images/image5.jpeg"/>
                <StaticImage src = "../images/image6.jpeg"/>
                <StaticImage src = "../images/image7.jpeg"/>
                <StaticImage src = "../images/image8.jpeg"/>
                <StaticImage src = "../images/image9.jpeg"/>
        </div>
    );
};

export default PhotoGrid;
