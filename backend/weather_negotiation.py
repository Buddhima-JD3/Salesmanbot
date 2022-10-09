import requests
from tkinter import *
import math

city_name = "Colombo"
api_key = "17bd70b483cac66319d04a1fd97ec36c"

def get_weather():
    url = f"http://api.openweathermap.org/data/2.5/weather?q=Colombo&appid=17bd70b483cac66319d04a1fd97ec36c"

    response = requests.get(url).json()

    temp = response['main']['temp']
    temp = math.floor((temp * 1.8) - 459.67)  # Convert to °F
    temp = (temp - 32) * 5/9

    feels_like = response['main']['feels_like']
    feels_like = math.floor((feels_like * 1.8) - 459.67)  # Convert to °F
    feels_like = (feels_like - 32) * 5/9

    humidity = response['main']['humidity']

    return {
        'temp': temp,
        'feels_like': feels_like,
        'humidity': humidity
    }

# print(get_weather()['feels_like'])