# D5 Tutorial Module Conversion

## About this repository
This repository contains a Divi extension used as an example for the [tutorial of Module Conversion from Divi 4 to Divi 5](https://devalpha.elegantthemes.com/docs/category/converting-divi-4-module-to-divi-5).

## Getting Started

### Prerequisites
- Node.js (at least version 18)
- npm (Node Package Manager)
- Composer (PHP Dependency Manager)

### Installation

1. In your WordPress website plugin folder, clone the repository:
    ```sh
    git clone https://github.com/your-repo/d5-tutorial-module-conversion.git
    cd d5-tutorial-module-conversion
    ```

2. Install Node.js dependencies:
    ```sh
    cd divi-4/visual-builder
    npm install
    ```
    ```sh
    cd divi-5/visual-builder
    npm install
    ```

3. Install PHP dependencies:
    ```sh
    cd divi-5
    composer install
    ```
## Example Modules
This plugin have two main folder `divi-4` and `divi-5` each has two example modules.
1. **Static Module** - Simple static module like Blurb module.
2. **Dynamic Module** - Dynamic module like Blog module.

### Commands

#### Development

- **Start Development Server for Divi 4:**
    ```sh
    cd divi-4/visual-builder
    npm run start
    ```
    This command starts the Webpack development server for Divi 4, which watches for changes and rebuilds the project automatically.

- **Start Development Server for Divi 5:**
    ```sh
    cd divi-5/visual-builder
    npm run start
    ```
    This command starts the Webpack development server for Divi 5, which watches for changes and rebuilds the project automatically.

#### Production

- **Build for Production (Divi 4):**
    ```sh
    cd divi-4/visual-builder
    npm run build
    ```
    This command builds the project for production, optimizing the output for performance.

- **Build for Production (Divi 5):**
    ```sh
    cd divi-5/visual-builder
    npm run build
    ```
    This command builds the project for production, optimizing the output for performance.

### Usage

1. Activate the plugin in your WordPress installation.
2. Use the Divi Builder to add and configure the modules provided by this extension.

For more detailed instructions, refer to the [tutorial of Module Conversion from Divi 4 to Divi 5](https://devalpha.elegantthemes.com/docs/category/converting-divi-4-module-to-divi-5).