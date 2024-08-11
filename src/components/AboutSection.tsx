import { Fa1, Fa2, Fa3, Fa4, Fa5, FaComputer } from "react-icons/fa6";

export default function AboutSection() {
  const skills: string[] = ["Java", "C", "Python", "HTML, CSS & JS", "React"];

  const hardSkills: string[] = [
    "Problem Solving",
    "Teamwork",
    "Communication",
    "Time Management",
  ];
  const numbersAsIcon = [<Fa1 />, <Fa2 />, <Fa3 />, <Fa4 />, <Fa5 />];
  return (
    <section id="about">
      <h1 className="text-center text-3xl font-bold text-primary underline decoration-double mb-8 ">
        About
      </h1>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2">
        <div className="hidden md:block">
          <FaComputer size={100} />
        </div>
        <div>
          <p className="p-4 md:p-0 text-md md:text-lg">
            Ever since I was a little kid I liked tinkering with computers. At
            the age of 15 I wrote my first lines of code, making a plugin for a
            game called{" "}
            <a
              href="https://www.minecraft.net"
              className="text-green-400 hover:opacity-80"
            >
              Minecraft
            </a>
            . Since then I've been learning and improving my programming skills.
            In 2019 I got into the{" "}
            <a
              href="https://www.hmu.gr"
              className="text-primary hover:opacity-80"
            >
              Hellenic Mediterranean University
            </a>{" "}
            to study{" "}
            <a
              href="https://www.ece.hmu.gr"
              className="text-primary hover:opacity-80"
            >
              Electrical and Computer Engineering
            </a>
            . Whenever I have free time I like to go to the gym, cycle, walk my
            dog or go on adventures with my friends.
          </p>
        </div>
      </div>
      {/* Skills subsection */}
      <div className="mt-8">
        <h1 className="text-center text-primary text-3xl font-bold underline decoration-double">
          Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div>
            {/* Soft skills */}

            <h1 className="text-primary text-2xl underline font-bold text-center my-4">
              Soft skills
            </h1>
            <ul className="mt-2 menu bg-base-200 rounded-box w-56">
              {skills.map((skill, index) => (
                <li key={index} className="hover:text-primary">
                  <a>
                    {numbersAsIcon[index]} {skill}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {/* Hard skills */}
            <h1 className="text-primary text-2xl underline font-bold text-center my-4">
              Hard skills
            </h1>
            <ul className="mt-2 menu bg-base-200 rounded-box w-56">
              {hardSkills.map((skill, index) => (
                <li key={index} className="hover:text-primary">
                  <a>
                    {numbersAsIcon[index]} {skill}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
