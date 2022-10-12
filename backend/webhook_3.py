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
@app.route('/my_webhook_3', methods=['POST'])
def return_response(request):
    print(request.json)
    text2 = request.json["message"]
    if text2 == "Stop" or text2 == "stop":
        return ("Thank you!", 200)
    elif text2 == "ok" or text2 == "OK" or text2 == "Ok":
        return ("You can find products from B block", 200)

    print('Check 3 - Customer Not Satisfied. Continue\n')
    result = negotiate.getProductsWeather()
    return (result, 200)
