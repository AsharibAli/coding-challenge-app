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

const Day45 = () => {
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
        <CardTitle>Day 45</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 133
          </h3>
          <p>Write a JavaScript object and convert it into a JSON string.</p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 133 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
The code uses JSON.stringify() to convert a JavaScript object person (with properties name, age, and city) into a JSON string jsonString. When logged, jsonString is a compact, unformatted JSON representation of the original object, useful for data storage or transmission in formats like HTTP requests or local storage.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Defines a JavaScript object
const person = {
  name: "Alice",
  age: 30,
  city: "Wonderland",
};

// Converts the object into a JSON string
const jsonString = JSON.stringify(person);

console.log(jsonString); 
// Outputs: {"name":"Alice","age":30,"city":"Wonderland"}
// Demonstrates converting an object to a JSON string,
//  making it easy to store or transmit.

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
            Question 134
          </h3>
          <p>Take a JSON string and parse it into a JavaScript object.</p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 134</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    The code demonstrates JSON.parse(), which converts a JSON string jsonString (representing a person with name, age, and city) back into a JavaScript object person. When person is logged, it outputs the original object structure, showing how JSON.parse() is used to deserialize JSON data into JavaScript objects, essential for handling data from APIs or stored in JSON format.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Defines a JSON string
const jsonString = '{"name":"Alice","age":30,"city":"Wonderland"}';

// Parses the JSON string back into a JavaScript object
const person = JSON.parse(jsonString);

console.log(person); // Outputs the original object
// This snippet shows how to take a JSON string and
// convert it back into a JavaScript object.

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
            Question 135
          </h3>
          <p>
            Explain how you can format a JSON string with proper indentation for
            readability.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 135</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                 The code uses JSON.stringify() to convert a person object with properties name, age, and city into a formatted JSON string. By passing 2 as the third argument, it indents the JSON output with two spaces per level, making it more readable, which is especially useful for debugging or when data needs to be in a human-friendly format.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Reusing the person object from Question 133
const person = {
  name: "Alice",
  age: 30,
  city: "Wonderland",
};

// Converts the object into a JSON string with indentation
const jsonString = JSON.stringify(person, null, 2); 
// The '2' specifies the number of spaces to use as white space

console.log(jsonString);
/* Outputs:
{
  "name": "Alice",
  "age": 30,
  "city": "Wonderland"
}
*/
// Shows how adding indentation to the JSON string 
// makes it easier to read.
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

export default Day45;
