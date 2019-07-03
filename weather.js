const key='e9a2a366f60242dd2238a9c477ce36d3';
let input=document.getElementById('search');
let button=document.getElementById('search-btn');
let iconWeather=document.getElementsByClassName('icon');

button.addEventListener('click',() => {
let city= input.value;
});

$.getJSON(
    "http://api.openweathermap.org/data/2.5/forecast?q=Antwerpen&units=%20metric&appid=e9a2a366f60242dd2238a9c477ce36d3",(data) =>{
    let icon ="https://openweathermap.org/img/w/" + data.list[0].weather[0].icon +".png";

    iconWeather[0].setAttribute('src',icon);
});




// http://api.openweathermap.org/data/2.5/forecast?q=Antwerpen&units=%20metric&appid=e9a2a366f60242dd2238a9c477ce36d3 