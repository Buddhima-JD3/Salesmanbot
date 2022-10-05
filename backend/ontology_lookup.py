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


classList = list(default_world.sparql("""
                 SELECT ?subject ?object
                 	WHERE { ?subject rdfs:subClassOf ?object }
          """))

#get product categories on relationships of weather and sugar
products_category_list =[]
def products_category_on_relationship(data):
    for x in classList:
        object_string = str(x)
        if data in object_string:
            products_category_list.append(object_string.split(",")[0].split(".")[1])

    for y in products_category_list:
        if data in str(y):
            products_category_list.remove(y)

    return products_category_list


print(products_category_on_relationship("HotWeather"))


#get products on categories
products_list =[]
def product_on_category(data):
    for x in classList:
        object_string = str(x)
        if data+"," in object_string:
            if "hasBrand.value" in object_string:
                products_list.append((((object_string.split(",")[1]).split("hasBrand.value")[1]).strip('(').strip(')]')).split(".")[1])

    return products_list


print(product_on_category("Milk"))

#get products of a brand
products_list_on_brand =[]
def product_category_on_brand(data):
    for x in classList:
        object_string = str(x)
        if data in object_string:
            if "hasBrand.value" in object_string:
                products_list_on_brand.append(object_string.split(",")[0].split(".")[1])

    return products_list_on_brand


print(product_category_on_brand("Ambewela"))

#get products on ingredients
products_list_on_ingredient =[]
def product_category_on_ingredients(data):
    for x in classList:
        object_string = str(x)
        if data in object_string:
            if "hasIngredients.value" in object_string:
                products_list_on_ingredient.append(object_string.split(",")[0].split(".")[1])

    return products_list_on_ingredient


print(product_category_on_ingredients("Cocoa"))