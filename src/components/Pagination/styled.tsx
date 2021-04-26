import styled, { css } from 'styled-components'

export const Button = styled.button`
    background-color: #02A3D6;
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px;
    :disabled {
        opacity: 0.4;
        cursor: default;
    }
`

export const Line = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow-x: auto;
`