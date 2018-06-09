# SeaAHD - Seattle Area Hospital Dashboard
### A tool for quickly comparing key Seattle area hospital quality data

This application is designed to provide hospital administration with a quick overview of the comparative quality of their Seattle-area hospital. Drawing on the [Medicare Complications and Deaths database](https://data.medicare.gov/Hospital-Compare/Complications-and-Deaths-Hospital/ynj2-r877) that provides data like hospital-acquired infection rates, accidental deaths, and treatment errors, it provides simple, dashboard-level metrics without sucking users into the data weeds. Because hospital administrators are already awash in deep-level metrics, its main value to the user is simplicity in providing a gross indicator of comparative quality.

### Dependencies
  * ReactJS - a JS library that provides a framework and engine for the construction and serving of web applications.
  * Axios - a JS library for getting, putting, and setting data via HTTP. Similar to fetch, but with additional transformation capabilitis. Designed for Node.js, but works with React, too. This is how we will get our initial data and set initial states for those data.
  * React Easy Chart - a data visualization library for React. This will be used to produce bar charts comparing data points between hospitals.
  * BrowserRouter - a React router library, allowing users to access otherwise hidden pages or views within an app. For this app, BrowserRouter will be used to alternate between Tab View and  Chart View - see wireframe.
  * A web server. This project will use [Boot Media](https://boot.media), my VPS.
  * The [Medicare Complications and Deaths database](https://data.medicare.gov/Hospital-Compare/Complications-and-Deaths-Hospital/ynj2-r877) API.

### Task List
  * Initialize project in development space using create-react-app. DONE
  * Identify Medicare database endpoints using Data.gov. DONE
  * Download data as CSV and sort by geographical area, noting hospital IDs to be used in the app. DONE
  * Pull initial data set using hospital IDs, set initial states, and render test data using React. IN PROGRESS
  * Create Tab View. IN PROGRESS
  * Create Chart View. IN PROGRESS
  * Buttonize, make it pretty, test responsive elements
  * Publish app on Boot Media
  * User testing
  * UX tweaks
  * Pull request  
  
### Plan
  * June 4 - June 11: use API, ReactJS, and dependencies to test viability of idea, create initial framework and plan for further steps. DONE.
  * June 11 - June 18: using BrowserRouter and Easy Chart, flesh out Tab View and Chart View. Problem: dealing with NaNs, since not all hospitals report all data.
  * June 18 - June 25: testing, UX/UI tweaks, pull request.