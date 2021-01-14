def bubbleSort(arr):
    sortedArray = arr
    loops = 0
    for i in range(len(arr) -1, -1, -1):
        noSwaps = True
        for j in range(0,i):
            loops += 1
            if sortedArray[j] > sortedArray[j+1]:
                sortedArray[j], sortedArray[j+1] = sortedArray[j+1], sortedArray[j]
                noSwaps = False
        if noSwaps:
            break
    return sortedArray, loops

print(bubbleSort([5,4,3,2,1]))
print(bubbleSort([1,2,3,4,5]))

print(bubbleSort([100,50,25,10,5, 16]))

print(bubbleSort([2,3,4,5,6]))