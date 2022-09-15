import pytest

def sum(num1, num2):
  return num1 + num2 

def test_sum_with_zero():
  assert sum(0, 1) == 1, "Test failed! Wrong total when adding regular number with zero" 

def test_sum_regular():
  assert sum(1,2) == 3, "Test failed! Wrong total when adding two regular numbers" 
  
 
 
@pytest.mark.sanity
def test_sum1():
  assert 1 + 2 == 3
  
@pytest.mark.low3
def test_sum2():
  assert 1 + 1 == 2

@pytest.mark.low3
@pytest.mark.sanity
def test_sum3():
  assert 1 + 0 == 1
  
def test_sum4():
  assert 1 + 5 == 6  