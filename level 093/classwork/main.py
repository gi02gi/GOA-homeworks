def only_duplicates(st):
    res = ""
    for i in st:
        if st.count(i) > 1:
            res += i
    return res