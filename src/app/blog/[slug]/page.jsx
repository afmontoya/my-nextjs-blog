import { getPostBySlug, getAllPosts } from "../../../data/posts";
import Link from "next/link";
import { marked } from "marked";

export async function generateStaticParams() {
  const posts = getAllPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return <div>Post not found</div>;
  }
  
  const htmlContent = marked(post.content);
  
  return (
    <main className="main">
      <div className="container" style={{ maxWidth: "800px" }}>
        <Link 
          href="/"
          style={{ display: "inline-block", marginBottom: "2rem" }}
        >
          ← Back to home
        </Link>
        
        <article className="card">
          <div className="post-header">
            <h1 className="post-title">{post.title}</h1>
            <p className="post-date">{post.date}</p>
          </div>
          
          <div 
            className="prose"
            dangerouslySetInnerHTML={{ __html: htmlContent }} 
          />
        </article>
      </div>
    </main>
  );
}
