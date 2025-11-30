# პირველი დავალება
for i in range(1, 6):
    print(i)

for ch in "გიორგი":
    print(ch)

numbers = [2, 4, 6, 8]
total = 0
for n in numbers:
    total += n
print("ჯამი:", total)

o = 1
while o <= 5:
    print(o)
    o += 1

password = ""
while password != "1234":
    password = input("შეიყვანე პაროლი: ")
print("შენ წარმატებით შეხვედი!")

e = 1
total_point = 0
while e <= 10:
    total_point += e
    e += 1
print("ჯამი:", total_point)

# მეორე დავალება
numbs = []
for l in range(5):
    num = int(input("შეიყვანე რიცხვი: "))
    numbs.append(num)
print(numbs)

# მესამე დავალება
extra = int(input("კიდევ ერთი რიცხვი: "))
numbs.insert(0, extra**3)

# მეოთხე დავალება
for j in range(5, -1, -1):
    if j % 2 == 1:
        numbs.pop(i)

# მეექვსე დავალება
nums = []
numb = 1
while numb != 0:
    numb = int(input("შეიყვანე რიცხვი: "))
    if numb != 0:
        numb.append(numb)
print(nums)
