export default function HeroSection() {
  return (
    <div className="hero bg-base-200 rounded-md">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl">
            Hello, my name is{" "}
            <span className="text-primary font-bold">
              Michalis Stavrakopoulos
            </span>
            .
          </h1>
          <p className="py-6">
            I am an undergraduate student studying Electrical and Computer
            Engineering at Hellenic Mediterranean University in Greece, Crete.
          </p>
          <a href="#contact" className="btn btn-primary mr-4">
            Contact
          </a>
          <a href="/cv.pdf" target="_blank" className="btn btn-primary">
            View CV
          </a>
        </div>
      </div>
    </div>
  );
}
