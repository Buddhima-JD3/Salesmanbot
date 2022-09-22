import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from create_data import *
from ontology_lookup import *

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
    for doc in docs:
        # Prints all the products in the collection
        # print(doc.to_dict())
        dicts.append(doc.to_dict())
        # print(dicts[0]["location"], dicts[0]["quantity"])
    return


# Queries for a particular product that has been recognized from the chatbot and returns the length of the result
def checkNluResult(text):
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
            result = (dicts[0]["location"], dicts[0]["quantity"], dicts[0]["category"] )
        except:
            print("Something else went wrong")
    response = getResponse(result)
    return(response)


# Predict products based on purshcase history using ML
def getFromPurchaseHistory(text):
    print("Getting Products From ML " + text)
    result = "History Based Products"
    response = getResponse(result)
    return(response)

# Get related to cateogories of products to the original product
def getSimilarProductsCluster(text):
    print("Getting From Ontology " + text)
    result = "Ontology Based Products"
    response = getResponse(result)
    return (response)

# Get products to be recommended based on weather
def getProductsWeather(text):
    print("Getting Weather info " + text)
    result = "Weather Based Products"
    response = getResponse(result)
    return (response)

# Gets the response from the chatbot when products are offered
def getResponse(result):
    print("Getting Response from Rasa")
    print("Sending Result " + str(result))
    return str("notok")

#Start of Negotiation Process
def main():
    getAllProducts()
    text = 'Full Cream Milk'
    if (checkNluResult(text) > 0 ):
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




