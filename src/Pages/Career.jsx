import CareerForm from "../components/Career/CareerForm";
import { Fade } from "react-awesome-reveal"
import CurrentOpenings from "../components/Career/CurrentOpenings";

const Career = () => {
  return (
    <div>
    <Fade direction="bottom">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-3 mx-11 mt-14">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-roboto font-bold tracking-wide leading-10">
            Hey There,
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-roboto font-bold tracking-wide leading-10 text-[#2563EB] my-4">
            Join Us
          </h1>
          <p className="mt-5 text-lg font-medium text-justify text-gray-500">
            At{" "}
            <span className="underline decoration-[#2563EB] underline-offset-4 my-8 text-black">
              Shad<span className="text-[#2563EB]">Box</span>
            </span>{" "}
            Infosystem, we are always looking for talented individuals to join
            our team of innovative web developers. As a leading tech company
            building cutting-edge applications, we need creative problem-solvers
            who are passionate about using technology to make a positive impact.
          </p>
          <p className="mt-5 text-lg font-medium text-justify text-gray-500">
            Our developers work on projects spanning various industries and
            technologies. We embrace collaboration and encourage our teams to
            share ideas and expertise. You&#39;ll have the opportunity to learn
            from experienced mentors while also bringing your own perspectives
            and skills to the table.
          </p>
          <p className="mt-5 text-lg font-medium text-justify text-gray-500">
            If you are an ambitious, self-driven developer looking to join a
            team of like-minded professionals, we want to hear from you. Bring
            your talent and energy to{" "}
            <span className="underline decoration-[#2563EB] underline-offset-4 my-8 text-black">
              Shad<span className="text-[#2563EB]">Box</span>
            </span>
            , where you can gain invaluable experience while creating innovative
            solutions that reach millions of users.
          </p>
          <p className="mt-5 text-lg font-medium text-justify text-gray-500"></p>
        </div>
        <div className="mx-3 hidden lg:block">
          <img
            className=" max-w-sm md:max-w-lg rounded-lg mt-8 hover:shadow-lg hover:scale-105 transition"
            src="https://images.pexels.com/photos/3746957/pexels-photo-3746957.jpeg?auto=compress&cs=tinysrgb&w=900&h=550&dpr=1"
          />
        </div>
      </div>
      </Fade>
      <Fade direction="bottom">
      <CurrentOpenings/>
      </Fade>
    </div>
  );
};

export default Career;