# Starter Project for Sass/Compass/Bootstrap

This startup project is based on [Responsive CSS with Sass and Compass with Ray Villalobos](http://www.lynda.com/CSS-tutorials/Responsive-CSS-Sass-Compass/140777-2.html).

I've added [bootstrap-sass](https://github.com/twbs/bootstrap-sass) and a script.js starter file.

### Getting Started

* Clone the repo
* Rename the folder whatever you want
* Open `package.json` and change `"name" :` to the name of your project
* In Terminal (Mac), type `npm install` (You must have Node.js installed.)
* Open the index file in Chrome
* In Terminal (Mac), type `grunt` - it should report `Running "watch" task` and `Waiting...`
* When you make and edit to a `.scss` or `.js` file in the `components` folder, Chrome should reload your page and you'll see the change

### Customizing Bootstrap

You can also customize which Bootstrap modules are included:

* Customize the Bootstrap JS modules by adding/removing them from the `/js/bootstrap` folder. 
* Customize the Bootstrap CSS modules by adding/removing the from the `/sass/bootstrap/_bootstrap-custom.scss` folder.
* Override Bootstrap variables in `/sass/bootstrap/_bootstrap-variables.scss`.

> Be warned, this is as of yet untested!