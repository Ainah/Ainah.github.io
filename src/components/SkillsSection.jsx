import { useState } from "react";
import { cn } from "@/lib/utils";

import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGitlab,
  FaLinux,
  FaJenkins,
  FaNodeJs,
  FaDatabase,
  FaMicrosoft,
  FaTerminal,
} from "react-icons/fa";
import {
  SiTerraform,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
  SiGooglecloud,
  SiPostgresql,
  SiRedis,
  SiKubernetes,
} from "react-icons/si";

const skills = [
  // Automation
  { name: "GitLab CI/CD", level: 90, category: "automation", icon: FaGitlab },
  { name: "GitHub Actions", level: 85, category: "automation", icon: FaGitAlt },
  { name: "Jenkins", level: 80, category: "automation", icon: FaJenkins },
  { name: "Terraform", level: 80, category: "automation", icon: SiTerraform },
  { name: "Ansible", level: 75, category: "automation", icon: SiAnsible },

  // Cloud
  { name: "AWS", level: 85, category: "cloud", icon: FaAws },
  { name: "Google Cloud", level: 80, category: "cloud", icon: SiGooglecloud },
  { name: "Azure DevOps", level: 75, category: "cloud", icon: FaMicrosoft },

  // Containers & Orchestration
  { name: "Docker", level: 90, category: "containers", icon: FaDocker },
  { name: "Kubernetes", level: 85, category: "containers", icon: SiKubernetes },

  // Monitoring
  { name: "Prometheus", level: 80, category: "monitoring", icon: SiPrometheus },
  { name: "Grafana", level: 85, category: "monitoring", icon: SiGrafana },

  // Tools & Scripting
  { name: "Linux CLI", level: 95, category: "tools", icon: FaLinux },
  { name: "Bash", level: 85, category: "tools", icon: FaTerminal },
  { name: "Git", level: 90, category: "tools", icon: FaGitAlt },

  // Databases
  { name: "PostgreSQL", level: 75, category: "databases", icon: SiPostgresql },
  { name: "Redis", level: 70, category: "databases", icon: SiRedis },
  { name: "SQL/NoSQL", level: 70, category: "databases", icon: FaDatabase },

  // Extra
  { name: "Node.js", level: 70, category: "tools", icon: FaNodeJs },
];

const categories = [
  "all",
  "automation",
  "cloud",
  "containers",
  "monitoring",
  "tools",
  "databases",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30 custom-nav-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          DevOps <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => {
            const Icon = skill.icon;
            return (
              <div
                key={key}
                className="bg-card p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-md group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {skill.name}
                  </h3>
                </div>

                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out_forwards]"
                    style={{ width: skill.level + "%" }}
                  />
                </div>

                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
