// BlogPostCard.jsx
import Image from "next/image";
import styles from "./BlogFilterSection.module.scss";   // Shared SCSS
import Link from "next/link";

export default function BlogPostCard({ title, id, image, author }) {
  return (
    <article className={styles.card}>
      <Link href={`/blogs/${id}`}>
      {image ? (
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={title}
            width={400}
            height={240}  // Adjusted for increased height
            className="object-cover"
          />
        </div>
      ) : (
        <div className={styles.placeholder} />
      )}
     </Link>
      <h3 className={styles.title}>
        {title} 
      </h3>
      <p className={styles.author}>{author}</p>
      
    </article>
  );
}