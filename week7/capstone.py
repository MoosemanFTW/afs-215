from pytest import Item


class TodoDictionary:

    dictionary = {
        "homework": "finish homework",
        "laundry": "do my laundry"
    }
    adding = True
    def ShowList(self):
        print(self.dictionary)

    def AddTodo(self):
        while self.adding == True:
            sub = input('please enter subject: ')
            task = input('please enter task: ')
            self.dictionary.update({sub:task})
            addmore = input('if you want to add another task enter 1: ')
            if addmore == "1":
                continue
            else:
                self.adding = False

    def RemoveFirst(self):
        del self.dictionary[next(iter(self.dictionary))]

    def RemoveLast(self):
        self.dictionary.popitem()

    def RemoveTodo(self):
        ItemToRemove = input('please enter the exact subject of the todo you want to remove: ')
        self.dictionary.pop(ItemToRemove)



TD1 = TodoDictionary()
TD1.ShowList()
TD1.AddTodo()
TD1.ShowList()
TD1.RemoveFirst()
TD1.ShowList()
TD1.RemoveLast()
TD1.ShowList()
TD1.RemoveTodo()
TD1.ShowList()