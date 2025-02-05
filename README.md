# Crowdcube: A Crowd Funding Application

## Overview

A crowdfunding website is a platform where people can raise money for different projects, ideas, or causes by inviting others to contribute financially. These projects can include personal needs (like medical expenses), creative ideas (like making a film or app), and startups (like launching a new product).

# Purpose

1. **Empowering Fundraisers**: Provides a platform where individuals, businesses, and organizations can raise funds for personal, creative, or entrepreneurial projects.

2. **Community Support & Engagement**: Connects donors with meaningful causes, allowing people to contribute financially and support initiatives they believe in.

3. **Simplifying Fundraising**: Offers an easy-to-use and transparent system for managing campaigns, tracking donations, and reaching a wider audience.

## Technologies used

1. React

2. Express(JWT, CORS)

3. MongoDB

4. Node

## Core features

- Firebase authentication(Sign in, sign up, google sign in, sign out)

- Consists of many private routes(Add campagin, details, update, delete, my campaigns, my donations).

- Performs MongoDB **CRUD**(Add campagin, see details, update, delete) operations.

- One user can see/donate his campaigns as well as other's campaigns but can only update, delete his campaign.

- Toggle light and dark mood.

## Dependencies

1. Axios
2. Firebase
3. Motion
4. Sweet alert
5. React router dom
6. Tailwind
7. DaisyUI

## Live links

1. Live link: [visit](https://ph-b10-a10.web.app/)

## Server Repo

1. Repo: [visit](https://github.com/sakib-333/crowdcube-server)

## How to in local machine

1. Clone the repository to your local machine:

   ```bash
   git clone git@github.com:sakib-333/crowdcube-client.git

   cd crowdcube-client
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env.local` file root of the folder and all of your secret keys.

   ```bash
   VITE_apiKey=<your-firebase-api-key>
   VITE_authDomain=<your-firebase-authDomain>
   projectId=<your-firebase-projectId>
   storageBucket=<your-firebase-storageBucket>
   messagingSenderId=<your-firebase-messagingSenderId>
   appId=<your-firebase-appId>
   ```

4. Start server

   ```bash
   npm run dev
   ```

5. Your server should now be running on `http://localhost:5173`.
