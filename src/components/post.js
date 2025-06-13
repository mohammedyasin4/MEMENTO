import React, { useState, useEffect } from "react";
// Correct import: use createClient instead of SanityClient
import { createClient } from "@sanity/client";
import { Link } from "react-router-dom";
import image from "../wp10965747.png";

// Create client instance outside the component
const client = createClient({
  projectId: "c7dzlcwz",  // Replace with your Sanity project ID
  dataset: "production",         // Replace with your dataset name
  useCdn: false,                  // Enable CDN for faster responses
  apiVersion: "2025-06-13"       // Use current API version
});

export default function Post() {
  const [postData, setPost] = useState(null);
  
  useEffect(() => {
    // Use the client instance to fetch data
   // In Post.js
client.fetch(`
  *[_type == "post" && slug.current != null] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    mainImage {
      asset->{
        url
      },
      alt
    }
  }`)
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen">
         <img src={image} alt="Tags" className="absolute object-cover w-full h-full"/>
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center">Post Page</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">  
          Postal page
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData && postData.map((post, index) => (
            <article key={post.slug.current}>
              <Link to={"/post/" + post.slug.current}>
                <span className="block h-64 relative rounded shadow leading-snug bg-white ml-2  border-gray-400">
                  <img 
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                    className="w-full h-full rounded-r object-cover absolute "
                  />
                  <span className="block relative h-full flex justify-center items-center pr-4 pb-4">
                    <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-gray-300 text-black text-xl bg-opacity-75 rounded">
                      {post.title}
                    </h3>
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}