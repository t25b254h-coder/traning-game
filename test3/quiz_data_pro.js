const quizDataPro = [
    {
        category:'pro',
        question:'for i in range(3):\n print(i)',
        choices:["0, 1, 2", "1, 2, 3", "3"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'x = 10\nif x > 5:\n   print("正解")\nelse:\n   print("不正解")',
        choices:["正解", "10", "不正解"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'for i in range(1, 4):\n   print(i)',
        choices:["1, 2, 3", "1, 2, 3, 4", "4"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'print(9 %4)',
        choices:["1", "2", "2.25"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'coclors = ["赤", "青", "緑"]\nprint(colors[1])',
        choices:["青", "赤", "緑"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'x = 3\nwhile x > 0:\n   print(x)\n   x -= 1',
        choices:["3, 2, 1", "1, 2, 3,", "3"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'def double(x):n\n   return x * 2\n\nprint(double(4))',
        choices:["8", "4", "16"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'numbers = [2, 5, 8]\nprint(len(numbers))',
        choices:["3", "5", "2"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'name = "AI"\nprint(name * 3)',
        choices:["AIAIAI", "AI3", "エラー"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'print("abc".apper())',
        choices:["ABC", "abc", "Abc"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'x =  7\nprint(x != 7)',
        choices:["Fakse", "True", "エラー"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'print(len("computer"))',
        choices:["8", "9", "computer"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'total = 1\nfor i in range(1, 4):\n   total *= i\nprint(total)',
        choices:["6", "12", "24"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'number = [1, 2]\nnumbers.append(3)\nprint(numbers)',
        choices:["[1, 2, 3]", "[1, 2]", "[3, 1, 2]"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'for i in range(2, 8, 2):\n   print(i)',
        choices:["2, 4, 6", "2, 4, 6, 8", "2, 3, 4, 5, 6, 7"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'def calc(a, b):\n   return a + b * 2\n\nprint(calc(3, 4))',
        choices:["11", "14", "22"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'numbers = [3, 1, 4, 2]\nnumbers.sort()\nprint(numbers[0])',
        choices:["1", "2", "3"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'x = 3\nfor i in range(3):\n   x += i\nprint(x)',
        choices:["6", "9", "3"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'numbers = [2, 4, 6, 8]\nprint(sum(numbers) // len(numbers))',
        choices:["5", "4", "20"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'text = "banana"\nprint(text.count("a"))',
        choices:["3", "6", "1"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'text = "Programing"\nprint(text[0:4])',
        choices:["Prog", "ming", "Progr"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'text = "apple"\nprint(text.replace("p", "b"))',
        choices:["abble", "apple", "adple"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'numbers = [10, 20, 30, 40]\nprint(numbers[1:3])',
        choices:["[20, 30]", "[10, 20, 30]", "[20, 30, 40]"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'numbers = [1, 2, 3]\nnumbers.insert(1, 9)\nprint(numbers)',
        choices:["[1, 9, 2, 3]", "[1, 9, 3]", "[1, 2, 9, 3]"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'numbers = [5, 10, 15]\nnumbers.pop()\nprint(numbers)',
        choices:["[5, 10]", "[5, 10, 15]", "[15]"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'print(9 %4)',
        choices:["1", "2", "2.25"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'numbers = [2, 4, 6]\nprint(4 in numbers)',
        choices:["True", "False", "エラー"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'student = {"name": "Aki", "score":80}\nprint(student["score"])',
        choices:["80", "Aki", "score"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'data = {"a": 1, "b": 2}\ndata["c"] = 3\nprint(len(data))',
        choices:["3", "6", "9"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'x = 4\nprint(x > 2 and x < 4)',
        choices:["False", "True", "エラー"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'x = 3\nprint(not x == 3)',
        choices:["False", "True", "エラー"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'for i in range(5):\n   if i == 2:/n   continue\n   print(i)',
        choices:["0, 1, 3, 4", "2", "0, 1"],
        correctIndex: 0
    },
    {
        category:'pro',
        question:'numbers = [5, 2, 8, 1]\nprint(sorted(numbers))',
        choices:["[1, 2, 5, 8]", "[8, 5, 2, 1]", "[5, 2, 8, 1]"],
        correctIndex: 0
    },
