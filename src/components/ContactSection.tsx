import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section className="mb-4" id="contact">
      <h1 className="text-3xl text-primary underline decoration-double mb-4">
        Contact
      </h1>
      <div>
        <p className="text-md md:text-xl">You can find me on the following: </p>
        <div className="flex flex-col md:flex-row mt-2">
          <a
            href="https://www.github.com/MikeStavr"
            target="_href"
            className="hover:text-primary transition-colors duration-200"
          >
            <FaGithub className="mr-4" size={50} />
          </a>
          <a
            href="https://www.linkedin.com/in/michalis-s-188372210/"
            target="_href"
            className="hover:text-primary transition-colors duration-200"
          >
            <FaLinkedin className="mr-4" size={50} />
          </a>
          <a
            href="mailto:michalis.stavra@gmail.com"
            target="_href"
            className="hover:text-primary transition-colors duration-200"
          >
            <FaEnvelope className="mr-4" size={50} />
          </a>
        </div>
      </div>
    </section>
  );
}
