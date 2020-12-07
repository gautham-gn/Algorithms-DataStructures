import math

def binarySearch(arr, item):
    if len(arr) == 0:
        return 
    left = 0
    right = len(arr) - 1
    mid = math.floor((left + right)/2)
    if item > arr[right] or item < arr[left]:
        return
    while arr[mid] != item and left <= right:
        if item > arr[mid]:
            left = mid + 1
            mid = math.floor((left + right)/2)
        if item < arr[mid]:
            right = mid - 1
            mid = math.floor((left + right)/2)
    return mid if arr[mid] == item else None



print(binarySearch([1,2,3,4,5], 1))

print(binarySearch([1,2,3,4,5,6,7,8,9], 8))

print(binarySearch([0,1,2,3,4,5,6,7,8,9], 10))

print(binarySearch([0,1,2,3,4,6,7,8,9], 5))