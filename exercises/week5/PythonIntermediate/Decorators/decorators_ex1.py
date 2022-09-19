from utils import my_decorator
from functools import wraps
import time

print()

# ex 1

def my_decorator(func):
    @wraps(func)
    def wrapper(num):
        start_time = time.time()
        func(num)
        print("Run Time - %s seconds" % (time.time() - start_time))
    return wrapper
        
    
@my_decorator
def sum_many(num):
    sum = 0
    for i in range(num):
        sum += i
    print(sum)
    
 
# sum_many(1000000)
# sum_many(5000000) 

print()




# ex 2

def info_deco(sum_func):
    @wraps(sum_func)
    def inner(*args, **kwargs):
        print("func name:", sum_func.__name__)
        print("args:", args)
        print("kwargs:", kwargs)
        res = sum_func(*args)
        print("return value:", res)
        print(type(res))
        
    return inner
     
@info_deco   
def add(*args, **kwargs):
    return sum(args)
          
add(1, 2, age=3, text="hello") 



print()




# ex 3

def slow_by_1(func):
    @wraps(func)
    def inner():
        print("Starting function")
        time.sleep(1)
        func()
        print("done")
    return inner

@slow_by_1
def my_func():
    print("This is my function")


my_func()

print()




# ex 4

def keep_num_calls(func):
    @wraps(func)
    def inner():
        func()
        print(inner.calls)
        inner.calls += 1
    inner.calls = 1  
    return inner



@keep_num_calls
def func():
    print("Hi")


func()
func()
func()


print()