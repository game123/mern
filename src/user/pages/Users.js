import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=photo-of-a-man-listening-music-on-his-phone-846741.jpg&fm=jpg",
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
