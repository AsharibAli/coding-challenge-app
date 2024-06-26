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

const Day41 = () => {
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
        <CardTitle>Day 41</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 121
          </h3>
          <p>
            Implement a for loop that counts from 1 to 10 but skips number 5
            using the continue statement.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 121 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
The code uses a for loop to count from 1 to 10. Within the loop, an if statement checks if the current value of i is 5. If it is, the continue statement is used to skip the rest of the loop's code for that iteration, effectively skipping the logging of 5. As a result, it logs all numbers from 1 to 10, except for 5.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This for loop counts from 1 to 10 but skips 5
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // Skips the rest of the loop for i = 5
  }
  console.log(i); // Logs numbers 1-4 and 6-10
}
// It demonstrates how to use 'continue' to skip a specific iteration.

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
            Question 122
          </h3>
          <p>
            Use a while loop to count down from 10 to 1 and breaks the loop when
            it reaches 5.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 122</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    The code initializes a counter variable to 10 and uses a while loop to count down. In each iteration, it checks if counter is equal to 5; if true, it uses the break statement to immediately exit the loop. Otherwise, it logs the current value of counter and decrements it by 1. This results in logging the countdown from 10 to 6, but stops before logging 5.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Initializes the counter at 10
let counter: number = 10;
// This while loop counts down from 10 to 1 and stops at 5
while (counter > 0) {
  if (counter === 5) {
    break; // Exits the loop when counter reaches 5
  }
  console.log(counter);
  counter--; // Decrements the counter
}
// Logs the countdown from 10 but stops abruptly when it hits 5.

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
            Question 123
          </h3>
          <p>
            Create a loop that iterates through a string and stops when it finds
            the first vowel.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 123</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                   The logUntilVowel function takes a string str as input and uses a for...of loop to iterate through each character. It checks if the current character is a vowel by using the includes method on a string of vowels. If a vowel is found, it logs a message with the vowel and then breaks the loop. Otherwise, it logs each non-vowel character. When called with "syzygy", it logs 's', 'y', 'z', 'y', and then 'First vowel found: y', stopping at the first vowel.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function iterates through a string and logs each character 
// until it finds a vowel

function logUntilVowel(str: string): void {
  const vowels = "aeiouAEIOU";
  for (const char of str) {
    if (vowels.includes(char)) {
      console.log(\`First vowel found: \${char}\`);
      break; // Stops the loop at the first vowel found
    }
    console.log(char); 
    // Logs each character until a vowel is encountered
  }
}

logUntilVowel("syzygy");
// Logs 's', 'y', 'z', 'y', and then 'First vowel found: y'
// Demonstrates iterating through a string and stopping at
// the first vowel.

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

export default Day41;
