import pytest

def one_punch_function(mach_data):
    choice = mach_data

    if choice == 1: #print "1"
        print("1")
        return "1"
    elif choice == 2: #print "2"
        print("2")
        return "2"
    elif choice % 3 == 0 and choice % 5 == 0: #print "PepsiCoke"
        print("PepsiCoke")
        return "PepsiCoke"
    elif choice == 3 or choice % 3 == 0: #print "Pepsi"
        print("Pepsi")
        return "Pepsi"
    elif choice == 5 or choice % 5 == 0: #print "Coke"
        print("Coke")
        return "Coke"
    
    
# one_punch_function()

