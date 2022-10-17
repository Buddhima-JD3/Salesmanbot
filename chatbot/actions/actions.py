import json
from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher

import requests

negoData = ""


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

        for e in entities:
            if e['entity'] == 'product':
                name = e['value']

            if name == "":
                keywd = "No"  # + negoData
            if name == "Highland" or name == "highland":
                keywd = "Highland"
            if name == "Milo" or name == "milo":
                keywd = "Milo"
            if name == "Ambewela" or name == "ambewela":
                keywd = "Ambewela"
            if name == "Pelawaththa" or name == "pelawaththa":
                keywd = "Pelawaththa"
            if name == "Anchor" or name == "anchor":
                keywd = "Anchor"
            if name == "ElephantHouse" or name == "elephant house":
                keywd = "ElephantHouse"
            if name == "Milk" or name == "milk":
                keywd = "Milk"
            if name == "Yoghurt" or name == "yoghurt":
                keywd = "Yoghurt"
            if name == "IceCream" or name == "ice cream":
                keywd = "IceCream"
            if name == "Cheese" or name == "cheese":
                keywd = "Cheese"
            if name == "Butter" or name == "butter":
                keywd = "Butter"
            if name == "Cheese" or name == "cheese":
                keywd = "Cheese"
            if name == "MilkPowder" or name == "milk powder":
                keywd = "MilkPowder"
            if name == "HotMilk" or name == "hot milk":
                keywd = "HotMilk"
            if name == "ColdMilk" or name == "cold milk":
                keywd = "ColdMilk"
            if name == "Vanilla ice Cream" or name == "vanilla icecream":
                keywd = "Vanilla ice Cream"
            if name == "Chocolate ice cream" or name == "chocolate icecream":
                keywd = "Chocolate ice cream"
            if name == "Elephant house vanilla ice cream" or name == "elephant house vanilla icecream":
                keywd = "Elephant house vanilla ice cream"
            if name == "Highland chocolate ice cream" or name == "Highland chocolate icecream":
                keywd = "Highland chocolate ice cream"
            if name == "Elephant house ice cream" or name == "elephant house icecream":
                keywd = "Elephant house ice cream"
            if name == "Elephant house chocolate ice cream" or name == "Elephant house chocolate icecream":
                keywd = "Elephant house chocolate ice cream"
            if name == "Vanilla milk" or name == "VanillaMilk":
                keywd = "Vanilla milk"
            if name == "Chocolate milk" or name == "ChocolateMilk":
                keywd = "Chocolate milk"
            if name == "Milo milk" or name == "MiloMilk":
                keywd = "Milo milk"
            if name == "Anchor milk powder" or name == "Anchor MilkPowder":
                keywd = "Anchor milk powder"
            if name == "Anchor butter" or name == "anchor butter":
                keywd = "Anchor butter"
            if name == "Pelawaththa butter" or name == "pelawaththa butter":
                keywd = "Pelawaththa butter"
            if name == "Ambewela yoghurt" or name == "ambewela yoghurt":
                keywd = "Ambewela yoghurt"
            if name == "Anchor yoghurt" or name == "anchor yoghurt":
                keywd = "Anchor yoghurt"

            response = requests.post('http://127.0.0.1:5000/chat', json={"message": keywd})
            map = response.json()

            if map[0] == "No Products":
                msg = "Unfortunately We dont have that Product/Category"
                dispatcher.utter_message(text=msg)
                return []

            brand = str(map[0][0]['brand'])
            categoty = str(map[0][0]['category'])
            productName = str(map[0][0]['productName'])
            price = str(map[0][0]['price'])
            weightOrVol = str(map[0][0]['weightOrVolume'])

            msg = "Brand : " + brand + "<br>" + "Category : " + categoty + "<br>" + "Product name : " + productName + "<br>" + "Price : " + price + "<br>" + "Weight(Kg) or Volume(l) : " + weightOrVol

        dispatcher.utter_message(text=msg)

        # if len(map) > 1:
        #     negoData = str(map[0][1]['brand'])

        return []


class ActionGetBrands(Action):
    def name(self) -> Text:
        return "action_get_brands"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        response = requests.post('http://127.0.0.1:5000/getBrands', json={"message": ""})
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
