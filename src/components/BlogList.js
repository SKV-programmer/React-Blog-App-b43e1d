import React from "react";
import BlogPost from "./BlogPost";

const BlogList = () => {
  // Mock blog post data - in a real app, this would come from an API or props
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React and Tailwind CSS",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Development",
      excerpt: "Learn how to set up a modern React application with Tailwind CSS for efficient styling. We'll cover installation, configuration, and best practices for building responsive user interfaces.",
      readingTime: 8,
      image: "https://images.unsplash.com/photo-1441015401724-70d16b783f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3NjE0Njh8&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      title: "The Future of Web Development: What's Next?",
      author: "Michael Chen",
      date: "March 14, 2024",
      category: "Technology",
      excerpt: "Explore emerging trends in web development, from WebAssembly to Edge Computing. Discover how these technologies will shape the future of web applications and user experiences.",
      readingTime: 12,
      image: "https://images.unsplash.com/photo-1733509075185-ec13828106db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3NjE0NzN8&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      title: "Mastering State Management in React",
      author: "Alex Rodriguez",
      date: "March 13, 2024",
      category: "Development",
      excerpt: "Deep dive into various state management solutions in React. Compare Redux, Context API, and other alternatives to make informed decisions for your applications.",
      readingTime: 10,
      image: "https://images.unsplash.com/photo-1531256379416-9f000e90aacc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3NjE0NzV8&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center">
          Load More Posts
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(0 256) rotate(-90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="96 112 96 160 144 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="96" x2="96" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
        </button>
      </div>
    </div>
  );
};

export default BlogList;