import { Container } from './styled';

import {getComents, deleteComents, updateComentsStatus} from '../../services/fechApi';

import React, { useEffect, useState } from 'react';



const TableComentarios = () => {

    const [coments, setComents] = useState([]);



    useEffect(() => {
        getComents().then(data => {
            setComents(data);
        }
        );
    }
    , []);



    return (
        <Container>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Comentário</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>

                    {coments.map(coment => (
                        <tr key={coment.id}>
                            <th scope="row">{coment.id}</th>
                            <td>{coment.name}</td>
                            <td>{coment.email}</td>
                            <td>{coment.message}</td>
                            <td>
                                <button className="btn-accept"
                                    onClick={() => {updateComentsStatus(coment.id, coment.name, coment.email)}}
                                >Adicionar</button>
                                <button className="btn-reject"
                                    onClick={() => deleteComents(coment.id)}
                                >Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}

export default TableComentarios;
