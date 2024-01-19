# Portfolio

![Portfolio Logo](<add logo URL here if applicable>)

## Introduction

**Portfolio** is a configurable personal website template designed for minimalists. It provides a clean and visually appealing platform to showcase your professional profile, projects, and custom sections. This template is built using React and incorporates various libraries to enhance its functionality and visual appeal.

## Table of Contents

- [Portfolio](#portfolio)
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [Set Up](#set-up)
  - [Usage](#usage)
  - [Configuration](#configuration)
  - [Deploying / Building](#deploying--building)
  - [Scripts](#scripts)
  - [Dependencies](#dependencies)
  - [License](#license)
  - [Author](#author)

## Set Up

To set up **Portfolio**, you'll need [Node.js](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads). Follow these steps:

1. Clone the project:

   ```sh
   git clone https://github.com/realVibhorGupta/portfolio.git
   ```

2. Move into the directory containing the cloned project:

   ```sh
   cd portfolio
   ```

3. Install dependencies using npm:

   ```sh
   npm install
   ```

## Usage

Open the command line or terminal and run the following command to start a development version of the project:

```sh
npm run start
```

Access the application at [http://localhost:3000](http://localhost:3000).

## Configuration

**Portfolio** is easily configurable to personalize your website. All the configurable options are located inside [src/config/index.js](src/config/index.js). The configuration includes:

1. **CommonConfig**: Contains common profile configuration, including your name, social links, and the path to draw the signature.

2. **ProjectsConfig**: Contains information for the projects section. Add your projects, provide links, and customize icons.

3. **CustomSectionsConfig**: An array supporting any number of custom sections. Define sections like "Work," "Reviews," or "Portfolio." The "content" property supports JSX for flexible styling.

## Deploying / Building

While in the root directory of the project, run the following command to build the application:

```sh
npm run build
```

This will place the built application in the `./build` directory, ready to be deployed to a server.

## Scripts

- **start**: Starts the development server using `react-scripts`.
- **build**: Builds the application using `react-scripts`.
- **test**: Runs tests using `react-scripts test`.
- **eject**: Ejects the project from `react-scripts`.

## Dependencies

- **@material-ui/core**: v4.12.3
- **@material-ui/icons**: v4.11.2
- **@splitbee/web**: v0.3.0
- **react**: v17.0.2
- **react-dom**: v17.0.2
- **react-scripts**: v5.0.1
- **sass**: v1.42.1

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Author

**Vibhor Gupta**
- Email: [vibhor.88.gupta@gmail.com](mailto:vibhor.88.gupta@gmail.com)
- GitHub: [realVibhrGupta](https://github.com/realVibhrGupta)