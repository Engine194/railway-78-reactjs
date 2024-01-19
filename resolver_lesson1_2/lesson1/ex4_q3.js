/* author: Nong Van Trinh */
function getGreeting(firstName, lastName) {

    var  greeting = function () {
        return firstName +" "+ lastName;
    }
    return greeting;
}

const sayGreeting = getGreeting("Nikita", "Nguyen");

console.log(sayGreeting());

/*
A function has its own lifecycle.
It means that a function only exists in an amount of time from it was born until it was removed by JS engine

The function is declared = it was born.
The function is called = it started doing its duty.
The function is running = it was doing the duty.
The function returned a value = the duty was done.
Then function was removed from call stack and it died (no available in computer memory)
*/

/*
In the example, there is a weird point. That is line 7.
Remember that in function getGreeting, there are 2 local variables.
Of course they belong to function getGreeting;

line 2 -> line 8 = function getGreeting war defined and was born;

line 10 -> getGreeting("Nikita", "Nguyen") = function getGreeting is called

line 4 -> line 7 = function getGreeting was processing its job;

line 10 -> const sayGreeting = function getGreeting produced a function and it was hold in variable sayGreeting

Now we know that from line 10, function getGreeting was removed from the computer
(including varables "firstName", "lastName");

But suddently in line 12, we call sayGreeting(), the function will access and read the values of "firstName", "lastName"

Although function getGreeting has been removed, but the its variables are still refered in other places (sayGreeting() function).
JS engine has a feature called "closure", that allows all referenced variables still are available.

*/
