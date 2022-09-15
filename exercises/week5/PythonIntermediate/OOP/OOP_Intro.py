print("\n")

# sc 1

class Restaurant:
    def __init__(self, name, ratings, is_vegetarian):
        self.name = name
        self.ratings = ratings
        self.is_vegetarian = is_vegetarian
        
    def get_menu(self):
        print(f"We have {'meat' if not self.is_vegetarian else 'vegetables'}")
        
        
r1 = Restaurant("Zoozaazo", 4, False)
r2 = Restaurant("Top La Pompei", 3, False)
r3 = Restaurant("El Viego", 5, True) 

print(r3.ratings)   
print("\n")



# sc 2
r1.get_menu() # outputs: We have meat
r3.get_menu() # outputs: We have vegetables


print("\n")





# EXERCISES

class YouTubeLessonManager:
    def __init__(self):
        self.lessons = {}
        
    def save(self, name, url):
        self.lessons[name] = url
        
    def get(self, lesson_name):
        name = [url for name,url in self.lessons.items() if lesson_name.lower() in(name.lower())]
        if len(name) == 1:
            return name[0]
        
        return name # self.lessons[lesson_name]

# d={4:"t", 6:"o"}
# for k,v in d.items():
#     print(k, v)

# ex 2
lesson_manager = YouTubeLessonManager()

lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")
print(lesson_manager.lessons)   # outputs: {"For-Loops": "https://www.youtube.com/watch?v=OnDr4J2UXSA"}  
print(lesson_manager.lessons["For-Loops"])   # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA' 

# ex 3
print(lesson_manager.get("For-Loops"))   # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA' 

# ex 4
print(lesson_manager.get("for-loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(lesson_manager.get("fOr-LooPS")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'

# ex 6
lesson_manager.save("While-Loops", "https://www.youtube.com/watch?v=6TEGxJXLAWQ")

print(lesson_manager.get("for")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(lesson_manager.get("loops")) # outputs ['https://www.youtube.com/watch?v=OnDr4J2UXSA', 'https://www.youtube.com/watch?v=6TEGxJXLAWQ']
print("\n")