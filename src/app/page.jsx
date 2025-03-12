import { getAllPosts } from "../data/posts";
import Link from "next/link";

export default function Home() {
  const posts = getAllPosts();
  
  return (
    <main className="main">
      <div className="container">
        <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>My Next.js Blog</h1>
        
        <p style={{ textAlign: "center", marginBottom: "3rem", maxWidth: "700px", margin: "0 auto 3rem" }}>
          Welcome to my blog built with Next.js and GitHub Codespaces. 
          Here I share my thoughts and experiences with web development.
        </p>
        
        <div className="grid" style={{ maxWidth: "900px", margin: "0 auto" }}>
          {posts.map(post => (
            <div key={post.id} className="card">
              <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{post.title}</h2>
              <p style={{ color: "#666", marginBottom: "1rem" }}>{post.date}</p>
              <p style={{ marginBottom: "1.5rem" }}>{post.excerpt}</p>
              <Link 
                href={`/blog/${post.slug}`}
                style={{ display: "inline-block" }}
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
