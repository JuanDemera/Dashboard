(
    function () {
        let URL = 'https://api.open-meteo.com/v1/forecast?latitude=-2.10&longitude=-79.98&hourly=temperature_2m';
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                let timezone = data["timezone"]
                let timezoneHTML = document.getElementById("timezone")
                timezoneHTML.textContent = timezone;
            })
            .catch(console.error);
    }
)();