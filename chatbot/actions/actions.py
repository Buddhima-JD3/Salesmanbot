import json
import datetime
from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher

import requests


class ActionHelloWorld(Action):
    def name(self) -> Text:
        return "action_hello_world"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        dispatcher.utter_message(text="Hello World!")

        return []


class ActionGetProduct(Action):
    def name(self) -> Text:
        return "action_get_productlist"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        response = requests.post('http://127.0.0.1:5000/getAll', json={"message": ""})
        mapdata = response.json()

        emptyList = []

        for x in mapdata:
            msg = x['category']
            emptyList.append(msg)

        # convert list to a set
        uniqueList = set(emptyList)

        # convert set into a list
        newList = list(uniqueList)

        strMsg = ""
        for i in newList:
            strMsg += "<br>" + i

        dispatcher.utter_message(text="Available product categories : " + strMsg)

        return []


class ActionSearchproduct(Action):
    def name(self) -> Text:
        return "action_search_product"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        entities = tracker.latest_message['entities']

        if not entities:
            msgx = "Unfortunately We dont have that Product or Category 😥"
            dispatcher.utter_message(text=msgx)

        for e in entities:
            if e['entity'] == 'product':
                name = e['value']

            if name == "No" or name == "no":
                c = requests.post('http://127.0.0.1:5000/getNext', json={"message": ""})
                cdata = c.json()
                keywd = cdata[0]

                if keywd == "weather":
                    response = requests.post('http://127.0.0.1:5000/getWeather', json={"message": ""})
                    mapdata = response.json()

                    feelsLike = str(mapdata['feels_like'])
                    humidity = str(mapdata['humidity'])
                    temp = str(mapdata['temp'])

                    msg1 = "Don't worry I got you, according to the Weather today 🤗"
                    dispatcher.utter_message(text=msg1)

                    msg2 = "The temperature is " + temp + "°C and the humidity is " + humidity + "% and it feels like " + feelsLike + "°C. 😶‍🌫️"
                    dispatcher.utter_message(text=msg2)

                if keywd == "ok":
                    keywd = "invd"
                    msgt = "Unfortunately We dont have anymore products. Sorry 😥"
                    dispatcher.utter_message(text=msgt)

            else:
                keywd = name

            if keywd == "invd":
                return []
            else:

                response = requests.post('http://127.0.0.1:5000/chat', json={"message": keywd})
                mapdata = response.json()
                count = len(mapdata[0])

                if mapdata[0] == "No Products":
                    msg3 = "Unfortunately We dont have that Product or Category 😥"
                    dispatcher.utter_message(text=msg3)

                else:
                    msg4 = "Would you like to have?"
                    dispatcher.utter_message(text=msg4)

                    for x in range(count):
                        brand = str(mapdata[0][x]['brand'])
                        categoty = str(mapdata[0][x]['category'])
                        productName = str(mapdata[0][x]['productName'])
                        price = str(mapdata[0][x]['price'])
                        weightOrVol = str(mapdata[0][x]['weightOrVolume'])

                        msg = "Brand : " + brand + "<br>" + "Category : " + categoty + "<br>" + "Product name : " + productName + "<br>" + "Price : " + price + "<br>" + "Weight(Kg) or Volume(l) : " + weightOrVol + "<button>" + productName + "," + categoty
                        dispatcher.utter_message(text=msg)

        return []


class ActionGetBrands(Action):
    def name(self) -> Text:
        return "action_get_brands"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        response = requests.post('http://127.0.0.1:5000/getAll', json={"message": ""})
        mapdata = response.json()

        emptyList = []

        for x in mapdata:
            msg = x['Brands']
            emptyList.append(msg)

        # convert list to a set
        uniqueList = set(emptyList)

        # convert set into a list
        newList = list(uniqueList)

        strMsg = ""
        for i in newList:
            strMsg += "<br>" + i

        dispatcher.utter_message(text="Available product Brands : " + strMsg)

        return []


class ActionGreetByTime(Action):

    def name(self) -> Text:
        return "action_Greet_byTime"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        currentTime = datetime.datetime.now()

        if currentTime.hour < 12:
            msg = "Good Morning 🔆"
        elif currentTime.hour < 18:
            msg = "Good Afternoon 😊"
        else:
            msg = "Good Evening 🌓"

        dispatcher.utter_message(text=msg)

        return []


class ActionWeatherProducts(Action):

    def name(self) -> Text:
        return "action_weather_based_products"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        weatherProduct = requests.post('http://127.0.0.1:5000/getWeatherProducts', json={"message": ""})
        mapdata = weatherProduct.json()
        mapcount = len(mapdata[0])

        for x in range(mapcount):
            brand = str(mapdata[0][x]['brand'])
            categoty = str(mapdata[0][x]['category'])
            productName = str(mapdata[0][x]['productName'])
            price = str(mapdata[0][x]['price'])
            weightOrVol = str(mapdata[0][x]['weightOrVolume'])

            msg = "Brand : " + brand + "<br>" + "Category : " + categoty + "<br>" + "Product name : " + productName + "<br>" + "Price : " + price + "<br>" + "Weight(Kg) or Volume(l) : " + weightOrVol + "<button>"
            dispatcher.utter_message(text=msg)

        return []


class ActionWeatherData(Action):

    def name(self) -> Text:
        return "action_tell_weather"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        response = requests.post('http://127.0.0.1:5000/getWeather', json={"message": ""})

        mapdata = response.json()

        feelsLike = str(mapdata['feels_like'])
        humidity = str(mapdata['humidity'])
        temp = str(mapdata['temp'])

        msg = "The temperature is " + temp + "°C and the humidity is " + humidity + "% and you feels like " + feelsLike + "°C. 😶‍🌫️"

        dispatcher.utter_message(text=msg)

        return []

# class ActionHelloWorld(Action):
#
#     def name(self) -> Text:
#         return "action_hello_world"
#
#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#
#         dispatcher.utter_message(text="Hello World!")
#
#         return []
