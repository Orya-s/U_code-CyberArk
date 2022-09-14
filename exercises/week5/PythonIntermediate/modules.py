from math import floor, ceil, pow, tan, pi

print("\n")

# sc 1
print(floor(-5.3))  # An expression that calculates the floor of -5.3

print(ceil(tan(16.8)))   # An expression that calculates the ceiling of tangent of 16.8.

# A function that calculate the area of a regular polygon with n sides and length of each side is l.
#   (n * (l)^2)/(4 * tan(π/n)) 
n = 3
l = 4
print((n * pow(l, 2))/(4 * tan(pi/n)))


# Built-in modules - modules that comes bundled with the python interpreter
# import sys

# print(sys.builtin_module_names)       # printing full list 





print("\n")

# EXERCISES

# ex 1
import calendar

print(calendar.isleap(2010))
print(calendar.isleap(2020))

print(calendar.weekday(2028, 3, 14))    # Find which day of the week March 14, 2028 will be.








print("\n")