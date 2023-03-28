import axios from 'axios';

export const fetchOneel = (id) => {
    const infoOne = axios.get(`https://api.escuelajs.co/api/v1/products/${id}`).then(({ data }) => {
        return data;
    })

    return infoOne;
}


export const addLocalStorage = (item) => {
    let oldStorage = JSON.parse(localStorage.getItem("basket"));

    let id = item.id;


    if (oldStorage === null) {
        localStorage.setItem("basket", `[{"${id}": ${JSON.stringify(item)}}]`);
    } else {
        //let newArr = oldStorage.push({ id: JSON.stringify(item) });
        oldStorage.push(`{"${id}": ${JSON.stringify(item)})}`);
        console.log(oldStorage);
        //localStorage.setItem("basket", `{"session":[${JSON.stringify(oldStorage.session)},{"${id}": ${JSON.stringify(item)}}]}`);


        //localStorage.setItem("basket", oldStorage.id = JSON.stringify(item));
        //localStorage.setItem("basket", JSON.stringify(newArr));
        //localStorage.setItem("basket", oldStorage + `{"${id}": ${JSON.stringify(item)}}`);

    }

    //console.log(JSON.parse(localStorage.getItem("basket")).session[0]);

    console.log(localStorage.getItem("basket"));
    //console.log(JSON.parse(localStorage.getItem("basket")));

}







