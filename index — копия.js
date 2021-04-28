const axios = require('axios')
const colors = require('colors')

var i = 0;
var status;
start()
async function send(){
    var agent;
    try {
        let response = await axios.post("Ссылка на ваш профиль форума на движке IPBoard", {
            headers: {
                "user-agent": `Mozilla/5.0 (Windows NT 10.0) AppleWebKit/${~~(Math.random() * 600)}.36 (KHTML, like Gecko) Chrome/${~~(Math.random() * 59)}.0.3029.110 Safari/${~~(Math.random() * 1000)}.36`,
                "sec-fetch-mode": "cors",
                "referer": "https://google.com",
                "X-Requested-With": "XMLHttpRequest",
                "content-type": "application/x-www-form-urlencoded",
                "httpsAgent": agent,
            }
        })
        return "ok"
    } catch (error) {
        return "err"    
    }   
}

async function start(){
    await setInterval(async function () {
    status = await send();
    if(status == "ok"){
        i++;
        console.log(
            `</> Успех | Накручено: ${i}`.brightGreen
        );
    }
    else{
        console.log(
            `</> Ошибка`.brightRed
        );
    }
    }, 400);
}