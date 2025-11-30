# პირველი დავალება
# პითონში არგუმენტი არის მნიშვნელობა რომელიც გადაეცემა ფუნქციას მისი გამოძახებისას

# მეორე დავალება
# range - ქმნის რიცხვების მიმდევრობას, რომელიც ხშირად გამოიყენება ციკლებში

# მესამე დავალება
total = 0
for i in range(50, 101):
    total += i
print(total)

# მეოთხე დავალება
num = 1 
for x in range(100, 201):
    num *= x
print(num)

# მეხუთე დავალება
# for ციკლში ჩვენთვითონ დავწერთ თუ რამდენჯერ უნდა განმეორდეს მოქმედება
# while ციკლში კონკრეტული პირობაა და სანამ ეს პირობა იქნება true მოქმედების გამეორება არ შეწყდება

# მეექვსე დავალება
number = 1
while number <= 10:
    print(number)
    number += 1



# მეშვიდე დავალება
number = 7
user_input = int(input("enter number between 0-10: "))

while user_input != number:
    print("wrong number!")
    user_input = int(input("enter number between 0-10: "))
print("you win!")
