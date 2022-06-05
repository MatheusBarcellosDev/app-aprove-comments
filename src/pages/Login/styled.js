import styled from 'styled-components';

export const Container = styled.div`

    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        width: 30%;
    }

    input {
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: #333;
        margin: 0 0 10px;
    }

    button {
        margin: 5px 0 0;
        height: 44px;
        background: #3b9eff;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;
        cursor: pointer;
    }

    button:hover {
        background: #2c86bf;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    }


`;