import TableComentarios  from '../../components/TableComentarios';
import { AuthContext } from '../../contexts/auth';
import React, { useContext } from 'react';

const styleBtn = {
    margin: '10px',
    color: '#fff',
    padding: '10px',
    background: 'red',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
}

const Table = () => {

    const { logout } = useContext(AuthContext);

    return (
        <div>
            <TableComentarios />
            <button type="button" style={styleBtn} onClick={() => logout()}>Sair</button>
        </div>
    );
}

export default Table;