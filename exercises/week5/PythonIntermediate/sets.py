
# set example
evens = {2,44,24,62,78}


s = set()
print(type(s))
print(s)


s = {3, "Yossi", False, (1,), None}
print(s)


s = set([4, 3, 2, 1])
print(s) # {1, 2, 3, 4}


s = set("Tomorrow never dies")
print(s)


s = { 3, 6, 'bibi', ('Simon', 'Garfunkel') }
s.add(5)
print(s)


s.update([11, 22], (55,), ('mimi',))
print(s)


s = { 'Avi', 'Itzik', 'Kobi' }
print(s)

s.discard('Avi')    # returns None if not exist
print(s)

s.remove('Itzik')   # remove() throws an exception if not exist
print(s)


s = {5, 6, 7, 8, 9}
s.pop()     # The removal will be done arbitrarily (as there is no order)
print(s)

print(s)
s.clear()
print(s)

print('T' in s)




# Sets Operations

# Union
s1 = {1, 3, 5}
s2 = {2, 4}

s1.union(s2) # {1,3,5,2,4}
 
s1 | s2 # bitwise operation => {1,3,5,2,4}


# Intersection
s1 = {1, 2, 5}
s2 = {2, 4, 1}

s1.intersection(s2) #{1,2}

s1 & s2



# Difference
s1 = {1, 2, 5}
s2 = {2, 4, 1}

print(s1.difference(s2)) # {5}

s1 - s2 # {5}



# Symmetric difference
s1 = {1, 2, 5}
s2 = {2, 4, 1}

print(s1.symmetric_difference(s2))

print(s1 ^ s2) # {4,5}



# isdisjoint - returns True when two sets are compared and there is no common value between them
s1 = {1, 2, 3, 4}
s2 = {1, 5, 6, 7}
s3 = {5, 6, 7, 8}

print(s1.isdisjoint(s2))
print(s1.isdisjoint(s3))
print(s2.isdisjoint(s3))


# issuperset - returns True if the set in use (perfectly) contains another set
s1 = {'a', 'b', 'c', 'd'}
s2 = {'a', 'b', 'c'}
s3 = {'a', 'b', 'e'}
s4 = {'a', 'b', 'c', 'd'}
s5 = set()

print(s1.issuperset(s2))
print(s1.issuperset(s3))
print(s1.issuperset(s4))
print(s1.issuperset(s5))


# issubset - returns True if the set in use is contained by another set
s2.issubset(s1)

print("\n")







# EXERCISES

import json
import os
script_dir = os.path.dirname(__file__)
file_path = os.path.join(script_dir, "nyc_jobs.json")

with open(file_path) as read_file:
    jobs = json.load(read_file)



# ex 1
def find_jobs_by_word(word):
    return [job for job in jobs if word in job.get("job_description")]

print(len(find_jobs_by_word("experience"))) # 165



# which agencies offers Entry-Level jobs and jobs that are located in Broadway (not neccesarily the same job)
# this does not mean that an agency needs to have a job in entry level and in Broadway
entry_level_jobs = set([job["agency"] for job in jobs if job["career_level"] == "Entry-Level"])
not_in_brooklin = set([job["agency"] for job in jobs if "Broadway" in job["work_location"]])

result = (entry_level_jobs & not_in_brooklin)
print("broadway", result)    
    