import React from "react";

import { useQuery } from "@apollo/client";

import PostList from "../components/Footer";

import { QUERY_POSTS } from "../utils/queries";

import Carousel from '../components/Carousel';

import Hero from "../components/Hero";

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <main>
       
      <Hero/>  
      <Carousel/> 
      {/* <div className="col-12 col-md-8 mb-3">
        {loading ? <div>Loading...</div> : <PostList posts={posts} />}

            
       
      </div> */}
    </main>
  );
};

export default Home;
