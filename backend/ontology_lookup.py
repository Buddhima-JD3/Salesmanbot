from owlready2 import *

onto = get_ontology("./ontology/DairyProducts.owl")
onto.load()
print("Ontology Successfully Loaded")

print("Total Classes : ", list(default_world.sparql("""
                 SELECT (COUNT(?x) AS ?nb)
                 { ?x a owl:Class . }
          """)))


print(list(onto.classes()))

