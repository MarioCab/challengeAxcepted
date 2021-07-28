import React from "react";
import { 
  // Redirect, 
  useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import PostList from "../components/PostList";

import { QUERY_ME, QUERY_USER } from "../utils/queries";

// import Carousel from "../components/Carousel";

// import Hero from "../components/Hero";

// import Auth from "../utils/auth";

const Mychallenges = () => {
  
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  console.log(data);

  const user = data?.me || data?.getUser || {};
  console.log(user);
  const posts = user.posts || [];                    //
  let p = [...posts].reverse()


  // if (data?.me === data?.getUser){
  //   return <Redirect to="/me" />
  // }
  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   // console.dir(1)
  //   return <Redirect to="/me" />;
  // }

  if (loading) {
    // console.dir(2)
    return <div>Challenges Await</div>;
  }

  if (!user?.username) {
    // console.dir(3)
    return (
      <h1>
        Log in to see your challenges!!! You can use the links above to sing in
        or sign up!
      </h1>
    );
  }
  return (
    <main>
          {/* {console.dir(4)} */}

      {/* <Hero/>   */}
      {/* <Carousel/>  */}
      <div className="col-12 col-md-8 mb-3">
        {loading ? <div>Loading...</div> : <PostList posts={p} />}
      </div>
    </main>
  );
};

export default Mychallenges;
