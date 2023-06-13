(
    function () {
        let URL = 'https://api.open-meteo.com/v1/forecast?latitude=-2.20&longitude=-79.89&hourly=temperature_2m';
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                let timezone = data["timezone"]
                let timezoneHTML = document.getElementById("timezone")
                timezoneHTML.textContent = timezone;

                let timezone_abbreviation = data["timezone_abbreviation"]
                let timezone_abbreviationHTML = document.getElementById("gmt")
                timezone_abbreviationHTML.textContent = timezone_abbreviation;

                let elevation = data["elevation"]
                let elevationHTML = document.getElementById("elevation")
                elevationHTML.textContent = elevation;

               
            })
            .catch(console.error);
    }
)();

setInterval(function() {
    let fecha = new Date();
    let horaLocal = fecha.toLocaleTimeString();
    let horalocalHTML = document.getElementById("horaLocal")
    horalocalHTML.textContent = horaLocal;
  }, 1000);