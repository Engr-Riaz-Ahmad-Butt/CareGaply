import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './order-list.scss';

const OrderList = ({ relatedBlogs }) => {
  if (!relatedBlogs || relatedBlogs.length === 0) {
    return null;
  }

  return (
    <div className="order-list">
      <div className="order-list-grid">
        {relatedBlogs.map((blog, index) => (
          <Link
            key={index}
            href={`/blogs/${blog.slug}`}
            className="order-list-card"
          >
            {blog.featuredImagesMain && (
              <div className="order-list-image">
                <Image
                  src={blog.featuredImagesMain}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="order-list-img"
                />
              </div>
            )}
            <div className="order-list-content">
              {blog.category && (
                <span className="order-list-category">{blog.category}</span>
              )}
              <h3 className="order-list-title">{blog.title}</h3>
              <div className="order-list-meta">
                <div className="order-list-author">
                  {blog.authorAvatar && (
                    <Image
                      src={blog.authorAvatar}
                      alt={blog.author}
                      width={32}
                      height={32}
                      className="order-list-avatar"
                    />
                  )}
                  <span className="order-list-author-name">{blog.author}</span>
                </div>
                <div className="order-list-info">
                  {blog.publishedAt && (
                    <span className="order-list-date">
                      {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  )}
                  {blog.readTime && (
                    <>
                      <span className="order-list-separator">•</span>
                      <span className="order-list-read-time">{blog.readTime}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
