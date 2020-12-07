def linearSearch(arr, item):
    for i in arr:
        if i == item:
            return i
    return -1

print(linearSearch([],5))