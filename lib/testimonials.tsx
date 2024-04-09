import { getAllTestimonials } from "@/lib/api";

interface Testimonial {
  name: string;
  content: string;
  image: any;
}

export default async function Page() {
  const fetchedTestimonials = await getAllTestimonials();
  const moreTestimonials = fetchedTestimonials.slice(0, 3);
  
  return (
    <div className="flex flex-wrap justify-around">
      <h2 className="w-full text-center mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight m-5">
        Testimonials
      </h2>
      {moreTestimonials.map((testimonial: Testimonial) => (
        <div
          key={testimonial.name}
          className="flex flex-col items-center bg-white shadow-md m-4 p-4 rounded-lg w-64"
        >
          <img
            src={testimonial.image.url}
            alt={testimonial.name}
            className="w-32 h-32 rounded-full mb-4"
          />
          <p className="font-bold">{testimonial.name}</p>
          <p className="text-center">"{testimonial.content}"</p>
        </div>
      ))}
    </div>
  );
}

// import { getAllTestimonials } from "@/lib/api";
// import { useState } from "react";

// interface Testimonial {
//   id: string;
//   name: string;
//   content: string;
//   image: any;
// }

// export default async function Page() {
//   const fetchedTestimonials = await getAllTestimonials();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === fetchedTestimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? fetchedTestimonials.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="flex flex-wrap justify-around relative">
//       <h2 className="w-full text-center mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight m-5">
//         Testimonials
//       </h2>
//       {fetchedTestimonials.map((testimonial: Testimonial, index) => (
//         <div
//           key={testimonial.name}
//           className={`testimonial ${
//             index === currentIndex ? "active" : ""
//           }`}
//         >
//           <img
//             src={testimonial.image.url}
//             alt={testimonial.name}
//             className="w-32 h-32 rounded-full mb-4"
//           />
//           <p className="font-bold">{testimonial.name}</p>
//           <p className="text-center">"{testimonial.content}"</p>
//         </div>
//       ))}
//       <button className="absolute left-0 top-1/2 transform -translate-y-1/2" onClick={prevTestimonial}>Previous</button>
//       <button className="absolute right-0 top-1/2 transform -translate-y-1/2" onClick={nextTestimonial}>Next</button>
//     </div>
//   );
// }