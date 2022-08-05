from capstone import TodoDictionary

td2 = TodoDictionary()

def test_fail():
    assert len(TodoDictionary.dictionary) == 1

def test_pass():
    assert len(TodoDictionary.dictionary) == 2

def test_adding():
    td2.AddTodo()
    assert len(TodoDictionary.dictionary) == 3

def test_remove_first():
    td2.RemoveFirst()
    assert len(TodoDictionary.dictionary) == 2

def test_remove_last():
    td2.RemoveLast()
    assert len(TodoDictionary.dictionary) == 1

def test_remove():
    td2.RemoveTodo()
    assert len(TodoDictionary.dictionary) == 0