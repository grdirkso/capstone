# Codesters

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.15.
This project is a coding class registration for children. 

Groups: Classes
Organizations: Types of classes
Member: Students

There is also an admin portal for editing class and student details, as well as the ability to delete a class or student.

Parent's can also submit a class idea via the 'Class Idea Submission' page.

## Technologies Used
Routing 
PrimeNg

## Development server

cd into client/codesters and run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Json Server

cd into server and run `node server.js` to start the json server. The server should be listening on port 8082, if not set the port by running `node server.js --p 8082`

## API Endpoints

`/api/groups/:groupid`
 GET - get specific class
 DELETE - delete specific class
`/api/groups/` 
 GET - get all class
 POST - add a class
 PUT - update a class
`/api/groups/:groupid/members`
 POST - add a member to specific class
 PUT - edit a member
`/api/groups/:groupid/members/:memberid`
 DELETE - delete a member
`/api/organizations`
 GET - get all class types

## Features
Header: 
    - looks just like JBH header, however does not have any of the functionality 
    - css flexbox used
Home:   
    - Description and class types
Classes: 
    - all classes and the class information
    - ability to filter by status, available seats and grade
    - message if there are no classes that match filter selection
Class Registration:
    - Form to register for class
    - information dynamically pulled in for drop downs
    - class drop down only populated with classes that have available seats, are active and are offered to grade    selected  
    - toast messages to alert user when they try to submit an invalid form
    - messages below fields if touched and not filled out
    - route to classes upon successful registration
Class Idea Submission:
     - Form to submit class idea
     - information dynamically pulled in for drop downs
     - toast messages to alert user when they try to submit an invalid form and when they have successfully submited form
     - messages below fields if touched and not filled out    
Admin Portal: 
    - see all classes and their information
    - edit class via form 
    - delete class
    - all information and form fields are dynamically populated
    - classes automatically update    
    - toast messages to alert user when they try to submit an invalid form and when they have successfully updated/deleted a class
     - messages below fields if touched and not filled out   
Students: 
    - all students in a specific class, select from Admin Portal
    - edit student via form 
    - delete student
    - all information and form fields are dynamically populated
    - students automatically update    
    - toast messages to alert user when they try to submit an invalid form and when they have successfully updated/deleted a studnt
     - messages below fields if touched and not filled out  
