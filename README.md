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

* **Select a destination city**: The user clicks on the 'enter a location' autocomplete search bar and starts typing
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

* **Start Your Search Button** - Allows desktop users by clicking to scroll to the map to start their search.

* **Autocomplete Search Bar** - Allows the user to search for specific cities and locations quicker, as suggestions
appear in the dropdown based on the information they have entered. When the user has typed enough into the search bar the city or location
they are looking for should appear.

* **Select Catagory Dropdown** - After selecting a location clicking the catagory dropdown allows the user to select an option of 
accommodation/bars/restaurants or tourist attractions.

* **Reset Button** - Allows the user to reset the current information entered in the autocomplete search bar and the catagory option 
dropdown by clicking on it, The button changes everything back to defualt including the map zoom/center position.

* **Infowindow Map Result** - When clicked the infowindow shows the address, phone number, rating and website by selecting one of the placed
marker results.

* **Result List** - Allows the user to click one of the results which then scrolls up to find the infowindow opened.

* **Pictures Of Places** - When the user has selected a result either from the map markers or result list a maximum of three
pictures are shown of the relevant place under the map.

## Features Left To Implement 

* Adding city result pictures under the map along with information on them.

* More search options in catagory dropdown.

# Technologies Used

* [HTML5](https://en.wikipedia.org/wiki/HTML5)
  
    * The website uses Semantic Markup Language as its foundation.   

* [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

    * The website uses Cascading Style Sheets to implement design and customization.

* [jQuery](https://jquery.com/)

    * The website uses JQuery The Document Object Model (DOM) to simplify manipulation.

* [Bootstrap v4](https://getbootstrap.com/)

    * This website uses bootstrap, To add HTML and CSS-based templates for typography,forms,buttons,navigation and other interface components.

* [Font Awesome](https://fontawesome.com/)
    
    * The website uses fontawesome, Because icons are a visual way to help add meaning to elements. And specific font styles add customization to web content.
    
* [Google Maps and Places API](https://cloud.google.com/maps-platform/)
    
    * The website uses the Google Maps API and the Google Places API to allow users to interact and search using a map.
