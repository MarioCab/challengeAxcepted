import React from "react";

import { useQuery } from "@apollo/client";

import PostList from "../components/PostList";

import { QUERY_POSTS } from "../utils/queries";

import Carousel from "../components/Carousel";

import Hero from "../components/Hero";

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  // const posts = data?.posts || [];                    //normal post order
  const posts = [...data?.posts].reverse() || [];        //reverse post order

  return (
    <main className="text-center">
      <Hero />
      <Carousel />
      <div className="row d-flex justify-content-center text-center">
      <div className="col-12 col-md-8 mb-3 text-center">
        {loading ? <div>Loading...</div> : <PostList posts={posts} />}
      </div>
      </div>
    </main>
  );
};

export default Home;
