import pytest

@pytest.mark.skip
def test_sum1():
  assert 1 + 2 == 3

def test_sum2():
  assert 1 + 2 == 4 
  

@pytest.mark.xfail
def test_sum3():
  assert 10 + 20 == 31 