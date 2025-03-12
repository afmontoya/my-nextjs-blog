import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <div className="card">
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
  );
}
