import styled, { css } from 'styled-components'

export const Th = styled.th`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  padding: 2px;
  text-transform: uppercase;
  border: 2px solid lightgrey;
  ${props => props.css && css(...props.css)};
`;

export const Td = styled.td`
text-align: center;
border: 2px solid lightgrey;
${props => props.css && css(...props.css)};
`;

export const Tr = styled.tr`
  border: 2px solid lightgrey;
  ${props => props.css && css(...props.css)};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
  `

export const Button = styled.button`
  background-color: #007ea8; /* Green */
  border: 1px solid #007ea8;
  color: #fff;
  text-transform: uppercase;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  :disabled {
    opacity: 0.4;
    cursor: default;
}
`