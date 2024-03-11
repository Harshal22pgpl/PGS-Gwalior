"use client";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import ErrorSvg from "@/components/SVG/NotFoundSvg";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  const handleHome = () => {
    router.push("/");
  };
  return (
    <Container className="flex">
      <Container className="md:w-1/2 p-11" size="custom">
        <div className="flex space-x-2">
          <div className=" animate-bounce text-5xl mt-11">404</div>
          <div
            className=" animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className=" animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-5xl font-bold mb-8">Lost in Metrix.</h3>

          <p>
            You have reached the corner of the universe. The page you requested
            could not be found. Don't worry and return to your destination.
          </p>
          <Container size="custom" className="flex gap-5">
            <Button btnType="secondary" onClick={handleHome}>
              Home
            </Button>
            <Button btnType="tertiary">Back</Button>
          </Container>
        </div>
      </Container>
      <Container className="md:w-1/2" size="custom">
        <ErrorSvg />
      </Container>
    </Container>
  );
};

export default NotFound;
