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
        - **macOS**: Ruby is pre-installed on macOS. You can check the version by running:
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

5. **Install image optimization binaries**: Ensure you have the necessary binaries for image optimization:
    - **macOS**: You can use Homebrew to install the binaries:
        ```sh
        brew install jpegoptim optipng
        ```
    - **Windows**: You can download and install the binaries from their respective websites.
    - **Linux**: Use your package manager to install the binaries. For example, on Ubuntu:
        ```sh
        sudo apt-get install jpegoptim optipng
        ```

6. **Navigate to the project directory**: Open your terminal and navigate to the project directory:
    ```sh
    cd /Users/andy/Documents/Code/character-creator
    ```

7. **Install npm dependencies**: Run the following command to install the necessary npm dependencies:
    ```sh
    npm install
    ```

8. **Install Bower dependencies**: Run the following command to install the necessary Bower dependencies:
    ```sh
    bower install
    ```

9. **Run the Grunt server**: Start the Grunt server to serve the application:
    ```sh
    grunt serve
    ```

10. **Open the app in your browser**: The app should automatically open in your default web browser. If it doesn't, open your browser and navigate to `http://localhost:9000`.

## Deploying to Netlify

1. **Create a `netlify.toml` file**: Add a `netlify.toml` file to specify the build commands and environment setup.

    ```toml
    [build]
      command = "npm run build"
      publish = "dist"

    [build.environment]
      RUBY_VERSION = "2.7.2"

    [context.production.environment]
      RUBY_VERSION = "2.7.2"

    [context.deploy-preview.environment]
      RUBY_VERSION = "2.7.2"

    [context.branch-deploy.environment]
      RUBY_VERSION = "2.7.2"

    [context.next.environment]
      RUBY_VERSION = "2.7.2"
    ```

2. **Update the `package.json`**: Ensure the `package.json` includes a build script that installs Compass and runs the Grunt build.

    ```json
    {
      "name": "restart",
      "version": "0.0.0",
      "scripts": {
        "build": "gem install compass && grunt build"
      },
      "devDependencies": {
        "grunt": "^0.4.5",
        "grunt-autoprefixer": "~0.5.0",
        "grunt-bower-install": "~0.7.0",
        "grunt-concurrent": "~0.4.0",
        "grunt-contrib-clean": "~0.5.0",
        "grunt-contrib-compass": "~0.7.0",
        "grunt-contrib-concat": "^0.5.1",
        "grunt-contrib-connect": "~0.5.0",
        "grunt-contrib-copy": "~0.4.1",
        "grunt-contrib-cssmin": "^0.12.2",
        "grunt-contrib-htmlmin": "~0.1.3",
        "grunt-contrib-imagemin": "^3.1.0",
        "grunt-contrib-jshint": "~0.7.0",
        "grunt-contrib-uglify": "^0.9.1",
        "grunt-contrib-watch": "~0.5.2",
        "grunt-filerev": "^2.3.0",
        "grunt-mocha": "^1.0.4",
        "grunt-modernizr": "~0.4.0",
        "grunt-newer": "~0.6.0",
        "grunt-rev": "~0.1.0",
        "grunt-svgmin": "~0.2.0",
        "grunt-usemin": "~2.0.0",
        "grunt-cli": "^1.4.3",
        "jshint-stylish": "~0.1.3",
        "load-grunt-tasks": "~0.2.0",
        "time-grunt": "~0.2.0",
        "lodash": "^4.17.21"
      },
      "engines": {
        "node": ">=0.8.0"
      }
    }
    ```

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

- **Image optimization binaries not found**: Ensure the necessary binaries for image optimization are installed:
    - **macOS**:
        ```sh
        brew install jpegoptim optipng
        ```
    - **Windows**: Download and install the binaries from their respective websites.
    - **Linux**:
        ```sh
        sudo apt-get install jpegoptim optipng
        ```

- **Imagemin task errors**: If you encounter errors with the `imagemin` task, you can use the `--force` flag to continue the build process:
    ```sh
    grunt build --force
    ```
