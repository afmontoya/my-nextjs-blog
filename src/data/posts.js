export const posts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    slug: 'getting-started-with-nextjs',
    date: 'March 12, 2025',
    excerpt: 'Learn the basics of Next.js and how to create your first application.',
    content: `
# Getting Started with Next.js

Next.js is a React framework that enables server-side rendering and static site generation.

## Why Next.js?

- **Server-side Rendering**: Improves performance and SEO
- **Static Site Generation**: Fast loading times and better user experience
- **File-based Routing**: Intuitive and easy to use
- **Built-in API Routes**: Create API endpoints easily

## Setting Up a Project

To create a new Next.js project, run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

## Next Steps

After setting up your project, you can:

1. Create new pages in the pages directory
2. Add components to your pages
3. Style your application using CSS or a styling library

Next.js makes building React applications easier and more efficient!
    `
  },
  {
    id: 2,
    title: 'Styling Your Next.js Blog',
    slug: 'styling-your-nextjs-blog',
    date: 'March 13, 2025',
    excerpt: 'Learn how to style your Next.js blog using Tailwind CSS.',
    content: `
# Styling Your Next.js Blog with Tailwind CSS

Tailwind CSS is a utility-first CSS framework that can help you style your Next.js blog quickly and efficiently.

## Why Tailwind CSS?

- **Utility-first**: Write styles directly in your HTML
- **Responsive**: Built-in responsive design utilities
- **Customizable**: Easily extend and customize the default configuration
- **Performance**: Only includes the styles you use

## Setting Up Tailwind CSS in Next.js

Next.js now includes support for Tailwind CSS out of the box when you create a new project.

## Example Styling

Here's an example of how to style a blog post card using Tailwind CSS:

\`\`\`jsx
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
  <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
  <p className="text-gray-600 mb-4">{post.date}</p>
  <p className="text-gray-700">{post.excerpt}</p>
  <a 
    href={\`/blog/\${post.slug}\`} 
    className="mt-4 inline-block text-blue-600 hover:text-blue-800"
  >
    Read more →
  </a>
</div>
\`\`\`

Tailwind CSS makes it easy to create beautiful designs without writing custom CSS!
    `
  }
];

export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug);
}

export function getAllPosts() {
  return posts;
}
