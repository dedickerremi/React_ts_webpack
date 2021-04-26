import styled, { css } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    @media screen and (min-width: 960px) {
        width: 75%;
    }
    @media screen and (min-width: 1440px) {
        width: 50%;
    }
    margin: 0 auto;
`

export const Center = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;   
`

export const Title = styled.h1`
    color: #0C2A31;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`

export const Button = styled.button`
    background-color: #007ea8;
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
    ${props => props.css && css(...props.css)};
`