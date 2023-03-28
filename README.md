<!-- We all know we need to navigate on different web pages to get different information (Home / About / Contact-us etc.).
But sometimes this can be tedious because it may require refreshing the page which may involve loading new as well as old contents.

React Router is a package for React Applications that allows us to build a single-page web application with navigation.

A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the webserver, instead of the default method of the browser loading entire new pages.

Think of the apps you use daily: Facebook, Google Maps, Gmail, Twitter, Google Drive, or even GitHub. All these are examples of a SPA.
Remember that SPA stands for Single Page Application.

Acceptance Criteria:
Create a react application and add Navigation feature to it.
Your app should have two routes: / and /about
Default route should be / (home page)

On /, users should be able to see You are home. Note: other contents can be there but this must.

On /about, users should be able to see You are on the about page. Note: other contents can be there but this must.

Create two anchors <a>: Home and About

When About is clicked, users should go to /about

When Home is clicked, users should go to /

If the user goes to any other path, display 'No match' on screen.

User should be able to go back and forth with back/forward buttons provided by the browser.

Import all your components in App.js and then export them from there. Assume that test files are importing all components from App.js file. Default export the App component.

Component App is your compelete Application.

Component LocationDisplay should display your current location pathname in DOM. Like if user is on route /, LocationDisplay should render / on screen or if user is on route '/any-route', LocationDisplay should render /any-route with attribute data-testid="location-display".


Hint: useLocation() -->