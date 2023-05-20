import React from 'react';
//import { createRoot } from 'react-dom/client';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import "./css/pentagrama.css";
import background from './images/pentagrama.png'

const URLImage = ({ image }) => {
  const [img] = useImage(image.src);
  return (
    <Image
      image={img}
      x={image.x}
      y={image.y}
      // I will use offset to set origin to the center of the image
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
    />
  );
};

export const Pentagrama = ({imagen}) => {
    const dragUrl = React.useRef(null);
    const stageRef = React.useRef(null);
    const [images, setImages] = React.useState([]);
    var sectionStyle = {
        backgroundImage: `url(${background})`,
    }
    return (
      <div className='llavesol'> 
        Arrastra la llave de sol al pentagrama
        <br />
        <img
          alt="llave_sol"
          src={imagen}
          draggable="true"
          onDragStart={(e) => {
            dragUrl.current = e.target.src;
          }}
        />
        <div className='bg' style= {sectionStyle}
          onDrop={(e) => {
            e.preventDefault();
            // register event position
            stageRef.current.setPointersPositions(e);
            // add image
            setImages(
              images.concat([
                {
                  ...stageRef.current.getPointerPosition(),
                  src: dragUrl.current,
                },
              ])
            );
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          <Stage className
            width={window.innerWidth}
            height={300}
            ref={stageRef}
          >
            <Layer>
              {images.map((image) => {
                return <URLImage image={image} />;
              })}
            </Layer>
          </Stage>
        </div>
      </div>
    );
  };
