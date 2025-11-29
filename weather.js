// const searchBox=document.querySelector(".input-box");
// const searchBtn=document.querySelector(".search-btn");
// const image=document.querySelector("img");
// const temperature=document.querySelector(".temp");
// const humidity=document.querySelector(".humidity");
// const windspeed=document.querySelector("wind");
// const error=document.querySelector(".error");
// const condition=document.querySelector(".condition")

// searchBtn.addEventListener("click",()=>{
//     let query=searchBox.value;
//     error.style.display="none" 
//     let key="30e30f14977b4541b13153919252711"
//     let url=`http://api.weatherapi.com/v1/current.json?key=${key}&q=${query}&aqi=no` 
//     if(!query){
//         error.style.display="block" 
//     }else{
//         fetch(url).then((response)=>{
//           return  response.json()
//         }).then((data)=>{
//             console.log(data.current);
//             image.src=`http:${data.current.condition.icon}`;
//             temperature.innerHTML=`${data.current.temp_c}°C`;
//             condition.innerHTML=`${data.current.condition.text}`;
//             humidity.innerHTML=`${data.current.humidity}%`;
//             windspeed.innerHTML=`${data.current.wind_kph} km/h`
//         }).catch(err=>{
//             console.log(err)
//             error.style.display="block";
//              error.innerHTML ="Location Not Matched";
             
            
//         })
//     }
// })

 let searchBox=document.querySelector(".search-box");
 
 let searchBtn= document.querySelector(".search-btn");

 const temperature=document.querySelector(".temp");
 const humidity=document.querySelector(".humidity");
 const windspeed=document.querySelector(".wind");
 const condition=document.querySelector(".condition");
 const weatherIcon=document.querySelector(".weather-icon");
 const error=document.querySelector(".error");
const weather=document.querySelector(".weather")

 let apiKey="30e30f14977b4541b13153919252711";
 
  
 
 
    async function checkWeather(){
       try{
         let cityName = searchBox.value.trim(); 
          if(!cityName){
           showError("Please enter city name")
            return;
        }
         
        let apiUrl=`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no` 
    

        
        const response=await fetch(apiUrl);
        const data=await response.json();
        if(data.error){
           showError("Invalid city name")
            return;
        }
        
            
        
        temperature.innerHTML=`${data.current.temp_c}°C`;
        humidity.innerHTML=`${data.current.humidity}%`;
        windspeed.innerHTML=`${data.current.wind_kph} km/h`;
         condition.innerHTML=`${data.current.condition.text} `;
        weatherIcon.src="https:" + data.current.condition.icon; 
        weather.style.display="block" ;
      error.style.display="none"
      
   

        }
catch(err){
    
   showError("something went wrong")
    

}
       }
function showError(msg){
     error.style.display="block";
        error.innerHTML=msg
        weather.style.display="none";

   
}
      

    searchBtn.addEventListener("click",checkWeather)