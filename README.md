<img src="https://image.flaticon.com/icons/svg/3022/3022325.svg" width="150px" title="String" alt="STAR">

# Dynamic page title for browsers.

> String operations for angular 8+ projects (ng9)

# Preview demo

This preview was generated with [Stackblitz](https://stackblitz.com/edit/ngx-page-title)
<!-- <img src="https://github.com/manoj10101996/ngx-page-title/blob/master/ss.png?raw=true" width="100%" title="Page" alt="scroll"> -->


# Angular version

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Code integration

To use this package as a service `npm i ngx-page-title` install this on the root angular project .

> Note: Don't forget to run this commend `npm i ngx-page-title`   on root folder or else it will throw error.

## Import

Import the module on your `app.module.ts` file as follow.

> import { NgxPageTitleModule } from "ngx-page-title";

Then import the module as follow on imports array

>NgxPageTitleModule

In your `constructor` of a required component import the service as follow

>import { NgxPageTitleService } from 'ngx-page-title';

Add the dependency on construtor as follows

>  constructor(private title: NgxPageTitleService) {

>   `this.title.setTitle("title goes here")`

> }


## Using

After importing this library with `npm  install ngx-page-title`, go to the component which is declared under `app.module.ts` and integrate as below. use it on any component or else declare it on `app.component.ts` for enabling it global to application.
 

