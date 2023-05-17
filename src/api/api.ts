import axios from "axios";

const dataWeatherAsync = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=79acc825b1fd794ef0b5bcbb3aa853f0`,
        }) 
            .then((resp) => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export {dataWeatherAsync}
