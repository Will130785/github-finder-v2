GitHub Finder · 

A github profile search application that allows the user to type in a username and find a profile along with repos to match the input.
    
Packages used:
Parcel
Babel
Sass

Prerequisites

Dev dependencies:
@babel/core -v 7.9.6
@babel/plugin-transform-runtime -v 7.9.6
@babel/runtime-corejs2 -v 7.9.6
parcel-bundler -v 1.12.4
sass -v 1.26.5

Here's a brief intro about what a developer must do in order to start developing the project further:

git clone https://github.com/Will130785/github-finder-v2
cd github-finder-v2/
npm install

Scripts

"dev": "rm -rf ./development && rm -rf ./.cache && parcel public/index.html --out-dir development -p 3000",
"build": "parcel build public/index.html --out-dir dist --public-url ./"


Api Reference

GitHub API

https://developer.github.com/v3/guides/getting-started/
