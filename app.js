// https://restcountries.com/v3.1/name/{name}

function serchCuntrie(){
    let searchValue=document.getElementById("txtSearchValue").value;

    let officialName = document.getElementById("officialName");
    let name = document.getElementById("name");
    let img =  document.getElementById("img");
    let capital =  document.getElementById("capital");
    let region =  document.getElementById("region");
    let Text =  document.getElementById("Text");
    let population =  document.getElementById("population");
    let details =  document.getElementById("details");
    
    console.log(searchValue);
    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then(res=>res.json())
    .then(data =>{

        data.forEach(obj=>{
            officialName.innerText = "Official Name: "+obj.name.official;
            name.innerText = "Name : "+obj.name.common;
            capital.innerText = "Capital : "+obj.capital;
            region.innerText = "Region : "+obj.region;
            population.innerText = "Population : "+obj.population;
            Text.innerHTML = `View in map :<a href="${obj.maps.googleMaps}">GoogleMap</a>/<a href="${obj.maps.openStreetMaps}">OpenStreetMaps</a>`
            img.innerHTML=`<img src="${obj.flags.png}" alt="">`
            details.innerHTML = `For more details : <a href="https://en.wikipedia.org/wiki/${searchValue}">Details</a>`
        })
        console.log(data);



    
    })
}