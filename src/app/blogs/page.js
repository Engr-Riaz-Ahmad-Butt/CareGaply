import { notFound } from "next/navigation";

// import ArticleSection from '@/components/blogs/article-section';
// import NewsletterSignup from '@/components/blogs/newsletter-signup';
import BlogFilterSection from "@/components/blogs/blogSection";
// import Footer from '@/components/footer';
// import BlogsBanner from '@/components/blogs-banner';
import Footer from "../../components/footer";
// import { ScrollProvider } from '@/contexts/scroll-context';
import { client, contentType } from "@/lib/contentful";
import Hero from "@/components/blogs/blogsHero";
import Navbar from "@/components/navbar";
import style from "./blog.module.scss";

// ✅ Revalidate every hour for fresh blogs
export const dynamic = "force-dynamic";

export default async function Home() {
  try {
    const res = await client.getEntries({
      content_type: contentType,
    });

    if (!res?.items?.length) {
      notFound();
    }

    const blogs = res.items;

    return (
      <>
        <Navbar />
        <Hero title="CareGaply Blogs" />

        <div className="w-full flex flex-col bg-white justify-center items-center px-4 md:px-[64px]">
          <div className="w-full lg:max-w-[1060px] lg:mx-auto px-0">
            {blogs.length > 0 ? (
              <BlogFilterSection blogPosts={blogs} />
            ) : (
              <div className={style.noBlogsFound}>
                <h2>🚫 NO BLOGS FOUND 🚫</h2>
                <p>Please check back later for new content!</p>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </>
    );
  } catch (error) {
    console.error("Error fetching blogs from Contentful:", error);

    // Check for specific Contentful errors
    if (error.response?.status === 401) {
      throw new Error(
        "Invalid Contentful access token. Please check your CONTENTFUL_ACCESS_TOKEN in .env file."
      );
    }
    if (error.response?.status === 404) {
      throw new Error(
        "Contentful space not found. Please check your CONTENTFUL_SPACE_ID in .env file."
      );
    }
    if (error.message?.includes("content_type")) {
      throw new Error(
        `Content type '${contentType}' not found in your Contentful space.`
      );
    }

    // Generic error
    throw new Error(`Failed to fetch blogs: ${error.message}`);
  }
}
