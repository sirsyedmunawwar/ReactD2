
import useState, {React} from "react";
import { createContext } from 'react';
export const ContextAPI = createContext();

export const Blogcontent = (props) => {
  const [rows] = useState([
    {
      id: "1000",
      image:
        "https://media.istockphoto.com/photos/walkway-through-the-misty-park-in-autumn-picture-id811010160?b=1&k=20&m=811010160&s=170667a&w=0&h=VXYPqR2k1dc61W42IWRN5dviKthMXguQ9NpxuMlkb1c=",
      title: "Joshua Tree Overnight Adventure",
      description:
        "Gujrat is vastly underated an its a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces",
      category: "Travel",
      date: "/ August 21 2017",
    },
    {
      id: "1000",
      image:
        "https://media.istockphoto.com/photos/walkway-through-the-misty-park-in-autumn-picture-id811010160?b=1&k=20&m=811010160&s=170667a&w=0&h=VXYPqR2k1dc61W42IWRN5dviKthMXguQ9NpxuMlkb1c=",

      title: "Joshua Tree Overnight Adventure",
      description:
        "Gujrat is vastly underated an its a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces",
      category: "Travel",
      date: "/ August 21 2017",
    },
    {
      image:
        "https://media.istockphoto.com/photos/walkway-through-the-misty-park-in-autumn-picture-id811010160?b=1&k=20&m=811010160&s=170667a&w=0&h=VXYPqR2k1dc61W42IWRN5dviKthMXguQ9NpxuMlkb1c=",

      title: "Joshua Tree Overnight Adventure",
      description:
        "Gujrat is vastly underated an its a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces",
      category: "Travel",
      date: "/ August 21 2017",
    },

    {
      id: 1,
      img: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      heading: "Catch waves with an advanture guide",
      description:
        "Gujrat is vastly underated an its a mystery to us why the region isn't more well ",
      type: "Travel",
      date: "/ August 21 2017",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

      heading: "Catch waves with an advanture guide",
      description:
        "Gujrat is vastly underated an its a mystery to us why the region isn't more well ",
      type: "Travel",
      date: "/ August 21 2017",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

      heading: "Catch waves with an advanture guide",
      description:
        "Gujrat is vastly underated an its a mystery to us why the region isn't more well ",
      type: "Travel",
      date: "/ August 21 2017",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

      heading: "Catch waves with an advanture guide",
      description:
        "Gujrat is vastly underated an its a mystery to us why the region isn't more well ",
      type: "Travel",
      date: "/ August 21 2017",
    },

    {
      id: 1,
      heading: "Catch waves with an advanture guide",
      description:
        "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces ",
      type: "Travel",
      date: "/ August 21 2017",
    },
    {
      id: 2,

      heading: "Catch waves with an advanture guide",
      description:
        "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces ",
      type: "Travel",
      date: "/ August 21 2017",
    },
    {
      id: 3,

      heading: "Catch waves with an advanture guide",
      description:
        "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces ",
      type: "Travel",
      date: "/ August 21 2017",
    },
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

      heading: "Catch waves with an advanture guide",
      type1: "Travel",
      date1: "/ August 21 2017",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

      heading: "Catch waves with an advanture guide",
      type: "Travel",
      date: "/ August 21 2017",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

      heading: "Catch waves with an advanture guide",
      type: "Travel",
      date: "/ August 21 2017",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

      heading: "Catch waves with an advanture guide",
      type: "Travel",
      date: "/ August 21 2017",
    },
  ]);
  return (
    <ContextAPI.Provider value={[rows]}>{props.children}</ContextAPI.Provider>
  );
};
