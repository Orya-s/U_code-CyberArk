from cmath import nan


print("\n")

# unicode example

# decimal value from a character
ord('C') # 67 


# character from a decimal value
print(chr(67)) # C 



res = ""

for c in "abc":
  code = ord(c)
  incremented_code = code + 1
  incremented_char = chr(incremented_code)
  res += incremented_char

print(res)


# euqals to - 
print("".join([chr(ord(c)+1) for c in "abc"]))





# sc 1
chr(ord("M"))  # == "M"

ord(chr(22))  # == 22

chr(ord("4") + 3)  # == 7




# example of using r before a string to cancel the \
print(r"This is a new\n dawn")   
print("\n")


# example of python built-in bytes object - To create a bytes literal we add a b prefix
byte_string = b'ABC' 

# To get the ASCII value we can simply iterate the string -
for x in byte_string:
  print(x)
  
  
  
  

# EXERCISES



# ex - to upper

def to_upper(letter):
    return chr(ord(letter)-32) if (97 <= ord(letter) <= 122) else letter

# print(to_upper("a"))
# print(to_upper("m"))
# print(to_upper("z"))
# print(to_upper("Z"))


def upper(string):
    return "".join(to_upper(s) for s in string)

print(upper("hello"))
print(upper("I love Python!"))    # "I LOVE PYTHON!" 
print("\n")




# ex - Unicode Encryption

def encode(msg):
    return " ".join(str(ord(w)) for w in msg)

print(encode("Hello"))


def decode(msg):
    return "".join(chr(int(n)) for n in msg.split(" "))

print(decode("72 101 108 108 111"))   # "Hello"
print(decode(encode("Hello")))        # "Hello" 
print("\n")




# ex - Word value

def get_word_value(word):
    return sum(ord(x) - 96 for x in word)
    
    
print(get_word_value("day"))    # 4 + 1 + 25 = 30 
print("\n")




# ex - Caesar cipher
# Write an encode(msg, n) function to encode msg using a Caesar cipher with shift n.

def encode(string, num):
    return "".join(chr(ord(s)+num) if ord(s)+num < 91 else chr(65+num-(91-ord(s))) for s in string)
    
print(encode("ABZ", 2))   
print(encode("ABXYZ", 3))   # "DEABC" 

def decode(string, num):
    return "".join(chr(ord(s)-num) if ord(s)-num > 64 else chr(91 - (65-ord(s))-num ) for s in string)

print(decode("DEABC", 3))    # "ABXYZ" 
# ord(s)-num + (90)

print("\n")




# ex - Convert string-number to int

def string_number_to_int(stringNum):
    # 48 = ord("0")  ,  57 = ord("9")
    num = 0
    arr = [*stringNum]
    for i, s in enumerate(arr):
        if ord("0") <= ord(s) <= ord("9"):   # "4"
            num += (ord(s) - ord("0")) * (10 ** (len(arr) - i-1))
        else:
            return nan
    return num
    
   
print(string_number_to_int("10"))       # output: 10
print(string_number_to_int("123"))      # output: 123
print(string_number_to_int("99"))       # output: 99
print(string_number_to_int("ABC")) 
 
print("\n")



print("\n")