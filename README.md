# Revity

## Inspiration
This application stemmed from one of Pranay’s close family members falling down and breaking his collarbone, which caused his family to rush to the nearest hospital. There, not only did they receive subpar service, but they were also charged with steep medical bills. Little did they know that the hospital in a nearby sector of town had much better ratings for the doctor but also much more affordable prices. Since Pranay's family was deeply troubled by this, they wanted to reduce people facing a similar situation. Therefore, we brainstormed an intuitive solution to combat similar situations in the real world.

## What it does
Revity is a full-stack web application that shows you the closest hospitals nearby with crowdfunded surgery prices across various insurance providers, optimizing your time and maximizing savings in terms of crisis. It allows you to save time by not having to spend hours researching the best detectors in your area, but also allows you to navigate the most affordable options.


## How we built it
One of our main goals was developing an effective tool that fully leveraged technological solutions to solve our problems. As such, one of these methods was developing a seamless user interface that excited users to try out the application. As such, one of the tools that we used to create the front-end was the platform Figma where we were able to perform wireframing in order to thoroughly plan out the application’s front-end layout and features.

The backend architecture of the application consisted of a Python Flask REST API hosted on AWS (ECS, ECR, Copilot, Fargate). Behind our cloud infrastructure were Docker containers utilized to containerize and scale our applications vertically. Our front-end architecture consisted of an HTML/CSS/JSX and ReactJS application with a continuous deployment pipeline via Firebase hosting, allowing us to put greater focus on the user interface and experience while spending less time on managing the infrastructure. Connecting our front-end interfaces and back-end systems, we leveraged Google’s Firestore NoSQL database to allow for a smooth transfer of information from both ends. 

## Challenges we ran into
We originally had issues with creating a strong UI, but we overcame this challenge through the use of Figma and our approach using wireframing. Furthermore, we were having issues with deploying the CD pipeline, but we were eventually able to make it work after 2 attempts. Another issue that we ran into was difficulty around storing the session memory that needed to be stored in session storage. We were attempting to use Redux to solve this issue but we eventually narrowed down the solution to session storage after thoroughly researching other individuals' problems.

## Accomplishments that we're proud of
However,  despite these setbacks, we're very proud that we were able to create a minimal yet effective landing page that will attract users. Furthermore, the collaboration between 3 members using branches on Git often was difficult, but we are glad that we were able to sort those issues out to effectively produce our project. 

## What we learned
Overall, we improved our front-end skills significantly through this project, particularly through the use of React components and Axios in order to send information to the application’s Flask-based back-end. Furthermore, our group tackled the learning curve regarding DevOps by deploying a CD pipeline for the project. 

## What's next for Revity
We will focus on information security in the future as well as the reliability of crowdsourced data points for use by the general public. Furthermore, we can improve the scale of the hospitals available on Revity's website by releasing our product to the general public, which will ensure trust in community doctors. 
