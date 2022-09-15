from sympy import *

class Primes:
    def is_prime(number):
        # ans = [False for n in range(2, number / 2 + 1) if (number % n == 0)]
        # return len(ans) == 0
        return isprime(number)
        
    def are_prime_numbers(self, *args):
        return all(self.is_prime(a) for a in args)
    
    