from primes import Primes

# class PrimesTests:
def test_is_three_prime():
    assert Primes.is_prime(3) == True, "Test failed! Wrong answer when checking if number is prime"
    
    
def test_five_six_seven():
    assert Primes.are_prime_numbers([5,6,7]) == True, "Test failed! Wrong answer when checking if numbers are prime"

def test_one():
    return 