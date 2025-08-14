import Link from "next/link";


const blogPosts = [
  {
    title: "Choosing the Right Sand for Your Construction",
    excerpt: "Learn how different sand types affect concrete strength and plastering quality.",
    img: "https://acceptbusiness.net/wp-content/uploads/2020/02/Concrete-Sand-White-1170x500.jpg",
    date: "May 15, 2023",
  },
  {
    title: "Sustainable Sand Mining Practices",
    excerpt: "How we're implementing eco-friendly sourcing while maintaining quality standards.",
    img: "https://knippleaggregates.com/wp-content/uploads/2020/09/concrete-sand-supplier.jpg",
    date: "April 28, 2023",
  },
];

export default function Blogs() {
  return (
    <section className="py-20 bg-[#f9f4f0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#742731] mb-4">
            Latest From Our Blog
          </h2>
          <p className="text-xl text-[#2f2f2f] max-w-2xl mx-auto">
            Insights and updates about construction materials
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-[#eae2d6] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="relative w-full h-64">
                <img src={post.img} alt={post.title}  className="object-cover h-full w-full"  />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#742731] mb-2">{post.title}</h3>
                <p className="text-[#2f2f2f] mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#2f2f2f]/70">{post.date}</span>
                  <Link href="/blog" className="text-[#742731] hover:text-[#4b1e25] font-medium">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}