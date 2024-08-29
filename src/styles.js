import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    width: 100%;
    min-height: 100vh;
    gap: 20px;
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 30px;
`;

export const Linguagem = styled.button`
    display: flex;
    justify-content: space-between;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    width: 200px;

    &:hover {
        background-color: ${(props) => props.color};
    }
`;