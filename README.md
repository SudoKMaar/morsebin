# MorseBin - Morse Code and Binary Converter

MorseBin is a web application that allows users to convert text to Morse code and binary, and vice versa. The app provides an easy-to-use interface to enter text, convert it to the desired format, and view the converted output. It is built using React and utilizes React Router for navigation.

## Demo

You can find a live demo of morsebin at [MorseBin](https://morsebin.netlify.app)

## Features

- Convert text to Morse code and binary, and vice versa.
- Simple and intuitive user interface.
- Real-time conversion with immediate output updates.
- Easy navigation between Morse code and binary conversion modes.
- Download converted text as a text file.

## Tech Stack

- React: A JavaScript library for building user interfaces.
- React Router: A routing library for React applications, used for navigation.
- HTML and CSS: Markup and styling for the user interface.
- TypeScript: The primary programming language used for logic and functionality.

## Installation

To run the morsebin app locally, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/SudoKMaar/morsebin.git
cd morsebin
```

2. Install the required dependencies using npm or yarn:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app should now be running at [http://localhost:3000](http://localhost:3000).

## Usage

1. Launch the morsebin app in your web browser.
2. The main page will show two buttons: "Binary" and "Morse."
3. Click on the "Binary" button to access the Binary Converter.
4. In the Binary Converter, enter your text in the input area.
5. Click the "Convert" button to convert the text to binary.
6. The binary representation will be displayed in the output area.
7. To convert the binary back to text, click on the "Swap" button.
8. Click the "Convert" button again to get the original text back.

![Binary Converter](https://github.com/SudoKMaar/morsebin/blob/main/images/binary-scrrenshot.png)

9. Click on the "Morse" button to access the Morse Code Converter.
10. In the Morse Code Converter, follow the same steps as in the Binary Converter.
11. Enter your text in the input area and click the "Convert" button.
12. The Morse code representation will be displayed in the output area.
13. To convert the Morse code back to text, click on the "Swap" button.
14. Click the "Convert" button again to get the original text back.

![Morse Code Converter](https://github.com/SudoKMaar/morsebin/blob/main/images/morse-screenshot.png)

15. Use the "Clear" button to clear the input and output areas.
16. To export the converted text, click on the "Export" button.
17. A text file named "converted_text.txt" will be downloaded.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please create an issue or submit a pull request. Please make sure to follow the code style and include tests if applicable.

## License

MorseBin is open-source software licensed under the [MIT License](https://opensource.org/licenses/MIT).
