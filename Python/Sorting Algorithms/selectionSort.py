def selectionSort(arr):
    for i in range(0, len(arr)):
        minimum = i
        for j in range(i+1,len(arr)):
            if arr[j] < arr[minimum]:
                minimum = j
        arr[minimum], arr[i] = arr[i], arr[minimum]
    return arr

print(selectionSort([100,50,25,10,5, 16]))
print(selectionSort([2,3,4,5,6]))
        

