import React from 'react';
import styled from 'styled-components';



const Card = (props : {name : string}) => {
  return (
    <StyledWrapper>
    <div className="card">
        <h2>{props.name}</h2>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 230px;
    height: 284px;
    background: #07182E;
    position: relative;
    display: flex;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
  }
    

  .card h2 {
    z-index: 1;
    color: white;
    font-size: 2em;
    font-weight: bold;
    font-family: {roboto.variable}, sans-serif;
  }

  .card::before {
    content: '';
    position: absolute;
    width: 100px;
    background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
    height: 130%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .card::after {
    content: '';
    position: absolute;
    background: #07182E;
    ;
    inset: 5px;
    border-radius: 15px;
  } 
    
  /* .card:hover:before {
    background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
    animation: rotBGimg 3.5s linear infinite;
  } */
 /*Dark Mode*/

  .dark & .card:after {
    background: white;
    
  }
    .dark & .card h2 {
    color: black;

    }
    .dark & .card::before {
    content: '';
    position: absolute;
    width: 100px;
    background-image: linear-gradient(180deg,yellow, rgb(246, 76, 76));
    height: 130%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
  }



    `;

export default Card;
