// const button = document.querySelector("geo-button");
// button.addEventListener("click", ()=>{
//     if(navigator.geolocation){
//         button.innerText = "Allow to detect location";
//         navigator.geolocation.getCurrentPosition(onSuccess, onError);
//     }else{
//         button.innerText = "Your browser not support";
//     }
    
// });
// function onSuccess(position){
//     button.innerText = "Detecting your location...";
//     let {latitude, longitude} = position.coords;
//     fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=03c62c6a9f03465ea6c8b43df057dd47`)
//     .then(response => response.json()).then(response =>{
//         let allDetails = response.results[0].components;
//         console.table(allDetails);
//         let {county, postcode, country} = allDetails;
//         button.innerText = `${county} ${postcode}, ${country}`;
//     }).catch(()=>{
//         button.innerText = "Something went wrong";
//     });
// }
// function onError(error){
//     if(error.code == 1){
//         button.innerText = "You denied the request";
//     }else if(error.code == 2){
//         button.innerText = "Location is unavailable";
//     }else{
//         button.innerText = "Something went wrong";
//     }
//     button.setAttribute("disabled", "true");
// }


// const API_KEY = '03c62c6a9f03465ea6c8b43df057dd47';

// const button = document.querySelector("geo-button");
// button.addEventListener("click", ()=>{
//     if(navigator.geolocation){
//         button.innerText = "Allow to detect location";
//         navigator.geolocation.getCurrentPosition(onSuccess, onError);
//     }else{
//         button.innerText = "Your browser not support";
//     }
    
// });
// function onSuccess(position){
//     button.innerText = "Detecting your location...";
//     let {latitude, longitude} = position.coords;
//     fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`)
//     .then(response => response.json()).then(response =>{
//         let allDetails = response.results[0].components;
//         console.table(allDetails);
//         let {county, postcode, country} = allDetails;
//         button.innerText = `${county} ${postcode}, ${country}`;
//     }).catch(()=>{
//         button.innerText = "Something went wrong";
//     });
// }
// function onError(error){
//     if(error.code == 1){
//         button.innerText = "You denied the request";
//     }else if(error.code == 2){
//         button.innerText = "Location is unavailable";
//     }else{
//         button.innerText = "Something went wrong";
//     }
//     button.setAttribute("disabled", "true");
// }

const button = document.querySelector(".geo-button");
button.addEventListener("click", ()=>{
     console.log('Print')
    if(navigator.geolocation){
        button.innerText = "Allow to detect location";
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        button.innerText = "Your browser not support";
    }
});

function onSuccess(position){
    button.innerText = "Detecting your location...";
    let {latitude, longitude} = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=03c62c6a9f03465ea6c8b43df057dd47`,Headers)
    // https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=03c62c6a9f03465ea6c8b43df057dd47
    .then(response => response.json()).then(response =>{
        console.log(response0);
        let allDetails = response.results[0].components;
        console.table(allDetails);
        let {county, postcode, country} = allDetails;
        button.innerText = `${county} ${postcode}, ${country}`;
    }).catch(()=>{
        button.innerText = "Something went wrong";
    });
}

function onError(error){
    if(error.code == 1){
        button.innerText = "You denied the request";
    }else if(error.code == 2){
        button.innerText = "Location is unavailable";
    }else{
        button.innerText = "Something went wrong";
    }
    button.setAttribute("disabled", "true");
}