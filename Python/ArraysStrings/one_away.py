def one_away(str1, str2):
    if abs(len(str1) - len(str2)) >= 2:
        return False
    
    return True

print(one_away('gau', 'abcd'))