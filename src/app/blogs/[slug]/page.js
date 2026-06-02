import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

import OrderList from "@/components/blogs/order-list";

import Footer from "../../../components/footer";
import { ArticleSchema } from "@/components/blogs/structured-data";
import RichTextRenderer from "@/components/blogs/rich-text-renderer";
import styles from "./page.module.scss";

// import { ScrollProvider } from '@/contexts/scroll-context';

import { client, contentType } from "@/lib/contentful";
import Navbar from "@/components/navbar";
// import { formatDate } from '@/lib/utils';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const res = await client.getEntries({
    content_type: contentType,
  });

  return res.items.map((blog) => ({
    slug: blog.fields.slug,
  }));
}

// Revalidate every hour

// Generate metadata dynamically
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const res = await client.getEntries({
    content_type: contentType,
    "fields.slug": slug,
  });

  if (!res.items.length) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const blog = res.items[0];
  const fields = blog.fields;

  const title = fields.title || fields.blogTitle || "Untitled Post";
  const description =
    fields.blogDescription ||
    fields.description ||
    fields.excerpt ||
    "Read this blog post on CareGaply.";

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://caregaply.com";
  const blogUrl = `${baseUrl}/blogs/${slug}`;
  const imageUrl = fields.featuredImagesMain?.fields?.file?.url
    ? `https:${fields.featuredImagesMain.fields.file.url}`
    : `${baseUrl}/hero/hero-image.svg`;
  //this returns metadata for the blog page
  return {
    title,
    description,

    authors: fields.author ? [{ name: fields.author }] : undefined,
    openGraph: {
      title,
      description,
      url: blogUrl,
      type: "article",
      publishedTime: fields.publishedDate,
      authors: fields.author ? [fields.author] : undefined,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "CareGaply",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: blogUrl,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const res = await client.getEntries({
    content_type: contentType,
    "fields.slug": slug,
  });

  if (!res.items.length) {
    notFound();
  }

  const blog = res.items[0];
  const fields = blog.fields;

  const relatedBlogsRes = await client.getEntries({
    content_type: contentType,
    "fields.slug[ne]": slug,
    limit: 3,
    order: ["-sys.createdAt"],
  });

  const relatedBlogs = relatedBlogsRes.items.map((item) => {
    const f = item.fields;
    return {
      slug: f.slug || "",
      title: f.blogTitle || f.title || "Untitled",
      author: f.author || "CareGaply Team",
      authorAvatar: f.authorAvatar?.fields?.file?.url
        ? `https:${f.authorAvatar.fields.file.url}`
        : undefined,
      publishedAt: f.publishedAt || f.publishedDate,
      readTime: f.readTime,
      featuredImagesMain: f.featuredImagesMain?.fields?.file?.url
        ? `https:${f.featuredImagesMain.fields.file.url}`
        : undefined,
      category: f.category || "General",
    };
  });

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://caregaply.com";
  const blogUrl = `${baseUrl}/blogs/${slug}`;
  const imageUrl = fields.featuredImagesMain?.fields?.file?.url
    ? `https:${fields.featuredImagesMain.fields.file.url}`
    : `${baseUrl}/hero/hero-image.svg`;

  const blogTitle = fields.title || fields.blogTitle || "No Title";
  const blogDescription =
    fields.blogDescription ||
    fields.description ||
    fields.excerpt ||
    "Read this blog post on CareGaply.";

  return (
    <>
      <Navbar />
      <div className={styles.blogPage}>
        <ArticleSchema
          title={blogTitle}
          description={blogDescription}
          author={fields.author || "CareGaply Team"}
          publishedDate={
            fields.publishedDate ||
            fields.publishedAt ||
            new Date().toISOString()
          }
          image={imageUrl}
          url={blogUrl}
        />

        {/* Hero Section */}
        <section className={styles.blogHero}>
          <div className={styles.heroBlobs}></div>

          {/* Title */}
          <h2 className={styles.blogTitle}>{blogTitle}</h2>

          {/* Author */}
          <div className={styles.blogAuthorBox}>
            {fields.authorAvatar?.fields?.file?.url && (
              <Image
                src={`https:${fields.authorAvatar.fields.file.url}`}
                alt={fields.author || "Author"}
                width={48}
                height={48}
                className={styles.authorAvatar}
              />
            )}
            <div>
              <p className={styles.authorName}>
                Written By <span>{fields.author}</span>
              </p>
              <p className={styles.authorRole}>Sr. Content Marketing Manager</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className={styles.blogContentWrapper}>
          {/* Featured Image */}
          {fields.featuredImagesMain?.fields?.file?.url && (
            <div className={styles.featuredImageBox}>
              <Image
                src={`https:${fields.featuredImagesMain.fields.file.url}`}
                alt="Blog Detail"
                width={775}
                height={401}
                className={styles.featuredImage}
              />
            </div>
          )}

          {/* Blog Body */}
          {fields.blogContent && (
            <div className={styles.blogBody}>
              <RichTextRenderer
                content={fields.blogContent}
                className="prose prose-lg max-w-none"
              />
            </div>
          )}

          {/* Related Articles */}
          {relatedBlogs.length > 0 && (
            <>
              <h3 className={styles.relatedTitle}>Related Articles</h3>
              <OrderList relatedBlogs={relatedBlogs} />
            </>
          )}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
