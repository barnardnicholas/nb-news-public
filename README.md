# NC News

### A responsive web app demonstration by Nick Barnard

> PLEASE NOTE: NC News is not a real news site, but a demonstration of front-end web development, written from scratch over one week. The articles, users and comments featured here are placeholders only and do not necessarily represent the thoughts or feelings of actual human users. For now, NC News is optimised for Google Chrome browser, and some features may not work well on other browsers. This is purely due to the time constraints of the project, and this may be updated in the near future.

Welcome to NC News! I tried to design the site to capture the spirit of old IBM terminal interfaces in the early 1980s. Please take a few minutes navigate around the site and explore. If you find the look of the interface uncomfortable or less-than ideal in some way, simply navigate to the Options page, where you will find controls to alter the look of the site and disable some of the video effects.

## Instructions

Please feel free to clone the project from GitHub to your local machine and test the functionality locally. Ensure that git is installed on your computer, navigate to the folder where you would like the project folder to be placed and type the following command into Terminal:

```
git clone https://github.com/barnardnicholas/nb-news-public.git
```

Then navigate into the 'nb-news-public' folder and run the commands:

```
npm install
npm start
```

The local react server should start and the project should appear in your browser. Feel free to browse the code, starting with src/app.js

## User functionality

Unfortunately, NC News does not currently support the creating of secure user accounts. The user functionality you see here is a demonstration of how such a feature might look, were it to implemented. By default you will be logged in as the user 'weegembump'. As weegembump, you can post comments and likes, and also delete your own comments. A user icon on the nav bar will remind you of your current user. If you wish to switch user, simply go to the options page and type the name of another user into the text box under 'User Settings'. Try 'jessjelly' or 'grumpy19', for example.

## Using the Backend

The web app you see here was designed to make use of the NC News Backend server, which I also wrote from scratch in a week (although not the same week!) If you'd like to try the public-facing API for the backend yourself, go to [https://be-nb-news.herokuapp.com/api](https://be-nb-news.herokuapp.com/api) to see a list of endpoints. You can also check out the github page at [https://github.com/barnardnicholas/be-nc-news.git](https://github.com/barnardnicholas/be-nc-news.git)

## Acknowledgements

Many thanks to the staff and students at Northcoders Manchester for their support and companionship during the construction of this project.

Many thanks also to Andrew Tyler ([www.AndrewTyler.net](www.AndrewTyler.net)),
Rob Meek ([https://fontstruct.com/fontstructions/show/1238305](https://fontstruct.com/fontstructions/show/1238305)), and the talented font creators at [pheist.net](https://https://pheist.net/), whose work you see put to use on this page.
