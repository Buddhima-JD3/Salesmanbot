from owlready2 import *

onto = get_ontology("./ontology/DairyProducts.owl")
onto.load()
print("Ontology Successfully Loaded")
#<http://example.com/DairyProductsOntology/#>

print("Total Classes : ", list(default_world.sparql("""
                 SELECT (COUNT(?x) AS ?nb)
                 { ?x a owl:Class . }
          """)))


a = list(default_world.sparql("""
                 SELECT ?subject ?object
                 	WHERE { ?subject rdfs:subClassOf ?object }
          """))

print(a)


def categoryBased(category):

    categoryBasedList = list(default_world.sparql("""
                     SELECT
                     	?search
                     	(STR(?label) AS ?name)
                     	(count(?class) as ?total)
                     	WHERE {
                     	values ?search {
                            {category}
                     	}
                     	{?class rdfs:subClassOf+ ?search}
                     	OPTIONAL {?search rdfs:label ?label.}
                     }
                     GROUP BY ?search ?label
              """))

    return categoryBasedList



def weatherBased(weather):

    weatherBasedList = list(default_world.sparql("""
                     SELECT
                     	?search
                     	(STR(?label) AS ?name)
                     	(count(?class) as ?total)
                     	WHERE {
                     	values ?search {
                            {weather}
                     	}
                     	{?class rdfs:subClassOf+ ?search}
                     	OPTIONAL {?search rdfs:label ?label.}
                     }
                     GROUP BY ?search ?label
              """))

    return weatherBasedList
