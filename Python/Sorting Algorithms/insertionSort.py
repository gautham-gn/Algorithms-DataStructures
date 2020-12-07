def insertionSort(arr):
    for i in range(1, len(arr)):
        currentVal = arr[i]
        j = i - 1
        while j >= 0 and currentVal < arr[j]:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = currentVal 
    return arr


print(insertionSort([100,50,25,10,5, 16]))
print(insertionSort([2,3,4,5,6]))

