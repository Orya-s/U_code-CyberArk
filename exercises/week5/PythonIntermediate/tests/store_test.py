import pytest

@pytest.fixture
def store():
  items = ("apple", "banana", "orange")
  amount = (2, 2, 1)
  return dict(zip(items, amount)) 



def buy_banana(my_store):
  my_store["banana"] -= 1
  
def buy_two_bananas(my_store):
  my_store["banana"] -= 2
  
  
  
# Tests
 
def test_buy_banana(store):
  assert store["banana"] == 2
  buy_banana(store)
  assert store["banana"] == 1
  
  
def test_buy_two_bananas(store):
  assert store["banana"] == 2
  buy_two_bananas(store)
  assert store["banana"] == 0
  