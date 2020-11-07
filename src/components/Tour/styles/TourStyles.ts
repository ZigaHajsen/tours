import styled from 'styled-components/macro';

export const Article = styled.article`
  background: var(--clr-white);
  border-radius: var(--radius);
  margin: 2rem 0;
  box-shadow: var(--light-shadow);
  transition: var(--transition);

  &:hover {
    box-shadow: var(--dark-shadow);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-top-right-radius: var(--radius);
  border-top-left-radius: var(--radius);
`;

export const Footer = styled.footer`
  padding: 1.5rem 2rem;
`;

export const TourInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const Name = styled.h4`
  margin-bottom: 0;
`;

export const Price = styled.h4`
  color: var(--clr-primary-5);
  background: var(--clr-primary-10);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
`;

export const Paragraph = styled.p``;

export const Button = styled.button`
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  color: var(--clr-primary-5);
  font-size: 1rem;
  cursor: pointer;
  padding-left: 0.25rem;
`;

export const DeleteButton = styled.button`
  display: block;
  width: 200px;
  margin: 1rem auto 0 auto;
  color: var(--clr-red-dark);
  letter-spacing: var(--spacing);
  background: transparent;
  border: 1px solid var(--clr-red-dark);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
`;
