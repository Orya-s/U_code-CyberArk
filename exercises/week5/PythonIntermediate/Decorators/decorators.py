from utils import my_decorator
from functools import wraps


# @my_decorator takes just_print as an argument and then when it returns the wrapper function, wrapper 
# running and calling just_print from inside it  
@my_decorator
def just_print():
  print("** some function that uses the decorator")


just_print() 




# our example

def print_args(func):
  @wraps(func)
  def inner(*args, **kwargs):
    print("args: ", end=" ")
    for x in args:
      print(x, end=" ")
    print()
    res = func(*args, **kwargs)
    print(res)
    return res
  return inner 
  
@print_args
def add2(x, y):
  return x+y
  
@print_args
def add3(x, y, z):
  return x+y+z

@print_args
def add4(w, x, y, z):
  return w+x+y+z

add2(1,2)
add3(1, 2, 3)
add4(1,2, 2, 4) 

print(add2(1,2)) 
