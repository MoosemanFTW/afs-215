# python class example of dog

# what do we know about dogs?
# they have a name, age, can sit and roll over, etc.
# let's model our class with those two pieces of information and behaviors because they are common to most dogs

class Dog(object):
     """An attempt to model a dog"""
     
     def __init__(self, name, age):
          """Initialize name and age attributes"""
          self.name = name
          self.age = age
          
     def sit(self):
          """Simulate a dog sitting in response to command"""
          print(self.name.title() + " is now sitting.")
          
     def roll_over(self):
          """Simmulate rolling over in response to command"""
          print(self.name.title() + " rolled over!")

# think of a class as a set of instructions for how to make an instance. 
# The class Dog is a set of instructions for how to make individual isntances representing specific dogs

# my_dog = Dog('fiji', 3)
# my_dog.sit()
# my_dog.roll_over()