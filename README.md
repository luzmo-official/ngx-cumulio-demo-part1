# Using ngx-cumulio to show a [Cumul.io](https://cumul.io/main) dashboard

![dashboard example](dashboardExample.png)

## [Demo Part 1](https://stackblitz.com/edit/ngx-cumulio-tutorial-part1) | [Code Part 1](https://github.com/cumulio/ngx-cumulio-demo-part1)

# Contents

- [What is ngx-cumulio](#What-is-ngx-cumulio)
- [What we will build](#What-we-will-build)
  - Part 1: display and customize a dashboard
  - Part 2: embed dashboards in a multiple page website
- [Requirements](#Requirements)
- [Part 1 - Embedding a Cumul.io dashboard](#Part-1---Embedding-a-Cumul.io-dashboard)
  - [Setup Angular App](#Setup-Angular-App)
  - [Displaying the dashboard](#Displaying-the-dashboard)
  - [Code](#Code)
- [Conclusion](#Conclusion)

---

## What is ngx-cumulio

ngx-cumulio is an Angular library. With this library you can easily embed one or more Cumul.io dashboards in your web application.  
The library is compatible with versions of Angular 4 and higher.  
For more information about ngx-cumulio, [visit the readme on npm](https://www.npmjs.com/package/ngx-cumulio). For more information about Cumul.io or making your own dashboard, [visit the website](https://cumul.io/main).

---

## What we will build

This tutorial is split up in 2 parts, this is part 1. In this part we will make a simple one page Angular application with an embedded Cumul.io dashboard.  
In [part 2](https://github.com/cumulio/ngx-cumulio-demo-part2/blob/master/README.md), we will make a multipage Angular application with several dashboards.

---

## Requirements

Basic knowledge of Angular and npm  
Terminal / command line

---

# Part 1 - Embedding a Cumul.io dashboard

In this part we will make a simple Angular application with an embedded dashboard. You can use the dashboards I provide further in the tutorial or you can use your own dashboards. If you want to make your own dashboards, head over to [Cumul.io](https://cumul.io/main) and sign up to start a free trial. There you can make your own dashboards.

## Setup Angular App

**Let's get started!**  
First, create a new angular project:

```bash
ng new my-dashboard-website
```

Type **`yes`** for routing, we are going to need it for part 2 of this tutorial, where we make a multipage application.  
Choose your prefered styling language, we'll be using **`scss`** in this tutorial  
We can start this Angular app by using the **`ng serve`** command, but be sure you are in the correct directory.  
Go to [**`localhost:4200`**](https://localhost:4200/) to see your app in action.

Next, install the library by using the following command in your **`terminal`**:

```bash
npm i ngx-cumulio
```

OR

```bash
ng add ngx-cumulio@latest
# this will also add an entry in app.module.ts
```

install dependencies if they are not yet installed

```bash
npm i @angular/core
npm i @angular/common
npm i @angular/platform-browser
npm i rxjs
npm i zone.js
```

---

## Displaying the dashboard

We'll mainly be working inside the app folder.

For starters, import our library: **`ngx-cumulio`**

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Import library
import { NgxCumulioModule } from 'ngx-cumulio';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Import library
    NgxCumulioModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

To use the library we only have to insert a dashboard id and the following html code into the **`app.component.html`**:

```HTML
<cumulio-dashboard [dashboard]="'763177aa-9b93-4ae7-903e-3cb07dc593d8'"></cumulio-dashboard>
```

Now you should see a dashboard appear.  
Remember, you can also use your own dashboards or try some other ones below:

```typescript
"55cfb99c-d602-492b-b192-6c15277fdb9a";
"763177aa-9b93-4ae7-903e-3cb07dc593d8";
"722fa789-89c8-4149-be4d-bc3eb348a65f";
"eb8a3bec-2d19-4229-b40a-2f31ad379780";
"8ce7c60d-0c80-439b-b2af-2874472ad1b5";
"2007fd48-59ef-4c5f-ace7-b63048d9fc11";
"035c0304-0bfe-4b7c-8c10-a4acb8eb9d76";
"8929b954-b8b0-4d71-8679-e857dbf30649";
"b114e125-017f-430d-b6d4-96d9e6af97a0";
"cba39d0a-f5ac-4cd9-b1a2-e26bbb98e22b";
"7f51e6a5-e31e-4f34-8c88-27edc51570f2";
"ff16ad9f-fd27-4e09-b4a8-a6ab71b980dc";
```

Now we will just add some HTML and CSS to add a simple toolbar and footer.
Replace the **`app.component.html`** with this code:

```HTML
<!-- Toolbar -->
<div class="main">
  <div class="toolbar" role="banner">
    <span>My Website</span>
  </div>
  <div class="content" role="main">
    <!-- Content -->
     <cumulio-dashboard [dashboard]="'763177aa-9b93-4ae7-903e-3cb07dc593d8'"></cumulio-dashboard>
  </div>
  <!-- Footer -->
  <footer class="footer"><span></span></footer>
</div>
```

and put this styling in **`app.component.scss`**

```CSS
:host {
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 14px;
  color: #333;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.toolbar {
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #3a3a3a;
  color: white;
  font-weight: 600;
}

.toolbar span {
  padding-left: 1rem;
}


.content {
  display: flex;
  margin: 32px auto;
  padding: 0 16px 16px;
  flex-direction: column;
  align-items: center;
}

.footer {
  height: 60px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3a3a3a;
  color: white;
  font-weight: 600;
}
```

Our background color doesn't match the color of our dashboard background.  
The color of this dashboard is **`rgb(238, 243, 246)`**.  
When you create a dashboard you can choose dashboard background color, but now we will have to change the background of our application. Change the body background color in the main **`styles.scss`**.

```CSS
html, body {
  height: 100%;
  margin: 0;
}
body {
  background-color: rgb(238, 243, 246);
}
```

Now we can add some variables to our dashboard. Here is a list of all the variables we can add to our dashboard.  
For a more detailed description of the variables go to the readme page of the library: [ngx-cumulio](https://www.npmjs.com/package/ngx-cumulio)

```Typescript
dashboard: string;
token: string;
key: string;
language: string;
screenmode: string;
switchScreenmodeOnResize: boolean;
loaderBackground: string;
loaderFontColor: string;
loaderSpinnerColor: string;
loaderSpinnerBackground: string;
```

For now let us add a background color to the loader so that when your dashboard is loading, it has the same background color as the body.

```HTML
<cumulio-dashboard
  [dashboard]="'763177aa-9b93-4ae7-903e-3cb07dc593d8'"
  [loaderBackground]="'rgb(238, 243, 246)'">
</cumulio-dashboard>
```

Let's say we want to change our loader colors to match our dashboard.

```HTML
<cumulio-dashboard
  [dashboard]="'763177aa-9b93-4ae7-903e-3cb07dc593d8'"
  [loaderBackground]="'rgb(238, 243, 246)'"
  [loaderFontColor]="'rgb(238, 243, 246)'"
  [loaderSpinnerColor]="'rgb(238, 243, 246)'"
  [loaderSpinnerBackground]="'rgb(238, 243, 246)'">
</cumulio-dashboard>
```

Now the loader and the font color are in a blue color.
You can also have multiple dashboards on one page if you want. Just add another **`cumulio-dashboard`** in the **`content`** div and watch the magic happen.

---

## Code
[Github Code](https://github.com/cumulio/ngx-cumulio-demo-part1) 
---

# Conclusion

As you can see it is easy to add a Cumul.io dashboard to your website by using this library.  
You only have to do some minimal styling in your application, because the dashboard will always take up the full width of the parent and then calculate the height it needs to show the full dashbaord. The only tricky thing you need to do is find a nice spot in your application for your dashboard.  
[Code Part 1](https://github.com/cumulio/ngx-cumulio-demo-part1) | [Demo Part 1](https://stackblitz.com/edit/ngx-cumulio-tutorial-part1)  
[Go to part 2 to make a multipage application with several embedded dashboards!](https://github.com/cumulio/ngx-cumulio-demo-part2/blob/master/README.md)

---
