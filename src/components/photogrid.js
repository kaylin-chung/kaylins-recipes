import React from "react";
import { StaticImage } from 'gatsby-plugin-image';

const PhotoGrid = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px'}}>
            <div style={{ position: 'relative' }}>
                <StaticImage src="../images/image1.jpeg" alt="Image 1" style = {{opacity: 0.5}}/>
                <div style={{ color: '#FF4D65', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '180px'}}>
                    L
                </div>
            </div>
            <div style={{ position: 'relative' }}>
                <StaticImage src="../images/image2.jpeg" alt="Image 2" style = {{opacity: 0.5}}/>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#FFCE4D', fontSize: '180px'}}>
                    E
                </div>
            </div>
            <div style={{ position: 'relative' }}>
                <StaticImage src="../images/image3.jpeg" alt="Image 3" style = {{opacity: 0.5}}/>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#50C2A6', fontSize: '180px'}}>
                    T
                </div>
            </div>
            <div style={{ position: 'relative' }}>
                <StaticImage src="../images/image4.jpeg" alt="Image 4" style = {{opacity: 0.5}}/>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#C15CCB', fontSize: '180px'}}>
                    S
                </div>
            </div>
            <div style={{ position: 'relative' }}>
                <StaticImage src="../images/image5.jpeg" alt="Image 5" style = {{opacity: 0.5}}/>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#FF2C8F', fontSize: '180px'}}>
                    C
                </div>
            </div>
            <div style={{ position: 'relative' }}>
                <StaticImage src="../images/image6.jpeg" alt="Image 6" style = {{opacity: 0.5}}/>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#65D3DA', fontSize: '180px'}}>
                    O
                </div>
            </div>
            <div style={{ position: 'relative' }}>
                <StaticImage src="../images/image7.jpeg" alt="Image 7" style = {{opacity: 0.5}}/>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#FE6A8E', fontSize: '180px'}}>
                    O
                </div>
            </div>
            <div style={{ position: 'relative' }}>
                <StaticImage src="../images/image8.jpeg" alt="Image 8" style = {{opacity: 0.5}}/>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#4CC15A', fontSize: '180px'}}>
                    K
                </div>
            </div>
            <div style={{ position: 'relative' }}>
                <StaticImage src="../images/image9.jpeg" alt="Image 9" style = {{opacity: 0.5}}/>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#5B7CDB', fontSize: '180px'}}>
                    !
                </div>
            </div>
                
        </div>
    );
};

export default PhotoGrid;
