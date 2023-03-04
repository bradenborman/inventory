import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1E90FF;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const Quote = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 2rem;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
`;

const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  margin: 0 1rem;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const LandingPage = () => (
    <Container>
        <Title>Braden's inventory</Title>
        <Quote>"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill</Quote>
        <LinkWrapper>
            <NavLink to="/inventory">See Stockpile</NavLink>
        </LinkWrapper>
    </Container>
);

export default LandingPage;
