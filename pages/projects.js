import { projects } from "@/data/projects";
import Link from "next/link";
import React from "react";

function Projects() {
  return (
    <div>
      <h2>These are my projects</h2>
      {projects.map((project) => {
        return (
          <Link href={`/project/${project.id}`} key={project.id}>
            {project.name}
          </Link>
        );
      })}
    </div>
  );
}

export default Projects;
