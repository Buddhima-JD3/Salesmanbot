import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from create_data import *
from ontology_lookup import *
import random

cred = credentials.Certificate("D:\Downloads\salesman-bot-56ef5-firebase-adminsdk-ozj39-4ef8a3c068.json")
# firebase_admin.initialize_app(cred)

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
        productNameList = i["productName"] + " " + i["brand"]
        print(productNameList)
    return


# Queries for a particular product that has been recognized from the chatbot and returns the length of the result
def productAvailability(text):
    docs = list(db.collection('products').where("productName", "==", text).get())
#   print("# of documents in collection: {}".format(len(docs)))
    return len(docs)


# Queries for the product specified and returns the "location", "quatity" and "category" of product
def getProductDetails(text):
    docs1 = db.collection('products').where("productName", "==", text).get()
    dicts = []
    for doc in docs1:
        dicts.append(doc.to_dict())
        try:
            result = (dicts[0]["location"], dicts[0]["quantity"], dicts[0]["category"])
        except:
            result = 0
            print("Something else went wrong or No Available Products!!!")
    response = getResponse(result)
    return(response)


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
        response = "notok"
    return(response)


# Get related to cateogories of products to the original product
def getSimilarProductsCluster(text):
    print("Getting From Ontology " + text)
    result = "Ontology Based Products"
    list = ['Non-Fat Milk', 'Biscuits', 'IceCream']
    availableProducts = []
    for x in list:
        if (productAvailability(x) > 0):
            availableProducts.append(x)

    if (len(availableProducts) != 0):
        response = getResponse(result, availableProducts)
    else:
        print("No Products Available")
        response = "notok"
    return (response)


# Get products to be recommended based on weather
def getProductsWeather(text):
    print("Getting Weather info " + text)
    result = "Weather Based Products"
    list = ['Biscuits', 'IceCream']
    availableProducts = []
    for x in list:
        if (productAvailability(x) > 0):
            availableProducts.append(x)

    if(len(availableProducts) != 0):
        response = getResponse(result, availableProducts)
    else:
        print("No Products Available")
        response = "notok"
    return (response)


# Gets the response from the chatbot when products are offered
def getResponse(result, productList):
    print("Sending Result " + str(result))
    print(productList)
    print("Getting Response from Rasa")
    response = ["ok", "notok"]
    if(response[random.choice([0,1])] == "ok"):
        getProductDetails('Non-Fat Milk')
        return str("ok")
    else:
        return str("notok")

# Negotiation Process
def main():
    getAllProducts()
    text = 'Full Cream Milk'
    if (productAvailability(text) > 0 ):
        result = getProductDetails(text)
        print(result)
        print('Product Available\n')
        if(result == "ok"):
            print('Customer Satisfied. Terminate\n')
        else:
            print('Customer Not Satisfied. Continue\n')
            result = getFromPurchaseHistory(text)
            if(result == "ok"):
                print('Customer Satisfied. Terminate\n')
            else:
                print('Customer Not Satisfied. Continue\n')
                result = getSimilarProductsCluster(text)
                if(result == "ok"):
                    print('Customer Satisfied. Terminate\n')
                else:
                    print('Customer Not Satisfied. Continue\n')
                    result = getProductsWeather(text)
                    if(result == "ok"):
                        print('Customer Satisfied. Terminate\n')
                    else:
                        print('Terminate Negotiation\n')
    else:
        print('Product Not Available\n')
        result = getFromPurchaseHistory(text)
        if (result == "ok"):
            print('Customer Satisfied. Terminate\n')
        else:
            print('Customer Not Satisfied. Continue\n')
            result = getSimilarProductsCluster(text)
            if (result == "ok"):
                print('Customer Satisfied. Terminate\n')
            else:
                print('Customer Not Satisfied. Continue\n')
                result = getProductsWeather(text)
                if (result == "ok"):
                    print('Customer Satisfied. Terminate\n')
                else:
                    print('Terminate Negotiation\n')

if __name__ == "__main__":
    main()




