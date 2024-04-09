import { getAllTestimonials } from "@/lib/api";

interface Testimonial {
  id: string;
  name: string;
  content: string;
  image: any;
}

export default async function Page() {
  const fetchedTestimonials = await getAllTestimonials();
  return (
    <div>
      <h1>Testimonials</h1>
      <ul>
        {fetchedTestimonials.map((testimonial: Testimonial) => (
          <li key={testimonial.name}>
            <p>{testimonial.name}</p>
            <p>{testimonial.content}</p>
            <img src={testimonial.image.url} alt={testimonial.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
