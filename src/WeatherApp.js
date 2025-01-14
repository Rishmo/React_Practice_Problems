import React, { useEffect, useState } from 'react' // Import useEffect and useState hooks

export default function WeatherApp() { // Export WeatherApp component
    const [weather,setWeather] = useState(null); // Declare weather and setWeather variables using useState hook

    useEffect(()=> { // Declare useEffect hook
        if(navigator.geolocation) { // Check if navigator.geolocation is available
            navigator.geolocation.getCurrentPosition((position) => { // Get current position
                const latitude = position.coords.latitude; // Get latitude
                const longitude = position.coords.longitude; // Get longitude

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=53cbf6b7bd02a2df9591c91dca9a2b85
                `) // Fetch weather data
                .then((response)=>response.json()) // Convert response to JSON
                .then((data) => setWeather(data)); // Set weather data
            }) // End of getCurrentPosition method
        } // End of if block
    },[]) // Pass empty array as second argument to useEffect hook

  return ( // Return JSX
    <div> {/* JSX div element */}
      {weather ? ( // Check if weather is available
        <div> {/* JSX div element */}
            <h2>Current Weather</h2> {/* JSX h2 element */}
            <p>Temperature:{weather.main.temp}</p> {/* JSX p element */}
            <p>Conditions:{weather.weather[0].description}</p> {/* JSX p element */}
            </div> // JSX div element
      ):( // Else block
                <p> {/* JSX p element */}
                    Loading ..... {/* JSX text */}
                </p> // JSX p element
      ) // End of ternary operator
} {/* End of JSX div element */}
    </div> // JSX div element
  ) // End of return statement
}  // End of WeatherApp component