print("\n")

# Warnings example 

import warnings
warnings.warn('This is a warning message') 
import warnings
# Cause all warnings to always be triggered.
warnings.simplefilter("always")
warnings.warn("This is ignored NO MORE", ImportWarning) 



# EXERCISES


# ex 1 - Find all the possible errors in this code:
"""
dividend = float(input("Enter the dividend: "))   # => float on possibly NaN 
divisor = float(input("Enter the divisor: "))   # => float on possibly NaN 
quotient = dividend/divisor   # => possibly division of NaN
print(math.floor(quotient))    # => floor on possibly NaN 
"""



# ex 2

def get_list_element(my_list, index):
    try:
        print(my_list[index]) 
    except IndexError as exp:
        print("index out of bound", exp) 
        




# ex 3

try: 
    age = int(input("How old are you? ")) 
except (ValueError, TypeError) as e:
    print(f'Error is {e}') 
    
  
    

# ex 4

def divide(x, y):
  try:
    print(f'{x}/{y} is {x / y}')
  except ZeroDivisionError as e:
    print(e)
  except TypeError as e:
    print(e)
  except ValueError as e:
    print(e) 
        


print("\n")