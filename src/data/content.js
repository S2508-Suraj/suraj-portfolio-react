// ─────────────────────────────────────────────────────────────────────────────
//  EDIT THIS FILE TO UPDATE THE SITE.
//  Everything the portfolio renders comes from here — no component edits needed.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Suraj Kesharwani',
  firstName: 'Suraj',
  role: '.NET Full-Stack Developer',
  tagline:
    'I build scalable line-of-business web applications — C#, ASP.NET Core, React and SQL Server — from the schema up to the screen.',
  summary:
    'Results-driven .NET Full-Stack Developer with hands-on experience designing, developing and maintaining scalable web applications using C#, .NET Core/Framework, React and SQL Server, following OOP design patterns and n-tier architecture. Experienced in building RESTful Web APIs, ETL workflows and CI/CD pipelines, with regular use of AI-assisted development tools to accelerate delivery and improve code quality. Comfortable working in Agile/Scrum environments with strong problem-solving and analytical skills.',
  location: 'Delhi NCR, India',
  email: 'surajkesharwani9918@gmail.com',
  phones: ['+91 97949 30740', '+91 63865 80826'],
  availability: 'Open to full-stack .NET roles',
  resumeUrl: 'Suraj_Kesharwani_Resume.pdf',
  // Square image in /public — swap the file and change this name to replace it
  photo: 'suraj.jpg',
  // Optional — leave as empty strings to hide the link
  github: 'https://github.com/S2508-Suraj',
  linkedin: 'https://www.linkedin.com/in/surajkesharwani/',
}

export const quickFacts = [
  { label: 'Current role', value: '.NET Full-Stack Developer' },
  { label: 'At', value: 'Scanditech Solution Pvt Ltd' },
  { label: 'Since', value: 'January 2024' },
  { label: 'Core stack', value: 'C# · ASP.NET · React · SQL Server' },
]

export const skillGroups = [
  { title: 'Languages', items: ['C#', 'SQL', 'JavaScript', 'TypeScript', 'XML'] },
  {
    title: 'Frameworks',
    items: ['.NET Core', '.NET Framework', 'ASP.NET MVC', 'ASP.NET Core', 'ADO.NET', 'Entity Framework', 'LINQ'],
  },
  {
    title: 'Frontend',
    items: ['React', 'HTML', 'CSS', 'AJAX', 'JSON', 'Bootstrap', 'Tailwind CSS', 'jQuery'],
  },
  { title: 'Data & ETL', items: ['SQL Server', 'SSIS'] },
  {
    title: 'Architecture & Practices',
    items: [
      'OOP Design Patterns',
      'N-Tier Architecture',
      'Agile / Scrum',
      'Code Reviews',
      'Debugging & Performance Profiling',
    ],
  },
  {
    title: 'DevOps & Tools',
    items: ['Git', 'GitHub', 'GitHub Actions (CI/CD)', 'Visual Studio', 'VS Code', 'Postman', 'Swagger'],
  },
  {
    title: 'Servers & Deployment',
    items: [
      'IIS',
      'Application Pools',
      'Site Bindings',
      'web.config',
      'SSL / TLS Certificates',
      'Windows Server',
      'VM-Hosted Deployment',
    ],
  },
  {
    title: 'AI-Assisted Development',
    items: [
      'Claude Code',
      'Claude Agents',
      'Agentic Workflows',
      'Claude API',
      'AI Code Review',
      'GitHub Copilot',
    ],
  },
  { title: 'Other', items: ['REST APIs', 'Windows Services', 'JWT Authentication', 'SQL Agent Jobs'] },
]

export const experience = [
  {
    role: '.NET Full-Stack Developer',
    company: 'Scanditech Solution Pvt Ltd',
    period: '01/2024 — Present',
    current: true,
    groups: [
      {
        title: 'Backend & architecture',
        points: [
          'Developed and maintained web applications using C#, ASP.NET MVC, .NET Core, .NET Framework and SQL Server, following OOP design patterns and n-tier architecture for maintainability and scalability.',
          'Designed and built RESTful Web APIs enabling communication between the React frontend and backend services, using JSON for client–server data exchange.',
          'Implemented authentication and authorization using ASP.NET Identity and JWT tokens.',
          'Queried and manipulated data using LINQ and Entity Framework, alongside stored procedures for complex data operations.',
          'Developed a reusable currency conversion module by integrating a third-party REST API, enabling reuse across multiple applications and removing duplicate development effort.',
        ],
      },
      {
        title: 'Frontend',
        points: [
          'Built responsive UI components using React, JavaScript, TypeScript, jQuery, HTML, CSS, AJAX and Bootstrap.',
        ],
      },
      {
        title: 'Data, jobs & performance',
        points: [
          'Built ETL workflows using SSIS for data integration and processing between systems.',
          'Developed and maintained Windows Services for background task processing and automation.',
          'Optimized database queries, stored procedures, triggers and indexing, improving system performance by 30%.',
          'Automated daily agreement period updates and archive linking/delinking using SQL Agent Jobs, reducing manual effort and improving accuracy.',
        ],
      },
      {
        title: 'Deployment & IIS',
        points: [
          'Deployed and maintained ASP.NET applications on IIS across VM-hosted servers — creating sites, configuring application pools (CLR version, identity, recycling) and managing hostname and port bindings.',
          'Published builds from Visual Studio and MSBuild to IIS, managing releases and keeping development, staging and production environments in step.',
          'Maintained environment configuration through web.config — connection strings, appSettings, config transforms, URL rewrite rules and custom error handling.',
          'Configured HTTPS certificates and bindings along with Windows and anonymous authentication for secured internal applications.',
          'Diagnosed production issues from IIS logs and event traces — 500/502 responses, application pool crashes and file-permission failures — resolving them independently with minimal escalation.',
        ],
      },
      {
        title: 'AI-assisted engineering',
        points: [
          'Use Claude Code directly against the codebase for multi-file changes, refactors, debugging sessions and test coverage, keeping the work in-repo and reviewable.',
          'Run agentic workflows for multi-step tasks — tracing a bug through the stack, generating documentation and handling repetitive code work end to end — with the output reviewed before it lands.',
          'Apply AI-assisted code review on diffs to catch defects and security issues early, and to get oriented quickly in unfamiliar parts of a large legacy codebase.',
          'Build against the Claude API to bring agent-driven capability into applications.',
          'Use GitHub Copilot alongside this for inline completion and boilerplate reduction.',
        ],
      },
      {
        title: 'Delivery & collaboration',
        points: [
          'Set up and maintained CI/CD pipelines using GitHub Actions for automated build, test and deployment workflows.',
          'Collaborated in an Agile/Scrum environment using Git/GitHub — feature branching, merging and pull requests — and participated in code reviews to uphold coding standards.',
          'Worked directly with clients to gather requirements for new features and resolve bug-related queries, ensuring timely delivery within deadlines.',
        ],
      },
    ],
  },
]

export const projects = [
  {
    name: 'System Organizer',
    kind: 'Enterprise web application',
    stack: ['C#', '.NET MVC', 'SQL', 'JavaScript', 'jQuery', 'HTML', 'CSS'],
    points: [
      'Contributed to a trilingual (English / Swedish / French) web application for property management and construction project coordination, including role-based access control.',
      'Built document management, scheduling, task assignment (To-Do) and a Q&A module; integrated a third-party Gantt chart tool.',
      'Implemented Windows Services for alert emails and background status/data updates.',
    ],
  },
  {
    name: 'Company Organizer',
    kind: 'API-first platform',
    stack: ['C#', '.NET Core Web API', 'Entity Framework Core', 'SQL', 'JavaScript', 'React'],
    points: [
      'Implemented a JWT-based authentication system in .NET Core Web API for secure, stateless, scalable login and registration.',
      'Designed a modular, n-tier architecture supporting scalable integration with React on the frontend.',
    ],
  },
  {
    name: 'E-Commerce Web Application',
    kind: 'Storefront & admin',
    stack: ['C#', '.NET Framework', 'ASP.NET MVC', 'SQL Server', 'React'],
    points: [
      'Built admin and client functionality including product/category/order management, authentication, cart and payment integration.',
      'Optimized backend API calls and database queries, improving communication effectiveness by 40%.',
    ],
  },
  {
    name: 'Automatic Entry Vehicle Authentication System',
    kind: 'Computer vision',
    stack: ['Python', 'Tkinter', 'Machine Learning', 'CNN', 'Haar Cascade'],
    points: [
      'Built a real-time vehicle recognition system using Haar Cascade for plate detection and a CNN for character extraction, achieving 96% accuracy.',
    ],
  },
]

export const achievements = [
  {
    metric: '30%',
    title: 'Faster system performance',
    detail: 'Through optimized SQL queries, stored procedures and indexing.',
  },
  {
    metric: '40%',
    title: 'Better API communication',
    detail: 'RESTful APIs and query tuning that cut round-trip overhead.',
  },
  {
    metric: '96%',
    title: 'Vehicle recognition accuracy',
    detail: 'CNN-based plate and character recognition pipeline.',
  },
]

export const timeline = [
  {
    period: '01/2024 — Present',
    title: '.NET Full-Stack Developer',
    org: 'Scanditech Solution Pvt Ltd',
    detail:
      'Building and maintaining enterprise web applications end to end — C#, ASP.NET MVC/Core, React, SQL Server — and working directly with clients.',
    kind: 'work',
  },
  {
    period: 'Training',
    title: '.NET Full-Stack Developer Programme',
    org: 'Ducat India',
    detail:
      'Complete front-end and back-end training on the Microsoft stack: C#, .NET Core, ASP.NET MVC, SQL Server, Entity Framework, LINQ, Web API, HTML5, CSS3, JavaScript, Bootstrap and React — including real-time projects and deployment.',
    kind: 'training',
  },
  {
    period: '08/2019 — 06/2023',
    title: 'B.Tech, Electronics & Communication Engineering',
    org: 'Rajkiya Engineering College, Kannauj',
    detail: 'Four-year engineering degree.',
    kind: 'education',
  },
  {
    period: 'Schooling',
    title: 'Intermediate & High School',
    org: 'Janta Intermediate College, Mauaima, Prayagraj',
    detail: '',
    kind: 'education',
  },
]

export const extras = {
  languages: ['Hindi — Proficient', 'English — Proficient'],
  strengths: ['Quick learner', 'Self-motivated', 'Strong analytical & problem-solving skills'],
  interests: ['Exploring new technologies', 'Outdoor sports', 'Travel'],
}

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]
