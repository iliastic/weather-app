const key='e9a2a366f60242dd2238a9c477ce36d3';
let input=document.getElementById('search');
let button=document.getElementById('search-btn');
let iconWeather=document.getElementsByClassName('icon');
let temper=document.getElementsByClassName('temp');
let windD=document.getElementsByClassName('wind');
let humid=document.getElementsByClassName('humidity');

button.addEventListener('click',() => {
let city= input.value;

$.getJSON(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=e9a2a366f60242dd2238a9c477ce36d3`,(data) =>{
        
        //icon
        
        for (let i= 0, d=0 ; i< iconWeather.length; i++, d+=8) {
            var icon = data.list[d].weather[0].icon;  
            iconWeather[i].setAttribute('src',"https://openweathermap.org/img/w/" + icon +".png");         
            
            //temperature
            
            temper[i].innerHTML= data.list[d].main.temp + "°C";

            //humidity

            humid[i].innerHTML=data.list[d].main.humidity + "% humidity";
            console.log(data.list[d].main.humidity + "% humidity");

             /* //wind

             windD[i].innerHTML=data.list[0].wind;
             console.log(data.list[0].wind)*/
 
            
        } 
        
        
    });
});
    



// http://api.openweathermap.org/data/2.5/forecast?q=Antwerpen&units=%20metric&appid=e9a2a366f60242dd2238a9c477ce36d3 