const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React and Tailwind CSS in 2024",
    author: {
      name: "Sarah Johnson",
      role: "Senior Frontend Developer",
      avatar: "https://images.unsplash.com/photo-1536296621180-13f4d1eabac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3NjE1OTZ8&ixlib=rb-4.1.0&q=80&w=1080"
    },
    date: "March 15, 2024",
    category: "Development",
    tags: ["React", "Tailwind CSS", "Frontend", "Web Development"],
    excerpt: "Learn how to set up a modern React application with Tailwind CSS for efficient styling. We'll cover installation, configuration, and best practices for building responsive user interfaces.",
    content: "Modern web development demands efficient tools and frameworks that can help developers build beautiful, responsive applications quickly. React and Tailwind CSS have emerged as a powerful combination...",
    readingTime: 8,
    image: "https://images.unsplash.com/photo-1585183575516-e2c8e1c8149d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3NjE2MDB8&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true
  },
  {
    id: 2,
    title: "The Future of Web Development: AI Integration and Beyond",
    author: {
      name: "Michael Chen",
      role: "Tech Lead",
      avatar: "https://images.unsplash.com/photo-1536766768598-e09213fdcf22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3NjE2MDF8&ixlib=rb-4.1.0&q=80&w=1080"
    },
    date: "March 14, 2024",
    category: "Technology",
    tags: ["AI", "Future Tech", "Web Development", "Innovation"],
    excerpt: "Explore emerging trends in web development, from AI integration to Edge Computing. Discover how these technologies will shape the future of web applications and user experiences.",
    content: "The landscape of web development is rapidly evolving with artificial intelligence playing an increasingly central role. From AI-powered development tools to intelligent user interfaces...",
    readingTime: 12,
    image: "https://images.unsplash.com/photo-1464380573004-8ca85a08751a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3NjE2MDR8&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false
  },
  {
    id: 3,
    title: "Mastering State Management in React Applications",
    author: {
      name: "Alex Rodriguez",
      role: "Software Architect",
      avatar: "https://images.unsplash.com/photo-1520563683082-7ef74b616a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3NjE2MDZ8&ixlib=rb-4.1.0&q=80&w=1080"
    },
    date: "March 13, 2024",
    category: "Development",
    tags: ["React", "State Management", "Redux", "Context API"],
    excerpt: "Deep dive into various state management solutions in React. Compare Redux, Context API, and other alternatives to make informed decisions for your applications.",
    content: "Effective state management is crucial for building scalable React applications. While React's built-in useState and useReducer hooks work well for simple cases...",
    readingTime: 10,
    image: "https://images.unsplash.com/photo-1491317002516-6356a658b3e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3NjE2MDl8&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false
  },
  {
    id: 4,
    title: "Building Accessible Web Applications",
    author: {
      name: "Emily Martinez",
      role: "Accessibility Specialist",
      avatar: "https://images.unsplash.com/photo-1495924979005-79104481a52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3NjE2MTB8&ixlib=rb-4.1.0&q=80&w=1080"
    },
    date: "March 12, 2024",
    category: "Accessibility",
    tags: ["Accessibility", "WCAG", "Inclusive Design", "HTML"],
    excerpt: "Learn essential techniques and best practices for creating web applications that are accessible to all users, including those with disabilities.",
    content: "Web accessibility is not just a legal requirement but a fundamental aspect of good web development. By following WCAG guidelines and implementing proper ARIA attributes...",
    readingTime: 15,
    image: "https://images.unsplash.com/photo-1501043920236-460e5bdfec3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3NjE2MTR8&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false
  },
  {
    id: 5,
    title: "Performance Optimization Techniques for React",
    author: {
      name: "David Kim",
      role: "Performance Engineer",
      avatar: "https://images.unsplash.com/photo-1516742720271-6ae39cbc5bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3NjE2MTV8&ixlib=rb-4.1.0&q=80&w=1080"
    },
    date: "March 11, 2024",
    category: "Performance",
    tags: ["React", "Performance", "Optimization", "Web Vitals"],
    excerpt: "Discover advanced techniques for optimizing React applications. From code splitting to memorization, learn how to build lightning-fast web experiences.",
    content: "Performance optimization is crucial for providing a smooth user experience. In this comprehensive guide, we'll explore various techniques to improve your React application's performance...",
    readingTime: 13,
    image: "https://images.unsplash.com/photo-1434494243370-596416019a0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3NjE2MTh8&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false
  }
];

export default blogPosts;