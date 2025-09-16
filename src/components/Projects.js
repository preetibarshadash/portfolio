import React from "react";

function Projects() {
  return (
    <section id="about" className="projects">
      <h2> About Me </h2>
      <div className="project-list">
        <div className="project-item">
          <p>
            I'm a backend developer. I spend my days{" "}
            <em>building backends that actually work</em> - Java, Spring Boot,
            PostgreSQL, and a little magic to keep things running smoothly 😎.
          </p>
          <p>
            When I'm not coding, you might catch me{" "}
            <em>debugging life like it's a Spring app</em>, sipping far too much
            chai ☕, or geeking out over Harry Potter.
          </p>
        </div>

        <div className="project-item">
          <h3> What I Know </h3>
          <p>
            I'm comfortable wrangling{" "}
            <strong>Java, Python, Spring Boot, REST APIs</strong>, and databases
            like <strong>PostgreSQL and MySQL</strong>. I also speak fluent
            <strong> Git</strong> and occasionally charm Kafka streams into
            behaving properly 😅. Testing? I have a bitter-sweet friendship with
            JUnit & Mockito.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
