$(document).ready(function () {

    $('#weather').click(function () {
        var city = $("#city").val();

        if (city != '') {
            var url="http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=f5773b699688b5230c6ee2a320238839"
            $.getJSON(url,function(data){
                //gå till server och kolla om det finns information om city och hämta data
                console.log(data)
                // skriver ut data i console för att jag blir säker att jag här skrivit rätt url + rätt city + rätt appikey
                $.each(data,function(){
                    // tar varje data och ligga den i html 
                    $("#display").html("<h3 style='font-size:42px; font-weight: bold;'>Corrent Weather for " + data.name + " </h3>" +
                    // här valt jag vilken information jag vill hämta 
                    "<h3><strong>Weather</strong>: " + data.weather[0].main + "</h3>" +
                    "<h3><strong>Description</strong>: " + data.weather[0].description + "</h3>" +
                    "<h3><strong>Temperature</strong>: " + data.main.temp + "&deg;C</h3>" +
                    "<h3><strong>Pressure</strong>: " + data.main.pressure + " hPa</h3>" +
                    "<h3><strong>Humidity</strong>: " + data.main.humidity + "%</h3>" +
                    "<h3><strong>Min. Temperature</strong>: " + data.main.temp_min + "&deg;C</h3>" +
                    "<h3><strong>Max. Temperature</strong>: " + data.main.temp_max + "&deg;C</h3>" +
                    "<h3><strong>Wind Speed</strong>: " + data.wind.speed + " m/s</h3>" +
                    "<h3><strong>Wind Direction,</strong>: " + data.wind.deg + "</h3>")
                })
            })
        } else {
            // om jag skriver en city som finns inte denna i server visa den här meddelande i html i div class="alert alert-danger"
            $("#error").html("<div class='alert alert-danger' role='alert' id='fel'> Field cannot be empty!");
        }
    });
});
