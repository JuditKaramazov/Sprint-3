# Sprint 3 IT Academy | Shop


## Introduction

As a first contact with JavaScript, IT Academy told us that a company in the e-commerce sector asked for a web application allowing them to offer the purchase of their products through the internet. After interiorizing some essential notions regarding web design thanks to the first sprints, we will now be in charge of setting up an initial demo version of the application for the client: management of the shopping cart and the application of the promotions on the final price.

![Alt text](https://github.com/JuditKaramazov/Sprint-3/blob/8e4881339bb715efc3532abf7ed421a5c556e079/images/Screenshot-1.png)

![Alt text](https://github.com/JuditKaramazov/Sprint-3/blob/8e4881339bb715efc3532abf7ed421a5c556e079/images/Screenshot-2.PNG)

As seen above, these are the prototypes we had to work with:

- the `main site`, providing users with functionalities such as adding products to the cart or showing a `modal` that includes the products they bought, their individual prices and the total one.
- a `checkout page` with a proper validation system accepting certain conditions, depending on the field; if these conditions are not met, it doesn't allow the user to submit their form until all tests have been passed.

Even though IT Academy came up with an already-made design, I decided to add some minimal changes while still respecting the requirements and expected features:

![Alt text](https://github.com/JuditKaramazov/Sprint-3/blob/8e4881339bb715efc3532abf7ed421a5c556e079/images/Screenshot-3.png)

And the `checkout page`, almost identical to IT Academy's with the difference that it respects the design that I applied to the `main site`:

![Alt text](https://github.com/JuditKaramazov/Sprint-3/blob/8e4881339bb715efc3532abf7ed421a5c556e079/images/Screenshot-4.png)


<br>

## Requirements


1. Clone this repo
```bash
$ git clone https://github.com/IT-Academy-BCN/starter-code-frontend-sprint-3
```

2. Unlink your repo from the itacademy repository.
(Explanation: You have to upload the code to your GitHub repository, not to the IT Academy. That's why you have to unlink your project from IT Academy GitHub with the following command)

```bash
$ git remote rm origin
```

3. Link your repo to the repository you have to create in your github account
(Explanation: Now your project is not linked to any remote repository. In order to upload your code, you have to link your project to the new repository created on github.com using the following command)

```bash
$ git remote add origin <your repo name!>
```

<br>

## Submission

1. Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "Sprint Solution"
$ git push origin master
```

2. Upload the link to the virtual campus so that your mentor can correct it and give you feedback.



<br>

## Introduction

The statement of the exercise is available on the virtual campus.

<br>


## Instructions

You have the following indications from the frontend manager:

- You have prepared the base of the project on which you will work: https://github.com/IT-Academy-BCN/starter-code-frontend-sprint-3

- The base of the project on which you will work has already created all the files, and an initial version of the interface, so you can focus on programming the logic.

- As at the moment we don't consume data from a server using an API, we will work with hardcoded data in the application. For the moment we will implement the logic using a small group of 9 products divided in 3 sections.

- Except for the last level, showing the result of the functions by console is enough.

- The logic to implement will be placed in the src/grocery.js and src/checkout.js files. You will see that the built in functions have already been created for you to implement them.

- It is forbidden to copy the code, since this way you don't learn anything. Furthermore, as you can see, the second release of sprint 5 is a mini-level test with the mentor, in which you will have to demonstrate live that you have acquired the javascript concepts. Don't worry, if you work on the releases you won't have any problems.
