from collections import Counter

def check_permutation(str1, str2):
    if len(str1) != len(str2):
        return False

    counter = Counter()
    for i in str1:
        counter[i.lower()] += 1
    
    for i in str2:
        if counter[i.lower()] == 0:
            return False
        else:
            counter[i.lower()] -= 1

    return True

print(check_permutation('Taco Bell','LLB Taco'))
    