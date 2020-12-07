def naiveStringSearch(str, pattern):
    counter = 0
    pattern_length = len(pattern)
    for i in range(0,len(str) - pattern_length + 1):
        if str[i:i+pattern_length] == pattern:
            print(str[i:i+pattern_length])
            counter += 1
    return counter

print(naiveStringSearch("hahaha I am a haha  haha  haha boy","haha"))
print(naiveStringSearch("hahahahahaha I am a boy","haha"))
print(naiveStringSearch("hahaha I am a haha boy","boy"))