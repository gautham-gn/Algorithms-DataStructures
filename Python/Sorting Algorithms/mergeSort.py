import math

def merge(arr1, arr2):
    finalArray = []
    i = 0
    j = 0
    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            finalArray.append(arr1[i])
            i += 1
        else:
            finalArray.append(arr2[j])
            j+= 1
    while i < len(arr1):
        finalArray.append(arr1[i])
        i += 1

    while j < len(arr2):
        finalArray.append(arr2[j])
        j += 1

    return finalArray

def mergeSort(arr):
    if len(arr) <= 1:
        return arr
    mid = math.floor(len(arr)/2)
    arr1 = mergeSort(arr[0:mid])
    arr2 = mergeSort(arr[mid:])
    return merge(arr1, arr2)

print(merge([2,8,12],[3,9,16,20,25]))
print(merge([],[1,3,5,7,9]))
print(merge([2,8],[3,9,16,20,25,30]))
print(merge([2,8],[]))

print(mergeSort([2,5,2,1,7,5,6,9]))
print(mergeSort([98, 102, 76, 44, 58, 301, 152, 861, 12, 1]))