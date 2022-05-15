# team-project-theavengers
team-project-theavengers created by GitHub Classroom

# HOTEL BOOKING APPLICATION
Team Members:
1. Teja Ramisetty
2. Lakshmi Sriharshini Komali
3. Saketh Gali
4. Sarat Kumar Kaniti

## Scrum Meeting
   Monday
   
## Sprint Sheet
https://docs.google.com/spreadsheets/d/17-Se5hKsBax_uE0hRpGYZaho5iZaYCws/edit?usp=sharing&ouid=114020656631977488104&rtpof=true&sd=true

## Tech Stack
* Frontend - React.js
* Backend - Node.js
* Database - Mongo DB
* Deployment - AWS EC2 with loadbalancing

## Contribution
Teja <br >
Saketh <br >
Sarat <br >
Harshini - Backend, wireframes, documentation <br >

## Project Board
https://github.com/orgs/gopinathsjsu/projects/20

## XP values
###### Communication 
* We had weekly scrum calls over zoom to discuss the tasks and progress. 
* We communicated important updates regarding the project over whatsapp and gmail.
###### Feedback 
* We constantly had mid-week meetings to check the work that was done and gave constructive feedback if required. 
* We also conducted Sprint restrospective at the end of the week to discuss what went well, what could be improved.
###### Respect 
* We conducted our meetings, discussion professionally having respect towards each other.
* We values everyone's opinion in the project and setup a meeting to discuss whenever there is a conflict of opinion. 

## Architecture Diagram

![alt_text](https://github.com/gopinathsjsu/team-project-theavengers/blob/main/documents/architecture_diagram.jpg)

## Deployment Diagram

![alt_text](https://github.com/gopinathsjsu/team-project-theavengers/blob/main/documents/deployment_diagram.jpeg)

## Component Diagram

![alt_text](https://github.com/gopinathsjsu/team-project-theavengers/blob/main/documents/component_diagram.jpeg)

## Design decisions
###### Database
Reasons to choose a NoSQL database
* There is no need to specify schema which allows flexibility.
* Using MySQL would result in a lot of sparse tables due to its rigid structure.
* Easily scalable
* Can handle huge amounts of data
Reasons to choose MongoDB
* Flexible schema model, so it helps in changing data model easily.
* It is a document type database where we store data in JSON format which is easy to use and supported by many frameworks and languages.
* Since we are using Javascript-based framework for backend and mongodb also has javascript at its core, it becomes easier for backend application to interact with the database.
###### Backend
Reasons to choose NodeJS and Express JS
* Javascript is widely used in frontend and NodeJS allows a developer to use Javascript for backend too which simplifies the communication.
* NodeJS allows the developer to start dveelopment process quickly with less effort.
* The Node Packet Manager(NPM) has a lot of libraries which can be installed and incorporated into the application easily. The developers need not reinvent the wheel by using the libraries.
* NodeJS uses single-threaded event loop thereby eleiminating the thread management which is favourable for microservices architecture.
* Express JS is one of the best Javascript frameworks for creating RESTful APIs.
* It is easier to deploy and develop nodejs application in AWS.
###### Frontend
Reasons to choose React JS
* ReactJs has a modular structure which helps in develop, manage, update and scale application easily.
* The UI components can be broken down and be reused again and again.
* React JS makes testing and debugging easier due to clear defined structure.
* React Js's core feature which are server-side rendering and virtual DOM increase the speed of complex applications.
* ReactJS library supports a wide range of codebases and can be mixed into any existing infrastructure without shutting down the system.
###### Deployment
Reasons to choose AWS
* AWS is the leading cloud provider in the world with a lot of services.
* AWS has pay-per-use pricing for most of its services.
* AWS has a simple UI for developers to use services without hassle.
* AWS offers world-class security that meets the highest standards.
* AWS has locations in 25 regions around the globe and a presence in 80 global availability zones.
Reasons to choose EC2 with loadbalancer for code deployment
* AWS EC2 is inexpensive where there is free-tier available for select types of instances.
* Amazon EC2 offers a highly reliable environment.
* Using a load balancer automoatically scales instances up or down to distribute load accordinf to the traffic.

Reasons to use CloudFront
* The application needs to be accessed globally from different regions. CloudFront offers edge servers to speed up delivery of web content.
* It provides complete security to the content by provoding network and application-level protection.
* Uses pay-per-use type policy which is economical.

Reasons to use API Gateway
* It adds and additional security layer for the APIs by defending malicious attacks like DoS attacks, XML parser exploits etc.
* It can be used for user-authentication, rate limiting and get the statistics.

## Feature Set
###### User
* Register to the application
* Login to the application
* Search for hotels
* Search for rooms
* Book a room
* Select amenities
* Use reward points to get discount
* Can take a subscription
* View all bookings
* Edit a booking
* Cancel a booking




