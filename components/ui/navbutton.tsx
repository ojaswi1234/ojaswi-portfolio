import React from 'react';
import styled from 'styled-components';

const NavButton = (props : {name : string}) => {
    function handleClick() {

    }
  return (
    <StyledWrapper>
      <button type="button" onClick={handleClick}> <span>{props.name}</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
   outline: none;
   cursor: pointer;
   border: none;
   padding: 0.8rem 2rem;
   margin: 0;
   font-family: inherit;
   font-size: inherit;
   position: relative;
   display: inline-block;
   letter-spacing: 0.05rem;
   font-weight: 700;
   font-size: 17px;
   border-radius: 500px;
   overflow: hidden;
   background: #66ff66;
   color: ghostwhite;
  }

  button span {
   position: relative;
   z-index: 10;
   transition: color 0.4s;
  }

  button:hover span {
   color: black;
  }

  button::before,
  button::after {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: 0;
  }

  button::before {
   content: "";
   background: #000;
   width: 120%;
   left: -10%;
   transform: skew(30deg);
   transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  button:hover::before {
   transform: translate3d(100%, 0, 0);
  }
    .dark & button {
  background: radial-gradient(circle at 100% 50%,yellow, red );
  color: black;
  
  }
  .dark & button::before {
   
   background: white;
   
  }

  @media (max-width: 768px) {
    button {
      padding: 0.5rem 1.5rem;
      font-size: 14px;
    }
  }
    @media (max-width: 480px) {
        button {
        padding: 0.5rem 0.4rem;
        font-size: 6px;
        }
    }
    
  `;

export default NavButton;
