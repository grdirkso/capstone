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
    ![image](https://user-images.githubusercontent.com/36120935/133664557-742e16b1-617b-4605-a1ba-8a035b5cda4e.png)

Classes: 
    - all classes and the class information
    ![image](https://user-images.githubusercontent.com/36120935/133664726-ea4c89c8-fcb2-4ecf-a8e2-ad38d83020dc.png)

    - ability to filter by status, available seats and grade
![image](https://user-images.githubusercontent.com/36120935/133669530-0bf877ac-3d82-4000-887d-d43d04b6328d.png)
    - message if there are no classes that match filter selection
    ![image](https://user-images.githubusercontent.com/36120935/133664737-b3cb5e16-a055-4f9e-ab82-46d9fa7d476f.png)

Class Registration:
    - Form to register for class
      ![image](https://user-images.githubusercontent.com/36120935/133667570-845d4856-853d-4281-b724-f18dd68b2e77.png)
    - information dynamically pulled in for drop downs
      ![image](https://user-images.githubusercontent.com/36120935/133667596-efd345aa-3372-401f-a44a-0c950d3cfb19.png)
    - class drop down only populated with classes that have available seats, are active and are offered to grade    selected  
    - toast messages to alert user when they try to submit an invalid form
      ![image](https://user-images.githubusercontent.com/36120935/133667631-56f5884d-15c7-4c31-b478-46aa58fc23c7.png)
    - show popup upon successful registration with children in same class
      ![image](https://user-images.githubusercontent.com/36120935/133668397-df22a1d9-70f1-4912-9ac4-5cbac9201f8b.png)
    - route to classes upon successful registration
Class Idea Submission:
     - Form to submit class idea
       ![image](https://user-images.githubusercontent.com/36120935/133668643-02701e5d-8920-47bf-a035-a23f2bd3819f.png)

     - information dynamically pulled in for drop downs
   ![image](https://user-images.githubusercontent.com/36120935/133669693-1bf5931f-c72e-4ba6-a56b-2b05bb6e91c8.png)


     - toast messages to alert user when they try to submit an invalid form and when they have successfully submited form
   ![image](https://user-images.githubusercontent.com/36120935/133668697-8468f7fc-0d2a-4661-8976-914b50461900.png)
    ![image](https://user-images.githubusercontent.com/36120935/133668722-fffa9ddb-8437-439f-9c44-b3fbeec24d03.png)
     - messages below fields if touched and not filled out    
Admin Portal: 
    - see all classes and their information
      ![image](https://user-images.githubusercontent.com/36120935/133668797-00dea95d-ee3e-4d8f-ae21-cc143aab67c2.png)

    - edit class via form 
   ![image](https://user-images.githubusercontent.com/36120935/133668841-e2d0f4ec-269b-4b3c-822c-86150030350c.png)
    - delete class
    - all information and form fields are dynamically populated
    - classes automatically update    
    - toast messages to alert user when they try to submit an invalid form and when they have successfully updated/deleted a class
     - messages below fields if touched and not filled out   
     ![image](https://user-images.githubusercontent.com/36120935/133668922-c2e6865c-8259-4955-b3a4-73e89795fbc7.png)
Students: 
    - all students in a specific class, select from Admin Portal
    ![image](https://user-images.githubusercontent.com/36120935/133668952-8a5a38da-a1c2-490e-b583-3ecd0c52e8db.png)
    - edit student via form 
     ![image](https://user-images.githubusercontent.com/36120935/133668981-f531924d-da35-484e-afcf-19cfedee0b97.png)
    - delete student
    - all information and form fields are dynamically populated
    - students automatically update    
    - toast messages to alert user when they try to submit an invalid form and when they have successfully updated/deleted a studnt
    - messages below fields if touched and not filled out  
     ![image](https://user-images.githubusercontent.com/36120935/133669034-43437cb0-550d-4437-b842-c3ffc3b20f26.png)

