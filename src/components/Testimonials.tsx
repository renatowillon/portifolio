"use client";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/models/Testimonials";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que dizem sobre
            <span className="text-gradient">meu trabalho</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feedback de colegas, líderes e clientes que tiveram a oportunidade
            de trabalhar comigo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-navy rounded-2xl p-8 md:p-12 animate-fade-in">
            <Quote
              className="absolute top-6 left-6 text-green-accent opacity-20"
              size={40}
            />

            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-accent/20">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 italic">
                {currentTestimonial.content}
              </blockquote>

              <div className="flex justify-center mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current"
                    size={20}
                  />
                ))}
              </div>

              <div>
                <h4 className="text-xl font-bold text-white">
                  {currentTestimonial.name}
                </h4>
                <p className="text-green-accent font-medium">
                  {currentTestimonial.role}
                </p>
                <p className="text-gray-400 text-sm">
                  {currentTestimonial.company}
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-green-accent/10 hover:bg-green-accent/20 text-green-accent transition-colors"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-green-accent" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-green-accent/10 hover:bg-green-accent/20 text-green-accent transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fade-in-up">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-accent mb-2">15+</div>
            <p className="text-gray-400">Projetos Concluídos</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-accent mb-2">98%</div>
            <p className="text-gray-400">Satisfação dos Clientes</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-accent mb-2">2+</div>
            <p className="text-gray-400">Anos de Experiência</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
