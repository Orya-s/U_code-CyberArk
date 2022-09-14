print("\n")

# sc 1
numbers = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
print(numbers[::2])


print("\n")
# EXERCISES

# ex 1
my_tuple = (1, 3.3, ("a", "4"), [], "a", True, {"key":"value"}, 'r')

# ex 2
print("Printing 4th element-", my_tuple[4], ", Printing 4th from last element", my_tuple[-4])
print("\n")


# ex 3
days = ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
days = tuple([d for d in days if d is not "Tuesday"])
print(days)
print("\n")


# ex 4
numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
# numbers = tuple([n for n in numbers])
numbers = numbers[::-1]
print(numbers)
print("\n")


# ex 5
def q1(tup):
    return tup[::-1][:-1]
    # return tuple([e for e in tup if e is not ])
print(q1((1,2,3)))
print(q1((2,4,6,8,10,12)))
print("\n")

def q2(tup):
    return tup[-2::-1]
    # return tuple([e for e in tup if e is not ])
print(q2((1,2,3)))
print(q2((2,4,6,8,10,12)))






print("\n")