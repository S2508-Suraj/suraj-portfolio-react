// ─────────────────────────────────────────────────────────────────────────────
//  EDIT THIS FILE TO UPDATE THE SITE.
//  Everything the portfolio renders comes from here — no component edits needed.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Suraj Kesharwani',
  firstName: 'Suraj',
  role: '.NET Developer  ·  Full-Stack, Backend & Production Support',
  tagline:
    'I build scalable line-of-business web applications — C#, ASP.NET Core, React and SQL Server — from the schema up to the screen, and keep them running in production.',
  summary:
    ".NET Developer with ~3 years' experience owning features end to end, from SQL Server schema and C# / ASP.NET Core Web APIs to React interfaces and IIS deployment. Handles production support, incident management, log analysis and root cause analysis for client-facing applications, writes unit tests with xUnit, and is currently building hands-on skills in Microsoft Azure. Works in Agile/Scrum teams with CI/CD via GitHub Actions, SSIS ETL workflows, and AI-assisted development using Claude Code and GitHub Copilot.",
  location: 'Delhi NCR, India',
  email: 'surajkesharwani9918@gmail.com',
  phones: ['+91 97949 30740', '+91 63865 80826'],
  availability: 'Open to .NET roles — full-stack, backend or production support',
  resumeUrl: 'Suraj_Kesharwani_Resume.pdf',
  // Square image in /public — swap the file and change this name to replace it
  photo: 'suraj.jpg',
  // Optional — leave as empty strings to hide the link
  github: 'https://github.com/S2508-Suraj',
  linkedin: 'https://www.linkedin.com/in/surajkesharwani/',
}

export const quickFacts = [
  { label: 'Current role', value: 'Software Developer (.NET)' },
  { label: 'At', value: 'Scanditech Solutions Pvt Ltd' },
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
  { title: 'Testing', items: ['xUnit', 'Unit Testing', 'Postman', 'Swagger'] },
  {
    title: 'Production Support',
    items: [
      'Incident Management',
      'Root Cause Analysis',
      'Log Analysis',
      'IIS Logs',
      'Windows Event Viewer',
      'Zoho Assist (remote support)',
    ],
  },
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
    items: ['Git', 'GitHub', 'GitHub Actions (CI/CD)', 'Visual Studio', 'VS Code'],
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
  { title: 'Cloud (learning)', items: ['Microsoft Azure'] },
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
    role: 'Software Developer (.NET Full-Stack)',
    company: 'Scanditech Solutions Pvt Ltd, Faridabad, Haryana',
    period: '01/2024 — Present',
    current: true,
    groups: [
      {
        title: 'Ownership & client delivery',
        points: [
          'Own end-to-end delivery of a multi-module ASP.NET MVC and .NET Core application in C#, .NET Framework and SQL Server, following OOP design patterns and n-tier architecture.',
          'Lead client requirements end to end — gathering them from stakeholders, translating them into technical solutions, and delivering within committed timelines.',
        ],
      },
      {
        title: 'Backend & APIs',
        points: [
          'Design RESTful Web APIs connecting React to backend services, secured with ASP.NET Identity and JWT tokens, including a reusable currency conversion module.',
          'Optimize SQL Server queries, stored procedures, triggers and indexing for a 30% performance gain, and access data through LINQ and Entity Framework.',
          'Automate recurring operations — agreement period updates, archive linking/delinking and alert emails — through SQL Agent Jobs, Windows Services and SSIS ETL workflows.',
        ],
      },
      {
        title: 'Frontend',
        points: [
          'Build responsive UI components using React, JavaScript, TypeScript, jQuery, HTML, CSS, AJAX and Bootstrap.',
        ],
      },
      {
        title: 'Testing',
        points: [
          'Write unit tests with xUnit for business and API layers, catching regressions before release and supporting stable weekly/monthly deployments.',
        ],
      },
      {
        title: 'Releases & IIS',
        points: [
          'Run weekly and monthly releases to IIS on VM-hosted servers — sites, application pools, bindings, web.config, HTTPS certificates and Windows authentication — published via MSBuild.',
        ],
      },
      {
        title: 'Production support',
        points: [
          'Resolve production incidents and escalations independently, performing root cause analysis and log analysis on 500/502 errors, application pool crashes and file-permission failures using IIS logs and Windows Event Viewer.',
          'Provide production support on VM-hosted servers via Zoho Assist remote access — monitoring application health, investigating issues on live environments and applying fixes with minimal downtime.',
        ],
      },
      {
        title: 'Delivery & collaboration',
        points: [
          'Establish CI/CD pipelines with GitHub Actions and peer-review code for the development team through feature branching and pull requests on Git/GitHub.',
        ],
      },
      {
        title: 'AI-assisted engineering',
        points: [
          'Drive AI-assisted engineering with Claude Code and agentic workflows — refactors, debugging, documentation, test coverage and code review on diffs.',
          'Build against the Claude API to bring agent-driven capability into applications.',
          'Use GitHub Copilot alongside this for inline completion and boilerplate reduction.',
        ],
      },
    ],
  },
]

export const projects = [
  {
    name: 'System Organizer',
    kind: 'Project management web application',
    stack: ['C#', '.NET MVC', 'SQL Server', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'IIS'],
    points: [
      'Contributed to a trilingual (English / Swedish / French) web application for property management and construction project coordination, including role-based access control.',
      'Delivered document management, scheduling, task assignment (To-Do) and a Q&A module; integrated a third-party Gantt chart tool.',
      'Created Windows Services for alert emails and background status/data updates.',
    ],
  },
  {
    name: 'Company Organizer',
    kind: 'API-first platform',
    stack: ['C#', '.NET Core Web API', 'Entity Framework Core', 'SQL Server', 'JavaScript', 'React'],
    points: [
      'Implemented JWT-based authentication in .NET Core Web API for secure, stateless, scalable login and registration.',
      'Designed a modular n-tier architecture with separate API, business and data layers, integrating with React on the frontend.',
    ],
  },
  {
    name: 'E-Commerce Web Application',
    kind: 'Storefront & admin',
    stack: ['C#', '.NET Framework', 'ASP.NET MVC', 'SQL Server', 'React'],
    points: [
      'Developed admin and client functionality including product/category/order management, authentication, cart and payment integration.',
      'Optimized backend API calls and database queries, improving communication effectiveness by 40%.',
    ],
  },
  {
    name: 'Automatic Entry Vehicle Authentication System',
    kind: 'Computer vision',
    stack: ['Python', 'Tkinter', 'Machine Learning', 'CNN', 'Haar Cascade'],
    points: [
      'Engineered a real-time vehicle recognition system using Haar Cascade for plate detection and a CNN for character extraction, achieving 96% accuracy.',
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
    org: 'Scanditech Solutions Pvt Ltd',
    detail:
      'Owning a multi-module ASP.NET MVC and .NET Core application end to end — C#, SQL Server, React, IIS releases and production support — and working directly with clients.',
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
    period: '04/2014 — 05/2017',
    title: 'Senior Secondary (Class XII) & Secondary (Class X)',
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
