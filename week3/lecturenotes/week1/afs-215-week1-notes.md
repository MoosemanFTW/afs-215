# AFS 215 Week 1 Lecture

## Agenda

1. How to Ask a Good Question
2. Testing
3. Test Driven Devlopment
4. Recap
5. Q & A

This course leans heavily on the associated e-book and I highly suggest you keep up with or get ahead with the assigned readings. Most of the exercises and assignments are taken from the book so please use that as your main resource.

We will be meeting for lecture on odd weeks (weeks 1, 3, 5, & 7) at 6 am and 5 pm (PT). My office hours are even weeks (weeks 2, 4, 6, 8) on Wednesdays at 5 pm (PT).

> **PLEASE NOTE** The last morning lecture in week 7 has been moved to that Saturday the 30th of July at the same time, 6 am PDT.

### 1. How To Ask a "Good" Question

Asking a good question is not only for yourself but helps the person helping you quickly and efficently figure out what in the hell is going on in your jumbled mess of a project and how to help you through it. At first this will be your support system at BU, next most likely stack overflow, and lastly your mentor or senior level devs. The very first thing your senior dev will ask you will be did you google it.

#### Contents of a "good" question

1) Code snippets of every file involved. If full stack MERN this could be 5-10 ... all labeled on the top with a comment of the name of the file. Including the commented out code of your "tries."

2) A description of the problem you are trying to solve, or what you are tryign to accomplish. Think — how do I do x ..... tell us what x is.

3) What you specifically have done to try and solve this problem.

4) What error you are getting and any associated screenshot of that error.

### 2. Testing

As your codebase expands, small errors and edge cases you don’t expect can cascade into larger failures. Bugs lead to bad user experience and ultimately, business losses. One way to prevent fragile programming is to test your code before releasing it into the wild.

#### Why Test

We're humans, and humans make mistakes. Testing is important because it helps you uncover these mistakes and verifies that your code is working. Perhaps even more importantly, testing ensures that your code continues to work in the future as you add new features, refactor the existing ones, or upgrade major dependencies of your project.

There is more value in testing than you might realize. One of the best ways to fix a bug in your code is to write a failing test that exposes it. Then when you fix the bug and re-run the test, if it passes it means the bug is fixed, never reintroduced into the code base.

**Tests can also serve as documentation** for new people joining your team. For people who have never seen a codebase before, reading tests can help them understand how the existing code works.

Last but not least, more automated testing means less time spent with manual QA, freeing up valuable time.

> Your tests should be short and ideally test only one thing.

#### Writing Your Tests

When desribing or asserting your individual tests, try your best to cover the following:

1. **Given** - some precondition

2. **When** - some action executed by the function that you’re testing

3. **Then** - the expected outcome

> This is also known as AAA (Arrange, Act, Assert)

#### Unit Tests

Unit tests cover the smallest parts of code, like individual functions or classes. The great thing about unit tests is that they are quick to write and run. Therefore, as you work, you get fast feedback about whether your tests are passing.

![unit test watch mode diagram](./assets/images/unit-test-watch-mode.png)

### 3. Test-Driven Development (TDD)

TDD refers to a style of programming in which three activities are tightly interwoven: coding, testing (in the form of writing **unit tests**) and design (in the form of refactoring).

It can be succinctly described by the following set of rules:

- write a **single** unit test describing an aspect of the program

- run the test, which should fail because the program lacks that feature

- write **just enough** code, the simplest possible, to make the test pass

- **refactor** the code until it conforms to the simplicity criteria

- repeat, **accumulating** unit tests over time

> FPR (Fail -> Pass -> Refactor)

### 4. Recap

Tests are vital parts of our code used to ensure more reliable and predictable applications. In this course we will explore writing unit tests in Python using a testign framework known as [pytest](https://docs.pytest.org/en/7.1.x/)

## 5. Questions

... ?
