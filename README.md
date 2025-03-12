My Next.js Blog
A simple blog created with Next.js and GitHub Codespaces.

![Blog Screenshot](https://github.com/afmontoya/my-nextjs-blog/blob/main/my-nextjs-blog-by-albert-montoya.png)

Features

Clean, minimalist design
Markdown support for blog posts
Responsive layout
Easy to customize and extend

Getting Started
To run this project locally:
bashCopy# Install dependencies
npm install

# Start the development server
npm run dev
Open http://localhost:3000 in your browser to see the blog.
Project Structure

src/app/ - Contains the Next.js pages and layouts
src/components/ - Reusable React components
src/data/ - Blog post data and helper functions

Adding New Blog Posts
To add a new blog post, edit the src/data/posts.js file and add a new object to the posts array following the existing structure:
javascriptCopy{
  id: 3,
  title: "Your New Post Title",
  slug: "your-new-post-slug",
  date: "March 14, 2025",
  excerpt: "Brief description of your post.",
  content: `
# Your New Post Title

Write your post content here in Markdown format.
  `
}
Deployment
This blog can be easily deployed to Vercel:

Push your code to GitHub
Connect your repository to Vercel
Vercel will automatically build and deploy your blog

License
MIT
