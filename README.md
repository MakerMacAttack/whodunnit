- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Whodunnit** is a simple mystery game. Users will reveal clues and use them to solve the crime. The backend contains the clues, suspects, alibis, and weapons, and runs on Ruby on Rails, hosted by Heroku. The front end is a react app hosted on Netlify. 


<br>

## MVP

The **Whodunnit** MVP is a simple game where the user has a list of suspects and some information about each one, uncovers clues, and determines which of the suspects is the murderer.

<br>

### Goals

- _Lorem ipsum, dolor sit amet,_
- _consectetur adipiscing elit._
- _Phasellus dapibus fermentum risus vitae bibendum._
- _Integer vel ipsum mollis odio sollicitudin ornare eu vel ex._
- _etc._

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | A JavaScript library for building user interfaces |
|   React Router   | A tool that allows you to handle routes in a web app, using dynamic routing. |
| React SemanticUI | The official React integration for Semantic UI. |
|     Express      | Fast, unopinionated, minimalist web framework for Node.js |
|  Express Router  | A class which helps us to create router handlers. |

<br>

### Client (Front End)

#### Wireframes

![Mobile Home](https://raw.githubusercontent.com/MakerMacAttack/whodunnit/master/Home%20-%20Mobile.png)

- Mobile Home

![Mobile Login](https://raw.githubusercontent.com/MakerMacAttack/whodunnit/master/Login%20-%20Mobile.png)

- Mobile Login

![Mobile Create User](https://raw.githubusercontent.com/MakerMacAttack/whodunnit/master/CreateUser%20-%20Mobile.png)

- Mobile Create User

![Mobile Instructions](https://raw.githubusercontent.com/MakerMacAttack/whodunnit/master/Instructions%20-%20Mobile.png)

- Mobile Instructions (Modal)

![Forensics](https://raw.githubusercontent.com/MakerMacAttack/whodunnit/master/wireframes/Forensics%20-%20Mobile.png)

- Mobile Forensics

![Mobile Forensics Reveal](https://raw.githubusercontent.com/MakerMacAttack/whodunnit/master/wireframes/ForensicsReveal%20-%20Mobile.png)

- Mobile Forensics Reveal (Modal)

![Mobile Notebook](https://raw.githubusercontent.com/MakerMacAttack/whodunnit/master/wireframes/Notebook%20-%20Mobile.png)

- Mobile Notebook

![Mobile Note](https://raw.githubusercontent.com/MakerMacAttack/whodunnit/master/wireframes/Note%20-%20Mobile.png)

- Mobile Note

![Mobile Suspect List](https://raw.githubusercontent.com/MakerMacAttack/whodunnit/master/wireframes/SuspectList%20-%20Mobile.png)

- Mobile Suspect List

![Mobile Suspect](https://raw.githubusercontent.com/MakerMacAttack/whodunnit/master/wireframes/Suspect%20-%20Mobile.png)

- Mobile Suspect

![Mobile Alibi](https://raw.githubusercontent.com/MakerMacAttack/whodunnit/master/wireframes/Alibi%20-%20Mobile.png)

- Mobile Alibi (Modal)

![Mobile Win](https://raw.githubusercontent.com/MakerMacAttack/whodunnit/master/wireframes/Win%20-%20Mobile.png)

- Mobile Win

![Mobile Lose](https://raw.githubusercontent.com/MakerMacAttack/whodunnit/master/wireframes/Lose%20-%20Mobile.png)

- Mobile Lose

#### Component Tree

![Component Tree](https://raw.githubusercontent.com/MakerMacAttack/whodunnit/master/whodunnit%20component%20tree.png) 

#### Component Hierarchy

``` structure

src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ NavBar
      |__ Footer
      |__ Register
      |__ Instructions
      |__ Investigate
      |__ Notebook
      |__ Interview
      |__ Suspect
      |__ Alibi
      |__ Accuse
|__ screens/
      |__ Home
      |__ Login
      |__ AccountCreate
      |__ Forensics
      |__ Notes
      |__ Suspects
      |__ SuspectDetail
      |__ Win
      |__ Lose
|__ services/
      |__ users
      |__ notes
      |__ suspects
      |__ alibis
      |__ weapons

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Schema              |    L     |     3 hrs      |     TBD       |     TBD     |
| Models              |    H     |     3 hrs      |     TBD       |     TBD     |
| Controllers         |    H     |     6 hrs      |     TBD       |     TBD     |
| Backend Services    |    L     |     3 hrs      |     TBD       |     TBD     |
| Screens             |    H     |     3 hrs      |     TBD       |     TBD     |
| Components          |    M     |     6 hrs      |     TBD       |     TBD     |
| Routes              |    L     |     3 hrs      |     TBD       |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     TBD       |     TBD     |
| Styling             |    L     |     6 hrs      |     TBD       |     TBD     |
| Post-MVP            |    L     |     3 hrs      |     TBD       |     TBD     |
| Advanced Styleing   |    H     |     3 hrs      |     TBD       |     TBD     |
| TOTAL               |          |     42 hrs     |     TBD       |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![ERD Model](https://i.imgur.com/PVIZTER.png)
> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

<br>

***

## Post-MVP

Come up with some way for players to lose, like a time limit. Also some challenge before they get clues.

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
