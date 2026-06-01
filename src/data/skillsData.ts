export interface SkillDetail {
  title: string;
  description: string;
  details: string;
  tools: string[];
}

export interface SkillsDataType {
  develop: SkillDetail;
  design: SkillDetail;
}

export const skillsData: SkillsDataType = {
  develop: {
    title: "BACKEND DEV",
    description: "Building scalable & robust server architectures",
    details: "Designing high-performance systems and secure RESTful microservices. Specializing in database optimization, API design, security implementations, and business logic processing.",
    tools: ["Java", "Spring Boot", "SQL Server", "MongoDB", "REST APIs", "Hibernate/JPA"]
  },
  design: {
    title: "FRONTEND DEV",
    description: "Creating responsive & interactive web applications",
    details: "Developing clean, structured client interfaces using modern frameworks. Connecting client applications to API services, managing state, and integrating custom animations.",
    tools: ["React", "TypeScript", "HTML5", "CSS3", "Vite", "Axios"]
  }
};
