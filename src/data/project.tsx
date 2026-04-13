export type Project = {
  slug: string;
  title: string;
  status: "done" | "ongoing";
  isMobileApp?: boolean;
  shortDescription: string;
  description: React.ReactNode;
  techStack: string[];
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "keuangan",
    title: "University Financial Management (Web)",
    status: "done",
    shortDescription:
      "University financial management system with dashboards, requests, verification, payments, reporting, and role-based workflows. Built with Next.js and Ant Design.",
    description: (
      <div className="space-y-3">
        <p>
          A comprehensive web-based financial management system designed to
          support end-to-end financial operations within a university
          environment. The application streamlines planning, execution,
          verification, and reporting of financial activities across multiple
          units and roles.
        </p>
        <p>
          The system provides a centralized dashboard for monitoring financial
          status and activities, enabling users to select work plans, create
          funding requests, and manage inventory funds and employee wages
          efficiently. It supports complex financial workflows including letters
          of accountability using dynamic forms, multi-step verification
          processes, payments and return payments, employee tax management, and
          receipt template configuration.
        </p>
        <p>
          Additional features include official travel management, virtual
          account integration, detailed financial reporting, and a robust
          settings module for managing users, roles, standard costs, dynamic
          forms, verification steps, and operational schedules. The application
          is built to handle role-based access and approval flows across
          different organizational levels.
        </p>
      </div>
    ),
    techStack: [
      "Framework: Next.js (React)",
      "Language: TypeScript",
      "UI Library: Ant Design (AntD)",
    ],
    images: [
      "/project/keuangan/1.png",
      "/project/keuangan/2.png",
      "/project/keuangan/3.png",
      "/project/keuangan/4.png",
      "/project/keuangan/5.png",
      "/project/keuangan/6.png",
      "/project/keuangan/7.png",
      "/project/keuangan/8.png",
      "/project/keuangan/9.png",
      "/project/keuangan/10.png",
      "/project/keuangan/11.png",
      "/project/keuangan/12.png",
      "/project/keuangan/13.png",
      "/project/keuangan/14.png",
      "/project/keuangan/15.png",
      "/project/keuangan/16.png",
      "/project/keuangan/17.png",
      "/project/keuangan/18.png",
      "/project/keuangan/19.png",
      "/project/keuangan/20.png",
      "/project/keuangan/21.png",
    ],
  },
  {
    slug: "keuangan-mobile",
    title: "University Financial Management (Mobile)",
    status: "done",
    isMobileApp: true,
    shortDescription:
      "Mobile version of a university financial system with core features, built using Flutter and shared APIs.",
    description: (
      <div className="space-y-3">
        <p>
          A mobile version of the university financial management system
          designed to provide essential financial functionalities on the go. The
          application focuses on core features such as dashboard overview,
          request monitoring, verification and approval, payment status
          tracking, and basic reporting, while excluding advanced administrative
          and configuration modules available in the web version.
        </p>
        <p>
          The mobile app is built to complement the web platform by consuming
          the same backend APIs, ensuring data consistency and seamless
          integration across platforms. It enables users to stay informed and
          perform key financial actions efficiently from mobile devices,
          supporting role-based access and approval workflows.
        </p>
      </div>
    ),
    techStack: [
      "Framework: Flutter",
      "Language: Dart",
      "UI Library: Material Design",
      "Authentication: JWT-based authentication",
    ],
    images: [
      "/project/keuangan-mobile/1.jpg",
      "/project/keuangan-mobile/2.jpg",
      "/project/keuangan-mobile/3.jpg",
      "/project/keuangan-mobile/4.jpg",
      "/project/keuangan-mobile/5.jpg",
      "/project/keuangan-mobile/6.jpg",
      "/project/keuangan-mobile/7.jpg",
      "/project/keuangan-mobile/8.jpg",
      "/project/keuangan-mobile/9.jpg",
      "/project/keuangan-mobile/10.jpg",
      "/project/keuangan-mobile/11.jpg",
      "/project/keuangan-mobile/12.jpg",
      "/project/keuangan-mobile/13.jpg",
    ],
  },
  {
    slug: "tasha",
    title: "University Billing & Invoice (Web)",
    status: "done",
    shortDescription:
      "Web-based university billing and invoice system with configurable rates, verification workflows, and invoice tracking. Built with Next.js and Ant Design.",
    description: (
      <div className="space-y-3">
        <p>
          A web-based billing and invoice management system designed to handle
          institutional billing processes within a university environment. The
          application centralizes the creation, verification, and tracking of
          invoices, ensuring transparency and consistency across departments.
        </p>
        <p>
          The system provides configurable settings modules for managing rates,
          receipt types, users, roles, and verification steps, allowing the
          billing workflow to be adapted to organizational policies. An invoice
          tracker enables users to monitor invoice status throughout its
          lifecycle, from creation and verification to final approval.
        </p>
        <p>
          Built with a focus on usability and role-based access control, the
          platform supports structured approval flows and clear audit trails,
          helping improve efficiency and accountability in university billing
          operations.
        </p>
      </div>
    ),
    techStack: [
      "Framework: Next.js (React)",
      "Language: TypeScript",
      "UI Library: Ant Design (AntD)",
    ],
    images: [
      "/project/tasha/1.png",
      "/project/tasha/2.png",
      "/project/tasha/3.png",
      "/project/tasha/4.png",
      "/project/tasha/5.png",
      "/project/tasha/6.png",
      "/project/tasha/7.png",
      "/project/tasha/8.png",
      "/project/tasha/9.png",
      "/project/tasha/10.png",
      "/project/tasha/11.png",
      "/project/tasha/12.png",
      "/project/tasha/13.png",
      "/project/tasha/14.png",
      "/project/tasha/15.png",
      "/project/tasha/16.png",
    ],
  },
  {
    slug: "dlc",
    title: "Digital Learning Center (Web)",
    status: "done",
    shortDescription:
      "A service management website for a university unit, providing visit requests, room and equipment rentals, and consultations, with full admin control over content, services, rooms, and tools.",
    description: (
      <div className="space-y-3">
        <p>
          This website is a centralized service platform designed for a
          university unit or department to provide and manage various internal
          services. It enables users to easily access and request services such
          as unit visits, room reservations, equipment or tool rentals, and
          consultation appointments through a single, user-friendly interface.
        </p>
        <p>
          The platform includes an administrative dashboard that allows staff to
          manage website content, including the landing page, About Us section,
          and service listings. Administrators can also manage available rooms
          and tools, control availability, and update service information to
          ensure accuracy and efficiency. This system helps streamline service
          requests, improve transparency, and enhance coordination between the
          university unit and its users.
        </p>
      </div>
    ),
    techStack: [
      "Framework: Next.js (React)",
      "Language: TypeScript",
      "UI Library: Hero UI  & Tailwind",
    ],
    images: [
      "/project/dlc/1.png",
      "/project/dlc/2.png",
      "/project/dlc/3.png",
      "/project/dlc/4.png",
      "/project/dlc/5.png",
      "/project/dlc/6.png",
      "/project/dlc/7.png",
      "/project/dlc/8.png",
      "/project/dlc/9.png",
      "/project/dlc/10.png",
      "/project/dlc/11.png",
      "/project/dlc/12.png",
      "/project/dlc/13.png",
      "/project/dlc/14.png",
      "/project/dlc/15.png",
      "/project/dlc/16.png",
      "/project/dlc/17.png",
      "/project/dlc/18.png",
      "/project/dlc/19.png",
      "/project/dlc/20.png",
      "/project/dlc/21.png",
      "/project/dlc/22.png",
    ],
  },
  {
    slug: "ella",
    title: "University Laboratory Service (Web)",
    status: "done",
    shortDescription:
      "A university laboratory service platform that supports online service applications with dynamic verification steps, virtual account payments, and full admin management of laboratories, services, tools, and users., and artificial intelligence.",
    description: (
      <div className="space-y-3">
        <p>
          This website is a laboratory service management platform designed for
          universities to handle various laboratory-related services in a
          structured and transparent workflow. Users can apply for laboratory
          services online, such as testing, analysis, or facility usage, through
          a guided application process that follows multiple dynamic steps.
        </p>
        <p>
          Each service request goes through configurable verification stages
          managed by administrators, including document review, service
          approval, scheduling, and payment processing using a virtual account
          system. The dynamic workflow allows each service to have its own
          approval and verification steps based on laboratory requirements.
        </p>
        <p>
          The administrative panel provides full control over system data,
          enabling administrators to manage laboratory services, laboratories,
          tools and equipment used in each service, and registered users. This
          platform improves efficiency, ensures traceability of requests, and
          standardizes laboratory service operations across the university.
        </p>
      </div>
    ),
    techStack: [
      "Framework: Next.js (React)",
      "Language: TypeScript",
      "UI Library: Hero UI  & Tailwind",
    ],
    images: [
      "/project/ella/1.png",
      "/project/ella/2.png",
      "/project/ella/3.png",
      "/project/ella/4.png",
      "/project/ella/5.png",
      "/project/ella/6.png",
      "/project/ella/7.png",
      "/project/ella/8.png",
      "/project/ella/9.png",
      "/project/ella/10.png",
      "/project/ella/11.png",
      "/project/ella/12.png",
      "/project/ella/13.png",
      "/project/ella/14.png",
      "/project/ella/15.png",
      "/project/ella/16.png",
      "/project/ella/17.png",
      "/project/ella/18.png",
      "/project/ella/19.png",
      "/project/ella/20.png",
      "/project/ella/21.png",
    ],
  },
  {
    slug: "penerimaan",
    title: "Integrated Admission (Web)",
    status: "ongoing",
    shortDescription:
      "A university laboratory service platform that supports online service applications with dynamic verification steps, virtual account payments, and full admin management of laboratories, services, tools, and users., and artificial intelligence.",
    description: <>.</>,
    techStack: [
      "Framework: Next.js (React)",
      "Language: TypeScript",
      "UI Library: Hero UI  & Tailwind",
    ],
    images: [],
  },
];
