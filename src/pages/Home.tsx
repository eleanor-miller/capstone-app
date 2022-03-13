import React, { useEffect, useState } from "react";
import { getAllProjects } from "../services/ProjectService";
import ProjectCard from "../components/Card";
import { Project } from "../Types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";

function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getAllProjects().then((projects) => {
      setProjects(projects!);
    });
  }, []);

  return (
    <>
      <header className="Header">
        <Header />
      </header>

      <ProjectCard />

      <footer className="Footer">
        <Footer />
      </footer>
    </>
  );
}
export default Home;
