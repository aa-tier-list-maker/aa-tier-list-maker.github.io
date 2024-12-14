# Octopath Tier List Maker

This is a fork from https://github.com/fe-tier-list-maker/fe-tier-list-maker.github.io which was forked from https://github.com/quetzle/smash-apps

This is a tier list maker primarily for characters in the Octopath series, ranging from Octopath 1, 2 and Champions of the Continent. It has also been expanded with additional options like the Team Asano gamelist and the rare monsters. Images used are property of Square Enix.

Please review the [contribution guide](https://github.com/octopath-tier-list-maker/octopath-tier-list-maker.github.io/blob/master/CONTRIBUTING.md) if you want to add/modify portraits or functionality.

## How to make your own Tier List Maker

It took me a many hours to understand the logic of the project, but did genuinely saw a lot of potential in how it was built. That's why I would love to see more franchises going more grassroots and start their own tier list maker project, like I have for Octopath Traveler. Seeing how the original source material was lacking in an explanation of the structure of the project, I shall explain the following so that (hopefully) everyone should be able to pick this up as quickly as possible:

The structure is as followed:
- Folder = **editableJs**: you will be updating the content of this folder a lot, so it's pleasant to have these js files be separate from the others that you won't touch.
    - **common.js**: primarily used to update the list of games that can be shown. variable ``imgGamesFolder`` has three values per game; the name of the folder that has all the images in the ``img`` folder, the amount of images it has and the name that users will be able to read on the website.
    - **tags.js**: mostly optional, but can be used for filtering purposes, as the code supports this. in const ``imgTags``, you can give characters from individual games the established tags. The int at the beginning has to match with the number of the image that has been given in the ``img/[game]`` folder.
- Folder = **img**: Relatively simple in the way it's set. You create a parent folder (f.e. the franchise) and then create individual folders per game in which you can put the characters. These images do have to be numbered so that the code can find and tag them properly. Don't forget to add these folders to the ``common.js`` file.
- Folder = **lib**: Contains the libraries used in the project and are not required for the project to work on other games. However, in ``toolcommon.js``, you can change the default game when the page is loaded if desired so.
- Folder = **nav**: Contains more libraries that are not relevant for the project as is.
- **index.html**: Contains the page information. The information that needs to be changed for other projects is within the ``<head>`` tag. This tag contains information like the link preview description and image used. It also contains the page title and icon information. Change the urls where neccesary and update the images in the ``img`` folder to your game to make it more accurate to what your franchise represents.

## Small notice
The original Fire Emblem fork also contained many more functionalities that might pique the interest of some people. This includes charts and venn diagrams for the characters. They have been ommitted from this project out of simplicity, but please consider taking a look at https://github.com/fe-tier-list-maker/fe-tier-list-maker.github.io if you want to know more.

## Wishes to add or improve:
- More filter options