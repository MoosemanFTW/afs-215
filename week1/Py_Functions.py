class List():
    def __init__(self) -> None:
        self.data = []

    def AppendNumber(self,number):
        self.data.append(number)

    def AppendString(self,string):
        self.data.append(string)

    def AppendDictionary(self,dictionary):
        self.data.append(dictionary)

    def AppendTuple(self,tuple):
        self.data.append(tuple)

    def convert(self,list):
        return tuple(list)

newList = List()
newList.AppendNumber(5)
newList.AppendString("five")
newList.AppendDictionary({"five":"5"})
newList.AppendTuple(("one","two","three"))
print(newList.data)
print(newList.convert(newList.data))