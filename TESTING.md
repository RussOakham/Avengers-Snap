# <p align="center">Avengers Snap</p>

## Validation

### W3 HTML
I validated the HTML with [W3 Validation Service](https://validator.w3.org/). The results can be seen below;
 - [index](design-resources/images/index-html-warnings.PNG)
 - [avengers](design-resources/images/avengers-html-warnings.PNG)

 **Warnings**
    The index form showed an error for a empty "<meta name=""> value. I corrected this by adding meta description, author and keywords for both html pages.
    All pages showed warnings regarding HTML semantics and use H2-6's in sections, however upon review I am happy that all headings are relevant for page layout. So I decided not to enact any changes.

### W3 CSS 
I validated the CSS with the [w3 Validation Service](https://jigsaw.w3.org/css-validator/) and it found no errors.
 - [CSS validation](design-resources/images/css-validator-result.PNG)

### JavaScript 
I validated the JavaScript with [JSHint](https://jshint.com/), which returned on minor syntax errors, such as missing semi-colons, which I proceeded to update.
 - [script.js](design-resources/images/JSHint-script-js-result.PNG)
 - [modals.js](design-resources/images/JSHint-modals-js-result.PNG)
 - [audio.js](design-resources/images/JSHint-audio-js-result.PNG)
 
 All three tests showed inaccurate issues with undefined and unused variables, as the variables are used in the other JavaScript files.

### Google Lighthouse Audit
I used Google's lighthouse audiot to test the website conforms positively with Google's performance metrics, with the aim of achieveing scores of 90% in all areas on desktop.

![Google Lighthouse Audit Score](design-resources/images/google-lighthouse-report-score.PNG)

After initial testing, all metrics were above 90% with the exception of performance, which has a score of 75%. However after inspecting the main reasons for this, I chose not to enact any fixes for the following reasons;

![Google Lighthouse Performance Score](design-resources/images/google-performance-score.PNG)

- **Eliminate render-blocking resources**: The resources slowing load speed are all bootstrap and core scripts, which are required for the website to function properly. Therefore can not be removed or deferred from load.
- **Serve Static Assets with an efficient cache policy**: Changing cache policy requires server side configuration, which is not possible while using GitPages for deployment hosting.

## Responsive Browser & Device Testing
To test the responsiveness of the site I used [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools), [Responsive Design Checker](https://www.responsivedesignchecker.com/) and [Lambdatest](https://app.lambdatest.com/).

### Responsiveness
![Desktop Responsiveness](design-resources/images/desktop-responsive-testing.PNG)

![Tablet Responsiveness](design-resources/images/tablet-responsive-testing.PNG)

![Mobile Responsiveness](design-resources/images/mobile-responsive-testing.PNG)

To ensure responsive I used bootstrap, flexbox methods and containers to ensure all site pages resized responsively for all device viewports. Additionally for small viewports, I created a media query which resizes the game memory cards to half their desktop size, this is so users do not need to scroll excessively while playing.

### Browser Compatibility
![Browser Compatability](design-resources/images/browser-responsive-testing.PNG)

Through testing I found some bugs on the Safari and Firefox browsers, where the 'hidden' (avenger) side of the playing cards would not display properly once they are flipped. My fix for these issues is documented in the 'Issues I had to overcome' section.

Additionally the site does not load properly while using Internet Explorer, due to issues with bootstrap compatability.

According to [caniuse](https://caniuse.com/usage-table) the current usage of Internet Explorer is just 1.1% or total browser users, therefore I am comfortable to not support IE in the site design.

Note: Microsoft released Internet Explorer in 2013 and ceased active development in 2015, when Microsoft Edge was released as it's replacement, as evidenced by [this article](https://techcommunity.microsoft.com/t5/windows-it-pro-blog/the-perils-of-using-internet-explorer-as-your-default-browser/ba-p/331732) from Microsoft's design team. Since 2015 Microsoft has been actively encouraging users to adopt Edge over Explorer, with the only remaining updates for IE, being security patches and bug fixes.

## Testing User Stories
 - As a curious user, I want the home screen to be visually appealing, as this will positively aid my decision in whether I want to play the game. 
    - When the user is navigating the site, they'll see the game logo and website banner at the top of each page.
    - The site also has a favicon depicting the game logo, that makes the website recognisable while looking at browser tabs and bookmarks.
    - The game uses bright vibrant colours, which will entice possitive emotional response from users. According to this article by [99 Designs](https://99designs.co.uk/blog/tips/how-color-impacts-emotions-and-behaviors/) The use of strong yellow colours should promote users to feel happy and spontaneous, while blue should promote a feeling of safety and relaxation.

 - As a user, I want the site to be easy and intuitive to navigate.
    - On all pages of the website, the simple navigation bar is fixed to the top of the page, which allows easy navigation to all other pages of the website. When scrolling, the navigation bar remains at the top of the viewport, for easy access.

 - As a user, I want to easily access the game, tutorials, difficulty and audio controls for the website.

 - As a user, I want to be able to choose a difficulty level for the game and know how the game changes across difficulty.

 - As a user, I want to be able to restart the game if necessary, without having to navigate away from the game screen.

 - As a user, I want to be able to keep track of the number of moves I make and the time I take to complete the game, so I can try to improve on future plays.
 
 - As a user, I want the cards to be randomised, so the image locations are different with each replay. 


## Issues I had to overcome

- **Modal loading on page load**:

- **Modal close on difficulty choice**:

- **Safari - Marvel Character images disappearing on page flip**:

- **Firefox - backface visibility not showing on card flip**:

- **Volume slider move with Mute/Unmute**:

- **Populate Cards on difficulty choice**:

- **Adding difficulty buttons to Congratulations modal and launching game":

- **Make Cards uninteractive once matched**:

## Issues still to overcome

- **Toggle Sound Mute On/Off when volume slider set to/from Zero**: