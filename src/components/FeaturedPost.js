import React from "react";

const FeaturedPost = () => {
  // Featured post data - in a real app, this would come from props or API
  const featuredPost = {
    id: "featured-1",
    title: "The Complete Guide to Modern Frontend Development in 2024",
    excerpt: "Discover the latest tools, frameworks, and best practices that are shaping the future of frontend development. From WebAssembly to Micro-Frontends, we explore the technologies you need to master to stay ahead in the rapidly evolving world of web development.",
    author: "Emma Watson",
    authorRole: "Senior Developer Advocate",
    date: "March 16, 2024",
    readingTime: 15,
    category: "Technology",
    tags: ["Frontend", "JavaScript", "React", "Web Development"],
    image: "https://images.unsplash.com/photo-1414690165279-49ab0a9a7e66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3NjE1NDh8&ixlib=rb-4.1.0&q=80&w=1080"
  };

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg overflow-hidden mb-12">
      <div className="flex flex-col md:flex-row">
        {/* Featured Image */}
        <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white text-xs uppercase font-bold tracking-wider py-1 px-3 rounded-full">
              Featured
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-3">
              <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                {featuredPost.category}
              </span>
              <span className="text-gray-500 text-sm ml-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="128 72 128 128 184 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                <span className="ml-1">{featuredPost.readingTime} min read</span>
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-700 transition-colors">
              <a href={`/post/${featuredPost.id}`}>{featuredPost.title}</a>
            </h2>

            <p className="text-gray-600 mb-6 line-clamp-3 md:line-clamp-4 text-base">
              {featuredPost.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {featuredPost.tags.map((tag, index) => (
                <a
                  key={index}
                  href={`/tag/${tag.toLowerCase()}`}
                  className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-white shadow-sm">
                <img src="https://images.unsplash.com/photo-1621525278689-4779d647a9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3NjE1NjN8&ixlib=rb-4.1.0&q=80&w=1080" alt="professional female developer portrait" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{featuredPost.author}</p>
                <p className="text-xs text-gray-500">{featuredPost.authorRole}</p>
              </div>
            </div>
            <div className="text-sm text-gray-500 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="176" y1="24" x2="176" y2="52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="80" y1="24" x2="80" y2="52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="40" y1="88" x2="216" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="84 132 100 124 100 180" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M138.14,132a16,16,0,1,1,26.64,17.63L136,180h32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              <span className="ml-1">{featuredPost.date}</span>
            </div>
          </div>

          <a
            href={`/post/${featuredPost.id}`}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg inline-flex items-center justify-center transition-colors"
          >
            Read Full Article
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="144 96 96 96 96 144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="160" x2="96" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;