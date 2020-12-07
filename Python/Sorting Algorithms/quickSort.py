def partition(arr, start, end):
    pivot = arr[start]
    cnt = start
    for i in range(start+1, end+1):
        if arr[i] < pivot:
            cnt += 1
            arr[i], arr[cnt] = arr[cnt], arr[i]
    arr[cnt], arr[start] = arr[start], arr[cnt]
    return cnt

def quickSort(arr, left, right):
    if left < right:
        pivot = partition(arr, left, right)
        quickSort(arr,left,pivot-1)
        quickSort(arr, pivot+1, right)
    return arr

print(quickSort([12,5,1,11,10,0,6,14,15,7], 0, 9))
print(quickSort([5,2,3,11,7], 0, 4))
print(quickSort([98, 102, 76, 44, 58, 301, 152, 861, 12, 1], 0, 9))

# 12 5 1 11 10 0 6 14 15 7

# 12 