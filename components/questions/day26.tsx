"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileQuestionIcon } from "@/components/icons/icons";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Day26 = () => {
  const handleCopyCode = () => {
    const codeElement = document.querySelector(".code-snippet");
    if (codeElement) {
      const codeText = (codeElement as HTMLElement).innerText;
      navigator.clipboard
        .writeText(codeText)
        .then(() => {
          alert("Code copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Day 26</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 76
          </h3>
          <p>
            Function Parameters and Return Values: Create a function that takes
            two numbers as parameters, adds them together, and returns the
            result. Show how you can call this function and log the result.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 76 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`

The addNumbers function takes two parameters, num1 and num2, both of type number, and returns their sum. When called with the arguments 5 and 7, it returns 12, which is then logged to the console.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function adds two numbers and returns the result
function addNumbers(num1: number, num2: number): number {
  // Calculates the sum of num1 and num2
  return num1 + num2;
}

// Calling the function with two numbers and logging the result
console.log(addNumbers(5, 7)); // Outputs 12
              `}
                        </pre>
                      </code>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleCopyCode}>
                    Copy the Code
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        <div className="p-3">
          <hr />
        </div>
      </CardContent>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 77
          </h3>
          <p>
            Default Parameters: Write a function that greets a user. It should
            take the users name as a parameter and say hello. If no name is
            given, it should greet an anonymous user.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 77</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    
The greetUser function takes an optional name parameter, defaulting to "anonymous" if no name is provided. It then logs a greeting message to the console, addressing the given name or using "anonymous" if none is given. Invoking the function with "Alice" results in "Hello, Alice!" being printed, while calling it without arguments outputs "Hello, anonymous!", showcasing its flexibility in greeting users by name or as an anonymous user.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function greets a user by name, 
// or greets an anonymous user if no name is provided

function greetUser(name: string = "anonymous") {
  // Says hello to the given name or to an anonymous user
  console.log(\`Hello, \${name}!\`);
}

// Trying the function with a name and without
greetUser("Alice"); // Outputs: Hello, Alice!
greetUser(); // Outputs: Hello, anonymous!
// We see how our function can say hello to 
// someone by name, or just say hello if we don't know the name.

`}
                        </pre>
                      </code>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleCopyCode}>
                    Copy the Code
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </CardContent>
      <CardContent>
        <div className="p-3">
          <hr />
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 78
          </h3>
          <p>
            Function Expressions vs. Function Declarations: Compare function
            expressions and declarations by creating one of each that performs
            the same task, such as squaring a number.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 78</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                  The code demonstrates two methods for squaring a number. First, there's a function declaration named squareDeclaration, which takes a number as input and returns its square. Second, there's a function expression assigned to the variable squareExpression, achieving the same purpose. Both functions are then invoked with the number 4, resulting in the output 16. This showcases two distinct approaches to defining functions that accomplish the same task.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Function declaration for squaring a number
function squareDeclaration(number: number): number {
  return number * number;
}

// Function expression for squaring a number
const squareExpression = function (number: number): number {
  return number * number;
};

// Using both functions to square the number 4
console.log(squareDeclaration(4)); // Outputs: 16
console.log(squareExpression(4)); // Outputs: 16
// Both methods give us the same result, showing two
// different ways to create functions that do the same thing.

              `}
                        </pre>
                      </code>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleCopyCode}>
                    Copy the Code
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Day26;
