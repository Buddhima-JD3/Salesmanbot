from flask import Flask
from flask import request
from flask import redirect
import negotiate
from datetime import datetime

app = Flask(__name__)


@app.route('/chat', methods=["POST"])
def chat():
    print(request.json)
    if request.json["message"] != "weather":
        machine = request.json["message"][request.json["message"].find("[") + 1:request.json["message"].find("]")]
        print(machine)
        text2 = request.json["message"]
        if text2 == "Stop" or text2 == "stop":
            return ("Thank you!", 200)
        elif text2 == "ok" or text2 == "OK" or text2 == "Ok":
            return ("You can find products from B block", 200)
        text2 = negotiate.bestMatch(text2)
        if text2 == "null":
            return (["No Products"], 200)

        print("Best Match: " + text2)
        brands = ["Ambewela", "Anchor", "ElephantHouse", "Milo", "Pelawaththa", "Highland"]
        if (text2.capitalize() in brands):
            i = brands.index(text2.capitalize())
            list = negotiate.getAvailableProducts(brands[i])
            print(list)
            list.append("ok")
            with open('next.txt', 'a') as f:
                f.write('\n'+"ok")
            convert = [list]
            return (convert, 200)
            # text = input()
            # if(text == "ok"):
            #    print("purchased")
            # else:
            #    print("negotiation terminated")
        elif (negotiate.checkProductAvailability(text2) > 0):
            result = negotiate.getProductsForProductName(text2)
            print(result)
            print('Product Available\n')
            cat = result[0]["category"]
            result.append(cat)
            with open('next.txt', 'a') as f:
                f.write('\n'+cat)
            convert = [result]
            return (convert, 200)

        else:
            print('Check 1 - Product Name Not Available\n')
            print('Check 2 - Customer Not Satisfied. Continue\n')
            if machine == "c":
                result = negotiate.getFromOntology(text2)
                result.append("weather")
                with open('next.txt', 'a') as f:
                    f.write('\n'+"weather")
                return (result, 200)
            else:
                result = negotiate.getFromMachineLearning(text2)
                print(result[0])
                if (result[0] == "No Products"):
                    result = negotiate.getFromOntology(text2)
                    result.append("weather")
                    with open('next.txt', 'a') as f:
                        f.write('\n'+"weather")
                    return (result, 200)
                resulttest = text2 + "[c]"
                result.append(resulttest)
                with open('next.txt', 'a') as f:
                    f.write('\n'+resulttest)
                return (result, 200)

    else:
        print('Check 3 - Customer Not Satisfied. Continue\n')
        result = negotiate.getFromWeather()
        result.append("ok")
        with open('next.txt', 'a') as f:
            f.write('\n'+"ok")
        return (result, 200)


@app.route('/getAll', methods=["POST"])
def getAll():
    result = negotiate.getAllProducts()
    return (result, 200)


@app.route('/getWeatherProducts', methods=["POST"])
def getWeatherProducts():
    result = negotiate.getFromWeather()
    return (result, 200)


@app.route('/getWeather', methods=["POST"])
def getWeather():
    result = negotiate.getWeather()
    return (result, 200)


@app.route('/getBrands', methods=["POST"])
def getBrands():
    result = ["Ambewela", "Anchor", "ElephantHouse", "Milo", "Pelawaththa", "Highland"]
    return (result, 200)


@app.route('/getTime', methods=["POST"])
def time():
    time_now = datetime.now()
    current_time = time_now.strftime("%H:%M:%S")
    return current_time

#get next keyword
@app.route('/getNext', methods=["POST"])
def getNext():
    with open("next.txt") as file:
        for line in file:
            pass
        last_line = line
    return [last_line]

if __name__ == "__main__":
    app.run()
