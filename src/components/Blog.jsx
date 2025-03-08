import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import blogPosts from "../data/blogPosts.json";

export default function Blog() {
  const [expandedPostId, setExpandedPostId] = useState(null);

  const toggleExpand = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  return (
    <section id="blog" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Blog</h2>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-700 dark:text-white p-6 rounded-lg shadow-lg"
            >
              {/* Featured Image */}
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              {/* Title and Date */}
              <h3 className="text-2xl font-bold mb-2 dark:text-white">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.date}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content (Collapsible) */}
              <div className={`overflow-hidden transition-all duration-300 ${
                expandedPostId === post.id ? "max-h-[1000px]" : "max-h-32"
              }`}>
                <ReactMarkdown
                  components={{
                    p: ({ node, ...props }) => (
                      <p className="text-gray-700 dark:text-gray-200" {...props} />
                    ),
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      return !inline && match ? (
                        <SyntaxHighlighter
                          style={dracula}
                          language={match[1]}
                          PreTag="div"
                          {...props}
                        >
                          {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Read More Button */}
              <button
                onClick={() => toggleExpand(post.id)}
                className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
              >
                {expandedPostId === post.id ? "Read Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}