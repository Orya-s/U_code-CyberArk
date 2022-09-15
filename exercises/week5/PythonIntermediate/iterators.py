
# creating an iterator
string_iterator = iter("Python is great")
list_iterator = iter([2,4,6]) 

string_iterator = iter("Python")


# getting next element
print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator)) 

print("\n")


# setting default value if there isn't next
print(next(string_iterator, None)) 

print("\n")


# try and catch
try:
  print(next(list_iterator))
except StopIteration as e:
  print("no more items") 
  
print("\n")
  
  
  
# GENERATORS

# example of a generator functions
def my_gen():
  n = 1
  print('This is printed in the first call')
  yield n
  n += 1
  print('This is printed second')
  yield n
  n += 1
  print('This is printed at last')
  yield n 
  
print("\n")


# it returns a Generator object but does not start execution immediately!
iter_gen = my_gen() 

# printing the attributes of a generator
print(dir(iter_gen))

print("\n")


print(next(iter_gen))
print(next(iter_gen))
next(iter_gen)

print("\n")




# EXERCISES

# ex 1

def my_enumerate(iterable, start=0):
  idx = 0
  while True:
    try:
      yield (start, iterable[idx])
      start += 1
      idx += 1
    except (StopIteration, IndexError) as e:
      # print("no more items") 
      break
    

for index, elem in my_enumerate([10, 20, 30, 40]):
  print(index, elem) 
    
print("\n")

# can't check 2 tests at the same time!

# for index, elem in my_enumerate([10, 20, 30, 40], 10):
#   print(index, elem)  
    
    
    
      
print("\n")


# ex 2

def my_accumulate(numbers):
  idx = 0
  sum = 0
  while True:
    try:
      sum += numbers[idx]
      idx += 1
      yield sum
    except (StopIteration, IndexError) as e:
      # print("no more items") 
      break


for elem in my_accumulate([1,2,3,4,5]):
  print(elem) 


print("\n")




# ex 3

# ex3
def get_prime_factors_generator(number):
    my_gen = get_next_prime()
    fact = next(my_gen)
    while (fact <= number):
        if number % fact == 0:
            number = number / fact
            yield fact
        else:
            fact = next(my_gen)


def get_next_prime(number=2):
    while True:
        if is_prime(number):
            yield number
        number += 1


def is_prime(number):
    ans = [False for n in range(2, int(number / 2) + 1) if (number % n == 0)]
    return len(ans) == 0


for x in get_prime_factors_generator(100):
    print(x)
    
    
    
print("\n")
    
    
# def is_prime(number):
#   print("is_prime", number)
#   return len([False for n in range(2, int(number / 2 + 1)) if (number % n == 0)]) == 0


# def get_prime_factors_generator(number):
#   print("main func", number)
#   if number == 1 or number == 0:
#     return
  
#   if is_prime(number):
#     print("calling is_prime", number)
#     yield number
  
#   for n in range(int(number / 2 + 1), 1, -1):
#     if number % n == 0:
#       print("if", n)
#       return get_prime_factors_generator(n)
  
  # else:
  #   return get_prime_factors_generator(number / 2 + 1)
  








# ex 4
class CircleIter:
  def __init__(self, sequence, num):
    self.sequence = list(sequence)
    self.num = int(num)

  def __iter__(self):
    self.counter = 0
    return self
    
  def __next__(self):
    if self.counter >= self.num:
      raise StopIteration
    res =  self.sequence[self.counter % len(self.sequence)] 
    self.counter += 1
    return res


  
for x in CircleIter([1,2],5):
  print(x, end=" ") 
  
print("\n")

for x in CircleIter([1,2,3],4):
  print(x, end=" ")
  for y in CircleIter([5,6],3):
    print(y, end=" ")
  print() 




print("\n")