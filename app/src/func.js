import axios from 'axios';

export const fetchOneel = (id) => {
    const infoOne = axios.get(`https://api.escuelajs.co/api/v1/products/${id}`).then(({ data }) => {
        return data;
    })

    return infoOne;
}





