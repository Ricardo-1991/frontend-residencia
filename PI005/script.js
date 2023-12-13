async function fetchWeather() {
    try {
        const apiKEY = "36d074bcb680fc5cd2508f727e951ce9"
        const lat = -14.796746039624054
        const lon = -39.173382403501456
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKEY}`);
        const data = await response.json();   
        return data
    }catch(err){
        console.error(err);
    }
}

async function fetchNews(){
    try {
        const apiKEY = "2868608890534b5899f08f2c292c3292"
        const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-11-13&sortBy=publishedAt&apiKey=${apiKEY}`)
        const data = await response.json();
        console.log(data);
    

    }catch(err){
        console.error(err);
    }
}

async function getWeather(){
    const weatherApi = await fetchWeather()
    
}

news()