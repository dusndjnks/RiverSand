'use client';

import { CalendarDays, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

import blog1 from "../../../public/images/blog (1).webp";
import blog2 from "../../../public/images/blog (2).webp";
import blog3 from "../../../public/images/blog (3).webp";
import blog4 from "../../../public/images/blog (4).webp";
import blog5 from "../../../public/images/blog (5).webp";
import blog6 from "../../../public/images/blog (6).webp";
import blog7 from "../../../public/images/blog (7).webp";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  image: StaticImageData;
  link: string;
}

const BlogPage = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Sustainable Sand Mining",
      description: "Exploring eco-friendly practices in sand extraction that protect river ecosystems while meeting construction demands.",
      date: "May 15, 2023",
      image: blog5,
      link: "#"
    },
    {
      id: 2,
      title: "Understanding Different Sand Grades",
      description: "A comprehensive guide to selecting the right sand quality for your construction project needs and specifications.",
      date: "June 2, 2023",
      image: blog3,
      link: "#"
    },
    {
      id: 3,
      title: "Innovations in Sand Transportation",
      description: "How modern logistics solutions are making sand delivery more efficient and environmentally friendly.",
      date: "July 18, 2023",
      image: blog6,
      link: "#"
    },
    {
      id: 4,
      title: "The Impact of Quality Sand on Construction",
      description: "Why using premium quality sand significantly improves the durability and strength of concrete structures.",
      date: "August 5, 2023",
      image: blog1,
      link: "#"
    },
    {
      id: 5,
      title: "Regulatory Changes in Sand Mining",
      description: "Understanding new government policies affecting sand procurement and what it means for your projects.",
      date: "September 12, 2023",
      image: blog2,
      link: "#"
    },
    {
      id: 6,
      title: "Comparing River Sand vs Manufactured Sand",
      description: "A detailed analysis of the pros and cons of different sand types for various construction applications.",
      date: "October 8, 2023",
      image: blog4,
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-[#f8e5e7]">
      {/* White header space */}
      <div className='bg-white h-20 w-full'></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#742731] mb-3">
            Golden Sands Insights
          </h1>
          <div className="w-20 h-1.5 bg-[#742731] mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Expert knowledge and industry updates for construction professionals
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-[#742731]/10 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <CalendarDays className="text-[#742731] mr-2" size={16} />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
                
                <Link 
                  href={post.link}
                  className="inline-flex items-center text-[#742731] font-medium hover:text-[#5a1e26] transition-colors"
                >
                  Read more
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#742731] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5a1e26] transition-colors shadow-sm"
          >
            Load More Articles
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;