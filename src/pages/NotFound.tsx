import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <FaExclamationTriangle className="text-4xl text-yellow-500" size={150} />
      <h1 className="text-4xl font-bold p-2">404 - Not Found</h1>
      <p className="p-2 text-md md:text-xl">
        The page you are looking for could not be found.
      </p>
      <a href="/" className="btn btn-neutral hover:text-primary">
        Take me to the homepage!
      </a>
    </div>
  );
}
