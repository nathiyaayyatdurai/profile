import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: "Karthick V",
          description:
            "A passionate Full Stack Web Developer and Procurement engineer.",
          image:
            "https://avatars.githubusercontent.com/u/89347333?s=400&u=4eb0a0ab3e48f21db1876e7bb78eafc967ab5a98&v=4",
          url: "https://developer-portfolio-1hanzla100.vercel.app",
          keywords: [
            "karthyv",
            "Karthick V",
            "karthyv portfolio",
            "MERN portfolio",
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Projects />
      <Education />
      <Experience />
      <Feedbacks />

      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
