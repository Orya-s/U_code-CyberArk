
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def calculate_area(self):
        return self.width * self.height
    
    def calculate_perimeter(self):
        return self.width * 2 + self.height * 2
        
        
class Square(Rectangle):
    def __init__(self, length):
        self.length = length
        super().__init__(length, length)
        
    def calculate_perimeter(self):
        return self.length * 4
    

s = Square(2)
print()
print(s.calculate_perimeter())  # outputs: 8
print(s.calculate_area())  # outputs: 4 

print()

