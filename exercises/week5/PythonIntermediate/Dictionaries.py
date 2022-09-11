print('\n')


# sc 1

fridge = {
    "milk": 1,
    "bananas": 4, 
    "juice": 2
}

if fridge["milk"] == 1:
    print("There is one bottle of milk left")
else:
    print("There are " + str(fridge["milk"]) + " bottles of milk left")

print('\n')



# update dictionary example - update() adds all the pairs from the given dictionary (values_to_add) to the target dictionary.
values_to_add = {"1": 'complete number', "0.5": 'half', "0.25": 'quarter'}
numbers = {'pi': 3.14159265359, 'phi': 1.6180339887, "1": 'complete'}

numbers.update(values_to_add)
print(numbers)

print('\n')




# sc 2

closet = {
    "shirts": {
        "blue": 4,
        "black": 1,
        "white": 13,
        "flamingo-pink": 2
    },
    "pants": {
        "shorts": {
            "purple": 1,
            "red": 2,
            "flamingo-pink": 3
        },
        "jeans": {
            "denim": 8,
            "organic": 1
        }
    },
    "jackets": {}
}

# q2
print("There are " + str(closet["shirts"]["white"]) + " in the closet")
# q3
print("There are " + str(closet["pants"]["shorts"]["flamingo-pink"]) + " flamingo-pink shorts in the closet")
# q4
closet["pants"]["jeans"]["organic"] = 7
print("There are " + str(closet["pants"]["jeans"]["organic"]) + " organic jeans in the closet")
# q5
closet["pants"]["jeans"]["denim"] -= 4
print("There are " + str(closet["pants"]["jeans"]["denim"]) + " denim jeans in the closet")
# q6
output = "top" if closet["pants"]["shorts"]["flamingo-pink"] > closet["shirts"]["flamingo-pink"] else "bottom"
print(output)



# an example for using del - 
student = {
    "name": "koko",
    "age": 42,
    "level": "A"
}

del student["level"]





# an example of using items in dictionaries - 
person = {
    "name": "koko",
    "age": 17,
    "is vegan": True
}

for key,value in person.items():
    print(key, value)





# an example of creating new dictionary using dictionary comprehension - 
nums = [2,4,6]
numbers = { str(value): value for value in nums }
print(numbers)




# example that uses the 2 values of an enumerate -
names = ["koko", "momo", "bobo"]
result = {"name" + str(i): v for i,v in enumerate(names)}
print(result)

names = ["koko", "mimi", "bobo", "fifi"]
result = {"n"+ str(i): names[i] for i in range(len(names)) if names[i][1] == "i"}
print(result)




# sc 3

def get_squares_dictionary(n):
    return {x: x ** 2 for x in range(1, n + 1)}
     
print(get_squares_dictionary(5)) 





# EXERCISES

# ex1
state = "India"

heads_of_states = {
    "Italy": {
        "president": "Sergio Mattarella",
        "prime minister": "Giuseppe Conte"
    },
    "India": {
        "president": "Ram Nath Kovind",
        "prime minister": "Narendra Modi"
    },
    "France": {
        "president": "Emmanuel Macron",
        "prime minister": "Edouard Philippe"
    }
}

print("The president of", state, "is", heads_of_states[state]["president"], "and the prime minister is", heads_of_states[state]["prime minister"])




# ex 2
user_id = 3058
bonus_months = 3

user_months = {
    1552: 18,
    7021: 2,
    532: 12,
    3058: 9,
    1102: 4
}

print("\n",user_months[user_id])
user_months[user_id] += bonus_months
print("Giving user " + str(user_id) + " an extra " + str(bonus_months) + " month bonus")
print(user_months[user_id], "\n")





# ex 3
country_populations = {}
country_populations["Ghana"] = 28
country_populations["Brazil"] = 209
country_populations["Mongolia"] = 3

country = "Brazil"
isBig = "big" if country_populations[country] >= 50 else "small"
print(country, "is a", isBig, "country")
print(country, "is a big country") if country_populations[country] >= 50 else print(country, "is a small country")





# ex 4
tomato = "Tomato Soup"
onion = "Onion Soup"
carrot = "Carrot Soup"

user_preferences = {
    "Sarah": tomato,
    "Sheila": carrot,
    "Fernando": tomato,
    "Jovan": onion,
    "Simona": carrot
}

soup_recipes = {
    tomato: "Get a bunch of tomatoes, cut them up, and throw them in boiling water",
    onion: "Be prepared to cry",
    carrot: "Find a rabbit, ask him how to make a carrot soup"
}

user = "Simona"

print(soup_recipes[user_preferences[user]])




# extension
def get_5common(line):
    lineList = line.split(" ")
    word_count = {x: 0 for x in lineList}    
    for word in lineList:
        word_count[word] += 1
    
    return max(word_count.items())

line = "wee wee goo koo goo doo doo so go go yo yo yo yo fo zo"
print(get_5common(line))










print('\n')
