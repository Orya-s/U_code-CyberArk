import requests

print()



class Client:
    def __init__(self):
        self.money = 500
        
        
    def get_price(self, furniture):
        res_price = requests.get('http://localhost:8080/store/{}'.format(furniture))
        price = res_price.json()["price"]
        if(price is not None):   # item does not exist in the store
            return price
        else:
            raise Exception("Unfortunately we don't sell this item")
        
    def get_inventory(self, furniture):
        res_inventory = requests.get('http://localhost:8080/store/buy/{}'.format(furniture))
        return res_inventory.json()["inventory"]
    
    
    def buy_item(self, furniture):
        price = self.get_price(furniture)
        if price <= self.money:
            inventory = self.get_inventory(furniture)
            if(inventory > 0):      # the item is in stock 
                print(f"Congratulations, you've just bought a {furniture} for {price} dollars. There are {inventory} left now in the store.")
                self.money -= price  
            else:
                print("Unfortunately this item is out of stock") 
        else:
            print("You don't have enough money to buy this item, you should get a job")
 
        
            
    
print("Which item would you like to buy?")
furniture = input()

client = Client()
client.buy_item(furniture)





















# res_price = requests.get('http://localhost:8080/store/{}'.format(furniture))
# price = res_price.json()["price"]

# if(price is not None):      # item does not exist in the store
#     if price <= money:      # client has enough money
        
#         res_inventory = requests.get('http://localhost:8080/store/buy/{}'.format(furniture))
#         inventory = res_inventory.json()["inventory"]

#         if(inventory > 0):      # the item is in stock 
#             print(f"Congratulations, you've just bought a {furniture} for {price} dollars. There are {inventory} left now in the store.")
#             money -= price  
#         else:
#             print("Unfortunately this item is out of stock")
#     else:
#         print("You don't have enough money to buy this item, you should get a job")
        
# else:
#     print("Unfortunately we don't sell this item")




print()





# אוריוש
# אנחנו מתים עלייך (: ♥