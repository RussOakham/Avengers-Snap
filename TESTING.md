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
To test the responsiveness of the site I used [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools), [Responsive Design Checker](https://www.responsivedesignchecker.com/) and [BrowserStack](https://www.browserstack.com/).

### Responsiveness

### Browser Compatibility

## Testing User Stories

## Issues I had to overcome

- **Modal loading on page load**:

- **Modal close on difficulty choice**:

- **Safari - Marvel Character images disappearing on page flip**:

- **Volume slider move with Mute/Unmute**:

- **Populate Cards on difficulty choice**:

- **Adding difficulty buttons to Congratulations modal and launching game":

- **Make Cards uninteractive once matched**:

## Issues still to overcome

- **Toggle Sound Mute On/Off when volume slider set to/from Zero**: