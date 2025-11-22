import BlogCards from '@/app/ui/BlogCard';
import React from 'react'
import blog1 from "@/public/images/blog1.png"
import blog2 from "@/public/images/blog2.png"
import blog3 from "@/public/images/blog3.png"

const Blog = () => {
    const blogs = [
      {
        image: blog1,
        date: "18",
        month: "NOV",
        category: "Food",
        admin: "Admin",
        comments: 65,
        title:
          "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
      },
      {
        image: blog2,
        date: "23",
        month: "JAN",
        category: "Food",
        admin: "Admin",
        comments: 65,
        title:
          "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
      },
      {
        image: blog3,
        date: "18",
        month: "NOV",
        category: "Food",
        admin: "Admin",
        comments: 65,
        title:
          "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
      },
    ];



  return (
    <>
      <section className="bg-gradient-to-b from-white via-softprimary/25 to-white py-20">
        <div className="container">
          <div className="heading mb-11 flex flex-col items-center gap-2 text-center">
            <p className="rounded-full bg-primary_color/15 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-hardprimary">
              Blog
            </p>
            <h2 className="text-[36px] font-semibold leading-[120%] text-black_main">
              Field notes & kitchen stories
            </h2>
            <p className="max-w-2xl text-sm text-secondary_color">
              Discover how our growers work, what is in season, and the meals
              our community is making this week.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((item, index) => (
              <BlogCards
                key={index}
                image={item.image}
                date={item.date}
                month={item.month}
                category={item.category}
                admin={item.admin}
                comments={item.comments}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog
