# Dream Destination

## By Stephen Whittington

Dream Destination is an Interactive single webpage application,
calling on the google maps/places API built for user purpose to find
their next holiday destination along with information about accommodation bars/restaurants and tourist
attractions from the selected city. The webpage has a simple layout for the user to
navigate and is responsive on mobile and desktop.

## UX Process For My Website

[Link to my figma mockup](https://github.com/StephenWhittington/Dream-Destination/blob/master/assets/images/Dream%20Destination%20API%20(1).png)

I started with a desktop webpage mockup using figma, I wanted the webpage to be easy to use
and not confusing with a simple layout. Because it is a single page application
it needed to be clear for the user to navigate and get the correct information from
their search. For example I started with a modal button for my page but found it made
things a little confusing for the user and by removing it made the page more understandable.

This webpage helps the user achieve their goal with its simple layout,navigation
and Interactive map where they can select the destination and get detailed results back
with pictures. The user wants to get information quickly with little effort and this webpage
helps them achieve that goal.

### User Stories

#### **list of user stories.**

* **Select a destination city**: The user clicks on the 'Where to?' autocomplete search bar and starts typing
 a letter, the autocomplete result will return suggestions in a dropdown. They can either type a full name of a location
or just select from the drop down menue when they have typed in enough information for it to appear in the dropdown.

* **Select a category result**: After selecting a city the user clicks on the category dropdown and selects an option from the list
and results are shown on the map.

* **To use map zoom feature**: The user can select the zoom feature in the bottom right of the map or use `Ctrl` + `Mouse Scroll` to zoom
in and out of the map.

* **Use the results list**: The user can select one of the results from the list and it will scroll up to the map
with the Info window information displayed.

* **Select Infowindow result**: When the user clicks on a result from either the map marker or result list pictures will be displayed
of the place they have selected under the map a maximum of three pictures are shown.

# Features 

## Existing Features

* **Carousel Pictures** - A five picture carousel of recommended cities that the user can navigate through by clicking or waiting.

* **Go Button** - Allows desktop users by clicking to scroll to the map to start their search.

* **Auto Scroll Autocomplete** - After the user selects a city from the autocomplete search bar the page scrolls down to 
the results with tourist attractions selected.

* **Autocomplete Search Bar** - Allows the user to search for specific cities and locations quicker, as suggestions
appear in the dropdown based on the information they have entered. When the user has typed enough into the search bar the city or location
they are looking for should appear.

* **Select Catagory Dropdown** - After selecting a location clicking the catagory dropdown allows the user to select an option of 
accommodation/bars/restaurants or tourist attractions.

* **Reset Button** - Allows the user to reset the current information entered in the autocomplete search bar and the catagory option 
dropdown by clicking on it, The button changes everything back to defualt including the map zoom/center position.

* **Make Another Search Button** - When the uses clicks this button it takes them back to the top of the page to change their search.

* **Infowindow Map Result** - When clicked the infowindow shows the address, phone number, rating and website by selecting one of the placed
marker results.

* **Result List** - Allows the user to click one of the results which then scrolls up to find the infowindow opened.

* **Pictures Of Places** - When the user has selected a result either from the map markers or result list one picture is displayed wth the place name,address,phone number
and website. Then underneath 6 more pictures of the place are shown.

## Features Left To Implement 

* Adding city result pictures under the map along with information on them.

* More search options in catagory dropdown.

* Adding an option for the user to select packages from sponsors.

# Technologies Used

* [HTML5](https://en.wikipedia.org/wiki/HTML5)
  
    * The website uses Semantic Markup Language as its foundation.   

* [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

    * The website uses Cascading Style Sheets to implement design and customization.

* [jQuery](https://jquery.com/)

    * The website uses JQuery The Document Object Model (DOM) to simplify manipulation.

* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
 
    * I have used JavaScript to add my own interactivity to the site, I used it to code my map and link it to the autocomplete search bar
    and catagory dropdown menue. Also to select callback arrays from the Google Maps/Places results, and to have buttons/results scroll to the map
    to start,reset or view infowindow information. I also used it to hide different HTML elements that didn't need to be shown unless selected by the user.

* [Bootstrap v4](https://getbootstrap.com/)

    * This website uses bootstrap, To add HTML and CSS-based templates for typography,forms,buttons,navigation and other interface components.

* [Font Awesome](https://fontawesome.com/)
    
    * The website uses fontawesome, Because icons are a visual way to help add meaning to elements. And specific font styles add customization to web content.
    
* [Google Maps and Places API](https://cloud.google.com/maps-platform/)
    
    * The website uses the Google Maps API and the Google Places API to allow users to interact and search using a map.

# Testing 

### User Story Tests Completed

1. **Autocomplete Search**:
    1.  Type in information of a city.
    2.  A dropdown list appears with matching results to information entered.
    3.  Confirmed that the user can select a result from the list and it scrolls to the map.

1. **Select A Option From The Category Dropdown**:
    1. Select a different option from the list.
    2. The results update on the map.
    3. Confirmed that the results change when the user selects a different option.

1. **Reset Button**:
    1. Click on the reset button.
    2. The autocomplete search bar resets and so does the catagory dropdown menue.
    3. The map resets to default and some HTML elements are also hidden again until used.
    4. Confirmed that everything is changed back to default when the user clicks on the reset button.

1. **Infowindow Place Marker**:
    1. Click on a marker result.
    2. An infowindow appears with information about the selected place.
    3. Click the 'X' button to close the infowindow or click on another marker to close it.
    4. Confirmed that if the user selects a marker result an infowindow appears and can be closed manually or by selecting another option.

1. **Map Zoom Feature**:
    1. Click on the '+' '-' keys and it zooms in or out
    2. Or use 'Ctrl' + 'MouseScroll' to scroll in and out
    3. Confirmed that the user can scroll in and out of the map by clicking on the interactive option on the map or by using key/mouse shortcuts.

1. **Results List**:
    1. When information is entered the result list updates with the map changes.
    2. When a result is clicked on the list it scrolls up to the map and is displayed.
    3. Confirmed that when the user selects a result from the list it scrolls up to the map and information is displayed.

1. **Pictures/Info Displayed**:
    1. When a marker is selected from the map or a result is clicked on from the result table.
    2. Pictures are displayed under the map of the selected marker/result.
    3. Confirmed that when the user clicks on a marker on the map or the result table pictures are shown under the map with
    place information.


### How it works on different browsers and screen sizes

I have tested my project on different screen sizes and i am happy with how it works from desktop to mobile first. After going
over my project i have noticed some things that i will change for the better like the start search button. I will hide it on mobile
with a media querie, but have it for desktop so the user can scroll straight to the map so they can start their search. I tested my
web page on the three main web browsers Chrome/IE and Mozilla FireFox and it works correctly on all of them, I also had family and friends
test my page to find any bugs or problems which helped with noticing different issues and things to fix. Overall i am happy of how my single
webpage application works on mobile,tablet and desktop screen sizes.

## Bugs And Problems

There are few noticeable minor bugs and problems that i have found with my project when the user selects a place from the results
the place-info ID shows undefined if there is no address,phone number or website.

    * This minor issue could be fixed with an if statement to not show the results if they are not available.
    
Another bug i noticed was `Uncaught (in promise) TypeError: Cannot read property 'location' of undefined` in my javascript.
When i try to change this the map appears to be in a different place when the page first loads from what i have set it too, but if
you make a search and then reset the map is back to my default setting.

    * Although trying to figure out a fix for this bug i haven't been able to do so far, but the map works with the error.

## Compatibility

To make sure users have a broad range of accessibility, i have tested my project on 3 major browsers in both desktop and mobile size.

* Chrome
* Mozilla Firefox
* Internet Explorer

    
## Testing my code via validation

I ran all my code through both a CSS/HTML5 and JShint validator i had a few errors but my page works regardless of them. 
I understand that these errors can be fixed, But do not make my project unviewable.

* **index.html** -  I ran this page through [https://validator.w3.org/](https://validator.w3.org/) and encounterd 9 errors and 3 warnings.
* **style.css** -  I ran my code through [https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/) and had 0 errors.
* **JShint.com** - I ran my javascript code through this test [https://jshint.com/](https://jshint.com/) and got ten warnings and three undefined variables i can confirm
                   that my code passed with no major issues.


# Deployment

My deployment and source code was all done via GitHub, You can find my repository here:
    
   * **Repository**:[https://github.com/StephenWhittington/Dream-Destination](https://github.com/StephenWhittington/Dream-Destination)

I have uploaded the source code using the master branch to **GitHub Pages**, to do this i went to settings in my repository
and scrolled down to the GitHub Pages section where i changed the option to master branch.

The live version of my site can be found here:
    
   * **Github Pages**:[https://stephenwhittington.github.io/Dream-Destination/](https://stephenwhittington.github.io/Dream-Destination/) 
    

Developers can also download and work on my project by selecting the clone with **HTTPS** or **dowload ZIP** option from my repository, You can then
use git clone and then link my project to start making any changes to the site.

I can confirm that there are no differences from the deployed and the development version.

# Credits
 
 **Content**
 
 In this project i used a lot of google maps api guide code and altered it to my own, Along with bootstrap
 example being the carousel. For CSS styling i spent time in the dev tools trying out different things that would suit
 my project and then added them into my styling after. A lot of research into javascript was spent on this project and
 any problems i had i went to slack, tutor support or search for answers myself.
 
 **Media**
 
 * The none google place api images used in this project inside the caraousel and background used in my site, are royalty free
 and only for educational purposes only and can be found [https://pixabay.com/](https://pixabay.com/).

 **Acknowledgements**

I received inspiration from the google place api [https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch](Places-autocomplete-hotelsearch)
which i then added too with my own ideas, and also looking at other search engine sites such as trip advisor and more.
The further i got with my project the more inspiration i gained with finding the google places api fun and engaging.

A huge thanks to my mentor Ignatius Ukwuoma for his time, suggestions, and constructive feedback for this project!

