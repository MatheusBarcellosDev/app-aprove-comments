import styled from "styled-components";

export const Container = styled.div`

    table{
        width: 100%;
        text-align: center;
        border-collapse: collapse;
    }

    th, td {
        border-bottom: 1px solid #ddd;
        padding: 2rem;
    }

    .btn-accept {
        background-color: #4CAF50;
        color: white;
        padding: 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 1rem;
    }

    .btn-reject {
        background-color: #f44336;
        color: white;
        padding: 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 1rem;
    }

    .btn-accept:hover {
        background-color: #45a049;
    }

    .btn-reject:hover {
        background-color: #c0392b;
    }

    button {
        margin-right: 1rem;
    }

`;