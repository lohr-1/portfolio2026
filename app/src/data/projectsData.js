export const projectsData = [
  {
    id: "inventory",
    title: "Municipal Inventory Control",
    stat: "UX Design · Public Administration",
    description: "Evolving an inventory control system in Oracle APEX for the municipal government, transforming it from a simple data entry log into an active management and decision-making tool.",
    image: "https://picsum.photos/seed/stock/800/400",
    link: "",
    visaoGeral: "The project aimed to evolve the inventory control system used by the Municipal Government of Iguaraçu. The solution, developed in Oracle APEX, needed to move away from functioning solely as a space for registering materials and instead begin supporting the tracking of movements, the organization of resources, and administrative decision-making.\n\nMy role involved understanding the operation of the existing system, identifying the needs of the civil servants, and structuring an evolution coherent with the city hall's routine. The focus of the project was not only on the interface but on improving the product as a whole, considering user flows, business rules, information visualization, and operational continuity.",
    problema: "Inventory control was historically carried out through manual records and decentralized information. This made locating data difficult, reduced the reliability of records, and made tracking inflows and outflows more laborious.\n\nAlthough a first digital version was already deployed, the system still had significant limitations. Users did not have a managerial view of the stock, there was little traceability over movements, and there were no clear mechanisms to track materials by department or anticipate replenishment needs.\n\nThe challenge consisted, therefore, in transforming a predominantly operational tool into a product capable of providing control, visibility, and support to public management.",
    processo: {
      intro: "The work was structured based on an incremental approach. The first stage consisted of analyzing the existing system and understanding the problems encountered during its daily use:",
      steps: [
        {
          label: "1. Analysis & Immersion",
          detail: "Analyzing the existing system and conducting interviews with municipal employees to map current workflow pain points."
        },
        {
          label: "2. Need Prioritization",
          detail: "Structuring and prioritizing requirements based on user impact and technical feasibility of implementation in Oracle APEX."
        },
        {
          label: "3. Incremental Validation",
          detail: "Evolving the system in smaller cycles, performing continuous tests with users to validate flows and refine usability."
        }
      ]
    },
    solucao: "The proposed solution reorganizes the system around four core capabilities. First, the creation of reports and management dashboards, responsible for transforming stock records into clearer information for tracking and decision-making. Second, the traceability of movements, allowing the identification of the material moved, the type of operation performed, the department involved, the date, and the responsible user. Third, department-level control, which improves the visualization of material distribution and helps understand how resources are being used within the city hall. Finally, minimum stock alerts were planned, enabling administrators to identify in advance the materials that need to be replenished.",
    resultado: "As the project is still in progress, there are no consolidated final metrics. The results presented correspond to the expected impacts and the criteria defined to evaluate the solution. The evolution of the system is expected to reduce the time required to locate information, increase the reliability of records, and improve control over material distribution. Traceability also tends to reduce inconsistencies and make it easier to assign responsibility for each movement. In the context of the city hall, the main expected impact is a more efficient use of public resources, with a reduction in waste and greater predictability in material replenishment."
  },
  {
    id: "planner",
    title: "Academic Task & LMS Planner",
    stat: "Product Design · EdTech",
    description: "Concept design of flows and integrated experience bidirectionally with Moodle. Simplifying deadlines tracking and progress reports in a clean dashboard.",
    image: "https://picsum.photos/seed/task/800/400",
    link: "",
    visaoGeral: "Academic Planner is an intelligent planner focused on university students and professors. It connects directly to the educational institution's Moodle API, extracting tasks, deadlines, grades, and pending forums to organize them into a unified, clean, and actionable workflow.",
    problema: "Students reported mental overload and recurrent missed deadlines due to the obsolete and overly branched interface of traditional Moodle. Fragmented subject-specific calendars made it difficult to have a holistic view of the weekly study load.",
    processo: {
      intro: "We adopted an iterative process focusing directly on the young and academic audience:",
      steps: [
        {
          label: "1. Focus Groups",
          detail: "We conducted discussions and workshops with 15 students from various courses to understand how they organized their study schedules."
        },
        {
          label: "2. Unified Journey",
          detail: "Design of the flow architecture consolidating manual tasks entered by the student with deadlines generated automatically by the professor."
        },
        {
          label: "3. Rapid Iteration",
          detail: "Medium-fidelity prototypes subjected to weekly usability tests to simplify the action of marking a task as 'completed'."
        }
      ]
    },
    solucao: "Creation of a centralized hub containing a dynamic drag-and-drop calendar, a gamified progress bar based on the week's assignments, and a clean sidebar menu. Users can attach files and submit homework directly to Moodle through our interface, eliminating 5 redundant navigation steps.",
    resultado: "The integration of the new tool is expected to increase on-time task submissions by up to 28% based on preliminary student workflows. During upcoming pilot phases, usability will be evaluated using academic surveys, with the goal of establishing the planner as the recommended study management solution across partner departments."
  },
  {
    id: "university",
    title: "University Operations Hub",
    stat: "Operational UX · Process Automation",
    description: "Process mapping and corporate administrative portal design. Reducing friction in academic requests and automating approval workflows.",
    image: "https://picsum.photos/seed/uni/800/400",
    link: "",
    visaoGeral: "The University Operations Hub is an enterprise-grade ERP system aimed at the automation and administrative control of internal operations in private colleges. The hub integrates registry, treasury, academic records, and pedagogical coordination into a single, secure digital workflow.",
    problema: "The processing of basic student documents (such as official transcripts and enrollment suspension) required filling out paper forms and obtaining physical approvals at multiple counters. This administrative friction caused delays of up to 15 business days and created endless lines at the physical registry office at the start of terms.",
    processo: {
      intro: "We structured approvals through deep mapping of internal operational flows:",
      steps: [
        {
          label: "1. Service Blueprinting",
          detail: "We mapped the processes end-to-end, listing student actions, frontstage staff actions, and legacy systems/servers (backstage)."
        },
        {
          label: "2. Intelligent Batching",
          detail: "Reorganizing administrative task queues to automate routing based on academic coordinators' availability."
        },
        {
          label: "3. Security Design",
          detail: "Validation of additional approval steps and signature encryption directly in the staff dashboard interface."
        }
      ]
    },
    solucao: "We conceptualized an administrative dashboard with smart task queues organized by student urgency and contract deadlines. The system features self-validating dynamic forms for students at the entry point and a quick dispatch panel for staff to approve repetitive requests with a single click.",
    resultado: "The implementation of the hub is expected to reduce registry response times from 14 business days to under 48 business hours, with the capacity to fully digitalize over 15,000 monthly requests. This transition is projected to generate printing and operational support savings of approximately 60% annually upon institutional adoption."
  }
];
