from Flask import Flask, request
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from create_data import *
import ontology_lookup
import weather_negotiation
import random
from difflib import SequenceMatcher
import numpy as np
import negotiate

app = Flask(__name__)
@app.route('/my_webhook', methods=['POST'])
def return_response(request):
    print(request.json)
    if request.json["message"] != "weather":
        while True:
            text2 = request.json["message"]
            if text2 == "Stop" or text2 == "stop":
                return ("Thank you!", 200)
            elif text2 == "ok" or text2 == "OK" or text2 == "Ok":
                return ("You can find products from B block", 200)
            text2 = negotiate.bestMatch(text2)
            if text2 != "null":
                break
            return ("No matching keywords... Enter again", 200)

        print("Best Match: "+text2)
        brands = ["Ambewela", "Anchor", "ElephantHouse", "Milo", "Pelawaththa", "Highland"]
        if (text2.capitalize() in brands):
            i = brands.index(text2.capitalize())
            list = negotiate.getAvailableProducts(brands[i])
            print(list)
            return (list, 200)
            #text = input()
            #if(text == "ok"):
            #    print("purchased")
            #else:
            #    print("negotiation terminated")
        elif (negotiate.productAvailability(text2) > 0):
            result = negotiate.getProductDetails(text2)
            print(result)
            print('Product Available\n')
            cat = result[0]["category"]
            return (result, cat, 200)

        else:
            print('Check 1 - Product Not Available\n')
            # result = getFromPurchaseHistory(text2)
            result = "not ok"
            if (result == "ok"):
                print('Customer Satisfied. Terminate\n')
            else:
                print('Check 2 - Customer Not Satisfied. Continue\n')
                result = negotiate.getSimilarProductsCluster(text2)
                return (result, "weather", 200)
    else:
        print('Check 3 - Customer Not Satisfied. Continue\n')
        result = negotiate.getProductsWeather()
        return (result, 200)


if __name__ == "__main__": app.run()