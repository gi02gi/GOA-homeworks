# string - მონაცემის ტიპი რომელიც აუცილებლად იწერება ბრჭყალებში და კომპიუტერისთვის აღიქმება როგორც ჩვეულებრივი ტექსტი
# მაგ: "giorgi", "skami", "burti", "100", "77.6"

# integer - მონაცემთა ტიპი რომელიც არის მთელი რიცხვი. ბრჭყალების გარეშე იწერება
# მაგ: 2, 7, 15, 50, 200

# float - მონაცემთა ტიპი, რომელიც არის აუცილებლად ათწილადი რიცხვი. ბრჭყალების გარეშე იწერება
# მაგ: 5.3, 7.4, 15,8, 20.3

number = 10
word = "car"
print(number)
print(word)


# ამ შემთხვევაში ერორი იმიტომაა რომ ტექსტის (string) და რიცხვის (integer) შეკრება მათემატიკურად შეუძლებელია

# print(5 + 5) და print("5" + "5") განსხვავდება რადგან პირველ შემთხვევაში მოქმედება სრულდება ჩვეულებრივ
# რიცხვებს შორის, intenger ებს შორის და ჩვეულებრვი მათი ჯამი დაიბეჭდება, მეორე შემთხვევაში კი ორივე მონაცემი
# რიცხვია მაგრამ არის ბრჭყალებში შესაბამისად ისინი აღიქმება როგორც ჩვეულებრივი ტექსტი და არა რიცხვები და ამიტომ
# კომპიუტერი მათ უბრალოდ ერთმანეთს მიაწერს.
print(5 + 5)
print("5" + "5")