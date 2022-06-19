
def one_punch_function():
    choice = int(input())

    if choice == 1: #print "1"
        print("1")
    elif choice == 2: #print "2"
        print("2")
    elif choice % 3 == 0 and choice % 5 == 0: #print "PepsiCoke"
        print("PepsiCoke")
    elif choice == 3 or choice % 3 == 0: #print "Pepsi"
        print("Pepsi")
    elif choice == 5 or choice % 5 == 0: #print "Coke"
        print("Coke")
    
    
one_punch_function()