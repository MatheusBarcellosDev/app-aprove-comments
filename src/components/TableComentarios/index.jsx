import { Container } from './styled';

import {getComents, deleteComents, updateComentsStatus} from '../../services/fechApi';

import React, { useEffect, useState } from 'react';



const TableComentarios = () => {

    const [coments, setComents] = useState([]);

    const deleteList = (id) => {
        deleteComents(id)
        .then(() => {
            setComents(coments.filter(coment => coment.id !== id))
        })
    };


    const updateComents = (id, name, email) => {
        updateComentsStatus(id, name, email)
        .then(() => {
            setComents(coments.filter(coment => coment.id !== id))
        }
        );
    };
    


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

                    {coments.length === 0 && <tr><td colSpan="5">Nenhum comentário cadastrado</td></tr>}

                    {coments.map(coment => (
                        <tr key={coment.id}>
                            <th scope="row">{coment.id}</th>
                            <td>{coment.name}</td>
                            <td>{coment.email}</td>
                            <td>{coment.message}</td>
                            <td>
                                <button className="btn-accept"
                                    onClick={() => {updateComents(coment.id, coment.name, coment.email)}}
                                >Adicionar</button>
                                <button className="btn-reject"
                                    onClick={() => {deleteList(coment.id)}}
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
