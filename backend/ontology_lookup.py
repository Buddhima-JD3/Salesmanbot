from owlready2 import *

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

