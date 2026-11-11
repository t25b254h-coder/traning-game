const quizDataPro = [
    {
        category:'pro',
        question:'for i in range(3):\n print(i)',
        choices:["0, 1, 2", "1, 2, 3", "3"],
        correctIndex: 0,
        explanation:'range(3)は0～2までの整数を生成するため、0, 1, 2が順に出力されます。'
    },
    {
        category:'pro',
        question:'x = 10\nif x > 5:\n   print("正解")\nelse:\n   print("不正解")',
        choices:["正解", "10", "不正解"],
        correctIndex: 0,
        explanation:'変数xは10であり、x>5の条件を満たすため「正解」が出力されます。'
    },
    {
        category:'pro',
        question:'for i in range(1, 4):\n   print(i)',
        choices:["1, 2, 3", "1, 2, 3, 4", "4"],
        correctIndex: 0,
        explanation:'range(1, 4)は1から3までの整数を生成するため、1, 2, 3が出力されます。''
    },
    {
        category:'pro',
        question:'print(9 %4)',
        choices:["1", "2", "2.25"],
        correctIndex: 0,
        explanation:'9を4で割ったあまり（モジュロ演算子%)は1です。'
    },
    {
        category:'pro',
        question:'coclors = ["赤", "青", "緑"]\nprint(colors[1])',
        choices:["青", "赤", "緑"],
        correctIndex: 0,
        explanation:'リストのインデックスは0から始まるため、colors[1]は2番目の要素である「青」を取得します。'
    },
    {
        category:'pro',
        question:'x = 3\nwhile x > 0:\n   print(x)\n   x -= 1',
        choices:["3, 2, 1", "1, 2, 3,", "3"],
        correctIndex: 0,
        explanation:'xが3から始まり、0より大きい間デクリメントしながら値を出力するため3, 2, 1となります。'
    },
    {
        category:'pro',
        question:'def double(x):n\n   return x * 2\n\nprint(double(4))',
        choices:["8", "4", "16"],
        correctIndex: 0,
        explanation:'引数に2をかける関数に4を渡しているため、4 * 2 = 8となります。'
    },
    {
        category:'pro',
        question:'numbers = [2, 5, 8]\nprint(len(numbers))',
        choices:["3", "5", "2"],
        correctIndex: 0,
        explanation:'リストの要素数が3つであるため、len()関数は3を返します。'
    },
    {
        category:'pro',
        question:'name = "AI"\nprint(name * 3)',
        choices:["AIAIAI", "AI3", "エラー"],
        correctIndex: 0,
        explanation:'文字列に数値をかけると、その回数だけ文字列が繰り返されAIAIAIとなります。'
    },
    {
        category:'pro',
        question:'print("abc".apper())',
        choices:["ABC", "abc", "Abc"],
        correctIndex: 0,
        explanation:'upper()メゾットにより、小文字の文字列がすべて大文字のABCに変換されます。'
    },
    {
        category:'pro',
        question:'x =  7\nprint(x != 7)',
        choices:["Fakse", "True", "エラー"],
        correctIndex: 0,
        explanation:'xは７であるため、「7と等しくない」という条件x!=7は偽（False)になります。'
    },
    {
        category:'pro',
        question:'print(len("computer"))',
        choices:["8", "9", "computer"],
        correctIndex: 0,
        explanation:'文字列"computer"の文字数は8文字です。'
    },
    {
        category:'pro',
        question:'total = 1\nfor i in range(1, 4):\n   total *= i\nprint(total)',
        choices:["6", "12", "24"],
        correctIndex: 0,
        explanation:'1から3までの数値を掛け合わせる会場の計算が行われ、結果は6になります。'
    },
    {
        category:'pro',
        question:'number = [1, 2]\nnumbers.append(3)\nprint(numbers)',
        choices:["[1, 2, 3]", "[1, 2]", "[3, 1, 2]"],
        correctIndex: 0,
        explanation:'append(3)により、リストの末尾に3が追加されて[1 ,2, 3]になります。'
    },
    {
        category:'pro',
        question:'for i in range(2, 8, 2):\n   print(i)',
        choices:["2, 4, 6", "2, 4, 6, 8", "2, 3, 4, 5, 6, 7"],
        correctIndex: 0,
        explanation:'range(2, 8, 2)は2から8未満まで2刻みで生成するため2, 4, 6が出力されます。'
    },
    {
        category:'pro',
        question:'def calc(a, b):\n   return a + b * 2\n\nprint(calc(3, 4))',
        choices:["11", "14", "22"],
        correctIndex: 0,
        explanation:'演算子の優先順位によりb * 2 (8)が先に計算され、それに3を足して11になります。'
    },
    {
        category:'pro',
        question:'numbers = [3, 1, 4, 2]\nnumbers.sort()\nprint(numbers[0])',
        choices:["1", "2", "3"],
        correctIndex: 0,
        explanation:'昇順にソートすると[1, 2, 3, 4]となり、最初の要素（インデックス0)は１です。'
    },
    {
        category:'pro',
        question:'x = 3\nfor i in range(3):\n   x += i\nprint(x)',
        choices:["6", "9", "3"],
        correctIndex: 0,
        explanation:'xにi(0, 1, 2)を順に足していくため、3 + 0 + 1 + 2 = 6になります。'
    },
    {
        category:'pro',
        question:'numbers = [2, 4, 6, 8]\nprint(sum(numbers) // len(numbers))',
        choices:["5", "4", "20"],
        correctIndex: 0,
        explanation:'合計(20)を要素数(4)で整数除算(//)しているため、20 // 4 = 5となります。'
    },
    {
        category:'pro',
        question:'text = "banana"\nprint(text.count("a"))',
        choices:["3", "6", "1"],
        correctIndex: 0,
        explanation:'"banana"のなかに"a"が含まれている回数は3回です。'
    },
    {
        category:'pro',
        question:'text = "Programing"\nprint(text[0:4])',
        choices:["Prog", "ming", "Progr"],
        correctIndex: 0,
        explanation:'インデックス0から4の手前までのスライスで、"Prog"が取得されます。'
    },
    {
        category:'pro',
        question:'text = "apple"\nprint(text.replace("p", "b"))',
        choices:["abble", "apple", "adple"],
        correctIndex: 0,
        explanation:'すべての"p"を"b"に置き換えるため"abble"になります。'
    },
    {
        category:'pro',
        question:'numbers = [10, 20, 30, 40]\nprint(numbers[1:3])',
        choices:["[20, 30]", "[10, 20, 30]", "[20, 30, 40]"],
        correctIndex: 0,
        explanation:'インデックス0から3の手前までのスライスとなり、[20, 30]が返ります。'
    },
    {
        category:'pro',
        question:'numbers = [1, 2, 3]\nnumbers.insert(1, 9)\nprint(numbers)',
        choices:["[1, 9, 2, 3]", "[1, 9, 3]", "[1, 2, 9, 3]"],
        correctIndex: 0,
        explanation:'insert(1, 9)により、インデックス１の位置に9が挿入されます。'
    },
    {
        category:'pro',
        question:'numbers = [5, 10, 15]\nnumbers.pop()\nprint(numbers)',
        choices:["[5, 10]", "[5, 10, 15]", "[15]"],
        correctIndex: 0,
        explanation:'pop()は末尾の要素(15)を削除するため、残りは[5, 10]になります。'
    },
    {
        category:'pro',
        question:'def add(a, b=2):\n  return a + b\n\nprint(add(5))',
        choices:["7, 5, 10"],
        correctIndex: 0,
        explanation:'デフォルト引数(b=2)が使われるため、5 + 2で7になります。'
    },
    {
        category:'pro',
        question:'numbers = [2, 4, 6]\nprint(4 in numbers)',
        choices:["True", "False", "エラー"],
        correctIndex: 0,
        explanation:'リスト内に4が存在するため、in 演算子の結果はTrueになります。'
    },
    {
        category:'pro',
        question:'student = {"name": "Aki", "score":80}\nprint(student["score"])',
        choices:["80", "Aki", "score"],
        correctIndex: 0,
        explanation:'辞書からキー"score"に対応する値である80を取得します。'
    },
    {
        category:'pro',
        question:'data = {"a": 1, "b": 2}\ndata["c"] = 3\nprint(len(data))',
        choices:["3", "6", "9"],
        correctIndex: 0,
        explanation:'キー"c"を新しく追加したことで、辞書の要素数が合計3つになります。'
    },
    {
        category:'pro',
        question:'x = 4\nprint(x > 2 and x < 4)',
        choices:["False", "True", "エラー"],
        correctIndex: 0,
        explanation:'4 < 4がFalseであるため、and演算全体ではFalseになります。'
    },
    {
        category:'pro',
        question:'x = 3\nprint(not x == 3)',
        choices:["False", "True", "エラー"],
        correctIndex: 0,
        explanation:'x == 3はTrueですが、notによって反転されるためFalseになります。'
    },
    {
        category:'pro',
        question:'for i in range(5):\n   if i == 2:/n   continue\n   print(i)',
        choices:["0, 1, 3, 4", "2", "0, 1"],
        correctIndex: 0,
        explanation:'i == 2に時にcontinueでスキップされるため、2以外の0, 1, 3, 4が出力されます。'
    },
    {
        category:'pro',
        question:'numbers = [5, 2, 8, 1]\nprint(sorted(numbers))',
        choices:["[1, 2, 5, 8]", "[8, 5, 2, 1]", "[5, 2, 8, 1]"],
        correctIndex: 0,
        explanation:'sorted()関数により、昇順に並べ替えられた新しいリストが返されます。'
    },
    {
        category:'pro',
        question:'numbers = [1, 2, 2, 3, 3, 3 ]\nprint(set(numbers))',
        choices:["3", "6", "2"],
        correctIndex: 0,
        explanation:'setにより重複が削除されて{1, 2, 3}となり、その要素数は3です。'
    },
    {
        category:'pro',
        question:'numbers = [1, 2, 3, 4]\nresult = [x * 2 for x in numbers]\nprint(result)',
        choices:["[2, 4, 6, 8] "[1, 4, 9, 16] "[1, 2, 3, 4]"],
        correctIndex: 0,
        explanation:'リスト内包表記により、各要素を2倍したリスト[2, 4, 6, 8]が生成されます。'
    },
    {
        category:'pro',
        question:'def mystery(n):\nif n <= 1:\nreturn 1\nreturn n * mystery(n - 1)\nprint(mystery(4))',
        choices:["24", "4", "10"],
        correctIndex: 0,
        explanation:'再帰関数による階乗の計算(4 != 24)です。'
    },
    {
        category:'pro',
        question:'text = "Hello World"\nprint(text.lower())',
        choices:["hello world", "HERRO WORLD", "Hello World"],
        correctIndex: 0,
        explanation:'lower()メゾットにより、すべての文字が小文字に変換されます。'
    },
    {
        category:'pro',
        question:'text = "Python"\nprint(text.strip())',
        choices:["Python", ""Python"", "PYTHON"],
        correctIndex: 0,
        explanation:'strip()メゾットにより、文字列の前後の空白が削除されます。'
    },
    {
        category:'pro',
        question:'x = iny("12")\nprint(x + 3)',
        choices:["15", "123", "12+3"],
        correctIndex: 0,
        explanation:'文字列'12'を整数に変換し、3を足すことで15になります。'
    },
　　{
        category:'pro',
        question:'print(bool(0))',
        choices:["False", "0", "True"],
        correctIndex: 0,
        explanation:'数値の0は真偽値コンテキストでFalseとして評価されます。'
    },
    {
        category:'pro',
        question:'text = "cat,dog,bild"\nprint(text.split(","))',
        choices:["["cat","dog","bild"]", "cat dog bild", "["cat,dog,bild"]"],
        correctIndex: 0,
        explanation:'カンマを区切り文字として文字列を分割し、リストを生成します。'
    },
    {
        category:'pro',
        question:'for i in range(2):\n  for j in range(3):\n     print('*', end=")',
        choices:["******", "*****", "***"],
        correctIndex: 0,
        explanation:'二重ループにより*が合計6回出力され、end=””により改行されずに******と表示されます。'
    },
    {
        category:'pro',
        question:'numbers = [4, 7, 9]\nprint(max(numbers) - min(numbers))',
        choices:["5", "2", "9"],
        correctIndex: 0,
        explanation:'最大値(9)と最小値(4)の差(9 - 4)を再刊するため結果は5です。'
    },
    {
        category:'pro',
        question:'numbers = [10,20,30]\nprint(numbers.ondex(20))',
        choices:["1", "0", "2"],
        correctIndex: 0,
        explanation:'値20が格納されている位置（インデックス）は1です。'
    },
    {
        category:'pro',
        question:'x = 10\nif x > 5:\n   if x < 15:\n     print("OK")\n   else:\n     print("B")',
        choices:["OK", "B", "なにも表示させない"],
        correctIndex: 0,
        explanation:'外側の条件と内側の情う県のどちらも満たすため”OK”が出力されます。'
    },
    {
        category:'pro',
        question:'def mystery(n):\n  result = 0\n  while n > 0:\n    result += n % 10\n    n //= 10\n  return result\nprint(mystery(352))',
        choices:["10", "3", "352"],
        correctIndex: 0,
        explanation:'与えられた整数の各桁の数字を足し合わせる処理(3 + 5 + 2 = 10)を行います。'
    },
    {
        category:'pro',
        question:'numbers = [2, 4, 6]\nresult = list(map(lambda x:x + 1, numbers))\nprint(result)',
        choices:["[3, 5, 7]", "[2, 4, 6]", "[1, 3, 5]"],
        correctIndex: 0,
        explanation:'mapとlambdaを用いて、リストの各要素に1を足した新しいリストを生成します。'
    },
    {
        category:'pro',
        question:'a = {1, 2, 3}\nb = {3, 4}\nprint(sorted(a & b))',
        choices:["[3]", "[1, 2, 3, 4]", "[1, 2]"],
        correctIndex: 0,
        explanation:'集合の積集合（共通部分）を求めると{3}となり、それをソートしたリスト[3]が出力されます。'
    },
    {
        category:'pro',
        question:'try:\n  x = int("abc")\nexcept ValueError:\n  print("Erroe")',
        choices:["Error", "abc", "0"],
        correctIndex: 0,
        explanation:'文字列’abc’を整数に変換しようとしてエラー(ValueError)が発生するため、exceptブロック内の’Error’が出力されます。'
    },
　　{
        category:'pro',
        question:'numbers = [1, 2, 3, 4]\nprint(numbers[-1])',
        choices:["4", "1", "エラー"],
        correctIndex: 0,
        explanation:'負のインデックス-1はリストの最後の要素を指定するため4が出力されます。'
    }, 
    {
        category: 'pro',
        question: 'name = "Taro"\nprint(f"Hello, {name}!")',
        choices: ["Hello, Taro!", "Hello, name!", "Taro Hello!"],
        correctIndex: 0,
        explanation: 'f文字列では、{}の中に書いた変数の値が文字列に埋め込まれます。'
    },
    {
        category: 'pro',
        question: 'numbers = [1, 2, 3]\nprint(numbers * 2)',
        choices: ["[1, 2, 3, 1, 2, 3]", "[2, 4, 6]", "[1, 2, 3, 2]"],
        correctIndex: 0,
        explanation: 'リストに整数を掛けると、その回数だけリストの内容が繰り返されます。'
    },
    {
        category: 'pro',
        question: 'text = "Python"\nprint(text[::-1])',
        choices: ["nohtyP", "Python", "pto"],
        correctIndex: 0,
        explanation: '[::-1]は文字列を逆順に取り出すスライス表記です。'
    },
    {
        category: 'pro',
        question: 'def func(x):\n    return x * 2\n\nresult = func(6)\nprint(result)',
        choices: ["12", "6", "8"],
        correctIndex: 0,
        explanation: '関数funcに6を渡すと6×2が計算され、12が返されます。'
    },
    {
        category: 'pro',
        question: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n\ndog = Dog(\'Pochi\')\nprint(dog.name)',
        choices: ["Pochi", "Dog", "name"],
        correctIndex: 0,
        explanation: 'インスタンス作成時に__init__が呼び出され、name属性にPochiが保存されます。'
    },
    {
        category: 'pro',
        question: 'x = [1, 2, 3]\ny = x\nx.append(4)\nprint(y)',
        choices: ["[1, 2, 3, 4]", "[1, 2, 3]", "[4]"],
        correctIndex: 0,
        explanation: 'y = xでは同じリストを参照するため、xに追加した4はyからも確認できます。'
    },
    {
        category: 'pro',
        question: 'for i, value in enumerate([\'A\', \'B\']):\n    print(i, value)',
        choices: ["0Aと1B", "1Aと2B", "AB"],
        correctIndex: 0,
        explanation: 'enumerate()は要素のインデックスと値を同時に取り出します。'
    },
    {
        category: 'pro',
        question: 'a = [1, 2, 3]\nb = [4, 5, 6]\nprint(list(zip(a, b)))',
        choices: ["[(1, 4), (2, 5), (3, 6)]", "[1, 2, 3, 4, 5, 6]", "[(1, 2), (4, 5)]"],
        correctIndex: 0,
        explanation: 'zip()は複数のリストの同じ位置にある要素を組み合わせます。'
    },
    {
        category: 'pro',
        question: 'def count(n):\n    if n == 0:\n        return 0\n    return 1 + count(n - 1)\n\nprint(count(4))',
        choices: ["4", "0", "3"],
        correctIndex: 0,
        explanation: '再帰的にnを1ずつ減らし、0になったら終了する。4回呼び出しが積み重なるため4が返されます。'
    },
    {
        category: 'pro',
        question: 'data = {\'A\': 10, \'B\': 20, \'C\': 30}\nresult = [key for key, value in data.items() if value >= 20]\nprint(result)',
        choices: ["['B', 'C']", "['A']", "[20, 30]"],
        correctIndex: 0,
        explanation: 'items()でキーと値を取り出し、値が20以上のキーだけをリストにします。'
    }
];
