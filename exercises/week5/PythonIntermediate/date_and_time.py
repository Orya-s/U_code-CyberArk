import time

# gives the seconds passed since 12:00 am, January 1, 1970
print(time.time())

  
# gives the current time and date
print(time.ctime())

# First “1” appeared in the screen and after 5 seconds number “2” appeared.
print(1)
time.sleep(3)
print(2) 

print()


import datetime

# gives us today’s date including the year, month and day
print(datetime.date.today())

# both give us today’s date including current date and time parameters. datetime.now() provides more precision.
print(datetime.datetime.today())
print(datetime.datetime.now())


print(datetime.datetime.today().strftime("%Y%m%d"))
  # Output: 20200312
print(datetime.datetime.today().strftime("%m/%d/%Y"))
  # Output: 03/12/2020
print(datetime.datetime.today().strftime("%Y-%m-%d-%H.%M.%S"))
  # Output: 2020-03-12-10.59.53  

print()


# ex 1
print(datetime.datetime.now())
print()


# ex 2
print("time:", datetime.datetime.today().strftime("%H:%M:%S"))
print("current1:", datetime.datetime.today().strftime("%m/%d/%Y, %H:%M:%S"))
print("current2:", datetime.datetime.today().strftime("%d/%m/%Y, %H:%M:%S"))
print()



# ex 3
print("Current year is:", datetime.datetime.today().strftime("%Y"))
print("Current day is:", datetime.datetime.today().strftime("%A"))


def printAge(bday):
    curTime = datetime.datetime.today() 
    date = datetime.datetime.strptime(bday, "%d-%m-%Y")
    years = (curTime - date) / 365
    print("You are", years.days, "years old")
    

printAge("25-03-1995")




print()

from colorama import Fore
from colorama import Style

print(f"This is {Fore.BLUE}color{Style.RESET_ALL}!")