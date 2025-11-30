# პირველი დავალება
# boolean - მონაცემის ტიპი რომელსაც ორი მნიშვნელობა აქვს: True ან False
# binary code - კოდი რომელიც შედგები 1 და 0 ებისგან
# მეოთხე დავალება
a = (int(input("number ")))
if a % 2 == 0 or a % 5 == 0:
    print("True")
else:
    print("False")


# მეორე დავალება
print(5 == 5)
print(6 < 8)
print(9 > 2)
print(2 >= 2)
print(3 <= 6)
print(2 != 3)

# მესამე დავალება
# პირველი მაგალითი
x = (int(input("num1 ")))
y = (int(input("num2 ")))
if x > y or x == y :
    print("იქსი მეტია ან უდრის იგრეკს")
else:
    print("იქსი ნაკლებია იგრეკზე")

# მეორე მაგალითი
age = int(input("age "))

if age >= 18 and age < 65:
    print("სრულწლოვანი ხარ.")
elif age >= 65:
    print("პენსიონერი ხარ.")
else:
    print("არასრულწლოვანი ხარ")

# მესამე მაგალითი
score = int(input("score "))

if score >= 100:
    print("შესანიშნავია, მოიგე")
elif score >= 70 and score < 100:
    print("კარგია, მოიგე")
else:
    print("წააგე")

# მეოთხე მაგალითი
temperature = int(input("temperature "))

if temperature >= 35:
    print("ძალიან ცხელა!")
elif temperature >= 20 and temperature < 35:
    print("სასიამოვნო ამინდია.")
else:
    print("ცივა დღეს.")

# მეხუთე მაგალითი
password = input("password ")
if password == "12345678":
    print("პაროლი სწორია")
else:
    print("პაროლი არასწორია")


