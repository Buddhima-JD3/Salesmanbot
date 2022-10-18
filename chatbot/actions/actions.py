import json
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

        print(entities)

        if not entities:
            msg = "Unfortunately We dont have that Product or Category"

        for e in entities:
            if e['entity'] == 'product':
                name = e['value']
                print("from name" + name)

            if name == "No" or name == "no":
                c = requests.post('http://127.0.0.1:5000/getNext', json={"message": ""})
                cdata = c.json()
                print(cdata)
                keywd = cdata[0]

            else:
                keywd = name

            response = requests.post('http://127.0.0.1:5000/chat', json={"message": keywd})
            map = response.json()

            if map[0] == "No Products":
                msg = "Unfortunately We dont have that Product or Category"

            else:
                brand = str(map[0][0]['brand'])
                categoty = str(map[0][0]['category'])
                productName = str(map[0][0]['productName'])
                price = str(map[0][0]['price'])
                weightOrVol = str(map[0][0]['weightOrVolume'])

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
