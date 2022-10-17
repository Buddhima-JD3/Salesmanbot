import numpy as np
import pandas as pd
from sklearn import tree
from sklearn import metrics, model_selection, preprocessing
from sklearn.tree import DecisionTreeClassifier
import datetime
import random

def machineLearning(text):

    products = {
                0:"Ambewela Cheese",
                1:"Ambewela Chocolate Flavoured Milk",
                2:"Ambewela Vanilla Flavoured Milk",
                3:"Ambewela Vanilla Yoghurt",
                4:"Anchor Butter",
                5:"Anchor Cheese",
                6:"Anchor Full Cream Milk Powder",
                7:"Anchor Low Fat Milk Powder",
                8:"Anchor Strawberry Yoghurt",
                9:"Anchor Vanilla Yoghurt",
                10:"Elephant House Chocolate Ice Cream",
                11:"Elephant House Vanilla Ice Cream",
                12:"Highland Butter",
                13:"Highland Cheese Spread",
                14:"Highland Chocolate Flavoured Milk",
                15:"Highland Full Cream Milk Powder",
                16:"Highland Cocolate Ice Cream",
                17:"Highland Vanilla Ice Cream",
                18:"Highland Non-Fat Milk Powder",
                19:"Highland Processed Cheese",
                20:"Highland Vanilla Flavoured Milk",
                21:"Highland Vanilla Yoghurt",
                22:"Milo",
                23:"Pelawaththa Chocolate Ice Cream",
                24:"Pelawaththa Full Cream Milk Powder",
                25:"Pelawaththa Non-Fat Milk Powder",
                26:"Pelawaththa Vanilla Yoghurt"
    }

    categories = {
                0:"Butter",
                1:"Cheese",
                2:"ColdChocolateMilk",
                3:"ColdVannilaMilk",
                4:"CreamMilkPowder",
                5:"HotChocolateMilk",
                6:"HotVannilaMilk",
                7:"IceCream",
                8:"NonFatMilkPowder",
                9:"Yoghurt",
    }

    # Processing the integer values required for prediction
    #  customer ID
    cusId = random.randint(0, 9)
    #  month
    dt = datetime.datetime.today()
    month = dt.month
    #  day
    day = dt.day
    #  category
    print(text)
    for key, value in categories.items():
        if text == value:
            categorynumber = key

    print(categorynumber)

    # Extracting the data from csv file
    data = pd.read_csv("New Dairy Products Sample.csv")
    df=data

    # Data PreProcessing
    df=df.drop(['Sno','Buying Frequency','Online Buying Preference','Expected Delivery Time','Preferred Time Slot','Discount Expectations','Preferred Billing Type','Buying Farm Fresh Fruits Online'], axis=1)
    df.CusID = pd.Categorical(df.CusID)
    df['CusID_Code'] = df.CusID.cat.codes
    df[['Month','Day','Year']] = df['Date'].str.split("/", expand = True)
    df["Dairy Product Consumed"] = pd.Categorical(df["Dairy Product Consumed"])
    df['Dairy_Product_Consumed'] = df["Dairy Product Consumed"].cat.codes
    df.Category = pd.Categorical(df.Category)
    df['Category_Code'] = df.Category.cat.codes


    df_new=df.drop(['CusID','Date','Dairy Product Consumed', 'Category','Year'], axis=1)
    X = df_new.drop(['Dairy_Product_Consumed'],axis=1)
    Y = df['Dairy_Product_Consumed']
    # print(X.shape,Y.shape)

    # Using decision tree algorithm
    model = DecisionTreeClassifier()
    model.fit(X,Y)

    # Making Prediction
    predictions = model.predict([[cusId,month,day,categorynumber]])
    print(predictions)
    print(products[predictions[0]])

    # Making Test sample for model testing
    df_test=df_new.sample(n=80)
    x_test=df_test.drop(['Dairy_Product_Consumed'],axis=1)
    y_test=df_test['Dairy_Product_Consumed']

    # Using decision tree algorithm
    model = DecisionTreeClassifier()
    model.fit(X,Y)
    y_pred=model.predict(x_test)

    print("Testing Model Accuracy")
    wrong_pred=(y_test != y_pred).sum()
    print("Total wrongly detected = {}".format(wrong_pred))
    accuracy=metrics.accuracy_score(y_test,y_pred)
    print("Accuracy of this model = {:.3f}".format(accuracy))

    return products[predictions[0]]

# Model Training and Testing Method
def modelTraining():
    data = pd.read_csv("New Dairy Products Sample.csv")
    df = data
    df = df.drop(
        ['Sno', 'Buying Frequency', 'Online Buying Preference', 'Expected Delivery Time', 'Preferred Time Slot',
         'Discount Expectations', 'Preferred Billing Type', 'Buying Farm Fresh Fruits Online'], axis=1)
    df.CusID = pd.Categorical(df.CusID)
    df['CusID_Code'] = df.CusID.cat.codes
    df[['Month', 'Day', 'Year']] = df['Date'].str.split("/", expand=True)
    df["Dairy Product Consumed"] = pd.Categorical(df["Dairy Product Consumed"])
    df['Dairy_Product_Consumed'] = df["Dairy Product Consumed"].cat.codes
    df.Category = pd.Categorical(df.Category)
    df['Category_Code'] = df.Category.cat.codes
    df_new = df.drop(['CusID', 'Date', 'Dairy Product Consumed', 'Category', 'Year'], axis=1)
    x = df_new[['CusID_Code', 'Month', 'Day', 'Category_Code']]
    y = df_new['Dairy_Product_Consumed']

    x_train, x_test, y_train, y_test = model_selection.train_test_split(x, y, test_size=0.40, random_state=0)
    x_train.shape, y_train.shape
    model2 = tree.DecisionTreeClassifier(criterion='entropy', max_depth=3, random_state=0)
    model2.fit(x_train, y_train)
    y_pred = model2.predict(x_test)
    wrong_pred = (y_test != y_pred).sum()
    print("Total wrongly detected = {}".format(wrong_pred))

    accuracy = metrics.accuracy_score(y_test, y_pred)
    print("Accuracy of this model = {:.3f}".format(accuracy))

# machineLearning("Butter")