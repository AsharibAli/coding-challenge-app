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
import { useEffect } from "react";

const Day6 = () => {
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
        <CardTitle>Day 6</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 16
          </h3>
          <p>
            More Guests: You just found a bigger dinner table, so now more space
            is available. Think of three more guests to invite to dinner,{" "}
            <a
              href="https://github.com/AsharibAli/100-days-of-code/tree/main/day-06"
              target="_blank"
            >
              full-question
            </a>{" "}
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 1 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    <strong>What is Nodejs? </strong>
                    Node.js is a free, open-source, cross-platform JavaScript
                    runtime environment that lets developers create servers, web
                    apps, command line tools and scripts.{" "}
                    <strong>
                      <a href="https://nodejs.org/en" target="_blank">
                        Download
                      </a>{" "}
                    </strong>{" "}
                    <br />
                    <br />
                    <strong>What is TypeScript? </strong>
                    TypeScript is a programming language that builds on
                    JavaScript by adding static types, which can help catch
                    errors early in the development process.{" "}
                    <strong>
                      <a
                        href="https://www.javatpoint.com/typescript-installation"
                        target="_blank"
                      >
                        Installation
                      </a>{" "}
                    </strong>{" "}
                    <br /> <br />
                    <strong>What is VS Code? </strong>
                    Visual Studio Code (VS Code) is a free, powerful code editor
                    made by Microsoft that supports many programming languages
                    and has a vast array of extensions.{" "}
                    <strong>
                      <a
                        href="https://code.visualstudio.com/Download"
                        target="_blank"
                      >
                        Download
                      </a>{" "}
                    </strong>
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
 // Calculates how many days are left until New Year's Day
 function daysUntilNewYear(): number {
   const today = new Date();
   const newYear = new Date(today.getFullYear() + 1, 0, 1); 
   const diff = newYear.getTime() - today.getTime(); 
   const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); 
   return days;
 }
 
 console.log(daysUntilNewYear() + " days until New Year.");
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
            Question 17
          </h3>
          <p>
            Shrinking Guest List: You just found out that your new dinner table
            won’t arrive in time for the dinner, and you have space for only two
            guests,{" "}
            <a href="https://github.com/AsharibAli/100-days-of-code/tree/main/day-06">
              full-question
            </a>
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 17</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`This code defines a variable myName with the value "Asharib"
                    and then prints a message to the console saying, "Hello
                    Asharib, Want to learn some TypeScript today?"
                    using template literals for string interpolation.`}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
let myName: string = "Asharib";

console.log(\`Hello \${myName}, Want to learn some TypeScript today?\`);
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
            Question 18
          </h3>
          <p>
            Seeing the World: Think of at least five places in the world you’d
            like to visit. - Store the locations in a array. Make sure the array
            is not in alphabetical order,{" "}
            <a
              href="https://github.com/AsharibAli/100-days-of-code/tree/main/day-06"
              target="_blank"
            >
              full-question
            </a>
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 18 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                   This code defines a variable myName with the value "Asharib" and then prints three 
                   variations of the name to the console: all lowercase, all uppercase, and with only 
                   the first letter capitalized while the rest are in lowercase.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
let myName: string = "Asharib";

console.log(myName.toLowerCase()); 
console.log(myName.toUpperCase()); 
console.log(myName.charAt(0).toUpperCase() + myName.slice(1)
.toLowerCase()); 
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

export default Day6;
