# 1
def high(x):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    words = x.split()
    best_word = ""
    best_score = 0
    for word in words:
        score = 0
        for letter in word:
            value = 1
            for a in alphabet:
                if letter == a:
                    score += value
                    break
                value += 1
        if score > best_score:
            best_score = score
            best_word = word
    return best_word


# 2
def queue_time(customers, n):
    tills = []
    for i in range(n):
        tills.append(0)
    for i in customers:
        smallest = min(tills)
        tills.remove(smallest)
        tills.append(smallest + i)
    return max(tills)

# 3
def is_valid_IP(strng):
    parts = strng.split('.')
    if len(parts) != 4:
        return False
    for part in parts:
        if part == "":
            return False
        num = 0
        for ch in part:
            if ch < '0' or ch > '9':
                return False
            num = num * 10 + (int(ch))  
        if num < 0 or num > 255:
            return False
        if str(num) != part: 
            return False
    return True