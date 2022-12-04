"use strict";
const numberArray = [1];
const stringArray = ["Hello"];
function identityOne(value) {
    return value;
}
function identityTwo(value) {
    return value;
}
function identityThree(value) {
    return value;
}
function identityFour(val) {
    return val;
}
// generic array type (normal function declaration)
function getProduts(products) {
    return products[5];
}
// (arrow function declaration)
const getProdutsArrowFun = (products) => {
    return products[5];
};
function anotherFunction(valOne, valTwo) {
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
