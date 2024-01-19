/*
    Ba scopes:
    1. Global
    2. Local
    3. Lexical
    4. Block
*/

// a. Khai báo fullName là Global scope
const fullName = "Anna Zuares";

// b. Khai báo fullName là Function scope
() => {
    const fullName = "David Zimbada";
}

// c. Khai báo fullName là Lexical Scope (Scope chain)

const function_1 = () => {
    // Inside function_1 is scope_A
    // const fullName = "Anna Zuares A";
    const function_2 = () => {
        // Inside function_1 is scope_B
        // const fullName = "Anna Zuares B";
        const function_3 = () => {
            // Inside function_1 is scope_C
            return fullName; // => "Anna Zuares"
        }
        return function_3;
    }

    return function_2;
}

const func_2 = function_1();
const func_3 = func_2();


console.log(func_3());

// 1. Stay in scope_C, there is no variable with a label is "fullName"
// JS engine knows that the context is in a child scope (not global)

// 2. JS engine looks up variable "fullName" in the higher scope (scope_B)
// There is no variable "fullName" in scope_B too;
// But JS engine knows that the context is still not global, so it continues searching

// 3. In the same way of looking up, JS engine comes to global scope
// And finally it finds a variable "fullName" there.
// If the last scope (the biggest one in this module) does not contain any variable "fullName"
// JS engine will throw an exception "fullName is not defined"

// By this way, JS engine loop through all scope tree to find a variable
// On the way it goes through, if variable exists, it will stop looking up to the higher scope
// If not, it will reach the largest scope (global).

