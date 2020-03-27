function updateMap() {
    console.log("Updateing map for every 100 seconds")
    fetch('https://corona.lmao.ninja/countries')
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.forEach(element => {
                lat = element.countryInfo.lat;
                long = element.countryInfo.long;

                //marks on the map

                Infected = element.cases;
                if (Infected>1000){
                    color= "rgb(255, 102, 102)";
                }
                if (Infected>2000)
                {
                    color= 'rgb(255, 51, 51)'; 
                }
                if (Infected>4000)
                {
                    color= 'rgb(255, 0, 0)'
                }
                if (Infected>7000)
                {
                    color= 'rgb(153, 0, 0)'
                }
                if (Infected>9000)
                {
                    color= 'rgb(102, 0, 0)'
                }


                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                    
                })
                    .setLngLat([long, lat])
                    .addTo(map);
            });
        })
}


let interval = 100000;
setInterval(updateMap, interval)
