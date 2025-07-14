class Animations {
    constructor(name, health = 1) {
        this.name = name;
        this.health = health;
    }
    positionX = 0;
    positionY = 0;
    directionOfView = 1; // -1 for left
    run(vector = [this.directionOfView, 0]) {
        this.positionX += vector[0];
        this.positionY += vector[1];
    }
    chase(target) {
        return this.run([target.positionX, target.positionY]);
    }
    throw(target, it) {
        target.hit(it);
    }
    hit(n) {
        if (n == -1) this.directionOfView *= -1; // invertByAdd
        if (typeof n == 'object') this.toggleVerse(n); // virtualNum
        return n;
    }
    toggleVerse(i) {
        this.positionX = i.mult(this.positionX);
        this.positionY = i.mult(this.positionY);
    }
    feel(emotion) { }
    draw(it) { return this }
    hold(it) { }
    equip(weapon) {
        this.weapon = weapon;
    }
    attack(target, isShot = true) {
        let damage = this.weapon.shoot();
        if (isShot) target.health -= damage;
        return damage;
    }
}

let player1 = new Animations("TSC", Infinity); // yes, immortal :)

let one = 1;

player1.feel("curious")

const add = (a, b) => a + b; // core operation

add(1, 1); // defined as 2

player1.feel("thoughtful")

add(1, add(1, 1)) // defined as 3

add(1, add(1, add(1, 1)))

add(1, add(1, add(1, add(1, 1))))

add(1, add(1, add(1, add(1, add(1, 1)))))

add(1, add(1, add(1, add(1, add(1, add(1, 1))))))

add(1, add(1, add(1, add(1, add(1, add(1, add(1, 1)))))))

add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, 1))))))))

add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, 1)))))))))

add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, 1))))))))))

add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, 1)))))))))))

add(2, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, 1))))))))))))

add(2, add(2, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, 1)))))))))))))

add(2, add(2, add(2, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, 1))))))))))))))

add(2, add(2, add(2, add(2, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, 1)))))))))))))))

add(20, add(2, add(2, add(2, add(2, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, 1))))))))))))))))

add(20, add(20, add(2, add(2, add(2, add(2, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, 1)))))))))))))))))

add(20, add(20, add(20, add(2, add(2, add(2, add(2, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, 1))))))))))))))))))

add(20, add(20, add(20, add(20, add(2, add(2, add(2, add(2, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, 1)))))))))))))))))))

player1.feel("excited")

player1.feel("sad")

add(40, add(20, add(20, add(2, add(2, add(2, add(2, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, add(1, 1))))))))))))))))))

add(99, 1)

// opposite of addition
const invertByAdd = (a) => -a;
const subt = (a, b) => add(a, invertByAdd(b));

subt(100, 1) // add(100, -1)

subt(subt(100, 1), 1)

player1.feel("excited")

subt(subt(subt(100, 1), 1), 98)

subt(subt(subt(subt(100, 1), 1), 98), 1)

let player2 = new Animations("Euler's Formula", -1);
// eulersFormula appeared from -1

player1.feel("shocked")

player1.feel("curious")

player2.feel("shy")
player2.run([1, 0])

player1.chase(player2)

// player2.hit(i) // we will discover later

player1.feel("confused")

subt(-1, 1) // add (-1, -1)

subt(subt(-1, 1), 1)

invertByAdd(-3)

// auxiliary methods
const getCoef = (a) => {
    if (a > 0) return 1;
    if (a < 0) return -1;
    return 0;
}
const abs = (a) => a < 0 ? -a : a;

// repetitive operations
const mult = (a, b) => {
    if (a % 1 || b % 1) return a * b; // trick
    let res = 0;
    let
        ka = getCoef(a),
        kb = getCoef(b),
        _a = abs(a);
    while (b != 0) {
        res = add(res, a); // repetitive
        b = subt(b, kb); // will approach the 0 axis
    }
    if (ka < 0) res = invertByAdd(res);
    if (kb < 0) res = invertByAdd(res);
    return res;
}

mult(3, 3)

mult(3, add(3, 1))

mult(4, 3)

mult(2, 6)

mult(6, 2)

// Then the reverse is done by subtraction
const remainder = (a, b) => {
    if (a % 1 || b % 1) return a % b; // trick
    if (a == 0 && b == 0) return "uncertain";
    if (b == 0) return undefined;
    let
        ka = getCoef(a),
        _b = abs(b),
        _a = abs(a);
    let rem = _a;
    while (rem >= _b) {
        rem = subt(rem, _b); // repetitive
    }
    if (ka < 0) rem = invertByAdd(rem);
    return rem;
}

// opposite of multiplication
const divi = (a, b) => {
    if (a % 1 || b % 1) return a / b; // trick
    if (a == 0 && b == 0) return "uncertain";
    if (b == 0) return undefined;
    let res = 0;
    let
        ka = getCoef(a),
        kb = getCoef(b),
        _b = abs(b),
        _a = abs(a);
    let rem = _a;
    while (rem >= _b) {
        rem = subt(rem, _b); // repetitive
        res = add(res, 1);
    }
    if (ka < 0) res = invertByAdd(res);
    if (kb < 0) res = invertByAdd(res);
    return res;
}

divi(6, 2)

divi(6, add(2, 1))

divi(6, subt(3, 2))

divi(6, subt(1, 1)) // Infinity loop

player1.feel("confused")

subt(6, 0)

add(6, 6)

mult(2, 6)

mult(6, 6)

// What if we repeat the multiplication process?
const invertByMult = (a) => 1 / a;
const pow = (a, b) => {
    if (b % 1 != 0) return Math.pow(a, b); // trick
    let
        kb = getCoef(b),
        _b = abs(b),
        _a = abs(a);
    if (b < 0) return `1 / ${pow(a, _b)}`; // decimal numbers
    if (b == 0 && a == 0) return undefined;
    if (b == 0) return 1; // stopper
    return mult(a, pow(a, subt(b, kb))); // repetitive
}

pow(6, 2)

pow(add(6, 2), 2)

player1.feel("shocked")

pow(subt(6, 2), 2)

pow(4, 2)

pow(4, add(2, 1))

pow(4, add(2, add(1, 1)))

player1.feel("shocked")

pow(4, add(2, add(1, add(1, 1))))

player1.feel("shocked")

pow(4, 5)

pow(4, subt(5, 1))

pow(4, subt(subt(5, 1), 1))

pow(4, subt(subt(subt(5, 1), 1), 1))

pow(4, subt(subt(subt(subt(5, 1), 1), 1), 1))

pow(4, 1)

pow(4, 0)

pow(4, -1)

pow(4, divi(1, 1))

pow(4, (1 / 2)) // what is this sqrt?

player1.feel("shocked")

// auxiliary methods
const isPrime = (a) => {
    if (a < 0) return 0;
    if (a == 0) return 0;
    if (a == 1) return 0;
    if (remainder(a, 1) != 0) return 0;
    for (let j = 2; j < a / 2; j++) {
        if (remainder(a, j) == 0) return 0;
    }
    return 1;
}
const convertPrime = (a) => {
    let primed = [];
    for (let j = 2; j < a / 2; j++) {
        if (isPrime(a)) break;
        if (!isPrime(j)) continue;
        let _primed = [j, 0];
        while (remainder(a, j) == 0) {
            a = divi(a, j);
            _primed[1] += 1;
        }
        if (_primed[1] > 0) primed.push(_primed);
    }
    if (a != 1) primed.push([a, 1]);
    return primed;
}
const mergePrime = (primed) => {
    let merged = 1;
    primed.forEach(([pr, po]) => {
        merged = mult(merged, pow(pr, po));
    });
    return merged;
}

// opposite of power
const sqrt = (a, b = 2) => {
    if (b != 2) return Math.pow(a, 1 / b); // trick
    if (a == 0 && b == 0) return undefined;
    if (b == 0) return 1; // no comment
    if (a == 0) return 0;
    if (b == 1) return a;
    if (a < 0) { // virtual numbers
        let coef = sqrt(abs(a), b);
        return `${coef != 1 ? coef : ''}i`;
    }
    let primed = convertPrime(a); // factoring
    let outSqrt = 1, inSqrt = 1;
    primed.forEach(([pr, po]) => {
        let divided = divi(po, b);
        outSqrt = mult(outSqrt, pow(pr, divided));
        let remaindered = remainder(po, b);
        inSqrt = mult(inSqrt, pow(pr, remaindered));
    });
    if (inSqrt != 1) return Math.sqrt(a); // trick
    return outSqrt;
}

sqrt(4)

sqrt(2) // irrational numbers

player1.feel("shocked")

sqrt(1)

sqrt(subt(1, 1))

sqrt(-1) // possible? yes with virtual numbers

player1.feel("what he sees looks familiar")

class virtualNum {
    constructor(coef) {
        this.coef = coef;
    }
    add(it) {
        if (it instanceof virtualNum) return (new virtualNum(add(this.coef, it.coef)));
        return `${it} + ${this.toString()}`; // complex numbers
    }
    mult(it) {
        if (it == Infinity) return Infinity; // to avoid collapsing
        if (it instanceof virtualNum) return invertByAdd(mult(this.coef, it.coef));
        return (new virtualNum(mult(this.coef, it)));
    }
    pow(it) {
        // just positive numbers for now
        if (it == 0) return 1;
        return this.mult(this.pow(subt(it, 1)));
    }
    toString() {
        if (this.coef == 0) return;
        if (this.coef == 1) return 'i';
        if (this.coef == -1) return '-i';
        return `${this.coef}i`;
    }
}

let i = new virtualNum(1);

i.add(i).toString() // i+i

i.mult(i).toString() // i*i

i.mult(i.mult(i)).toString() // i*i*i

// eulersFormula reappeared from i*i=-1

player2.feel("scared")

player2.hit(i)

player1.throw(player2, i)

player2.feel("confused")

i.pow(2) // i*i

player2.transform = (form) => { };
player2.transform("trigonometric formula")

player2.throw(player1, -1)

player1.feel("confused")

let pi = Math.PI; // we will discover later
player2.draw(pi).hold()

player2.run([1, 0])

player1.chase(player2)

player1.accelerate = () => () => { this.run([mult(1, 1)], 0) }
player1.accelerate()

player1.throw(player2, -1)

// Let's combat

class Weapons {
    constructor(name, material, func = (m) => m, used = (m) => m) {
        this.name = name;
        this.material = material;
        this.func = func;
        this.used = used;
    }
    shoot = () => {
        let damage = this.func(this.material);
        this.material = this.used(this.material);
        return damage;
    }
    defend = (bullet) => bullet;
}

const combat = (p1, p2) => {
    let p1Shot = p1.weapon.shoot();
    let p2Shot = p2.weapon.shoot();
    let totalDamage = add(p1Shot, p2Shot);
    if (totalDamage == 0) return 0;
    if (abs(p1Shot) > abs(p2Shot)) {
        p1.weapon.material = totalDamage;
        p2.weapon.material = 0;
        p2.health -= totalDamage;
    } else {
        p2.weapon.material = totalDamage;
        p1.weapon.material = 0;
        p1.health -= totalDamage;
    }
    return totalDamage;
}

let nSword = new Weapons("-1", -1);
player2.equip(nSword)

let pSword = new Weapons("+1", 1);
player1.equip(pSword)

// 1st round

combat(player1, player2)

combat(player1, player2)

combat(player1, player2)

combat(player1, player2)

player2.equip(new Weapons("-4", -4))
combat(player1, player2)

player1.equip(new Weapons("+1", 1))
combat(player1, player2)

player1.equip(new Weapons("+1", 1))
combat(player1, player2)

combat(player1, player2)

player1.equip(new Weapons("+1+1", 2))
combat(player1, player2)

let mArrow = new Weapons("2x2", 2, (m) => mult(m, m));
player1.equip(mArrow)
player1.attack(player2)

player2.draw(divi(pi, 4)).hold()
player2.run([-1, 0])

player1.attack(player2, false)

player1.attack(player2, false)

player1.attack(player2, false)

player1.attack(player2, false)

player1.attack(player2, false)

player1.draw(i).hold(i)

player1.attack(player2, false)

player1.attack(player2, false)

player1.attack(player2, false)

player1.attack(player2, false)

// Let's Discovery Trigonometry

let point;

player1.feel("curious")

player1.hold(point)

player1.draw = (it) => it;

player1.draw(i)

player1.draw([i.mult(5), i.mult(-1)])

player1.draw(3)

class Circles {
    tau = mult(2, Math.PI);
    constructor(radius = 1, x = 0, y = 0, rotation = 0) {
        this.radius = radius;
        this.positionX = x;
        this.positionY = y;
        this.rotation = rotation;
    }
    getDiameter = () => mult(2, this.radius);
    getCircumference = () => mult(this.tau, this.radius);
    drawGraph = (it) => it;
    add = (it) => {
        if (it instanceof virtualNum) {
            this.positionY = add(this.positionY, it.coef);
        } else {
            this.positionX = add(this.positionX, it);
        }
        return [this.positionX, this.positionY];
    }
}

let circle = new Circles(1);

player1.draw(circle)

// discovered tau

player1.feel("thoughtful")

class Radians {
    constructor(coef) {
        this.coef = coef;
    }
    getAngle = () => this.coef * 180;
    toInt = () => this.coef * Math.PI;
    toString = () => `${this.coef}π`;
}

let rSword = new Weapons("Radian", 1, circle.drawGraph);
player1.equip(rSword)

circle.radius = 5

circle.radius = add(5, 2)

circle.radius = subt(5, 2)

circle.radius = 1; // unit circle

divi(circle.getCircumference(), circle.getDiameter())

pi = new Radians(1); // discovered pi

player1.feel("excited")

// auxiliary methods
const fact = (a) => {
    if (remainder(a, 1) != 0) return undefined;
    if (a < 1) return 1; // stopper
    return mult(a, fact(subt(a, 1)));
}
const sum = (start, finish, step, func = (n) => n) => {
    if (finish == Infinity) return Infinity; // to avoid collapsing
    if (start == finish) return 0;
    return add(func(start), sum(add(start, step), finish, step, func));
}

const calculateSin = (angle, terms = 10) => {
    let r = angle * (Math.PI / 180); // radian
    let calculate = (n) => pow(-1, n) * Math.pow(r, 2 * n + 1) / fact(2 * n + 1);
    return sum(0, terms, 1, calculate);
}
const sin = (input) => {
    if (input instanceof Radians) input = input.getAngle()
    let angles = (typeof input == 'object') ? input : [input];
    output = angles.map(angle => {
        _angle = remainder(angle, 360);
        if (_angle == 0 || _angle == 180) return 0;
        if (_angle == 90) return 1;
        if (_angle == 270) return -1;
        return calculateSin(_angle);
    });
    return (typeof input == 'object') ? output : output[0];
}

const calculateCos = (angle, terms = 10) => {
    let r = angle * (Math.PI / 180); // radian
    let calculate = (n) => pow(-1, n) * Math.pow(r, 2 * n) / fact(2 * n);
    return sum(0, terms, 1, calculate);
}
const cos = (input) => {
    if (input instanceof Radians) input = input.getAngle()
    let angles = (typeof input == 'object') ? input : [input];
    output = angles.map(angle => {
        _angle = remainder(angle, 360);
        if (_angle == 0) return 1;
        if (_angle == 90 || _angle == 270) return 0;
        if (_angle == 180) return -1;
        return calculateCos(_angle);
    });
    return (typeof input == 'object') ? output : output[0];
}

let t = [0, 90, 180, 270, 360]; // with base angles

circle.drawGraph(sin(t))

circle.drawGraph(cos(t))

circle.drawGraph("cos(t)+sin(t)")

circle.drawGraph("cos(t)+i*sin(t)")

// Let's try the expression it just transformed into

let iSinPi = new virtualNum(sin(pi));
iSinPi.add(cos(pi))

// eulersFormula reappeared from trigonometric formula

player2.run()

player1.chase(player2)
player1.hold(player2)

// 2nd round

nSword = new Weapons("-1", -1);
player2.equip(nSword)

rSword = new Weapons("+1", 1, circle.drawGraph);
player1.equip(rSword)

player2.attack(player1)

combat(player1, player2)

player2.equip(new Weapons("-2", -2))
combat(player1, player2)

player2.equip(new Weapons("-6", -6))
player2.attack(player1)

mArrow = new Weapons("2x2", 2, (m) => mult(m, m));
player1.equip(mArrow)
player1.attack(player2, false)

player1.attack(player2, false)

player2.transform("summation formula")
let sumForm = (n) => {
    if (n > 10) n = 8 + n % 4; // to avoid collapsing
    let iCoef = i.pow(n);
    if (typeof iCoef == "number") return mult(divi(pow(pi.toInt(), n), fact(n)), iCoef);
    let iMult = iCoef.mult(divi(pow(pi.toInt(), n), fact(n)));
    if (iMult instanceof virtualNum) return iMult.toString();
    return iMult;
}

let sDrone = new Weapons("Taylor Series", 0, sumForm, (n) => add(n, 1));
player2.equip(sDrone)

player2.attack(player1, false)

player2.attack(player1, false)

player2.attack(player1, false)

player2.attack(player1, false)

player2.attack(player1, false)

player2.attack(player1, false)

player2.attack(player1, false)

player2.attack(player1, false)

player2.attack(player1, false)

player2.attack(player1, false)

player2.attack(player1, false)

player1.run([-1, 0])

player2.chase(player1)

player2.attack(player1, false)

player2.attack(player1, false)

player2.attack(player1, false)

player2.attack(player1, false)

let rShield = new Weapons("Radian", 0)
rShield.material = mult(rShield.material, 4)
rShield.material = mult(rShield.material, pi.toInt())
player1.equip(rShield)

player1.weapon.defend(player2.weapon.shoot())

player1.weapon.defend(player2.weapon.shoot())

player1.weapon.defend(player2.weapon.shoot())

player1.weapon.defend(player2.weapon.shoot())

player1.weapon.defend(player2.weapon.shoot())

player1.weapon.defend(player2.weapon.shoot())

player1.weapon.defend(player2.weapon.shoot())

player1.weapon.material = mult(player1.weapon.material, 8)

player1.weapon.material = divi(player1.weapon.material, 8)

circle.radius = abs(player1.positionX)

circle.radius = 10

player2.equip(new Weapons("-7", -7))

player2.attack(player1, false)

player1.hit(-1) // but on the analytical plane, so
player1.positionX = invertByAdd(player1.positionX)

player2.feel("confused")

sDrone = new Weapons("Taylor Series", 0, sumForm, (n) => add(n, 1));
player2.equip(sDrone)

player2.attack(player1, false)

player2.attack(player1, false)

player2.attack(player1, false)

player2.attack(player1, false)

player2.attack(player1, false)

player2.attack(player1, false)

player2.attack(player1, false)

let javelin = rSword
javelin.material = mult(javelin.material, 4)

player2.attack(player1, false)

player1.hold(javelin)

player2.attack(player1, false)

player2.attack(player1, false)

player2.attack(player1, false)

player1.hold(point)
player1.equip(new Weapons("sin graph", t, sin))
player1.attack(player2)

player2.feel("angry")

// 3rd round

for (let n = 0; n < 25; n++) {
    player2.transform("trigonometric formula")
}
let cloneArmy = {};

nSword = new Weapons("-1", -1)
player2.equip(nSword)
cloneArmy.landForces = new Array(50).fill(player2)

sDrone = new Weapons("Taylor Series", 0, sumForm, (n) => add(n, 1))
player2.equip(sDrone)
cloneArmy.airForces = new Array(50).fill(player2)

const tan = (input) => {
    if (input == Infinity) return Infinity; // to avoid collapsing
    return divi(sin(input), cos(input));
}

tanGun = new Weapons("Tangent Gun", 0, (m) => mult(tan(m), 9))
player1.equip(tanGun)

player1.attack(cloneArmy.landForces[0], true)

player1.run([1, 0])

cloneArmy.landForces.forEach((clone) => {
    clone.chase(player1);
    circle.radius = add(circle.radius, 1);
});

cloneArmy.airForces.forEach((clone) => {
    clone.chase(player1);
    clone.attack(player1, false);
});

player1.draw(circle.radius)

player1.hold(mult(pi.toInt(), circle.radius))

player1.attack(cloneArmy.airForces[0], false)

cloneArmy.airForces.forEach((clone) => {
    // combat(player1, clone) // to avoid collapsing
});

player1.attack(cloneArmy.landForces[0])

player1.draw(new virtualNum(7))

player1.hold(cloneArmy.airForces[2])

player1.hold(Infinity)

player1.weapon.material = Infinity
player1.attack(cloneArmy.landForces[0], true)

cloneArmy.landForces[0].feel("shocked")
cloneArmy.landForces[0].run([-1, 0])

player1.directionOfView = -1

player1.attack(cloneArmy.landForces[0], true)

player1.attack(cloneArmy.landForces[0], true)

player1.attack(cloneArmy.airForces[0], true)

for (let d = 0; d < 4; d++) { // to 4D Span
    // player1.attack(circle, true)
}

player1.attack(cloneArmy.landForces[0], false)

player1.attack(cloneArmy.landForces[0], false)

// 4th round (Calculus)

cloneArmy.landForces.forEach((clone) => { // rest 4 clones
    clone.transform("trigonometric formula")
    clone.transform("summation formula")
    clone.transform("logarithmic formula")
});

player2.transform("boss")

player1.attack(player2)
let heldLimit = player2.hold(player1.weapon.func) // lim

const riemannSum = (start, finish, func, rectangles = 1000) => {
    if (finish == Infinity) return Infinity; // to avoid collapsing
    deltaX = (finish - start) / rectangles;
    return sum(start, finish, deltaX, func);
}

const dIntegral = (m) => riemannSum(0, Infinity, heldLimit);

let iSpear = new Weapons("Integral", 0, dIntegral, (n) => add(n, 1));
player2.equip(iSpear)

player2.feel("strong")

combat(player2, player1)

sDrone = new Weapons("Taylor Series", 0, sumForm, (n) => add(n, 1));
player2.equip(sDrone) // on 2nd hand
player2.attack(player1, false)

player1.equip(new Weapons("block shield", mult(2, 1)))
player1.weapon.defend(player2.attack(player1, false))

player2.equip(iSpear)
player2.attack(player1, true) // shield broken

player1.equip(new Weapons("semicircle shield", 1))
player2.attack(player1, true) // shield broken

player1.equip(new Weapons("line shield", 1))
player2.attack(player1, true) // dropped the shield


// 5th round

circle.radius = 10

circle.add(new virtualNum(9))
for (let n = 1; n < 9; n++) {
    circle.add(i)
}

let clone = player2
clone.equip(nSword)
cloneArmy.landForces = new Array(40).fill(clone)

circle.add(-5)

const graphDrawer = (formula) => {
    return circle.drawGraph("cos(t)+i*sin(t)");
}
let starKiller = new Weapons("Death Star", Infinity, graphDrawer)
starKiller.mode = (m) => m
player1.equip(starKiller)

circle.rotation = 225

player1.attack(cloneArmy.landForces[0])

player1.attack(player2, false)

player1.attack(player2, false)

player1.attack(player2, false)

circle.rotation = 210
player1.attack(player2, false)

player1.attack(player2, false)

circle.rotation = 225
player1.attack(player2, false)

player1.attack(player2, false)

player1.attack(player2, true) // integralDart broken

circle.add(-9)
circle.add(-9)
circle.add(-9)

circle.radius = mult(circle.radius, 10)

player2.feel("helpless")

circle.rotation = 210

player2.weapon.defend(player1.attack(player2, true))

player2.feel("defeated")

player2.hit(i)

player1.weapon.mode("always in operation")

player1.hold(mult(rShield.material, 82794))

player1.hold(player2)
player1.toggleVerse(i) // with player2

player1.feel("shocked")

player1.hold(player2)

player1.draw(5)
player1.draw(5)
player1.draw(5)
player1.draw(5)
player1.draw(5)
player1.draw(5)

player1.hold(player2.hit(i))

player2.feel("surprised")

player1.feel("in need of help")

player2.hit(i.pow(4))

player1.feel("hopeless")

player2.hold(circle)
circle.positionY = 1

player2.transform("summation formula")

player2.hold(i)

const gamma = (n) => fact(subt(n, 1));
const nSphere = (n) => divi(pow(mult(pi.toInt()), divi(n, 2)), gamma(add(divi(n, 2), 1)));

player1.hold(circle)

player2.draw(circle.drawGraph(i.mult(sum(0, Infinity, 2, nSphere))))

// bye TSC

let player3 = new Animations("Zeta")

let player4 = new Animations("Phi")

let player5 = new Animations("Delta")

let player6 = new Animations("Aleph")

player2.run([-1, 0])
player3.run([-1, 0])
player4.run([-1, 0])
player5.run([-1, 0])
player6.run([-1, 0])

"The + End"