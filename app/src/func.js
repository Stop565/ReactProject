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


export const createUser = (nameUser, email, password) => {
    axios.post('https://api.escuelajs.co/api/v1/users/', {
        "name": nameUser,
        "email": email,
        "password": password,
        "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867"
    }).then((response) => {
        localStorage.setItem("userW", JSON.stringify(response.data))
        console.log("Новий юзер");

    }).catch(function (error) {
        console.log("Щось не так func createUser");
    });

    axios.post('https://api.escuelajs.co/api/v1/auth/login', {
        "email": email,
        "password": password,
    }).then((response) => {
        if (response.status === 201) {
            localStorage.setItem("token", JSON.stringify(response.data));
            authUser1(response);
        }
        console.log("Отримання токенів");
    }).catch(function (error) {
        console.log("Щось не так func createUser");
    });


    const authUser1 = (token) => {
        console.log(token.data.access_token)
        axios({
            method: "get",
            url: "https://api.escuelajs.co/api/v1/auth/profile",
            headers: {
                Authorization: `Bearer ${token.data.access_token}`,
            },
        }).then((response) => {
            console.log(response)
            console.log("Запит на авторизацію");
            localStorage.setItem("userAuth", JSON.stringify(response.data))

        }).catch(function (error) {
            console.log("Щось не так func createUser");
        });
    }
}

export const loginUser = (email, password) => {
    axios.post('https://api.escuelajs.co/api/v1/auth/login', {
        "email": email,
        "password": password,
    }).then((response) => {
        console.log(response)
        if (response.status === 201) {
            localStorage.setItem("token", JSON.stringify(response.data));
        }
        console.log("Отримання токенів");
    }).catch(function (error) {
        console.log(error);
    });

    const token = JSON.parse(localStorage.getItem("token"));

    axios({
        method: "get",
        url: "https://api.escuelajs.co/api/v1/auth/profile",
        headers: {
            Authorization: `Bearer ${token.access_token}`,
        },
    }).then((response) => {
        console.log(response)
        console.log("Запит на авторизацію");
        localStorage.setItem("userAuth", JSON.stringify(response.data))


    }).catch(function (error) {
        console.log("Щось не так func createUser");
    });

}













