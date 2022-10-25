import firebase_admin
import random
import numpy as np
from firebase_admin import credentials
from firebase_admin import firestore
from ontology_lookup import *
from weather_negotiation import *
from difflib import SequenceMatcher
from machineLearning import *


# DATABASE CONNECTION
cred = credentials.Certificate(".\salesman-bot-56ef5-firebase-adminsdk-ozj39-4ef8a3c068.json")
firebase_admin.initialize_app(cred)
db = firestore.client()



# ==================================================================================================

# METHODS USED TO QUERY DATABASE

# ==================================================================================================



# GETS ALL THE PRODUCTS AVAILBLE IN THE DATABASE AND LISTS THEM
def getAllProducts():
    docs =  db.collection('products').get()
    dicts = []
    for doc in docs:
        dicts.append(doc.to_dict())
        # Prints all the products in the collection
        # print(doc.to_dict())
        # print(dicts[0]["location"], dicts[0]["quantity"])

    # Get all the Products to a List
    for i in dicts:
        productNameList = i["productName"] + " --- " + i["brand"]
        print(productNameList)
    return dicts

# GETS ALL THE PRODUCTS AVAILBLE FOR A BRAND
def getProductsForBrand(text):
    docs1 = db.collection('products').where("brand", "==", text).get()
    dicts = []
    for doc in docs1:
        dicts.append(doc.to_dict())
        print(doc.to_dict())
    if (len(dicts) == 0):
        return 0
    return dicts


def getAvailableProducts(text):
    categorylist = product_category_on_brand(text)
    print(categorylist)
    availableProducts = []

    for x in categorylist:
        availableProducts.append(productCategoryBrandAvailability(x,text))

    new_productlist = [0 if i is None else i for i in availableProducts]

    for i in new_productlist:
        if type(i) == list:
            newlist = [i]

    if all(item == 0 for item in new_productlist):
        return ["No Products"]+[]
    return newlist


# QUERIES FOR A PARTICULAR PRODUCT THAT HAS BEEN RECOGNIZED FROM THE CHATBOT AND RETURNS THE LENGTH OF THE RESULT
def checkProductAvailability(text):
    docs = list(db.collection('products').where("productName", "==", text).get())
    print("# of documents in collection: {}".format(len(docs)))
    return len(docs)

# GETS ALL THE RESUTLS FOR A SPECIFIC PRODUCT NAME
def getProductsForProductName(text):
    docs1 = db.collection('products').where("productName", "==", text).get()
    dicts = []
    for doc in docs1:
        dicts.append(doc.to_dict())

    if (len(dicts) == 0):
        return 0
    return dicts

# GETS ALL THE RESUTLS FOR A SPECIFIC CATEGORY
def productCategoryAvailability(text):
    docs1 = db.collection('products').where("category", "==", text).get()
    dicts = []
    for doc in docs1:
        dicts.append(doc.to_dict())
        print(doc.to_dict())
    if(len(dicts) == 0):
        return 0
    return dicts

# GETS ALL THE RESUTLS FOR A SPECIFIC CATEGORY AND CHECK FOR A SPECIFIC BRAND
def productCategoryBrandAvailability(text, text2):
    docs1 = db.collection('products').where("category", "==", text)
    docs1 = docs1.where("brand", "==", text2)
    docs1 = docs1.get()
    dicts = []
    for doc in docs1:
        dicts.append(doc.to_dict())
        #print(doc.to_dict())
    if(len(dicts) == 0):
        return 0
    return dicts

# GETS ALL THE RESUTLS FOR A SPECIFIC BRAND AND CHECK FOR A SPECIFIC CATEGORY
def productBrandAvailability(text,text2):
    #print(text)
    docs1 = db.collection('products').where("brand", "==", text)
    docs1 = docs1.where("category", "==", text2)
    docs1 = docs1.get()
    dicts = []
    for doc in docs1:
        dicts.append(doc.to_dict())
        #print(doc.to_dict())


    if(len(dicts) == 0):
        return 0
    return dicts






# ==================================================================================================

# METHODS USED IN THE NEGOTIATION PROCESS

# ==================================================================================================

# CHECK BEST MATCH FOR INPUT
def bestMatch(text):
    docs = db.collection('products').get()
    dbdata = []
    if len(text.split(" ")) > 1 and SequenceMatcher(None, text.lower(), "elephanthouse").ratio() < 0.8:
        for doc2 in docs:
            pname = u'{}'.format(doc2.to_dict()['productName'])
            dbdata.append(pname)
        max = 0.0
        best = "null"
        for dbdatas in dbdata:
            match = SequenceMatcher(None, text.lower(), dbdatas.lower()).ratio()
            # print(dbdatas+" "+str(match))
            if max < match and match >= 0.70:
                max = match
                best = dbdatas
            if best == "null":
                categories = [
                    "Butter",
                    "Cheese",
                    "ColdChocolateMilk",
                    "ColdVannilaMilk",
                    "CreamMilkPowder",
                    "HotChocolateMilk",
                    "HotVannilaMilk",
                    "IceCream",
                    "NonFatMilkPowder",
                    "Yoghurt",
                ]
                max2 = 0.0
                for cat in categories:
                    match2 = SequenceMatcher(None, text.lower(), cat.lower()).ratio()
                    if max2 < match and match2 >= 0.5:
                        max2 = match2
                        best = cat
    else:
        for doc1 in docs:
            brand = u'{}'.format(doc1.to_dict()['brand'])
            dbdata.append(brand)
        for doc3 in docs:
            cat = u'{}'.format(doc3.to_dict()['category'])
            dbdata.append(cat)
        max = 0.0
        best = "null"
        for dbdatas in dbdata:
            match = SequenceMatcher(None, text.lower(), dbdatas.lower()).ratio()
            # print(dbdatas+" "+str(match))
            if max < match and match >= 0.6:
                max = match
                best = dbdatas



    return best


# PREDICT PRODUCTS GIVEN A CATEGORY BASED ON PURSHCASE HISTORY USING ML
def getFromMachineLearning(text):
    print("Getting Products From ML " + text)
    x = machineLearning(text)
    print(x)
    availableProducts = []
    if(checkProductAvailability(x) > 0):
        availableProducts.append(getProductsForProductName(x))

    if(len(availableProducts) != 0):
          response = availableProducts
          print(response)
    else:
        print("No Products Available")
        response = ["No Products"]
    return response + []


# GET RELATED TO CATEOGORIES OF PRODUCTS TO THE ORIGINAL PRODUCT CATEGORY
def getFromOntology(text):
    print("Getting From Ontology " + text)
    if "milkpowder" in text.lower():
        list = product_on_category("MilkPowder")
        print(list)
    elif "butter" in text.lower():
        list = product_on_category("Butter")
        print(list)
    elif "cheese" in text.lower():
        list = product_on_category("Cheese")
        print(list)
    elif "icecream" in text.lower():
        list = product_on_category("IceCream")
        print(list)
    elif "milk" in text.lower():
        list = product_on_category("Milk")
        print(list)
    elif "yoghurt" in text.lower():
        list = product_on_category("Yoghurt")
        print(list)
    else:
        print("Can't Generate Cluster")
        return ["Invalid product type..."]+[]
    availableProducts = []
    for x in list:
            availableProducts.append(productBrandAvailability(x,text))

    new_productlist = [x for x in availableProducts if x != 0]
    print(new_productlist)
    p = []
    for dd in new_productlist:
        if type(dd) == list:
            p.append(dd)
        else:
            for x in dd:
                p.append(x)


    if (len(p) != 0):
        return [p]
    else:
        return ["No Products"]


# GET PRODUCTS TO BE RECOMMENDED BASED ON WEATHER OF THE DAY
def getFromWeather():
    print("Getting Weather info ")
    result = get_weather()['feels_like']
    temp = round(result)
    print(temp)
    if(temp >= 28):
        categorylist = products_category_on_relationship("HotWeather")
        print(categorylist)
        availableProducts = []
        for x in categorylist:
            availableProducts.append(productCategoryAvailability(x))
    else:
        categorylist = products_category_on_relationship("ColdWeather")
        print(categorylist)
        availableProducts = []
        for x in categorylist:
            availableProducts.append(productCategoryAvailability(x))

    p = []
    for dd in availableProducts:
        if type(dd) == list:
            for dds in dd:
                p.append(dds)
        else:
            p.append(dd)

    return [p]


# ==================================================================================================

# METHODS USED TO GET API AND OTHER DETAILS

# ==================================================================================================

# GET WEATHER DETAILS
def getWeather():
    result = get_weather()
    return result








# ==================================================================================================
# NEGOTIATION PROCESS

# def main():
#     # getAllProducts()
#     while True:
#         text2 = input()
#         if text2 == "Stop" or text2 == "stop":
#             return
#         text2 = bestMatch(text2)
#         if text2 != "null":
#             break
#         print("No matching keywords... Enter again")
#
#     print("Best Match: "+text2)
#     brands = ["Ambewela","Anchor", "ElephantHouse","Milo","Pelawaththa","Highland"]
#     if (text2.capitalize() in brands):
#         i = brands.index(text2.capitalize())
#         list = getAvailableProducts(brands[i])
#         print(list)
#         text = input()
#         if(text == "ok"):
#             print("purchased")
#         else:
#             print("negotiation terminated")
#
#     elif (checkProductAvailability(text2) > 0 ):
#         result = getProductsForProductName(text2)
#         print(result)
#         cat = result[0]["category"]
#         print('Product Available\n')
#         result2= input()
#         if(result2 == "ok"):
#             print('Customer Satisfied. Terminate\n')
#         else:
#             print('Check 1 -Customer Not Satisfied. Continue\n')
#             result = getFromMachineLearning(cat)
#             result5 = input()
#             # result = "not ok"
#             if(result5 == "ok"):
#                 print('Customer Satisfied. Terminate\n')
#             else:
#                 print('Check 2 -Customer Not Satisfied. Continue\n')
#                 result = getFromOntology(cat)
#                 print(result)
#                 result3 = input()
#                 if(result3 == "ok"):
#                     print('Customer Satisfied. Terminate\n')
#                 else:
#                     print('Check 3 - Customer Not Satisfied. Continue\n')
#                     result = getFromWeather()
#                     print(result)
#                     result4 = input()
#                     if(result4 == "ok"):
#                         print('Customer Satisfied. Terminate\n')
#                     else:
#                         print('Final1 - Terminate Negotiation\n')
#     else:
#         print('Check 1 - Product Not Available\n')
#         result = getFromMachineLearning(text2)
#         result5 = input()
#         # result = "not ok"
#         if (result5 == "ok"):
#             print('Customer Satisfied. Terminate\n')
#         else:
#             print('Check 2 - Customer Not Satisfied. Continue\n')
#             result = getFromOntology(text2)
#             print(result)
#             result3 = input()
#             if (result3 == "ok"):
#                 print('Customer Satisfied. Terminate\n')
#             else:
#                 print('Check 3 - Customer Not Satisfied. Continue\n')
#                 result = getFromWeather()
#                 print(result)
#                 result4 = input()
#                 if(result4 == "ok"):
#                     print('Customer Satisfied. Terminate\n')
#                 else:
#                     print('Final2 - Terminate Negotiation\n')
#
# if __name__ == "__main__":
#     main()



# ==================================================================================================
# NUMBER OF DOCUMENTS IN THE COLLECTION

# docs = list(db.collection('products').where("productName", "==", "Full Cream Fresh Milk").get())
# print("# of documents in collection: {}".format(len(docs)))



# ==================================================================================================
# TO GET SNAPSHOTS OF DOCUMENTS IN A COLLECTION

# docs = db.collection('products').get()
# print(docs)



# ==================================================================================================
# EXCEPTION HANDLING

# try:
        #     result = (dicts[0]["location"], dicts[0]["quantity"], dicts[0]["category"])
        # except:
        #     result = 0
        #     print("Something else went wrong or No Available Products!!!")
        #     response = "notok"
        #     return response


# ==================================================================================================