def naiveStringSearch(str, pattern):
    counter = 0
    for i in range(0,len(str)):
        for j in range(0, len(pattern)):
            if pattern[j] != str[i+j]:
                break
            if j == len(pattern) - 1:
                counter += 1
    return counter

def stringSearch(str, pattern):
    counter = 0
    pattern_length = len(pattern)
    for i in range(0,len(str) - pattern_length + 1):
        if str[i:i+pattern_length] == pattern:
            counter += 1
    return counter

print(naiveStringSearch("hahaha I am a haha  haha  haha boy","haha"))
print(naiveStringSearch("hahahahahaha I am a boy","haha"))
print(naiveStringSearch("hahaha I am a haha boy","boy"))

print(stringSearch("hahaha I am a haha  haha  haha boy","haha"))
print(stringSearch("hahahahahaha I am a boy","haha"))
print(stringSearch("hahaha I am a haha boy","boy"))