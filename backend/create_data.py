import random

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate(".\salesman-bot-56ef5-firebase-adminsdk-ozj39-4ef8a3c068.json")

db = firestore.client()


# Using add to add documents with auto generated keys
def addData(cusId, date, text1, text2):
    doc_ref = db.collection('purchase_history').order_by(u'Sno', direction=firestore.Query.DESCENDING).limit(1)
    results = doc_ref.stream()

    for post in results:
        print(u'{} => {}'.format(post.id, post.to_dict()))
        id = int(post.id)

    lastId = id + 1

    buyFreq = ['Once Every 2-3 days', 'Once a day', 'Twice a day', 'Once a week']
    expDel=[24,6,12]
    prefTime = ['6 AM to 12 Noon', '6 PM to 11 PM', 'Anytime would do', '7 AM to 12 Noon']
    discount = ['Yes', 'No', 'Maybe']
    billing = ['Prepaid', 'Instant', 'Postpaid, Instant', 'Any would do']


    ref = db.collection('purchase_history').document(str(lastId)).set({
        "Sno": lastId,
        "CusID": cusId,
        "Date": date,
        "DairyProductConsumed": text1,
        "Category": text2,
        "BuyingFrequency": random.choice(buyFreq),
        "OnlineBuyingPreference":random.randint(0, 10),
        "ExpectedDeliveryTime":random.choice(expDel),
        "PreferredTimeSlot":random.choice(prefTime),
        "DiscountExpectations":random.choice(discount),
        "PreferredBillingType":random.choice(billing),
        "BuyingFarmFreshFruitsOnline":random.choice(discount)
    })


    return "saved"

    # db.collection('products').add({
    #     "brand": "Rich Life",
    #     "healthStat": "",
    #     "ingreduents": "Fresh Cows' Milk",
    #     "item_type": "Dairy",
    #     "nutrition": {"Energy": 63, "Fat": 3.5, "Protein": 3.2, "Carbohydrate": 4.5, "Calcium": 115, "Minerals": 0.7},
    #     "price": 525.00,
    #     "productName": "Full Cream Fresh Milk",
    #     "weightOrVolume": 1000,
    #     "quantity": 40
    # })
    # db.collection('products').add({
    #     "brand": "Ambewela",
    #     "healthStat": "Non Fat",
    #     "ingreduents": "Fresh Cows' Milk",
    #     "item_type": "Dairy",
    #     "nutrition": {"Energy": 143, "Fat": 0.1, "Protein": 3.4, "Carbohydrate": 4.8, "Calcium": 0, "Minerals": 0.8},
    #     "price": 450.00,
    #     "productName": "Non-Fat Milk",
    #     "weightOrVolume": 1000,
    #     "quantity": 35
    # })
#     db.collection('products').add({'name':'Mark', 'age':40, 'address': "Paris"})
#     db.collection('products').add({'name':'Harry', 'age':40, 'address': "London"})
#     db.collection('products').add({'name':'Ron', 'age':40, 'address': "Milan"})

# # Create a reference for the document before setting
# data = {
#     'name': 'Harry Potter',
#     'address': 'USA'
# }
#
# # Add a new doc in collection 'persons' with ID 'HP'
# db.collection('persons').document('HP').set(data)
#
# # Merge new data with existing data for 'HP'
# data = {'employed':True}
# db.collection('persons').document('HP').set(data, merge=True)
#
# # Using document() to get an auto generated ID with set()
# data = {
#     'name': 'Iron Man',
#     'address': 'USA'
# }
# document_reference=db.collection('heroes').document()
# document_reference.set(data)

# Adding subcollections
# document_reference.collection('movies').add({'name':'Avengers'})
