# Elite Gaming Tablet

A modern and efficient web application built with Next.js.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Project Description

**Purpose:** The purpose of this project is to develop a tablet-based rewards program for a gaming or entertainment establishment. The system will allow customers to check-in for the rewards program or sign up as new members. The project includes several additional features to enhance the customer experience and provide valuable functionality.

**Check-In and Rewards Accumulation:** When customers first interact with the tablet, they will be presented with two options: to check-in for the rewards program or sign up. If they choose to check-in, they will be prompted to enter their phone number. If they have already signed up, they will see their accumulated points, eligible rewards, and potential rewards based on the required points. There will also be an option to send their points summary to their email address. Accumulating points will only be possible through the check-in process. If a customer has not signed up, they will be notified that they are not in the system and prompted to sign up.

**Sign-Up Process:** If customers choose to sign up, they will be prompted to enter their email address, phone number, name, and birthday. However, only the phone number and birthday will be required fields for signing up. Other information will be optional. After entering their birthday, the system will verify if the customer is at least 21 years old. If not, they will be restricted from signing up for the loyalty program. Once signed up, customers will be rewarded with points for checking in.

**Bilingual Option:** The tablet application will provide a bilingual option, allowing customers to switch between English and Spanish languages. When the Spanish button is selected, the entire interface will be translated into Spanish, including the check-in, sign-up process, and subsequent screens. This feature aims to cater to a wider customer base and provide a personalized experience based on language preference.

**Screen Timeout and Inactivity:** To manage screen timeout and customer inactivity, a timer will be implemented. After 15 seconds of inactivity on the check-in or sign-up page, a pop-up box will appear, asking customers if they need more time. The pop-up will provide Yes/No options and display a 30-second timer. If the customer selects Yes, the prompt will disappear until another 15 seconds of inactivity. If the customer selects No, the screen will revert back to the check-in page. If no action is taken, the screen will automatically revert back to the login page once the timer ends. This feature ensures efficient use of the tablet and prevents prolonged inactivity.

The tablet-based rewards program will enhance customer engagement, promote customer loyalty, and provide valuable insights for the gaming or entertainment establishment.

## Features

- Next.js for Static Site Generator
- Integrate with MUI 5.0
- Type checking TypeScript
- Strict Mode for TypeScript and React 18
- Linter with ESLint
- Code Formatter with Prettier
- Husky for Git Hooks
- Lint-staged for running linters on Git staged files
- Hot module replacement (HMR) for instant updates during development.

## Installation

1. Start by cloning the repository:

   ```bash
   git clone https://github.com/gate4devs/fe_elite_gaming_midwest_tablet.git

   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   #or
   yarn dev
   ```

## Usage

- Run the development server: `npm run dev #or yarn dev`
- Open your browser and visit: `http://localhost:3000`

## Deployment

To deploy the application to a production environment, follow these steps:

- Build the production-ready code: `npm run build`
- Deploy the app using github action to AWS S3

## Contributing

- Fork the repository on GitHub.
- Clone your forked repository to your local machine.
- Create a new branch for your feature or bug fix.
- Make the necessary changes in your branch.
- Commit your changes with descriptive commit messages.
- Push your changes to your forked repository.
- Submit a pull request to the main repository.
- Please make sure to follow our code style guidelines and provide tests for your contributions if applicable.

## License

The Elite Gaming Tablet project is licensed under the [MIT License](https://opensource.org/license/mit/).
