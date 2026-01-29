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