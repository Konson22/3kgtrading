/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { projects } from "../data/projects";

const ProjectsContext = createContext(null);

export function ProjectsProvider({ children }) {
  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const ctx = useContext(ProjectsContext);
  if (!ctx) throw new Error("useProjects must be used within ProjectsProvider");
  return ctx;
}
