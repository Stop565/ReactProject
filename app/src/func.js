import axios from 'axios';

export const fetchOneel = (id) => {
    const infoOne = axios.get(`https://api.escuelajs.co/api/v1/products/${id}`).then(({ data }) => {
        return data;
    })

    return infoOne;
}


export const addLocalStorage = (item) => {
    let oldStorage = JSON.parse(localStorage.getItem("basket"));
    let check = false;

    if (oldStorage !== null) {
        oldStorage.forEach(element => {
            if (element.id === item.id) check = true;
        });
    }
    if (check) return;

    localStorage.removeItem("basket");

    if (oldStorage === null) {
        localStorage.setItem("basket", `[${JSON.stringify(item)}]`);
    } else {
        let resArr = oldStorage.concat(item);
        console.log(resArr);
        localStorage.setItem("basket", `${JSON.stringify(resArr)}`)

    }
}

export const removeItemBasket = (remEl) => {
    console.log(remEl);

    let oldStorage = JSON.parse(localStorage.getItem("basket"));

    let newArr = [];

    oldStorage.forEach((element => {
        if (element.id !== remEl.id) newArr.push(element);
    }));

    localStorage.setItem("basket", `${JSON.stringify(newArr)}`)

}







