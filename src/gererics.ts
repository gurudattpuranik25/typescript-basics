const numberArray: Array<number> = [1];
const stringArray: Array<string> = ["Hello"];

function identityOne(value: number | string): number | string {
  return value;
}

function identityTwo(value: any): any {
  return value;
}

function identityThree<Type>(value: Type): Type {
  return value;
}

interface bottle {
  brand: string;
  type: string;
}

function identityFour<bottle>(val: bottle): bottle {
  return val;
}

// generic array type (normal function declaration)
function getProduts<T>(products: T[]): T {
  return products[5];
}

// (arrow function declaration)
const getProdutsArrowFun = <T>(products: T[]): T => {
  return products[5];
};

interface database {
  connectionString: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(3, {
  connectionString: "hello",
  username: "priyakumar",
  password: "54545ds4f54ds5",
});
