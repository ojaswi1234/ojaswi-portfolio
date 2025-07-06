import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import localFont from 'next/font/local'

const myFont = localFont({
  src: '../../app/fonts/EduNSWACTCursive-Regular.ttf',
  variable: '--font-edu',
})

const Card = (props: { name: string; src: string; st : string; }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <StyledWrapper>
    <div className="card-container">
      
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`card ${hovered ? 'hovered' : ''}`}
    >
      
      <h2
        className={`card-title text-white dark:text-black font-bold ${myFont.variable} ${hovered ? 'hovered' : ''}`}
        style={{
          fontFamily: 'var(--font-edu)',
        }}
      >
        {props.name}
      </h2>
     <div className={`blurredContainer ${hovered ? 'hovered' : ''}`}></div>
     
      <Image
        src={props.src}
        alt={props.name}
        width={120}
        height={120}
        className={`card-image ${props.st} ${hovered ? 'hovered' : ''}`}
        loading='lazy'
        draggable="false"
        onDragStart={(e) => e.preventDefault()}
      />
    </div>
    </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card-container {
    width: 210px;
    height: 250px;
    position: relative;
    overflow: hidden;
    background-color: slate;
    padding: 20px;
    border-radius: 10px;
    
}
    .card-container:hover .card {
    transform: translate3d(0, -10px, 0);
    z-index: 1;
    box-shadow: 0 0 16px black;
  }
    .card {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column-reverse; 
    justify-content: center;
    align-items: center;
    background-color: #1e293b; /* Dark slate */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
    cursor: pointer;
    animation: fadeIn 0.5s ease-in-out;
    will-change: transform, box-shadow;
  }
    
  .dark & .card {
    background-color: #f8fafc; /* Light slate */
  }

  /* Optimized title animations */
  .card-title {
    transform: translate3d(0, -70px, 0);
    font-size: 1.5rem;
    transition: transform 0.2s ease-out, font-size 0.2s ease-out;
    will-change: transform, font-size;
  }

  .card-title.hovered {
    transform: translate3d(0, 20px, 0);
    font-size: 1rem;
  }

  /* Optimized image animations */
  .card-image {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
    transition: transform 0.2s ease-out, opacity 0.2s ease-out;
    will-change: transform, opacity;
  }

  .card-image.hovered {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  /* Simplified blur container */
  .blurredContainer {
    position: absolute;
    top: 20%;
    left: 30%;
    width: 40%;
    height: 40%;
    filter: blur(20px);
    background: linear-gradient(to right, yellow, cyan);
    opacity: 0;
    transition: opacity 0.2s ease-out;
    will-change: opacity;
  }

  .blurredContainer.hovered {
    opacity: 1;
    background-color: white;
  }
    
  .dark & .blurredContainer.hovered {
    background: linear-gradient(to right, yellow, orange);
    box-shadow: 0 0 8px yellow;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, 20px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  `;

export default Card;