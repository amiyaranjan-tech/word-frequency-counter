# Word Frequency Counter

Word Frequency Counter is a ReactJS application that calculates the frequency of occurrence of each word in a given text file and displays the top 20 most occurring words in a histogram. It also provides an option to export the histogram data as a CSV file.

## Wordfrequency component

The Wordfrequency component is the main component of the Word Frequency Counter application. It fetches the contents of a text file, calculates the frequency of occurrence of each word, and displays the top 20 most occurring words in a histogram.

### Functionality

The Wordfrequency component provides the following functionality:

Fetching Text File: When the user clicks the "Submit" button, the component makes an HTTP request to fetch the contents of a text file. The URL of the text file is https://www.terriblytinytales.com/test.txt.

Calculating Word Frequencies: Once the text file is fetched, the component parses the contents and calculates the frequency of occurrence of each word. It uses a simple word-splitting technique and counts the occurrences of each word using an object.

Displaying Histogram: The component displays the top 20 most occurring words in a histogram. The histogram is created using the recharts library, which provides a BarChart component. The X-axis represents the words, and the Y-axis represents the frequency of occurrence.

Exporting CSV: The component includes an "Export" button that allows the user to download the histogram data as a CSV file. When the button is clicked, the component generates a CSV string from the histogram data and saves it as a file using the file-saver library.

### Dependencies

The Wordfrequency component relies on the following external dependencies:

React: The component is built using React, a popular JavaScript library for building user interfaces.

Recharts: Recharts is a charting library built on top of React components. It is used to create the histogram visualization.

FileSaver.js: FileSaver.js is a client-side file-saving library. It is used to download the histogram data as a CSV file.

Make sure to include these dependencies in your project by installing them via npm or yarn.

Note: Don't forget to include the necessary import statements for the required libraries in your project.

## Features

Fetches the contents of a text file and calculates word frequencies
Displays the top 20 most occurring words in a histogram
Allows exporting the histogram data as a CSV file

## Installation

### Prerequisites

Node.js: Make sure Node.js is installed on your machine

#### Steps

Clone the repository:

`git clone https://github.com/amiyaranjan-tech/word-frequency-counter.git`

Navigate to the project directory:

`cd word-frequency-counter`

Install the dependencies:

`npm install`

## Usage

Start the development server:

`npm start`

Open your web browser and visit http://localhost:3000 to access the application.

Click the Submit button to fetch the contents of the text file and calculate the word frequencies.

The top 20 most occurring words will be displayed in a histogram.

Click the Export button to download a CSV file containing the histogram data.

## Acknowledgements

Recharts Documentation

FileSaver.js Documentation

Create React App

