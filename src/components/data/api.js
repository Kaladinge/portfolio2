import React from "react";
import beverages from "../../images/beverages.jpg";
import bookpalace from "../../images/bookpalace.jpg";
import holidaze from "../../images/holidaze.jpg";

export const projectData = [
  {
    title: "Beverages Inc.",
    description:
      "A site for finding different beverages. Users are able to toggle their favorite beverages in and out of their favorite list.",
    screenshot: beverages,
    github: "https://github.com/Kaladinge/js-frameworks-course-assignment",
    livesite: "",
  },
  {
    title: "Book Palace",
    description:
      "A site for book enthusiasts. Customers are able to search for and browse through books and add them to the cart. Admin users can add new books and edit/delete existing ones.",
    screenshot: bookpalace,
    github: "https://github.com/Kaladinge/book-palace",
    livesite: "https://bookpalace-project.netlify.app",
  },
  {
    title: "Holidaze",
    description:
      "A site for travelers to Bergen who want to find a place to stay in Bergen. Users can book from a variety of hotels, B & Bs and guesthouses. Admin users can respond to these book enquiries and also add new accommodations, as well as edit/delete existing ones",
    screenshot: holidaze,
    github: "",
    livesite: "https://holidaze-larsinge.netlify.app",
  },
];
