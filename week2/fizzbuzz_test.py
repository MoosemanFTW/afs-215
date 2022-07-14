from fizzbuzz import one_punch_function

# def test_choice_one():
#     a = one_punch_function(1)
#     assert a == "2"

def test_choice_one():
    a = one_punch_function(1)
    assert a == "1"

def test_choice_two():
    a = one_punch_function(2)
    assert a == "2"

def test_choice_three():
    a = one_punch_function(3)
    assert a == "Pepsi"
def test_choice_six():
    a = one_punch_function(6)
    assert a == "Pepsi"

def test_choice_five():
    a = one_punch_function(5)
    assert a == "Coke"
def test_choice_ten():
    a = one_punch_function(10)
    assert a == "Coke"

def test_choice_three_five():
    a = one_punch_function(15)
    assert a == "PepsiCoke"