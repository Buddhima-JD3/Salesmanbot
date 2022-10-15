from flask import Flask
from flask import request
from flask import redirect
import negotiate

app = Flask(__name__)

@app.route('/chat', methods=["POST"])
def chat():
    #return "2", 200
    print(request.json)
    if request.json["message"] != "weather":
        machine = request.json["message"][request.json["message"].find("[")+1:request.json["message"].find("]")]
        print(machine)
        text2 = request.json["message"]
        if text2 == "Stop" or text2 == "stop":
            return ("Thank you!", 200)
        elif text2 == "ok" or text2 == "OK" or text2 == "Ok":
            return ("You can find products from B block", 200)
        text2 = negotiate.bestMatch(text2)
        if text2 == "null":
            return ("No matching keywords... Enter again", 200)


        print("Best Match: "+text2)
        brands = ["Ambewela", "Anchor", "ElephantHouse", "Milo", "Pelawaththa", "Highland"]
        if (text2.capitalize() in brands):
            i = brands.index(text2.capitalize())
            list = negotiate.getAvailableProducts(brands[i])
            print(list)
            list.append("ok")
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
            result.append(cat)
            return (result, 200)

        else:
            print('Check 1 - Product Not Available\n')
            print('Check 2 - Customer Not Satisfied. Continue\n')
            if machine == "c":
                result = negotiate.getSimilarProductsCluster(text2)
                result.append("weather")
                return (result, 200)
            else:
                result = negotiate.getFromPurchaseHistory(text2)
                resulttest = text2 +  "[c]"
                result.append(resulttest)
                return (result, 200)

    else:
        print('Check 3 - Customer Not Satisfied. Continue\n')
        result = negotiate.getProductsWeather()
        result.append("ok")
        return (result, 200)

@app.route('/getAll', methods=["POST"])
def getAll():
    result = negotiate.getAllProducts()
    return (result, 200)

@app.route('/getWeatherProducts')
def getWeatherProducts():
    result = negotiate.getProductsWeather()
    return (result, 200)

@app.route('/getWeather')
def getWeather():
    result = negotiate.getWeather()
    return (result, 200)

@app.route('/getBrands')
def getBrands():
    result = ["Ambewela","Anchor", "ElephantHouse","Milo","Pelawaththa","Highland"]
    return (result, 200)


if __name__ == "__main__":
    app.run(debug=True)