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

const Day33 = () => {
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
        <CardTitle>Day 33</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center">
            <FileQuestionIcon className="w-5 h-5 mr-2" />
            Question 97
          </h3>
          <p>
            Write a function that returns the current date in the format
            `DD-MM-YYYY`.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 97 </strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`

The getCurrentDateFormatted function retrieves the current date and formats it as "DD-MM-YYYY". It creates a Date object for the current date, then extracts the day, month, and year components. The day and month are converted to strings and padded with leading zeros if necessary to ensure they are two digits long. Finally, it returns the formatted date string, which is then logged to the console.
`}{" "}
                    <br /> <br />
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// This function formats the current date as DD-MM-YYYY
function getCurrentDateFormatted(): string {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  // Ensures the day is two digits
  const month = String(now.getMonth() + 1).padStart(2, "0"); 
  // Adds 1 because months are 0-indexed
  const year = now.getFullYear();
  return \`\${day}-\${month}-\${year}\`;
}

console.log(getCurrentDateFormatted());
 // Outputs the current date in DD-MM-YYYY format
// Shows today's date, neatly formatted.
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
            Question 98
          </h3>
          <p>
            Create a JavaScript snippet that calculates and logs how many days
            are left until New Year.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong>➡️ Explanation of Question 98</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                    
The daysUntilNewYear function calculates the number of days left until New Year's Day. It starts by getting the current date, then creates a Date object for January 1st of the next year. It finds the difference between the two dates in milliseconds, converts it to days, and returns the result. When called, it outputs the number of days until the next New Year's Day.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Calculates how many days are left until New Year's Day
function daysUntilNewYear(): number {
  const today = new Date();

  // January 1st of next year
  const newYear = new Date(today.getFullYear() + 1, 0, 1); 

  // Difference in milliseconds
  const diff = newYear.getTime() - today.getTime(); 

  // Converts to days
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); 
  return days;
}

console.log(daysUntilNewYear() + " days until New Year.");
// Tells us how many days there are until the next New Year's Day.
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
            Question 99
          </h3>
          <p>
            Generate a date object representing your next birthday and log it to
            the console.
          </p>
          <div className="p-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Answer 👀</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full max-w-2xl p-4 md:p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <strong> ➡️ Explanation of Question 99</strong>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {`
                  
The getNextBirthday function takes the birth month and day as parameters and returns a Date object for the next occurrence of that birthday. It calculates the next birthday based on the current year and checks if it has already passed this year. If it has, it sets the year to the next one. Finally, it returns the Date object for the next birthday. When called with December 25th as parameters, it outputs "Next birthday on: [date]", indicating the date of the next birthday.
                    `}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
                      <code>
                        <pre className="code-snippet bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto max-h-48">
                          {`
// Generates a Date object for the next occurrence of a specific birthday
function getNextBirthday(month: number, day: number): Date {
  const today = new Date();
  let year = today.getFullYear();
  
  // Months are 0-indexed
  const birthday = new Date(year, month - 1, day); 
  if (birthday < today) {
// If the birthday this year has already passed, use next year's date
    birthday.setFullYear(year + 1);
  }
  return birthday;
}

// Replace with your birth month and day
const nextBirthday = getNextBirthday(12, 25); 
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
// Shows the date of the next birthday.
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

export default Day33;
