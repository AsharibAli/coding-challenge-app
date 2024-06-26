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

const Day28 = () => {
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
        <CardTitle>Day 28</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 82
          </h3>
          <p>
            Find the Length of a String: Write a function that takes a string as
            an argument and returns the number of characters in the string.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 82 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`

The stringLength function calculates the number of characters in a given string using the length property of the string. For instance, when provided with the string "Alice", it returns the value 5, indicating that there are 5 characters in the string.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function counts how many characters are in a string
function stringLength(str: string): number {
  return str.length; // Returns the number of characters in the string
}

// Example: Measuring the length of a name
console.log(stringLength("Alice")); // Outputs: 5
// We're simply asking how long the string "Alice" is,
//  and it tells us there are 5 characters.
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
            Question 83
          </h3>
          <p>
            Converting to Upper and Lower Case: Create a function that takes a
            string, converts it to uppercase, then to lowercase, and logs both.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 83</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    
The convertCase function takes a string as input, converts it to uppercase using toUpperCase(), and then converts it to lowercase using toLowerCase(). For instance, when given the string "Hello World", it outputs "Uppercase: HELLO WORLD Lowercase: hello world", demonstrating the text in both uppercase and lowercase formats.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function changes a string to uppercase and then to lowercase
function convertCase(str: string) {
  let upperStr = str.toUpperCase(); // Converts to uppercase
  let lowerStr = str.toLowerCase(); // Converts to lowercase

  console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
}

// Example: Changing the case of "Hello World"
convertCase("Hello World"); 
// Outputs: "Uppercase: HELLO WORLD Lowercase: hello world"
// We're showing the same text in all uppercase and then all lowercase.
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
            Question 84
          </h3>
          <p>
            Replacing Text in a String: Write a function that takes a sentence
            and replaces all instances of the word `JavaScript` with
            `TypeScript`.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 84</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                  
The replaceJavaScriptWithTypeScript function takes a sentence as input and replaces all occurrences of "JavaScript" with "TypeScript" using a regular expression with the 'g' flag for global replacement. For example, when given the sentence "I love JavaScript and JavaScript is awesome!", it outputs "I love TypeScript and TypeScript is awesome!", where every occurrence of "JavaScript" is replaced with "TypeScript".
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function swaps "JavaScript" with "TypeScript" in a sentence
function replaceJavaScriptWithTypeScript(sentence: string): string {
  return sentence.replace(/JavaScript/g, "TypeScript");
  // Uses a regular expression with the 'g' flag for a global replacement
}

// Example: Changing a programming language name in a sentence
console.log(
  replaceJavaScriptWithTypeScript(
    "I love JavaScript and JavaScript is awesome!"
  )
);
// Outputs: "I love TypeScript and TypeScript is awesome!"
// Every "JavaScript" in the sentence is changed to "TypeScript".
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

export default Day28;
