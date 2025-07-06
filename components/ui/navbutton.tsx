import React from 'react';
import styled from 'styled-components';

const NavButton = (props: { name: string, onClick?: () => void }) => {
    function handleClick() {
        if (props.onClick) {
            props.onClick();
        }
    }
    return (
        <StyledWrapper>
            <button type="button" onClick={handleClick}>
                <span>{props.name}</span>
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    button {
        outline: none;
        cursor: pointer;
        border: none;
        padding: clamp(0.5rem, 2vw, 0.8rem) clamp(1rem, 3vw, 1.5rem);
        margin: 0 0.3rem;
        font-family: inherit;
        font-size: clamp(12px, 2vw, 15px);
        font-weight: 600;
        position: relative;
        display: inline-block;
        letter-spacing: 0.05rem;
        border-radius: 50px;
        overflow: hidden;
        background: #66ff66;
        color: ghostwhite;
        width: 100%;
        max-width: 18vw; /* Relative to viewport for flexibility */
        transition: transform 0.3s ease, background 0.3s ease;
        
        

    }

    button span {
        position: relative;
        z-index: 10;
        transition: color 0.3s ease;
    }

    button:hover {
        transform: scale(1.05);
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
        background: linear-gradient(90deg, #ffcc00, #ff4d4d);
        color: #1a1a1a;
    }

    .dark & button::before {
        background: #f5f5f5;
    }

    /* Tablets and smaller laptops */
    @media (max-width: 1024px) {
        button {
            padding: clamp(0.4rem, 1.5vw, 0.7rem) clamp(0.8rem, 2.5vw, 1.2rem);
            font-size: clamp(11px, 1.8vw, 14px);
            max-width: 20vw;
        }
    }

    /* Mobile devices */
    @media (max-width: 640px) {
        button {
            padding: clamp(0.3rem, 1.2vw, 0.6rem) clamp(0.6rem, 2vw, 1rem);
            font-size: clamp(10px, 1.5vw, 13px);
            max-width: 100%; /* Full width in vertical layout */
            margin: 0.2rem 0;
        }
    }

    /* Ultra-small screens */
    @media (max-width: 360px) {
        button {
            padding: clamp(0.3rem, 1vw, 0.5rem) clamp(0.5rem, 1.8vw, 0.8rem);
            font-size: clamp(9px, 1.3vw, 12px);
        }
    }
`;

export default NavButton;