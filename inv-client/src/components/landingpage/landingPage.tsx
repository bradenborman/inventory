import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1E90FF;
  color: black;
  font-weight: bold;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('https://www.pngitem.com/pimgs/m/144-1445051_white-cloud-clouds-overlay-hd-png-download.png');
    opacity: 0.65;
    z-index: 1;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  position: relative;
  text-align: center;
  overflow: hidden;
  
  &:after {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    animation: slide 0.3s ease-in-out;
  }

  span {
    position: relative;
    display: inline-block;
    color: #fff;
    transform: translateY(100%);
    animation: reveal 0.3s forwards ease-in-out;
    animation-delay: calc(0.1s * var(--index));
    z-index: 3;

    &.hide {
      visibility: hidden;
    }
  }
  
  @keyframes slide {
    from {
      transform: translate(0, -100%);
    }
    to {
      transform: translate(0, 0);
    }
  }
  
  @keyframes reveal {
    to {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Quote = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 5rem;
  z-index: 2;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`;

const LinkWrapper = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const NavLink = styled(Link)`
  color: black;
  font-size: 1.5rem;
  margin: 0 1rem;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
  }
`;

const quotes = [
  "'There are no shortcuts to any place worth going.' - Beverly Sills",
  "'Believe you can and you\\'re halfway there.' -Theodore Roosevelt",
  "'You are never too old to set another goal or to dream a new dream.' -C.S. Lewis",
  "'The only way to do great work is to love what you do.' -Steve Jobs",
  "'In the middle of every difficulty lies opportunity.' -Albert Einstein",
  "'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.' -Christian D. Larson",
  "'Success is not how high you have climbed, but how you make a positive difference to the world.' -Roy T. Bennett",
];


const LandingPage = () => {
  const quote = quotes[new Date().getDay()];

  return (
    <Container>
      <Title>
        {`Braden's_Inventory`.split('').map((char, index) => (
          <span
            key={index}
            style={{ '--index': index } as React.CSSProperties}
            className={classNames({ "hide": char == "_" })}
          >
            {char}
          </span>
        ))}
      </Title>
      <Quote>{quote}</Quote>
      <LinkWrapper>
        <NavLink to="/inventory">See Items</NavLink>
      </LinkWrapper>
    </Container>
  );
};
export default LandingPage;
