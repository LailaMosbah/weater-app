# 🌍 Bilingual Weather App

A simple weather application built with **React**, **Material UI (MUI)**, and **i18next**.  
The app supports **English and Arabic**, automatically adjusts **text direction (LTR/RTL)**, and formats **numbers and dates** based on the selected language.  

Weather data is fetched in real-time from the **OpenWeatherMap API**.

---

## ✨ Features
- 🌐 **Bilingual support**: English 🇬🇧 / Arabic 🇪🇬  
- 🔄 **RTL/LTR switching** when toggling languages  
- 📅 **Localized dates** with [Moment.js](https://momentjs.com/)  
- 🔢 **Localized number formatting** using `Intl.NumberFormat`  
- ☁️ **Live weather data** from [OpenWeatherMap API](https://openweathermap.org/api)  
- 🎨 Styled with [Material UI](https://mui.com/)  

---

## 🛠️ Tech Stack
- [React](https://react.dev/)  
- [Material UI](https://mui.com/)  
- [i18next](https://react.i18next.com/)  
- [Moment.js](https://momentjs.com/)  
- [Axios](https://axios-http.com/)  
- [OpenWeatherMap API](https://openweathermap.org/)  

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
````

### 2. Install dependencies

```bash
npm install
```

### 3. Add your API key

Replace the demo API key in `App.jsx` with your own from [OpenWeatherMap](https://home.openweathermap.org/api_keys):

```js
const API_KEY = "YOUR_API_KEY_HERE";
```

### 4. Run the app

```bash
npm start
```

---

## 🌐 Usage

* Click the **language toggle button** to switch between English and Arabic.
* The **date, numbers, and text direction** will update automatically.
* Displays **temperature, weather condition, and min/max values** with icons.

---

## 🚀 Future Enhancements

- **City Selector**: Allow users to select a country and city from a dropdown list to quickly view weather data without typing.
- **Use My Location**: Add geolocation support so the app can automatically detect the user’s current location and display the weather based on latitude and longitude.
- **Improved UI**: Enhance the interface with icons, gradients, and better typography for a more user-friendly experience. 
---

## 📜 License

This project is licensed under the MIT License.
Feel free to use and modify it for your own projects.

---

## 🙌 Acknowledgements

* [OpenWeatherMap](https://openweathermap.org/) for weather data
* [i18next](https://www.i18next.com/) for internationalization
* [Material UI](https://mui.com/) for UI components



