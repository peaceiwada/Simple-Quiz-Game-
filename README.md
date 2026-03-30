Weather App
A simple, elegant weather application that fetches real-time weather data for any city using the OpenWeatherMap API.

https://via.placeholder.com/800x400?text=Weather+App+Screenshot

Live Demo
View Live Demo (Add your deployed link here)

Table of Contents
Features

Tech Stack

Installation

Usage

Project Structure

API Reference

Screenshots
<img width="1312" height="636" alt="Screenshot 2026-03-30 011253" src="https://github.com/user-attachments/assets/9dd4bfa5-90fc-418e-a3df-1e104d4bf9f8" />
<img width="1327" height="633" alt="Screenshot 2026-03-30 011051" src="https://github.com/user-attachments/assets/5747f170-e658-417f-a6b0-8a65a599ecd5" />
<img width="1328" height="647" alt="Screenshot 2026-03-30 010943" src="https://github.com/user-attachments/assets/ee22bb88-771b-45f6-883a-ec9e5e3a1058" />
Future Improvements

Contributing

License

Features
Real-time Weather Data - Get current weather conditions for any city

Temperature in Celsius - Displays temperature in metric units

Humidity Information - Shows humidity percentage

Weather Description - Provides detailed weather conditions

Beautiful UI - Clean, modern gradient background

Responsive Design - Works on all screen sizes

Fast & Lightweight - Simple vanilla JavaScript implementation

Tech Stack
Technology	Description
HTML5	Structure and semantic markup
CSS3	Styling, gradients, and responsive design
JavaScript (ES6+)	Async/await, fetch API, DOM manipulation
OpenWeatherMap API	Weather data provider
📦 Installation
Prerequisites
A modern web browser

Internet connection

OpenWeatherMap API key (free)

Setup
Clone the repository

bash
git clone https://github.com/peaceiwada/weather-app.git
cd weather-app
Get an API Key

Visit OpenWeatherMap

Sign up for a free account

Navigate to API Keys section

Copy your API key

Add your API Key

Open index.js (or the JavaScript file)

Replace the apikey variable with your actual key:

javascript
const apikey = "YOUR_API_KEY_HERE";
Open the application

Double-click index.html or use a local server:

bash
npx serve
Usage
Enter a city name in the input field

Click the "Check weather" button

View real-time weather information:

City name

Temperature (°C)

Weather description

Humidity percentage

Example:
text
Input: London
Output:
London
Temperature: 15°C
Weather: scattered clouds
Humidity: 72%
Project Structure
text
weather-app/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── index.js            # Weather API logic and DOM manipulation
└── README.md           # Project documentation
API Reference
This project uses the OpenWeatherMap Current Weather Data API.

Endpoint
text
https://api.openweathermap.org/data/2.5/weather
Parameters
Parameter	Type	Description
q	string	City name (e.g., "London")
appid	string	Your API key
units	string	metric for Celsius
Example Response
json
{
  "name": "London",
  "main": {
    "temp": 15.2,
    "humidity": 72
  },
  "weather": [
    {
      "description": "scattered clouds"
    }
  ],
  "cod": 200
}
📸 Screenshots
Desktop View
text
┌─────────────────────────────────┐
│         Weather App             │
│  ┌─────────────────────────┐    │
│  │   Enter city name       │    │
│  └─────────────────────────┘    │
│         [Check weather]          │
│                                  │
│  Lagos                        │
│  Temperature: 28°C            │
│  Weather: clear sky           │
│  Humidity: 65%                │
└─────────────────────────────────┘
Error Handling
text
┌─────────────────────────────────┐
│         Weather App             │
│  ┌─────────────────────────┐    │
│  │   Enter city name       │    │
│  └─────────────────────────┘    │
│         [Check weather]          │
│                                  │
│      City not found           │
└─────────────────────────────────┘
Future Improvements
Add 5-day weather forecast

Implement geolocation for auto-detection

Add weather icons (sunny, rainy, cloudy)

Save recent searches in localStorage

Add wind speed and pressure information

Dark mode toggle

Unit toggle (Celsius/Fahrenheit)

Loading animation while fetching data

Known Issues
API key is exposed in client-side code (for demo purposes). For production, consider using a backend proxy.

Rate limiting may occur with free API tier (60 calls/minute)

Contributing
Contributions are welcome! Here's how you can help:

Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
OpenWeatherMap for providing the weather API

Font Awesome for icons (if used)

Google Fonts for typography

📞 Contact
Iwada - @peaceiwada

Project Link: https://github.com/peaceiwada/weather-app

Show Your Support
If you found this project helpful, please give it a ⭐ on GitHub!

Built with by Iwada | Weather App - Check the weather anywhere, anytime! 🌍

Quick Fix for Your Code
Before uploading, fix this small error in your JavaScript:

Current (WRONG):

javascript
else{
    resultDiv.innerHTML="city not found"x   // ← The "x" at the end is a typo
}
Correct:

javascript
else{
    resultDiv.innerHTML="City not found. Please try again!";
}
Instructions to Upload to GitHub:
Create a new repository on GitHub (e.g., weather-app)

In your terminal:

bash
git init
git add .
git commit -m "Initial commit: Weather App with OpenWeatherMap API"
git branch -M main
git remote add origin https://github.com/peaceiwada/weather-app.git
git push -u origin main
