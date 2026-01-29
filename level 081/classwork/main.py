# 1
def duplicate_encode(word):
    word = word.lower()
    result = ""
    for char in word:
        if word.count(char) == 1:
            result += "("
        else:
            result += ")"
    return result

# 2
def solution(s):
    result = ""
    for i in s:
        if i == i.upper():
            result += " " + i
        else:
            result += i
    return result

# 3
def to_weird_case(words):
    res = ""
    x = 0
    for i in words:
        if i == " ":
            res += " "
            x = 0
        else:
            if x % 2 == 0:
                res += i.upper()
            else:
                res += i.lower()
            x += 1
    return res

# 4
def title_case(title, minor_words=''):
    if not title:
        return ""
    minor = minor_words.lower().split()
    result = ""
    word = ""
    index = 0
    for i in title:
        if i == " ":
            if word:
                w = word.lower()
                if index == 0 or w not in minor:
                    result += w.capitalize()
                else:
                    result += w
                index += 1
                word = ""
            result += " "
        else:
            word += i
    if word:
        w = word.lower()
        if index == 0 or w not in minor:
            result += w.capitalize()
        else:
            result += w
    return result
    