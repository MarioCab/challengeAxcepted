import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import PostList from "../components/PostList";

import { QUERY_ME, QUERY_USER } from "../utils/queries";

import Carousel from "../components/Carousel";

import Hero from "../components/Hero";

import Auth from "../utils/auth";

const Mychallenges = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  console.log(data);

  const user = data?.me || data?.getUser || {};
  console.log(user);

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Challenges Await</div>;
  }

  if (!user?.username) {
    return (
      <h1>
        Log in to see your challenges!!! You can use the links above to sing in
        or sign up!
      </h1>
    );
  }
  return (
    <main>
      {/* <Hero/>   */}
      {/* <Carousel/>  */}
      <div className="col-12 col-md-8 mb-3">
        {loading ? <div>Loading...</div> : <PostList posts={user.posts} />}
      </div>
    </main>
  );
};

export default Mychallenges;
