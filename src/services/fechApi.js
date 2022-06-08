import axios from "axios";


const createSession = async (email, password) => {
    const token = await axios.post(process.env.REACT_APP_URL_LOGIN, {email, password});
    return token.data;
}

const getComents = async () => {
    const coments = await axios.get(process.env.REACT_APP_URL_GET_TESTIMONIALS);
    const comentsFiltered = coments.data.comentarios.filter(coment => coment.status === false);
    return comentsFiltered;
};

const deleteComents = async (id) => {
    const coments = await axios.delete(process.env.REACT_APP_URL_DELETE_TESTIMONIAL + id);
    return coments.data;
}

const updateComentsStatus = async (id) => {
    const coments = await axios.put(process.env.REACT_APP_URL_UPDATE_TESTIMONIAL + id);
    return coments.data;
}


export { getComents, deleteComents, updateComentsStatus, createSession };