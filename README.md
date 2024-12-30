# character-creator
My first completed project.

## Setup and Installation

1. **Install Node.js and npm**: Ensure you have Node.js and npm installed on your machine. You can download and install them from [nodejs.org](https://nodejs.org/).

2. **Install Bower**: Since this project uses Bower for front-end dependencies, you need to install Bower globally if you haven't already:
    ```sh
    npm install -g bower
    ```

3. **Install Grunt CLI globally**: Ensure Grunt CLI is installed globally:
    ```sh
    npm install -g grunt-cli
    ```

4. **Install Ruby and Compass**: Since this project uses Compass, you need to have Ruby and Compass installed:
    - **Install Ruby**:
        - **macOS**: Ruby is pre-installed on macOS. You can check the sversion by running:
            ```sh
            ruby -v
            ```
        - **Windows**: Download and install Ruby from [rubyinstaller.org](https://rubyinstaller.org/).
        - **Linux**: Use your package manager to install Ruby. For example, on Ubuntu:
            ```sh
            sudo apt-get install ruby-full
            ```
    - **Install Compass**:
        ```sh
        gem install compass
        ```

5. **Navigate to the project directory**: Open your terminal and navigate to the project directory:
    ```sh
    cd /Users/andy/Documents/Code/character-creator
    ```

6. **Install npm dependencies**: Run the following command to install the necessary npm dependencies:
    ```sh
    npm install
    ```

7. **Install Bower dependencies**: Run the following command to install the necessary Bower dependencies:
    ```sh
    bower install
    ```

8. **Run the Grunt server**: Start the Grunt server to serve the application:
    ```sh
    grunt serve
    ```

9. **Open the app in your browser**: The app should automatically open in your default web browser. If it doesn't, open your browser and navigate to `http://localhost:9000`.

## Troubleshooting

- **Grunt command not found**: Ensure Grunt CLI is installed globally:
    ```sh
    npm install -g grunt-cli
    ```

- **Ruby and Compass not found**: Ensure Ruby and Compass are installed and added to your system PATH:
    ```sh
    gem install compass
    ```

- **Missing lodash module**: Ensure lodash is installed as a dependency:
    ```sh
    npm install lodash
    ```
