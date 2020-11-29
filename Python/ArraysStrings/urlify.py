def urlify(str, len):
    output = ''
    str = str.rstrip()
    if str == '':
        return str
    for char in str:
        if char == ' ':
            output += '%20'
        else:
            output += char
    return output


print(urlify("Mr John Smith     ", 13))
