import React, { useEffect, useState } from "react";
import { getAllProjects } from "../services/ProjectService";
import { Project } from "../Types";
import "../App.css";

import { SlButton, SlCard, SlIcon } from "@shoelace-style/shoelace/dist/react";

const ProjectCard = () => (
  <>
    <SlCard className="card-overview">
      <img
        slot="image"
        src="https://10rowsaday.com/wp-content/uploads/2019/06/understand-knitting7.jpg"
        alt="Pull project name."
      />
      <strong>Pull project name</strong>
      <br />
      <br />
      <small>Pull project start date</small>
      <div slot="footer">
        <SlButton className="projects">
          <SlIcon slot="suffix" name="pencil"></SlIcon>
          Edit
        </SlButton>

        <SlButton className="projects">
          <SlIcon slot="suffix" name="trash"></SlIcon>
          Delete
        </SlButton>
      </div>
    </SlCard>
  </>
);
export default ProjectCard;
