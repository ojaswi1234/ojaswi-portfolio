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
      className="card"
    >
      <h2
        className={`text-white dark:text-black font-bold text-xl ${myFont.variable}`}
        style={{
          transform: hovered ? 'translateY(20px)' : 'translateY(-70px)',
          transition: 'transform 0.3s, font-size 0.3s',
          fontFamily: 'var(--font-edu)',
          fontSize: hovered ? '1.3rem' : '1.9rem',
        }}
      >
        {props.name}
      </h2>
     <div className="blurredContainer"
     style={{ 
      backgroundColor: hovered ? "white" : "transparent",
      opacity: hovered ? 1 : 0,
      transition: 'opacity 0.3s',
     }}
     ></div>
      <Image
        src={props.src}
        alt={props.name}
        width={130}
        height={130}
        className={props.st}
        style={{
          transform: hovered ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'transform 0.3s, opacity 0.3s',
          opacity: hovered ? 1 : 0,
          
        }}
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
    transform: translateY(-10px);
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
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
  }
    
  .dark & .card {
    background-color: #f8fafc; /* Light slate */
  }
    .blurredContainer {
    position: absolute;
    top: 20%;
    left: 30%;
    width: 40%;
    height: 40%;
    filter: blur(40px);
    background: linear-gradient(to right, yellow, cyan); /* Optional: semi-transparent background */

  }
    .dark & .blurredContainer{
     background: linear-gradient(to right, yellow, orange);
     box-shadow: 0 0 16px yellow;
    }
  `;

export default Card;