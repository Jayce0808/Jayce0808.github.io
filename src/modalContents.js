export const modalContents = {
  this_portfolio: {
    title: "This Portfolio",
    icon: "portfolio.png",
    body: `This portfolio is built using Vue.js, which I chose as an opportunity to learn and gain hands-on experience with the framework. It features a responsive design, a dynamic project showcase, and a smooth user experience. I implemented a mobile-friendly navigation system with a hamburger menu, ensuring accessibility across different devices. Additionally, I focused on clean and maintainable code, utilizing Vue's component-based architecture to keep the project scalable and organized.`,
    gallery: [
      { "title": "Project Layout", "path": "portfolio-structure.png" },
      { "title": "Code Sample", "path": "portfolio-code-sample.png" },
      { "title": "Backend", "path": "portfolio-backend.png" },
    ]
  },
  smash: {
    title: "Smash",
    icon: "smash-logo-green.png",
    body: `
            <strong>The Smash Portal</strong> is a WordPress site I developed during my time at Entrust ICT to streamline the customer onboarding process for partners.
            Within the portal, customers can independently order services, enhancing efficiency and user experience.
            Built from the ground up, the portal includes the following key features:

          <ul>
            <li>Generate quotes and order summaries as PDFs</li>
            <li>Save leads as potential customers</li>
            <li>Input billing details for automatic recurring payments</li>
            <li>Automatically store order details in a separate CRM, enabling staff to monitor and take action</li>
          </ul>
          `,
    tech_stack: [
      "Wordpress",
      "PHP",
      "MySQL"
    ],
    gallery: [
      { "title": "Orders", "path": "smash_orders.jpg" },
      { "title": "New Quote", "path": "smash_quote.jpg" },
      { "title": "Quote Summary", "path": "smash_quote_summary.jpg" },
      { "title": "Quotes", "path": "smash_quotes.jpg" },
      { "title": "Customer Details", "path": "smash_customer.jpg" }
    ]
  },
  expirely: {
    title: "Expirely",
    icon: "expirely_list.png",
    body: `  A small team of three developers and I worked on a mobile application designed to help users monitor their food purchases and track expiry dates. The app features built-in reminders, ensuring that users are notified when products are nearing their expiration. <br><br>   Currently, the project is a work in progress (WIP) and is being developed using the agile methodology. We are following two-week sprint cycles to ensure steady progress and iterative improvements. Additionally, the development process includes creating mockups to refine the user interface and experience before implementation.`,
    gallery: [
      { "title": "Flow Diagram", "path": "expirely_flow_diagram.png" },
      { "title": "Wireframe", "path": "expirely_wireframe.png" },
      { "title": "Login Screen", "path": "expirely_login.png" },
      { "title": "Mockup", "path": "expirely_mockup.png" },
      { "title": "Bitbucket Pipeline", "path": "expirely_pipeline.png" },
    ]
  },
  scavenger_showdown: {
    title: "Scavenger Showdown",
    icon: "scavenger_showdown_logo-Copy.png",
    body: `Together with a group of friends we competed in the 2021 Global Game Jam where we had 48 hours to make a game based on a 'Lost and Found' theme.
				This was done in Unity and my main roles were the combat and the main menu UI.
				<br> <br>
				Scavenger Showdown is a multiplayer competitive collectathon party game for up to 4 players.
				Whoever can find the objects scattered randomly around the map in a specific order wins.
				This gameplay is enhanced with the addition of a combat system between players where you can send any rival back to the start,
				losing them time. A singleplayer mode is also available, where players face the clock to achieve a low time.`,
    tech_stack: [
      "Unity",
    ],
    gallery: [
      { "title": "Main Menu", "path": "scavenger_showdown_3.png" },
      { "title": "Spawn", "path": "scavenger_showdown_1.png" },
      { "title": "Bridge", "path": "scavenger_showdown_2.png" },
    ]
  },
  snacks_in_a_van: {
    title: "Snacks In A Van",
    icon: "logo-plusvan-2x.png",
    body: `For this project I worked with a team of five to implement a web app. The app consists of two parts, the customer end and the staff end.
				The customer is able to search for a van nearby and then order food based on what's available. The staff member then recives their order and can prepare it before the customer arrives.
				The staff member can also stop displaying the van for customers when they are no longer serving with the click of a button.
				My role on the team was to manage the database as well as the backend for the store itself. This was accomplished using mongo, mongoose, node js and a bit of handlebars.`,
    gallery: [
      { "title": "Map View", "path": "snacks_in_a_van_1.PNG" },
      { "title": "Food Selection", "path": "snacks_in_a_van_2.PNG" },
      { "title": "Order Summary", "path": "snacks_in_a_van_3.PNG" },
      { "title": "Order Preparation", "path": "snacks_in_a_van_4.PNG" },
      { "title": "Staff View", "path": "snacks_in_a_van_5.PNG" }
    ]
  },
  melbourne_locations: {
    title: "Melbourne Locations",
    icon: "map- green.png",

    body: `For this project I was tasked with implementing a program that would take a search query such as
                "University of Melbourne" and would return the coordinates of the query.
                When the program runs it reads a csv with all the data and stores it all in a kd tree.
                It then waits for an input from the user and searches the kd tree for the coordinates.
                The purpose of this project was to learn how to implement kd trees and their accompanying search algorithms. This was all done in C. `,
    gallery: [
      { "title": "Map of Coordinates ", "path": "map.PNG" },
    ]
  },
  simulation: {
    title: "Animal Simulation",
    icon: "simulation- green.png",

    body: `For this project I was tasked with implementing a simulation in which multiple classes interact with each other. I was supplied the base code for the simulation itself and had to implement all the classes and their interactions. Additionally I had to implement a frames system that could be modified through the arguments and a 'world' file which was a text document with instructions describing what needed to be loaded into each world as well as it's dimensions.
                The purpose of this project was to familiarise myself with the concept of object oriented programming and creating UML diagrams to showcase my ideas before implementation. The simulation was made using Java.`,
    gallery: [
      { "title": "Simulation 1", "path": "simulation.png" },
      { "title": "Simulation 2", "path": "simulation-1.PNG" },
      { "title": "Simulation 3", "path": "simulation-2.PNG" },
    ]
  },
  // "3d_viewer": {
  //   title: "3D Viewer",
  //   icon: "simulation- green.png",
  //   body: `For this project I was tasked with implementing a simulation in which multiple classes interact with each other. I was supplied the base code for the simulation itself and had to implement all the classes and their interactions. Additionally I had to implement a frames system that could be modified through the arguments and a 'world' file which was a text document with instructions describing what needed to be loaded into each world as well as it's dimensions.
  //               The purpose of this project was to familiarise myself with the concept of object oriented programming and creating UML diagrams to showcase my ideas before implementation. The simulation was made using Java.`,
  //   gallery: [
  //     { "title": "Flow Diagram", "path": "simulation.png" },
  //     { "title": "Flow Diagram", "path": "simulation-1.PNG" },
  //     { "title": "Flow Diagram", "path": "simulation-2.PNG" },
  //   ]
  // },
  // project_manager: {
  //     title: "Project Manager",
  //     icon: "simulation- green.png",
  //     body: `For this project I was tasked with implementing a simulation in which multiple classes interact with each other. I was supplied the base code for the simulation itself and had to implement all the classes and their interactions. Additionally I had to implement a frames system that could be modified through the arguments and a 'world' file which was a text document with instructions describing what needed to be loaded into each world as well as it's dimensions.
  //             The purpose of this project was to familiarise myself with the concept of object oriented programming and creating UML diagrams to showcase my ideas before implementation. The simulation was made using Java.`,
  //     gallery: [
  //         "simulation.png",
  //         "simulation-1.PNG",
  //         "simulation-2.PNG",
  //     ]
  // },
};
