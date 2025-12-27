# 1
def max_diff(lst):
    if len(lst) < 2:
        return 0
    larger = lst[0]
    smaller = lst[0]
    for i in lst:
        if i > larger:
            larger = i
        elif i < smaller:
            smaller = i
    return larger - smaller

# 2
def domain_name(url):
    parts = url.split("://")
    url = parts[-1]
    url = url.split("/")[0]
    name_parts = url.split(".")
    if name_parts[0] == "www":
        return name_parts[1]
    else:
        return name_parts[0]