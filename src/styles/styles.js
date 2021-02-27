import styled from "styled-components";

// FORECAST SUMMARY
export const StyledForecastSummary = styled.div`
  margin: 2px 15px 2px 0px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.6);
  backdrop-filter: blur(15.5px);
  -webkit-backdrop-filter: blur(15.5px);
  border-radius: 10px;
  text-align: center;
`;

// FORECAST DETAILS & SEARCH FORM
export const Button = styled.button`
  margin: 0.2em 0 0 0;
  background: rgba(255, 255, 255, 0.15);
  ${"" /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3); */}
  backdrop-filter: blur(15.5px);
  -webkit-backdrop-filter: blur(15.5px);
  border-radius: 5px;
  }
`;

// FORECAST DETAILS
export const StyledForecastDetails = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
`;

export const Title = styled.div`
  grid-template-columns: 1fr;
  grid-row-start: 1;
  grid-row-end: span 1;
`;

export const Container1 = styled.div`
  font-size: 1.2rem;
  column-start: 1;
  column-end: 2;
  grid-row-start: 2;
  grid-row-end: span 1;
`;

export const Container2 = styled.div`
  padding: 0.2rem 0 0 0;
  font-size: 6rem;
  column-start: 2;
  column-end: 3;
  grid-row-start: 2;
  grid-row-end: span 1;
`;
