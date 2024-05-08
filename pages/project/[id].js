import { projects } from "@/data/projects";
import React from "react";

function Project({ project }) {
  return (
    <div>
      <h2>{project.name}</h2>
      <ul>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </div>
  );
}

export default Project;

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: {
      id: project.id,
    },
  }));
  return {
    paths,
    fallback: true, // false or "blocking"
  };
}

export async function getStaticProps({ params }) {
  const project = projects.find((project) => project.id === params.id);
  return {
    props: {
      project,
    },
  };
}
