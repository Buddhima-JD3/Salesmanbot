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
        map = response.json()

        emptyList = []

        for x in map:
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
            msgx = "Unfortunately We dont have that Product or Category"
            dispatcher.utter_message(text=msgx)

        for e in entities:
            if e['entity'] == 'product':
                name = e['value']

            if name == "No" or name == "no":
                c = requests.post('http://127.0.0.1:5000/getNext', json={"message": ""})
                cdata = c.json()
                keywd = cdata[0]

                response = requests.post('http://127.0.0.1:5000/getWeather', json={"message": ""})
                map = response.json()
                feelsLike = str(map['feels_like'])
                humidity = str(map['humidity'])
                temp = str(map['temp'])
                msg1 = "Don't worry I got you, according to the Weather today,"
                dispatcher.utter_message(text=msg1)
                msg2 = "The temperature is " + temp + "°C and the humidity is " + humidity + "% and it feels like " + feelsLike + "°C. 😶‍🌫️"
                dispatcher.utter_message(text=msg2)

            else:
                keywd = name

            response = requests.post('http://127.0.0.1:5000/chat', json={"message": keywd})
            map = response.json()
            count = len(map[0])
            print(count)

            if map[0] == "No Products":
                msg3 = "Unfortunately We dont have that Product or Category"
                dispatcher.utter_message(text=msg3)

            else:
                msg4 = "Would you like to have ?"
                dispatcher.utter_message(text=msg4)

                for x in range(count):
                    brand = str(map[0][x]['brand'])
                    categoty = str(map[0][x]['category'])
                    productName = str(map[0][x]['productName'])
                    price = str(map[0][x]['price'])
                    weightOrVol = str(map[0][x]['weightOrVolume'])

                    msg = "Brand : " + brand + "<br>" + "Category : " + categoty + "<br>" + "Product name : " + productName + "<br>" + "Price : " + price + "<br>" + "Weight(Kg) or Volume(l) : " + weightOrVol
                    dispatcher.utter_message(text=msg)

        # purchace history
        # pdata = productName
        # requests.post('http://127.0.0.1:5000/chat', json={"message": pdata})

        return []


class ActionGetBrands(Action):
    def name(self) -> Text:
        return "action_get_brands"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        response = requests.post('http://127.0.0.1:5000/getAll', json={"message": ""})
        map = response.json()

        emptyList = []

        for x in map:
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

        # currentTime = requests.post('http://127.0.0.1:5000/getTime', json={"message": ""})
        # print(type(currentTime))
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
        map = weatherProduct.json()

        emptyList = []

        for x in map:
            msg = [x][0]['category']
            print(msg)
            emptyList.append(msg)

        # convert list to a set
        uniqueList = set(emptyList)

        # convert set into a list
        newList = list(uniqueList)

        strMsg = ""
        for i in newList:
            strMsg += "<br>" + i

        dispatcher.utter_message(text="Recommended products based on weather: " + strMsg)

        return []


class ActionWeatherData(Action):

    def name(self) -> Text:
        return "action_tell_weather"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        response = requests.post('http://127.0.0.1:5000/getWeather', json={"message": ""})

        map = response.json()

        feelsLike = str(map['feels_like'])
        humidity = str(map['humidity'])
        temp = str(map['temp'])

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
