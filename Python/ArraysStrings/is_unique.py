def isUnique(str):
    if len(str) > 128:
        return False
    arr = [False for i in range(128)]
    for i in str:
        val = ord(i)
        if arr[val] == True:
            return False
        else:
            arr[val] = True
    return True

print(isUnique('gmail'))