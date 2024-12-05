"use client"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Testimonial: React.FC = () => {
  return (
    <div className="h-[40rem] flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center overflow-hidden">
      <div className="my-4 md:my-10 flex flex-col md:gap-2 items-center justify-center text-black dark:text-white">
        <h4 className="sm:text-4xl text-2xl font-medium title-font uppercase">
          Testimonials
        </h4>
        <h6 className="font-semibold text-sm md:text-lg text-center opacity-75">this is dummy data :)</h6>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>

  )
}


const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Ankit Kumar",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "B. Bhawani ",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream. I'm Iron Man.",
    name: "Tony Stark",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Ashish Bareth",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Nikhil Dubey",
    title: "Moby-Dick",
  },
];
export default Testimonial