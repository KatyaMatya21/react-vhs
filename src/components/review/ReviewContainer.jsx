"use client";
import {Review} from "./Review.jsx";
import {use} from "react";
import {UsersContext} from "../usersContextProvider/index.js";

export const ReviewContainer = ({ review }) => {
  const { text, rating, userId } = review || {};

  const users = use(UsersContext);
  const user = users?.find((user) => user.id === userId);
  const { name } = user || {};

  if (!user?.name) {
    return null;
  }

  return (
    <Review name={name} rating={rating} text={text} />
  );
};
