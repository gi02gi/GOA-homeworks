# პირველი დავალება
# in ოპერატორი ამოწმებს, არის თუ არა კონკრეტული ელემენტი სიაში და ამის შესამოწმებლად გამოიყენება

# მეორე დავალება
list = [10, 20, 30, 40, 50]
for item in list:
    print(item)

# მესამე დავალება
names = ["nuci", "Giorgi", "Nika"]
user_name = input("შეიყვანეთ თქვენი სახელი: ")
if user_name in names:
    print("თქვენი სახელი სიაშია!")
else:
    print("თქვენი სახელი სიაში არაა.")

# მეოთხე დავალება
numbers = [1, 2, 3, 4, 5]
total = 0
for num in numbers:
    total += num

# მეხუთე დავალება
nums = [5, 10, 15, 20, 25]
user_number = int(input("შეიყვანეთ რიცხვი: "))
if user_number in nums:
    print("რიცხვი არის სიაში")
else:
    print("რიცხვი არაა სიაში")



