# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher

from ...backend import negotiate

# import os
# import importlib.util
# import sys

# sys.path.insert(1, os.path.join(sys.path[0], '../../backend/negotiate.py'))
#
# import backend.negotiate as nego
#
# spec = importlib.util.spec_from_file_location("backend.negotiate", "backend/negotiate")
# nego = importlib.util.module_from_spec(spec)
# sys.modules["backend.negotiate"] = nego
# spec.loader.exec_module(nego)
# nego.MyClass()


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
        b = negotiate.getAllProducts()
        a = "aaaa"
        print(b)
        dispatcher.utter_message(text="product list : " + a)

        return []


class ActionSearchproduct(Action):
    def name(self) -> Text:
        return "action_search_product"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        entities = tracker.latest_message['entities']
        print(entities)

        for e in entities:
            if e['entity'] == 'milk power':
                name = e['value']

            if name == "Highland":
                message = "finding highland products"

            if name == "Milo":
                message = "finding Milo products"

        dispatcher.utter_message(message)

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
