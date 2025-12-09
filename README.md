# Around the US
A web application for users to create a profile and display image posts of places they've travelled 

### Overview
* Introduction and demo links
* Setup instructions
* Key features
* File structure
* ApI endpoints and related information
* Future directions

## Introduction
This project was completed in 7 stages at the end of each 3-5 week sprint (part-time). It allowed me to completely immerse myself into the world of front-end development and master the art of HTML/CSS and the foundations of vanilla Javascript and client-side operations... and ultimately made me 100% certain that I was made to become a computer programmer 🤍.

The designs for this project were obtained from 👉 [**this Figma file**](https://www.figma.com/design/E5x6ib3osaUUNwLRRAsTDX/Sprint-9-%E2%80%94-Applied-JavaScript?node-id=1530-2&p=f&t=XZrHmaK6rN2f8UjO-0).

### 🌐 The web app demo can be viewed at 👉 [**this URL**](https://roxannecodes.github.io/se_project_aroundtheus/).


# Instructions for local setup

🔳 1- **Install the webpack development server package cmd:**

     npm install webpack-dev-server --save-dev

🔳 2-**Add a start script to “scripts” in package.json:**

``` "start": "webpack serve --mode development"```


🔳 3- **Run the server cmd:**

Initial run 
      
     npm start  
Subsequent runs 

    npm run dev

# Key Features

**Profile Section** 
- Display profile image and edit via clicking on it and entering url on popop form with validation

- Display profile Info with Name and About info and edit via clicking edit-button and submitting popup form with validation

**Card Section**

- Add new cards with an image and a title via clicking on add-button and submitting popup form with validation

- Larger image preview display via clicking on each card's image

- like-button on each card
- Delete button on each card for removing after confirming with popup display button

 **Other**
- Loading status display while saving changes on form submit
- Persissting changes on page reload via API calls
- Responsive to multiple screen sizes


# File Structure 

**HTML & CSS: BEM methodologies**

- Separating/organizing CSS styles into reusable blocks and importing them into index.css
- Standardized formatting conventions used to structure elements in HTML
- Standardized conventions for naming CSS classes in HTML

 **Javascript: Classes**

- Main features are coded into separate "loosely coupled" class components and imported into index.js 

# API Endpoints
🔳 **GET /users/me**

- Fetch user's current profile Info when page loads
- Response:
 ```
 {
 "_id": "userId",
  "name": "User Name",
  "about": "About text",
  "avatar": "https://.../avatar.jpg"
 }
  ``` 


🔳 **GET /cards**

- Fetch user's current card posts when page loads
 - Response returns an array of user's current card objects 
 ```
 [
  {
   "isLiked": false,
   "_id": "69360d7697fece001a6a6160",
   "name": "card title",
   "link": "https://yastatic.net/q/logoaas/v1/Practicum.svg",
   "owner": "7b221bf881f623e0b29151fc",
   "createdAt": "2025-12-07T23:27:50.991Z"
}, 
 ...
 ]
```

🔳 **PATCH /users/me**
- edit user's profile info (name & about)
- request body example: 
```json
   {
     "name": "New Name",
     "about": "New about text"
    }
```

🔳 **PATCH /users/me/avatar**
- edit user's profile image
-  request body example
```json
   {
     "avatar": "https://.../new-avatar.jpg"
    }
 ```

🔳  **POST /cards**
- add new card
- request body example:
 ```json
   {
    "name": "Card title",
     "link": "https://.../image.jpg"
     }
 ```
- Response:
 ```
 {
    "isLiked": false,
    "_id": "69360d7697fece001a6a6160",
    "name": "card title",
    "link": "https://yastatic.net/q/logoaas/v1/Practicum.svg",
    "owner": "7b221bf881f623e0b29151fc",
    "createdAt": "2025-12-07T23:27:50.991Z"
}
  ``` 
  
🔳  **DELETE /cards/:cardId**
   - Delete a card by id

🔳 **PUT /cards/:cardId/likes**
  - Like a card
  -  Response returns the updated card object with `"isLiked":true`

🔳 **DELETE /cards/:cardId/likes**

 - Remove current user's like from the card
 -  Response returns the updated card object with `"isLiked":false`

## Future Directions

- This project would definitely benefit from adding a backend with **Node.js** in order to host a database for storing users' information and profile data, and also allowing for token based authentication via JWTs so that users can login with accounts and interact with one another.

- This project could potentially benefit from being rebuilt with **React.js** in order to seamlessly integrate new features such as users' being able to rearrange cards on their grid, view their likes and display their comments from posts.

<img width="666" height="779" alt="screen-shot" src="https://github.com/user-attachments/assets/b360fdb9-ca78-49e4-8d0a-555fcda015c2" />
