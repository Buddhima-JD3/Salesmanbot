import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from create_data import *
from ontology_lookup import *
from weather_negotiation import *
import random
from difflib import SequenceMatcher
import numpy as np

cred = credentials.Certificate(".\salesman-bot-56ef5-firebase-adminsdk-ozj39-4ef8a3c068.json")
# RUN THIS Line ONLY ONCE When your running this file for the first time
# firebase_admin.initialize_app(cred)
# ==================================================================================================


db = firestore.client()
# ==================================================================================================
# To manually add data to firstore
# addData()

# number of documents in the collection
# docs = list(db.collection('products').where("productName", "==", "Full Cream Fresh Milk").get())
# print("# of documents in collection: {}".format(len(docs)))

# to get snapshots of documents in a collection
# docs = db.collection('products').get()
# print(docs)

# Exception Handling
# try:
        #     result = (dicts[0]["location"], dicts[0]["quantity"], dicts[0]["category"])
        # except:
        #     result = 0
        #     print("Something else went wrong or No Available Products!!!")
        #     response = "notok"
        #     return response
# ==================================================================================================


# Gets all the products availble in the database and lists them
def getAllProducts():
    docs =  db.collection('products').get()
    dicts = []
    productNameList = []
    for doc in docs:
        # Prints all the products in the collection
        # print(doc.to_dict())
        dicts.append(doc.to_dict())
        # print(dicts[0]["location"], dicts[0]["quantity"])

    # Get all the Products to a List
    for i in dicts:
        productNameList = i["productName"] + " --- " + i["brand"]
        print(productNameList)
    return

def getAvailableProducts(text):
    categorylist = product_category_on_brand(text)
    print(categorylist)
    availableProducts = []
    for x in categorylist:
        availableProducts.append(productCategoryBrandAvailability(x,text))

    new_productlist = [0 if i is None else i for i in availableProducts]
    #print(new_productlist)

    for i in new_productlist:
        if type(i) == list:
            newlist = [i]

    if all(item == 0 for item in new_productlist):
        return ["No Available Products of this Brand"]+[]
    return newlist

# Queries for a particular product that has been recognized from the chatbot and returns the length of the result
def productAvailability(text):
    docs = list(db.collection('products').where("productName", "==", text).get())
    print("# of documents in collection: {}".format(len(docs)))
    return len(docs)

def productCategoryAvailability(text):
    docs1 = db.collection('products').where("category", "==", text).get()
    dicts = []
    for doc in docs1:
        dicts.append(doc.to_dict())
        print(doc.to_dict())
    if(len(dicts) == 0):
        return 0
    return dicts

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

# Queries for the product specified and returns the "location", "quantity" and "category" of product
def getProductDetails(text):
    docs1 = db.collection('products').where("productName", "==", text).get()
    dicts = []
    for doc in docs1:
        dicts.append(doc.to_dict())

    if (len(dicts) == 0):
        return 0
    result = "product available"
    #response = getResponse(result, dicts)
    #return response
    return dicts


# Predict products based on purshcase history using ML
def getFromPurchaseHistory(text):
    print("Getting Products From ML " + text)
    result = "History Based Products"
    list = ['Non-Fat Milk', 'Biscuits', 'IceCream']
    availableProducts = []
    for x in list:
        if(productAvailability(x) > 0):
            availableProducts.append(x)

    if(len(availableProducts) != 0):
        response = getResponse(result, availableProducts)
    else:
        print("No Products Available")
        response = "no"
    return(response)


# Get related to cateogories of products to the original product
def getSimilarProductsCluster(text):
    print("Getting From Ontology " + text)
    result = "Ontology Based Products"
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
    # print(availableProducts)
    if (len(new_productlist) != 0):
        #response = getResponse(result, availableProducts)
        return new_productlist
    else:
        #print("No Products Available")
        response = "no"
        return ["No Products Available"]+[]
    #return (response)


# Get products to be recommended based on weather
def getProductsWeather():
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



    #response = getResponse(temp, newlist)
    return availableProducts
    #return response


# Gets the response from the chatbot when products are offered
def getResponse(result, productList):
    print("Sending Result " + str(result))
    # print(productList[0][0]['brand'])
    print(productList)
    print("Getting Response from Rasa")
    response = input()
    if(response == "ok"):
        return str("ok")
    else:
        return str("no")

#check best match for input
def bestMatch(text):
    docs = db.collection('products').get()
    dbdata = []
    for doc1 in docs:
        brand = u'{}'.format(doc1.to_dict()['brand'])
        dbdata.append(brand)

    for doc2 in docs:
        pname = u'{}'.format(doc2.to_dict()['productName'])
        dbdata.append(pname)

    for doc3 in docs:
        cat = u'{}'.format(doc3.to_dict()['category'])
        dbdata.append(cat)

    max=0.0
    best="null"
    for dbdatas in dbdata:
        match = SequenceMatcher(None, text.lower(), dbdatas.lower()).ratio()
        #print(dbdatas+" "+str(match))
        if max < match and match >= 0.5:
            max = match
            best = dbdatas

    return best

# Negotiation Process
def main():
    # getAllProducts()
    while True:
        text2 = input()
        if text2 == "Stop" or text2 == "stop":
            return
        text2 = bestMatch(text2)
        if text2 != "null":
            break
        print("No matching keywords... Enter again")

    print("Best Match: "+text2)
    brands = ["Ambewela","Anchor", "ElephantHouse","Milo","Pelawaththa","Highland"]
    if (text2.capitalize() in brands):
        i = brands.index(text2.capitalize())
        list = getAvailableProducts(brands[i])
        print(list)
        text = input()
        if(text == "ok"):
            print("purchased")
        else:
            print("negotiation terminated")

    elif (productAvailability(text2) > 0 ):
        result = getProductDetails(text2)
        print(result)
        cat = result[0]["category"]
        print('Product Available\n')
        result2= input()
        if(result2 == "ok"):
            print('Customer Satisfied. Terminate\n')
        else:
            print('Check 1 -Customer Not Satisfied. Continue\n')
            # result = getFromPurchaseHistory(text2)
            result = "not ok"
            if(result == "ok"):
                print('Customer Satisfied. Terminate\n')
            else:
                print('Check 2 -Customer Not Satisfied. Continue\n')
                result = getSimilarProductsCluster(cat)
                print(result)
                result3 = input()
                if(result3 == "ok"):
                    print('Customer Satisfied. Terminate\n')
                else:
                    print('Check 3 - Customer Not Satisfied. Continue\n')
                    result = getProductsWeather()
                    print(result)
                    result4 = input()
                    if(result4 == "ok"):
                        print('Customer Satisfied. Terminate\n')
                    else:
                        print('Final1 - Terminate Negotiation\n')
    else:
        print('Check 1 - Product Not Available\n')
        # result = getFromPurchaseHistory(text2)
        result = "not ok"
        if (result == "ok"):
            print('Customer Satisfied. Terminate\n')
        else:
            print('Check 2 - Customer Not Satisfied. Continue\n')
            result = getSimilarProductsCluster(text2)
            print(result)
            result3 = input()
            if (result3 == "ok"):
                print('Customer Satisfied. Terminate\n')
            else:
                print('Check 3 - Customer Not Satisfied. Continue\n')
                result = getProductsWeather()
                print(result)
                result4 = input()
                if(result4 == "ok"):
                    print('Customer Satisfied. Terminate\n')
                else:
                    print('Final2 - Terminate Negotiation\n')

if __name__ == "__main__":
    main()
