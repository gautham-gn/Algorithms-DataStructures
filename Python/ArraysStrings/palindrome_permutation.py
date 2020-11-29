import unittest

from collections import Counter
def palindrome_perm(str):
    hashmap = Counter()
    if len(str) == 0:
        return None
    for char in str:
        if char != ' ':
            hashmap[char.lower()] += 1
    odd_count = 0
    for val in hashmap:
        if hashmap[val] % 2 != 0:
            odd_count += 1
            if odd_count >= 2:
                return False
    return True


