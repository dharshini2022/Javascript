const input = document.querySelector(".cityInput");
const btn = document.querySelector(".submitBtn");
const resultDiv = document.querySelector(".resultDiv");
const section = document.querySelector("section");

const API_KEY ="0419e516b631c8d506781065a34b6de7"

const weatherBackgrounds = {
    Clear: "url(https://openweathermap.org//payload/api/media/file/pexels-brett-sayles-1431822_1.jpg)",
    Clouds: "url('https://tse2.mm.bing.net/th/id/OIP.dDCLw6qRlSkqNzXYb-HdEgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3')",
    Rain: "url('https://img.freepik.com/premium-photo/dramatic-sky-with-dark-clouds-heavy-rain-rain-is-falling-sheets-clouds-are-lit-up-by-sun_14117-154705.jpg?w=2000')",
    Snow: "url('https://tse1.mm.bing.net/th/id/OIP.Xc4W0tVoIuVX-SRoxBvldAHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain&o=7&rm=3')",
    Thunderstorm: "url('https://png.pngtree.com/thumb_back/fw800/background/20220312/pngtree-typhoon-rainstorm-thunderstorm-lightning-weather-image_1062077.jpg')",
    Drizzle: "url('https://img.freepik.com/premium-photo/dramatic-sky-with-dark-clouds-heavy-rain-rain-is-falling-sheets-clouds-are-lit-up-by-sun_14117-154705.jpg?w=2000')",
    Mist: "url('https://img.freepik.com/premium-photo/dramatic-sky-with-dark-clouds-heavy-rain-rain-is-falling-sheets-clouds-are-lit-up-by-sun_14117-154705.jpg?w=2000')"
};

btn.addEventListener("click", async () => {
    const city = input.value;

    if (!city) {
        resultDiv.innerText = "Please enter a city name";
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        console.log(data);
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const weather = data.weather[0].description;
        const condition = data.weather[0].main;

        resultDiv.innerHTML = `
            <h2>${city}</h2>
            <p>Temperature: ${temp}°C</p>
            <p>Humidity: ${humidity}%</p>
            <p>Condition: ${weather}</p>
        `;

        const bg = weatherBackgrounds[condition] || weatherBackgrounds["Clear"];

        section.style.backgroundImage = bg;
    } catch (error) {
        resultDiv.innerText = "Error: " + error.message;
    }
});