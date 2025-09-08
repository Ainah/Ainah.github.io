import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate DevOps Engineer & Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
            With over 5 years of experience in DevOps and a solid foundation 
            of 2 years as a system administrator, I specialize in building scalable, 
            reliable, and automated infrastructure.
            </p>

            <p className="text-muted-foreground">
            I thrive on bridging the gap between development and operations by leveraging 
            modern tools and cloud technologies to accelerate delivery and improve system resilience.
            Driven by a passion for solving complex challenges, I continuously seek to learn and adopt 
            innovative practices that keep me ahead in the fast-paced world of DevOps and cloud computing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://www.linkedin.com/in/mumu-aina/"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Request CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Infrastructure Automation</h4>
                  <p className="text-muted-foreground">
                  Building and maintaining scalable, reliable infrastructure using tools like Terraform,
                  Ansible, and CI/CD pipelines.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud Engineering
                  </h4>
                  <p className="text-muted-foreground">
                  Designing and managing cloud environments on AWS, GCP, OVH, and Azure to 
                  optimize performance and cost.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Monitoring & Reliability</h4>
                  <p className="text-muted-foreground">
                  Implementing monitoring, alerting, and incident response strategies to 
                  ensure system uptime and resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
