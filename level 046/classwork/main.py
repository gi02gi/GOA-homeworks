numbers = [5, 8, 12, 20, 25, 30, 40, 45, 50, 60]
# 1
print(numbers[4])

# 2
print(numbers[7])

# 3
print(numbers[:])

# 4
print(numbers[::-1])

# 5
print(numbers[::4])

# 6
print(numbers[0:5])

# 7
print(numbers[1:9:2])

# 8
numbers[1] = "giorgi"
print(numbers)

# 9
numbers[2] = "nutsi"
print(numbers)

# 10
numbers[1], numbers[2] = numbers[2], numbers[1]
print(numbers)