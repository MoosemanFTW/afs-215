# AFS 215 Week 3 Lecture

## Agenda

1. Week 1 Recap
2. Python Classes Refresh
3. [Pytest Fixtures](https://docs.pytest.org/en/6.2.x/fixture.html)
4. Q & A

## 1. Week 1 Recap

- Test Driven Development (TDD) is a process relying on a cycle of writing failing test first, before then writing code to make those tests pass (Fail Pass Refactor === FPR).
- Bugs happen. We are human, and humans make mistakes. We write tests in an attempt to mitigate the amount of bugs that make it to production and as documentaion for our applications.

> In the simplest terms, a test is meant to look at the result of a particular behavior, and make sure that result aligns with what you would expect. Behavior is not something that can be empirically measured, which is why writing tests can be challenging.

## Week 3 Overview

Software **test fixtures** initialize test functions. They provide a fixed baseline so that tests execute reliably and produce consistent, repeatable, results. Initialization may setup services, state, or other operating environments. These are accessed by test functions through arguments; for each fixture used by a test function there is typically a parameter (named after the fixture) in the test function’s definition.

### Learning Goals

In today's lesson we will:

- Refresh our knowledge on Python classes
- Explore software text fixtures within the pytest library

## 2. Python Classes Refresh

Classes tell Python how to shape and arange objects. Let's break down the main parts and head to the acompanying file, _tdd_dog_class.py_, in the _sandbox_ directory to practice.

> Pythons naming convention for classes is _CapWords_, also known as _PascalCase_ .... similar to camelCase except the first letter will be capitalized. ex:
>
> ```python
> class MyClassExample
> ```

### `__init__`

The init method is a special method Python runs automatically whenever we create a new instance of that class. The method has two leading and trailing underscores, a convention aimed at reducing naming colisions.

The `self` parameter is required in the method definition, and it must come before the other parameters.

> Every method call associated with a class automatically passes self, which is a reference to the instance itself; giving the the individual instance access to the attributes and methods in the class.

The two variables defined each have the prefix `self`. Any variable prefixed with `self` is available to every method in the class allowing us to access these varaibles through any instance of that class. Variables that are accessible through instances like this are called **attributes**.

```python
def __init__(self, name, age):
     self.name = name
     self.age = age
```

### Accessing Attributes

To access the attributes of any instance you use dot notation:

```python
my_dog.name 
my_dog.sit()
```

> Every attribute in a class needs an initial value, even if that value is 0 or an empty string. If you do this you don't have to include a parameter for that attribute.

### `super()`

The [super function](https://realpython.com/python-super/) is a special function that helps Python make connections between parent and child classes.

> The name _super_ comes from a convention of calling the parent class a _superclass_ and the child a _subclass_.

### Importing & Modules

_see sandbox_

> Every class should have a docstring describing what that class does

## 3. Pytest Fixtures

pytest fixtures offer dramatic improvements over the classic xUnit style of setup/teardown functions:

- fixtures have explicit names and are activated by declaring their use from test functions, modules, classes or whole projects.
- fixtures are implemented in a modular manner, as each fixture name triggers a fixture function which can itself use other fixtures.
- fixture management scales from simple unit to complex functional testing, allowing to parametrize fixtures and tests according to configuration and component options, or to re-use fixtures across function, class, module or whole test session scopes.
- teardown logic can be easily, and safely managed, no matter how many fixtures are used, without the need to carefully handle errors by hand or micromanage the order that cleanup steps are added.

> “Fixtures”, in the literal sense, are each of the arrange steps and data. They’re everything that test needs to do its thing. At a basic level, test functions request fixtures by declaring them as arguments.

**In pytest, “fixtures” are functions you define that serve this purpose. But they don’t have to be limited to just the arrange steps. They can provide the act step, as well, and this can be a powerful technique for designing more complex tests, especially given how pytest’s fixture system works.**

## 4. Questions

## Summary

Pytest fixtures are explicit, modular, and scaleable ways to set up and execute function testing systems within pytest.

### References

- Matthes, E. (2016). _Python Crash Course: A Hands-On, Project-Based Introduction to Programming_ No Starch Press, Inc.
- [Pytest Documentation](https://docs.pytest.org/en/7.1.x/)
- [Real Python](https://realpython.com/python-super/)
