import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
  /* dark shades of primary color*/
  --clr-primary-1: hsl(205, 86%, 17%);
  --clr-primary-2: hsl(205, 77%, 27%);
  --clr-primary-3: hsl(205, 72%, 37%);
  --clr-primary-4: hsl(205, 63%, 48%);
  /* primary/main color */
  --clr-primary-5: hsl(205, 78%, 60%);
  /* lighter shades of primary color */
  --clr-primary-6: hsl(205, 89%, 70%);
  --clr-primary-7: hsl(205, 90%, 76%);
  --clr-primary-8: hsl(205, 86%, 81%);
  --clr-primary-9: hsl(205, 90%, 88%);
  --clr-primary-10: hsl(205, 100%, 96%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 620px;
}

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: var(--clr-grey-10);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.25rem;
}

h4 {
  font-size: 0.875rem;
}

p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-5);
}

@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1rem;
  }

  body {
    font-size: 1rem;
  }

  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}

.section {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}

@media screen and (min-width: 992px) {
  .section {
    width: 95vw;
  }
}

.btn {
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
}

main {
  width: 90vw;
  max-width: var(--fixed-width);
  margin: 5rem auto;
}

.title {
  text-align: center;
  margin-bottom: 4rem;
}

.underline {
  width: 6rem;
  height: 0.25rem;
  background: var(--clr-primary-5);
  margin-left: auto;
  margin-right: auto;
}

.single-tour {
  background: var(--clr-white);
  border-radius: var(--radius);
  margin: 2rem 0;
  box-shadow: var(--light-shadow);
  transition: var(--transition);
}

.single-tour:hover {
  box-shadow: var(--dark-shadow);
}

.single-tour img {
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-top-right-radius: var(--radius);
  border-top-left-radius: var(--radius);
}

.tour-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.tour-info h4 {
  margin-bottom: 0;
}

.single-tour button {
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  color: var(--clr-primary-5);
  font-size: 1rem;
  cursor: pointer;
  padding-left: 0.25rem;
}

.tour-price {
  color: var(--clr-primary-5);
  background: var(--clr-primary-10);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
}

.single-tour footer {
  padding: 1.5rem 2rem;
}

.single-tour .delete-btn {
  display: block;
  width: 200px;
  margin: 1rem auto 0 auto;
  color: var(--clr-red-dark);
  letter-spacing: var(--spacing);
  background: transparent;
  border: 1px solid var(--clr-red-dark);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
}`;
