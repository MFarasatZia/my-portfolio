const logotext = "FARASAT";
const meta = {
    title: "M Farasat Zia - DevOps Engineer",
    description: "DevOps Engineer with 1+ years of experience in IT Industry, specializing in CI/CD, AWS cloud infrastructure, containerization, and automation. Building, deploying, and optimizing mission-critical deployments in production environments.",
};

const introdata = {
    title: "I'm M Farasat Zia",
    animated: {
        first: "I love DevOps",
        second: "I automate deployments",
        third: "I build CI/CD pipelines",
    },
    description: "An accomplished and result-oriented DevOps Engineer with 1+ years of experience in IT Industry, specializing in supporting, automating, and optimizing mission-critical deployments in production servers & cloud environments.",
    your_img_url: require("./assets/images/mydesk.jpg"),
};

const dataabout = {
    title: "About Me",
    aboutme: "I am a passionate DevOps Engineer with expertise in building, deploying, and managing cloud infrastructure. I specialize in CI/CD pipelines, containerization with Docker, AWS cloud services, and infrastructure as code using Terraform. My experience includes working with various tools like Jenkins, GitLab, Bitbucket, Kubernetes, and implementing security best practices with tools like SonarQube and OWASP Dependency Check.",
};

const worktimeline = [{
        jobtitle: "Associate DevOps Engineer",
        where: "The DevSwift",
        date: "Aug 2024 - Present",
    },
    {
        jobtitle: "DevOps Engineer",
        where: "Kish and Partner (eXiqtive Project)",
        date: "2024",
    },
    {
        jobtitle: "DevOps Engineer",
        where: "Bkwire",
        date: "2024",
    },
];

const skills = [{
        name: "AWS Cloud Services",
        value: 90,
    },
    {
        name: "Docker & Kubernetes",
        value: 85,
    },
    {
        name: "Terraform (IAC)",
        value: 80,
    },
    {
        name: "CI/CD Pipelines",
        value: 90,
    },
    {
        name: "Jenkins/GitLab/Bitbucket",
        value: 85,
    },
    {
        name: "Linux Administration",
        value: 80,
    },
    {
        name: "Python & JavaScript",
        value: 70,
    },
    {
        name: "Security Tools (OWASP, SonarQube)",
        value: 75,
    },
];

const services = [{
        title: "CI/CD Pipeline Development",
        description: "Design and implement end-to-end CI/CD pipelines using Jenkins, GitLab, and Bitbucket. Automate build, test, and deployment processes for improved efficiency and reliability.",
    },
    {
        title: "Cloud Infrastructure Management",
        description: "Provision and manage AWS cloud infrastructure using Terraform. Experience with ECS, EKS, Lambda, RDS, and other AWS services for scalable and reliable deployments.",
    },
    {
        title: "Container Orchestration",
        description: "Expertise in Docker containerization and Kubernetes orchestration. Build optimized Docker images and manage containerized applications in production environments.",
    },
    {
        title: "Security & Compliance",
        description: "Implement security best practices using tools like SonarQube, OWASP Dependency Check, and Trivy. Ensure code quality and vulnerability management across applications.",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        title: "eXiqtive",
        organization: "Kish and Partner",
        role: "DevOps Engineer",
        link: "https://account.exiqtive.com/login",
        technologies: ["Bitbucket", "ECS", "ECR", "S3", "Terraform", "Atlantis", "Sentry", "LaunchDarkly", "JIRA", "Confluence", "Docker", "Sonarqube", "Cloudwatch", "Linux", "Lambda", "RDS", "Chime"],
        responsibilities: [
            "Deploy applications to AWS ECS (Fargate) using CI/CD pipelines",
            "Manage and provision AWS infrastructure using Terraform",
            "Set up self-hosted Bitbucket runner to optimize CI/CD execution and reduce build time",
            "Reduced AWS cost by optimizing VPC architecture and resource placement",
            "Build CI/CD pipelines from scratch using Bitbucket Pipelines",
            "Write and maintain Dockerfiles for application containerization",
            "Deploy frontend applications on S3 and serve via CloudFront CDN",
            "Integrate code quality tools like SonarQube for static code analysis",
            "Integrating security analysis tools like OWASP Dependency check",
            "Use GitOps workflow with Atlantis for Terraform automation",
            "Creating a dashboard using cloudwatch for monitoring",
            "Prepare high level documentation explaining Installation & Configuration",
            "Automate Jira workflows and LaunchDarkly integrations",
            "Set up Sentry alerts for monitoring frontend and backend applications",
            "Using JIRA tool for ticket tracking",
            "Collaborate on ECS (Fargate) container orchestration setup",
            "Participate in Jira-based sprint planning and issue tracking"
        ],
        description: "AWS ECS deployment with CI/CD pipeline, Terraform infrastructure, and comprehensive monitoring setup."
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        title: "Bkwire",
        organization: "Bkwire",
        role: "DevOps Engineer",
        link: "https://bkwire.com",
        technologies: ["AWS", "Terraform", "Redis", "Lambda", "Gitlab", "RDS", "API-Gateway", "Terraform-Cloud", "ECR"],
        responsibilities: [
            "Creation of a new CI/CD pipeline from scratch in Gitlab",
            "Deployments to Lambda Function and Api-gateway",
            "Provision Infrastructure through Terraform",
            "Write and maintain Dockerfiles for application containerization",
            "Deploy frontend applications on S3 and serve via CloudFront CDN",
            "AWS Infrastructure Management",
            "Using Npx and Pip for building the project",
            "Integration of tools like Sonarqube",
            "Implement Roll back strategy on Front-end and Back-end"
        ],
        description: "GitLab CI/CD pipeline with Lambda functions, API Gateway, and infrastructure automation using Terraform."
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        title: "Cheddarmedia",
        organization: "Cheddarmedia",
        role: "DevOps Engineer",
        link: "https://hkia.cheddarmedia.hk",
        technologies: ["AWS Light-sale", "Nessus", "Wordpress"],
        responsibilities: [
            "Removed default Server headers from HTTP responses to prevent server type and version disclosure",
            "Prevents attackers from leveraging known vulnerabilities based on server/version fingerprints",
            "Applied a strict CSP to control which resources can be loaded by the browser",
            "Prevent Cross-Site Scripting (XSS), data injection, and clickjacking attacks",
            "Only allows content from trusted sources; all inline scripts/styles are blocked unless explicitly allowed",
            "Conducted a comprehensive vulnerability assessment using Nessus to identify misconfigurations, exposed services, and known CVEs",
            "Issues identified were reviewed, prioritized, and remediated accordingly",
            "Create a document for the client that describes the steps we have taken to secure the project"
        ],
        description: "Security hardening and vulnerability assessment using Nessus, implementing CSP headers and server security."
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        title: "AWS Solutions Architect Associate",
        organization: "KodeKloud",
        role: "Certification",
        link: "#",
        technologies: ["AWS Cloud", "Infrastructure Design", "Architecture"],
        responsibilities: [
            "Cloud infrastructure design and implementation expertise",
            "AWS services optimization and cost management",
            "Security and compliance implementation"
        ],
        description: "AWS Solutions Architect Associate Certification - Cloud infrastructure design and implementation expertise."
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        title: "Docker Associate",
        organization: "KodeKloud",
        role: "Certification",
        link: "#",
        technologies: ["Docker", "Containerization", "Container Orchestration"],
        responsibilities: [
            "Containerization and container orchestration best practices",
            "Docker image optimization and security",
            "Multi-stage builds and best practices"
        ],
        description: "Docker Associate Certification - Containerization and container orchestration best practices."
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        title: "Customer Delight Award",
        organization: "The DevSwift",
        role: "Recognition",
        link: "#",
        technologies: ["Project Management", "Client Satisfaction", "Technical Excellence"],
        responsibilities: [
            "Received for doing multiple POCs and getting good feedback",
            "Appreciation from engagements",
            "Outstanding project performance and dedication"
        ],
        description: "Customer Delight Award - Recognition for exceptional project performance and client satisfaction."
    },
];

const contactConfig = {
    YOUR_EMAIL: "farasatzia222@gmail.com",
    YOUR_FONE: "(+92)-332-4725969",
    description: "I'm passionate about DevOps and cloud technologies. Let's discuss how I can help optimize your infrastructure, automate your deployments, or build robust CI/CD pipelines for your projects.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/MFarasatZia",
    linkedin: "https://www.linkedin.com/in/m-farasat-zia-576492222/",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};