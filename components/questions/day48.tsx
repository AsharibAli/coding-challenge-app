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

const Day48 = () => {
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
        <CardTitle>Day 48</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 142
          </h3>
          <p>
            Create a Promise that resolves with `Hello, World!` after 2 seconds.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 142 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`

This code creates a Promise named helloPromise that resolves with the message "Hello, World!" after 2 seconds. It uses setTimeout to delay the resolution. The then method is called on the Promise to log the message to the console once it resolves. As a result, "Hello, World!" will be logged to the console after a 2-second delay.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Creates a Promise that resolves with "Hello, World!"
// after 2 seconds

const helloPromise = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Hello, World!");
  }, 2000);
});

helloPromise.then((message) => console.log(message));
// After 2 seconds, "Hello, World!" will be logged to the console.

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
            Question 143
          </h3>
          <p>
            Show how to use the .then() and .catch() methods to handle Promise
            resolution and rejection.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 143</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    This code creates a Promise named conditionalPromise that either resolves with "Success!" or rejects with an error "Failure" based on a random condition. It uses Math.random() to generate a random number and checks if it is greater than 0.5 to decide success or failure. The then method handles the successful resolution by logging the result, while the catch method handles the rejection by logging the error message. As a result, the code will randomly log either "Success!" or "Failure" to the console based on the outcome of the promise.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Creates a Promise that either resolves or rejects 
based on a condition
const conditionalPromise = new Promise<string>
((resolve, reject) => {
  const success = Math.random() > 0.5; 
  // Randomly choose success or failure
  if (success) {
    resolve("Success!");
  } else {
    reject(new Error("Failure"));
  }
});

conditionalPromise
// Handles a successful resolution
  .then((result) => console.log(result)) 

   // Handles a rejection
  .catch((error) => console.log(error.message));

// This code will randomly log either "Success!"
// or "Failure" based on the outcome of the promise.

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
            Question 144
          </h3>
          <p>Explain the use of the Promise.all() method with an example.</p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 144</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                   This code demonstrates the use of Promise.all to wait for multiple promises to resolve. It creates three promises: promise1 which resolves immediately with the value 3, promise2 which is a straightforward value 42 (treated as a resolved promise), and promise3 which resolves with "foo" after a 100-millisecond delay. Promise.all is used to wait for all three promises to resolve, and then it logs the array of their results, [3, 42, "foo"], to the console. This shows how Promise.all can handle multiple promises simultaneously.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Example using Promise.all to wait for multiple
// promises to resolve

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // Outputs: [3, 42, "foo"]
});

// This demonstrates how Promise.all waits for all
// promises to resolve and then logs the array of their results.

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

export default Day48;
