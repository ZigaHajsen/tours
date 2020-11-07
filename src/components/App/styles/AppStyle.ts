import styled from 'styled-components/macro';

export const Main = styled.main`
  width: 90vw;
  max-width: var(--fixed-width);
  margin: 5rem auto;
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const TitleText = styled.h2``;

export const Button = styled.button`
  background: var(--clr-primary-5);
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  text-transform: capitalize;
  color: var(--clr-white);
  letter-spacing: var(--spacing);
  border-color: transparent;
  cursor: pointer;
  margin-top: 2rem;
  font-size: 1.2rem;
`;
