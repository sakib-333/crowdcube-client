import React from "react";

const Blog = () => {
  const posts = [
    {
      photo: "/logo-1.png",
      title: "How Crowdfunding is Changing the World",
      author: "Jane Doe",
      date: "November 10, 2024",
      excerpt:
        "Crowdfunding has evolved from a niche practice to a mainstream method for funding various types of projects...",
      link: "#",
    },
    {
      photo: "/logo-2.png",
      title: "Top 5 Tips for Running a Successful Campaign",
      author: "John Smith",
      date: "November 5, 2024",
      excerpt:
        "Whether you’re a first-time creator or a seasoned entrepreneur, these tips will help you run a successful crowdfunding campaign...",
      link: "#",
    },
    {
      photo: "/logo-3.png",
      title: "The Future of Crowdfunding and Blockchain Technology",
      author: "Alice Johnson",
      date: "October 30, 2024",
      excerpt:
        "Blockchain technology is making waves in the crowdfunding industry. Let’s explore the potential of combining these two forces...",
      link: "#",
    },
  ];
  return (
    <div className="mt-8 md:mt-12 lg:mt-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-4 md:mb-6 lg:mb-8">
        Blogs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-all"
          >
            <figure className="px-4 pt-4">
              <img
                src={post.photo}
                alt="Blog Post"
                className="w-10 rounded-lg"
              />
            </figure>
            <div className="card-body p-6">
              <h3 className="text-2xl font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-500 mt-2">
                <span className="font-semibold">By</span> {post.author} |{" "}
                <span>{post.date}</span>
              </p>
              <p className="mt-4 text-gray-700">{post.excerpt}</p>
              <div className="card-actions justify-end mt-4">
                <a href={post.link} className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
