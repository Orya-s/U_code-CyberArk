import pytest

def Fibonacci(n): 
    # Check if input is 0 then it will print incorrect input
    if n < 0:
        print("Incorrect input")
 
    # Check if n is 0 then it will return 0
    elif n == 0:
        return 0
 
    # Check if n is 1,2 it will return 1
    elif n == 1 or n == 2:
        return 1
 
    else:
        return Fibonacci(n-1) + Fibonacci(n-2)


@pytest.mark.parametrize("n, ans", [(2,1), (3,2)])
def test_Fibonacci(n, ans): 
    assert Fibonacci(n) == ans