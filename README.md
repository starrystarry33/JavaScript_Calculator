# Calculator using JavaScript Canvas Element

### Name: Xinyue Zhang
### Email：zhang.xinyue12@northeastern.edu

## User Requirements:

* As a user, I should be able to evaluate an expression using the calculator when the "=" button is clicked.<br>
* As a user, I should be able to delete a character on the expression using "Back".<br>
* As a user, I should be able to see an "Invalid Expression" error message on the value field when the expression is malformed.<br>
* As a user, I should be able to use "+ (add), - (subtract), * (multiply), / (divide), % (modulus)" arithmetic operators to construct the expression.<br>

## Technical Requirements:

* The goal of this assignment is to learn about JavaScript Canvas API.<br>
* No javascript frameworks should be used.<br>
* No CSS frameworks should be used.<br>
* UI should look exactly as the mock.<br>
* Should use ES6 syntax.<br>
* Should document your code extensively.<br>
* Should have .gitignore, and ReadMe.md files.<br>
* The readMe.md file should have a markdown with the project description and instructions to run the project.<br>


## Algorithm 
The function uses the Shunting Yard algorithm to convert the input expression from infix notation to postfix notation (Reverse Polish Notation), and then it evaluates the postfix expression.<br>

#### Here's a step-by-step explanation of how the calculate function works:<br>

1. Define the operators object, which maps each arithmetic operator to its corresponding operation function (e.g., addition, subtraction, multiplication, and division).<br>
2. Define the precedence object, which maps each operator to its precedence level. This is used to determine the order of operations.<br>
3. Tokenize the input string using a regular expression to split the string into an array of numbers, operators, and parentheses (tokens).<br>
4. Initialize two empty arrays, stack and output.
5. Iterate over each token in the tokens array:
* If the token is an open parenthesis, push it onto the stack.<br>
* If the token is a close parenthesis, pop and add operators from the stack to the output array until an open parenthesis is encountered. Pop the open parenthesis from the stack.<br>
* If the token is an operator, pop and add operators from the stack to the output array while the operator on top of the stack has a precedence greater than or equal to the current token's precedence. Then, push the current token onto the stack.
* If the token is a number, add it to the output array.<br>
* Pop and add any remaining operators from the stack to the output array.<br>
6. Reinitialize the stack as an empty array.<br>
7. Iterate over each token in the output array (now in postfix notation):
8. If the token is an operator, pop two operands (a and b) from the stack, perform the corresponding operation using the operators object, and push the result back onto the stack.<br>
9. If the token is a number, push it onto the stack.<br>
10. The final result of the expression will be the only remaining element in the stack. Return this value as the output of the calculate function.<br>

## Error Case
1. continous operator (ex: "+-", "*\")
2. double "." (ex:"523..)
3. parenthses not show as paried (ex:"((", ")(" "(")


## Instructions to Run the Project
1. Open the index.html file in your web browser.<br>
2. Using the calculator by clicking on the buttons or typing the expression directly using your keyboard.<br>
3. Press " Back" to clear the input items one by one
4. Press the "=" button to evaluate the expression and see the result.<br>

