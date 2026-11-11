const quizDataMath = [
    {
        category: 'math',
        question: '基礎数理AI: $\\arcsin \\frac{\\sqrt{3}}{2}$?',
        choices: ["$\\frac{\\pi}{3}$", "$\\frac{\\pi}{6}$", "$\\frac{\\pi}{4}$"],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '基礎数理AI: $\\arcsin \\frac{1}{2}$?',
        choices: ["$\\frac{\\pi}{6}$", "$\\frac{\\pi}{3}$", "$\\frac{\\pi}{4}$"],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '基礎数理AI: $\\arctan \\sqrt{3}$?',
        choices: ["$\\frac{\\pi}{3}$", "$\\frac{\\pi}{6}$", "$\\frac{\\pi}{4}$"],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '基礎数理AI: $\\arctan 1$?',
        choices: ["$\\frac{\\pi}{4}$", "$\\frac{\\pi}{3}$", "$\\frac{\\pi}{6}$"],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '応用数理B: 一階線形微分方程式の一般解として正しいものを選べ',
        choices: [
            "$\\int q(x)e^{F(x)}dx \\cdot e^{-F(x)}$", 
            "$\\int q(x)e^{-F(x)}dx \\cdot e^{-F(x)}$", 
            "$q(x)e^{F(x)} + C$"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '応用数理B: Bernoulli（ベルヌーイ）型の方程式を選べ',
        choices: ["$y' + P(x)y = q(x)y^n$", "$y' = p(x) + q(x)y + r(x)y^2$", "$y' = f(x)g(y)$"],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '応用数理B: Riccati（リッカチ）型の方程式を選べ',
        choices: ["$y' = p(x) + q(x)y + r(x)y^2$", "$y' + P(x)y = q(x)y^n$", "$y' = f(x)g(y)$"],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '応用数理B: 同次形（次数ゼロの同次微分方程式）を表す式を選べ',
        choices: ["$y' = f(y/x)$", "$y' = f(x+y)$", "$y' = f(xy)$"],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '応用数理B: 一階線形微分方程式を選べ',
        choices: ["$y' + p(x)y = g(x)$", "$y' + p(x)y = g(x)y^2$", "$y' = f(x)g(y)$"],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '応用数理B: 全微分方程式を選べ',
        choices: ["$p(x,y)dx + q(x,y)dy = 0$", "$p(x,y)dx + q(x,y)dy = 1$", "$p(x,y)dx - q(x,y)dy = 0$"],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '応用数理B: 2階斉次線形微分方程式の解が、異なる2つの実数解 $\\alpha, \\beta$ のときの一般解を選べ',
        choices: [
            "$y = C_1 e^{\\alpha x} + C_2 e^{\\beta x}$", 
            "$y = (C_1 + C_2 x)e^{\\alpha x}$", 
            "$y = e^{px}(C_1 \\cos qx + C_2 \\sin qx)$"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '応用数理B: 2階斉次線形微分方程式の解が、共役複素数 $p \\pm iq$ のときの一般解を選べ',
        choices: [
            "$y = e^{px}(C_1 \\cos qx + C_2 \\sin qx)$", 
            "$y = C_1 e^{\\alpha x} + C_2 e^{\\beta x}$", 
            "$y = (C_1 + C_2 x)e^{\\alpha x}$"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '応用数理B: 2階斉次線形微分方程式の解が、実数の重解 $\\alpha$ のときの一般解を選べ',
        choices: [
            "$y = (C_1 + C_2 x)e^{\\alpha x}$", 
            "$y = e^{px}(C_1 \\cos qx + C_2 \\sin qx)$", 
            "$y = C_1 e^{\\alpha x} + C_2 e^{\\beta x}$"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '応用数理B: 2階（または高階）斉次線形微分方程式の解が、次数 $k$ の実数重解 $\\alpha$ のときの一般解を選べ',
        choices: [
            "$y = (C_1 + C_2x + C_3x^2 + \\dots + C_k x^{k-1})e^{\\alpha x}$", 
            "$y = (C_1 + C_2x + C_3x^2 + \\dots + C_k x^k)e^{\\alpha x}$", 
            "$y = (C_1 + C_2x + C_3x^2 + \\dots + C_k x^{-1})e^{\\alpha x}$"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '応用数理B: 2階（または高階）斉次線形微分方程式の解が、次数 $k$ の共役複素数重解 $p \\pm iq$ のときの一般解を選べ',
        choices: [
            "$y = e^{px} \\{ (C_1 + C_2x + \\dots + C_k x^{k-1}) \\cos qx + (C_1 + C_2x + \\dots + C_k x^{k-1}) \\sin qx \\}$", 
            "$y = (C_1 + C_2x + \\dots + C_k x^{k-1})e^{\\alpha x}$", 
            "$y = e^{px}(C_1 \\cos qx + C_2 \\sin qx)$"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '電気数理Ⅰ: $\\nabla f$ の定義として正しいものを選べ',
        choices: [
            "$\\boldsymbol{i} \\frac{\\partial}{\\partial x} + \\boldsymbol{j} \\frac{\\partial}{\\partial y} + \\boldsymbol{k} \\frac{\\partial}{\\partial z}$", 
            "$\\frac{\\partial}{\\partial x} + \\frac{\\partial}{\\partial y} + \\frac{\\partial}{\\partial z}$", 
            "$\\boldsymbol{i} \\left(\\frac{\\partial}{\\partial x}\\right)^2 + \\boldsymbol{j} \\left(\\frac{\\partial}{\\partial y}\\right)^2 + \\boldsymbol{k} \\left(\\frac{\\partial}{\\partial z}\\right)^2$"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '電気数理Ⅰ: $\\nabla(fg)$ として正しいものを選べ',
        choices: [
            "$(\\nabla f)g + f(\\nabla g)$", 
            "$(\\nabla f)(\\nabla g)$", 
            "$f(\\nabla g)$"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '電気数理Ⅰ: $\\nabla g(f)$ として正しいものを選べ',
        choices: [
            "$\\frac{dg}{df} \\nabla f$", 
            "$(\\nabla f) g + f(\\nabla g)$", 
            "$\\frac{dg}{df} + \\nabla f$"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '電気数理Ⅰ: $\\nabla \\cdot \\boldsymbol{A}$ の成分表示として正しいものを選べ',
        choices: [
            "$\\frac{\\partial A_x}{\\partial x} + \\frac{\\partial A_y}{\\partial y} + \\frac{\\partial A_z}{\\partial z}$", 
            "$\\frac{\\partial \\boldsymbol{A}}{\\partial x} + \\frac{\\partial \\boldsymbol{A}}{\\partial y} + \\frac{\\partial \\boldsymbol{A}}{\\partial z}$", 
            "$\\boldsymbol{i} \\frac{\\partial}{\\partial x} + \\boldsymbol{j} \\frac{\\partial}{\\partial y} + \\boldsymbol{k} \\frac{\\partial}{\\partial z}$"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '電気数理Ⅰ: $\\nabla \\cdot (f\\boldsymbol{A})$ として正しいものを選べ',
        ices: [
            "$\\nabla f \\cdot \\boldsymbol{A} + f \\nabla \\cdot \\boldsymbol{A}$", 
            "$\\nabla f \\times \\boldsymbol{A} + f \\nabla \\times \\boldsymbol{A}$", 
            "$(\\nabla f)(\\nabla \\cdot \\boldsymbol{A})$"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '電気数理Ⅰ: $\\nabla \\cdot (\\boldsymbol{A} \\times \\boldsymbol{B})$ として正しいものを選べ',
        choices: [
            "$\\boldsymbol{B} \\cdot (\\nabla \\times \\boldsymbol{A}) - \\boldsymbol{A} \\cdot (\\nabla \\times \\boldsymbol{B})$", 
            "$\\boldsymbol{A} \\cdot (\\nabla \\times \\boldsymbol{B}) - \\boldsymbol{B} \\cdot (\\nabla \\times \\boldsymbol{A})$", 
            "$(\\nabla \\cdot \\boldsymbol{A})\\boldsymbol{B} - (\\nabla \\cdot \\boldsymbol{B})\\boldsymbol{A}$"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '電気数理Ⅰ: $\\nabla \\times (\\nabla \\times \\boldsymbol{A})$ として正しいものを選べ',
        choices: [
            "$\\nabla(\\nabla \\cdot \\boldsymbol{A}) - \\nabla^2 \\boldsymbol{A}$", 
            "$\\nabla^2 \\boldsymbol{A} - \\nabla(\\nabla \\cdot \\boldsymbol{A})$", 
            "$\\boldsymbol{0}$"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '電気数理Ⅰ: $\\nabla^2 \\boldsymbol{A}$ として正しいものを選べ',
        choices: [
            "$(\\nabla^2 A_x)\\boldsymbol{i} + (\\nabla^2 A_y)\\boldsymbol{j} + (\\nabla^2 A_z)\\boldsymbol{k}$", 
            "$\\nabla^2 A_x + \\nabla^2 A_y + \\nabla^2 A_z$", 
            "$\\nabla(\\nabla \\cdot \\boldsymbol{A})$"
        ],
        correctIndex: 0
    },
    {
        category:'math',
        question: '電気数理Ⅰ: $\\nabla \\times (\\nabla f)$ として正しいものを選べ',
        choices: [
            "$\\boldsymbol{0}$", 
            "$\\nabla^2 f$", 
            "$0$"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '電気数理Ⅰ: $\\nabla \\cdot (\\nabla \\times \\boldsymbol{A})$ として正しいものを選べ',
        choices: [
            "$0$", 
            "$\\nabla^2 \\boldsymbol{A}$", 
            "$\\nabla(\\nabla \\cdot \\boldsymbol{A})$"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '電気数理Ⅰ: ガウスの発散定理を表す式として正しいものを選べ',
        choices: [
            "$\\iint_S \\boldsymbol{A} \\cdot d\\boldsymbol{S} = \\iiint_V \\nabla \\cdot \\boldsymbol{A} \\, dV$", 
            "$\\oint_C \\boldsymbol{A} \\cdot d\\boldsymbol{r} = \\iint_S \\nabla \\times \\boldsymbol{A} \\cdot d\\boldsymbol{S}$", 
            "$\\iint_S \\boldsymbol{A} \\times d\\boldsymbol{S} = \\iiint_V \\nabla \\times \\boldsymbol{A} \\, dV$"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '電気数理Ⅰ: ストークスの定理を表す式として正しいものを選べ',
        choices: [
            "$\\oint_C \\boldsymbol{A} \\cdot d\\boldsymbol{r} = \\iint_S \\nabla \\times \\boldsymbol{A} \\cdot d\\boldsymbol{S}$", 
            "$\\iint_S \\boldsymbol{A} \\cdot d\\boldsymbol{S} = \\iiint_V \\nabla \\cdot \\boldsymbol{A} \\, dV$", 
            "$\\oint_C \\boldsymbol{A} \\cdot d\\boldsymbol{r} = \\iint_S \\nabla \\cdot \\boldsymbol{A} \\, d\\boldsymbol{S}$"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '電気数理Ⅰ: $\\boldsymbol{A} \\times (\\boldsymbol{B} \\times \\boldsymbol{C})$',
        choices: [
            "(\\boldsymbol{A}\\cdot\\boldsymbol{C})\\boldsymbol{B} - (\\boldsymbol{A}\\cdot\\boldsymbol{B})\\boldsymbol{C}", 
            "(\\boldsymbol{A}\\cdot\\boldsymbol{B})\\boldsymbol{C} - (\\boldsymbol{A}\\cdot\\boldsymbol{C})\\boldsymbol{B}", 
            "(\\boldsymbol{A}\\times\\boldsymbol{B})\\cdot\\boldsymbol{C}"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '電気数理Ⅰ: $(\\boldsymbol{A} \\times \\boldsymbol{B}) \\times \\boldsymbol{C}$',
        choices: [
            "-(\\boldsymbol{C}\\cdot\\boldsymbol{B})\\boldsymbol{A} + (\\boldsymbol{C}\\cdot\\boldsymbol{A})\\boldsymbol{B}", 
            "(\\boldsymbol{A}\\cdot\\boldsymbol{C})\\boldsymbol{B} - (\\boldsymbol{A}\\cdot\\boldsymbol{B})\\boldsymbol{C}", 
            "(\\boldsymbol{A}\\cdot\\boldsymbol{B})\\boldsymbol{C}(\\boldsymbol{B}\\cdot\\boldsymbol{C})\\boldsymbol{A}"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '電気数理Ⅰ: $\\boldsymbol{A} \\times \\boldsymbol{B}$',
        choices: [
            "(|\\boldsymbol{A}||\\boldsymbol{B}| \\sin\\theta)\\boldsymbol{u}", 
            "(|\\boldsymbol{A}||\\boldsymbol{B}| \\cos\\theta)\\boldsymbol{u}", 
            "(|\\boldsymbol{A}||\\boldsymbol{B}| \\sin\\theta)"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '電気数理Ⅰ: $\\boldsymbol{A} \\cdot (\\boldsymbol{A} \\times \\boldsymbol{B})$',
        choices: [
            "0", 
            "|\\boldsymbol{A}|^2\\boldsymbol{B}", 
            "1"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '電気数理Ⅰ: $\\boldsymbol{A} \\times \\boldsymbol{A}$',
        choices: [
            "\\boldsymbol{0}", 
            "|\\boldsymbol{A}|^2\\boldsymbol{A}", 
            "-\\boldsymbol{B}\\times\\boldsymbol{A}"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '電気数理Ⅰ: $(\\boldsymbol{A} + \\boldsymbol{B}) \\times \\boldsymbol{C}$',
        choices: [
            "\\boldsymbol{A} \\times \\boldsymbol{C} + \\boldsymbol{B} \\times \\boldsymbol{C}", 
            "\\boldsymbol{A} \\times \\boldsymbol{B} +  \\boldsymbol{C}", 
            "\\boldsymbol{C} \\times \\boldsymbol{A}  + \\boldsymbol{C} \\times \\boldsymbol{B}"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '電気数理Ⅰ: $(p\\boldsymbol{A}) \\times \\boldsymbol{B}$',
        choices: [
            "p(\\boldsymbol{A} \\times \\boldsymbol{B})", 
            "p^2(\\boldsymbol{A} \\times \\boldsymbol{B})", 
            "\\boldsymbol{A} \\times(p\\boldsymbol{B}) + p(\\boldsymbol{A} \\times \\boldsymbol{B})"
        ],
        correctIndex: 0
    },

    // ==========================================
    // 離散数学（集合論）
    // ==========================================
    {
        category: 'math',
        question: '次の命題は真か偽か答えよ: $\\varnothing \\in \\{\\varnothing\\}$',
        choices: ["真", "偽", "判定不能"],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '次の命題は真か偽か答えよ: $\\varnothing \\subseteq \\{\\varnothing\\}$',
        choices: ["真", "偽", "判定不能"],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '次の命題は真か偽か答えよ: $\\{\\varnothing\\} \\subseteq \\{\\varnothing\\}$',
        choices: ["真", "偽", "判定不能"],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '次の命題は真か偽か答えよ: $\\{\\varnothing\\} \\in \\{\\varnothing\\}$',
        choices: ["偽", "真", "判定不能"],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '次の命題は真か偽か答えよ: $\\{\\varnothing\\} \\subseteq \\{\\{\\varnothing\\}\\}$',
        choices: ["真", "偽", "判定不能"],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '次の命題は真か偽か答えよ: $\\{\\varnothing\\} \\in \\{\\{\\varnothing\\}\\}$',
        choices: ["真", "偽", "判定不能"],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '集合演算: $\\{a, b\\} \\setminus \\{b, c\\}$',
        choices: [
            "\\{a\\}", 
            "\\{b, c\\}", 
            "\\{b\\}"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '集合演算: $\\{a, b\\} \\times \\{b, c\\}$',
        choices: [
            "\\{(a, b), (a, c), (b, b), (b, c)\\}$", 
            "\\{(a, b),  (b, c)\\}", 
            "\\{ab, ac, bb, bc\\}"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '集合演算: $\\{a, b\\} \\times \\varnothing$',
        choices: [
            "\\varnothing", 
            "\\{(a, b)\\}", 
            "\\{(a, \\varnothing),  (b, \\varnothing)\\}"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '集合演算: $\\{a, b\\} \\sqcup \\{b, c\\}$',
        choices: [
            "\\{(a, 0), (b, 0), (b, 1), (c, 1)\\}", 
            "\\{a, b, c\\}", 
            "\\{(a, b),  (b, c)\\}"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '冪集合: $2^{\\varnothing}$',
        choices: [
            "\\{\\varnothing\\}", 
            "\\varnothing", 
            "\\{0\\}"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '冪集合: $2^{\\{a, b\\}}$',
        choices: [
            "\\{\\varnothing, \\{a\\}, \\{b\\}, \\{a, b\\}\\}$", 
            "\\{\\{a\\}, \\{b\\}\\}$", 
            "\\{\\varnothing, a, b, \\{a, b\\}\\}"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '冪集合: $2^{\\{\\{a, b\\}\\}}$',
        choices: [
            "\\{\\varnothing, \\{\\{a, b\\}\\}\\}$", 
            "\\{\\varnothing, \\{a, b\\}\\}$", 
            "\\{\\varnothing, \\{a\\}, \\{b\\}\\}"
        ],
        correctIndex: 0
    },
    {
        category: 'math',
        question: '冪集合: $2^{\\{\\{\\{a, b\\}\\}\\}}$',
        choices: [
            "\\{\\varnothing, \\{\\{\\{a, b\\}\\}\\}\\}$", 
            "\\{\\varnothing, \\{\\{a, b\\}\\}\\}$", 
            "\\{\\varnothing, \\{a, b\\}\\}"
        ],
        correctIndex: 0
    },
    {
    category: 'math',
    question: '基礎数理AI: $A \\lor A = ?$',
    choices: ["$A$", "0", "1"],
    correctIndex: 0
    },
    {
    category: 'math',
    question: '基礎数理AI: $E[aX + b] = ?$',
    choices: ["$aE[X] + b$", "$aE[X] - b$", "$a^2E[X] + b$"],
    correctIndex: 0
    },
    {
    category: 'math',
    question: '基礎数理AI: $V[X] = ?$',
    choices: ["$E[X^2] - (E[X])^2$", "$E[X^2] + (E[X])^2$", "$E[X^2] - (E[X])$"],
    correctIndex: 0
    },
    {
    category: 'math',
    question: '基礎数理AI: $V[aX + b] = ?$',
    choices: ["$a^2V[X]$", "$aV[X]$", "$a^2V[X] + b$"],
    correctIndex: 0
    }
];
