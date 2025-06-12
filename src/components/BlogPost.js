import React from "react";

const BlogPost = ({ post }) => {
  const { title, author, date, category, excerpt, readingTime, image } = post;

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden mb-8 transition-transform duration-300 hover:shadow-lg hover:scale-[1.01]">
      <div className="h-48 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <img src="https://images.unsplash.com/photo-1517859863896-7417ce1c71fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3NjE0NTF8&ixlib=rb-4.1.0&q=80&w=1080" alt="blog post featured image related to article content" />
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
            {category}
          </span>
          <span className="text-gray-500 text-sm ml-auto flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="128 72 128 128 184 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
            <span className="ml-1">{readingTime} min read</span>
          </span>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-700">
          {title}
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-4">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
              <img src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3NjE0NTd8&ixlib=rb-4.1.0&q=80&w=1080" alt="profile avatar for blog author" />
            </div>
            <span className="font-medium text-sm text-gray-800">{author}</span>
          </div>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        
        <button className="mt-4 text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors flex items-center">
          Read more
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="144 96 96 96 96 144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="160" x2="96" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
        </button>
      </div>
    </article>
  );
};

export default BlogPost;