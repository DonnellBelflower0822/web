const str: string = 'hello';
const age: number = 10;
const isProxy: boolean = true;

interface Arr<T = number> {
  [index: number]: T;
}
type Arr1<T = number> = T[];

const arr1: Arr = [1, 2];
const arr2: Arr1 = [1, 2];

interface Man1 {
  name: string;
  age: number;
}

type Man2 = {
  name: string;
  age: number;
};

const man1: Man1 = {
  name: 'allen',
  age: 27
};
const man2: Man2 = {
  name: 'tom',
  age: 26
};

type Fn = {
  (name: string): void;
};

interface Fn1 {
  (name: string): void;
}

const fn1: Fn = (name) => {
  console.log(name.split(' '));
};
fn1('allen');

const fn2: Fn1 = () => { };

// interface vs type

// 继承
interface Animal {
  name: string;
}
interface Bear extends Animal {
  age: number;
}

const bear: Bear = {
  name: 'allen',
  age: 10
};

type AnimalType = {
  name: string;
};
type BearType = AnimalType & {
  age: number;
};

const bear1: BearType = {
  name: 'allen',
  age: 10
};

// type 不能重复声明
// type Types = {
//   name: string;
// };

// type Types = {
//   age: number;
// };

// interface能声明hebing 
interface Inter {
  name: string;
}
interface Inter {
  // 重名的只能跟上面name声明一样
  // name: number;
  name: string;
  age: number;
}

const inter: Inter = {
  name: 'allen',
  age: 10
};

// type能声明简单类型,interface不能
type Str = string;
type Num = number;

