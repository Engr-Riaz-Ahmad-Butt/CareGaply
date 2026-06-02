// BlogFilterSection.jsx
"use client";
import React from "react";
import BlogPostCard from "./BlogPostCard";
import styles from "./BlogFilterSection.module.scss";

export default function BlogFilterSection({ blogPosts }) {
    console.log(blogPosts,"--------Blogs")
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {blogPosts?.map((post) => {
          const f = post.fields;
          const img = f.featuredImagesMain?.fields?.file?.url
            ? `https:${f.featuredImagesMain.fields.file.url}`
            : "";

          return (
            <BlogPostCard
              key={post.sys.id}  // Always use unique sys.id for key
              id={f.slug }  // Use slug for id, fallback to sys.id
              title={f.blogTitle}
              image={img}
              author={f.author || "Author Name"}
            />
          );
        })}
      </div>
    </section>
  );
}