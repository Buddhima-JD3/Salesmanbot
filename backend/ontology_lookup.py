from owlready2 import *
onto = get_ontology("./ontology/DairyProducts.owl")
onto.load()
print("Ontology Successfully Loaded")

def loadOntology():
    onto = get_ontology("./ontology/DairyProducts.owl")
    onto.load()
    print("Ontology Successfully Loaded")

def getNoOfClasses():
    print("Total Classes : ", list(default_world.sparql("""
                 SELECT (COUNT(?x) AS ?nb)
                 { ?x a owl:Class . }
          """)))
    print(list(onto.classes()))

def getClasses_and_Relations():
    return list(default_world.sparql("""
                     SELECT ?subject ?object
                        WHERE { ?subject rdfs:subClassOf ?object }
              """))

#get product categories on relationships of weather and sugar

def products_category_on_relationship(data):
    products_category_list =[]
    classList = getClasses_and_Relations()
    for x in classList:
        object_string = str(x)
        if data in object_string:
            products_category_list.append(object_string.split(",")[0].split(".")[1])

    for y in products_category_list:
        if data in str(y):
            products_category_list.remove(y)

    return products_category_list


# print(products_category_on_relationship("HotWeather"))


#get products on categories

def product_on_category(data):
    products_list =[]
    classList = getClasses_and_Relations()
    for x in classList:
        object_string = str(x)
        if data+"," in object_string:
            if "hasBrand.value" in object_string:
                products_list.append((((object_string.split(",")[1]).split("hasBrand.value")[1]).strip('(').strip(')]')).split(".")[1])

    products_list = list(dict.fromkeys(products_list))

    return products_list


# print(product_on_category("Milk"))

#get products of a brand

def product_category_on_brand(data):
    products_list_on_brand =[]
    classList = getClasses_and_Relations()
    for x in classList:
        object_string = str(x)
        if data in object_string:
            if "hasBrand.value" in object_string:
                products_list_on_brand.append(object_string.split(",")[0].split(".")[1])

    return products_list_on_brand


# print(product_category_on_brand("Ambewela"))

#get products on ingredients

def product_category_on_ingredients(data):
    products_list_on_ingredient =[]
    classList = getClasses_and_Relations()
    for x in classList:
        object_string = str(x)
        if data in object_string:
            if "hasIngredients.value" in object_string:
                products_list_on_ingredient.append(object_string.split(",")[0].split(".")[1])

    return products_list_on_ingredient


# print(product_category_on_ingredients("Cocoa"))