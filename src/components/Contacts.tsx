"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio de email
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Obrigado pelo seu contato. Responderei em breve!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-navy/50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos trabalhar <span className="text-gradient">juntos?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Entre em contato e vamos conversar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-8">Informações de Contato</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-accent/10 rounded-lg flex items-center justify-center">
                  <Mail className="text-green-accent" size={20} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:renatowillon@gmail.com"
                    className="text-gray-400 hover:text-green-accent transition-colors"
                  >
                    renatowillon@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-accent/10 rounded-lg flex items-center justify-center">
                  <Phone className="text-green-accent" size={20} />
                </div>
                <div>
                  <p className="font-medium">Telefone</p>
                  <a
                    href="tel:+5583988332659"
                    className="text-gray-400 hover:text-green-accent transition-colors"
                  >
                    +55 (83) 98833-2659
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="text-green-accent" size={20} />
                </div>
                <div>
                  <p className="font-medium">Localização</p>
                  <p className="text-gray-400">João Pessoa, PB - Brasil</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-bold mb-6">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/renatowillon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-accent/10 rounded-lg flex items-center justify-center text-green-accent hover:bg-green-accent hover:text-white transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/renatowillon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-accent/10 rounded-lg flex items-center justify-center text-green-accent hover:bg-green-accent hover:text-white transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:renato.willon@email.com"
                  className="w-12 h-12 bg-green-accent/10 rounded-lg flex items-center justify-center text-green-accent hover:bg-green-accent hover:text-white transition-all"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <form
              onSubmit={handleSubmit}
              className="bg-dark-blue rounded-xl p-8 space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy border border-gray-600 rounded-lg focus:outline-none focus:border-green-accent transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy border border-gray-600 rounded-lg focus:outline-none focus:border-green-accent transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy border border-gray-600 rounded-lg focus:outline-none focus:border-green-accent transition-colors resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary justify-center ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
