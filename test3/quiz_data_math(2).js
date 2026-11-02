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
    {}
]