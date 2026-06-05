import QlttAdminImg from '../assets/img/qltt-admin.png';
import QlttFeImg from '../assets/img/qltt-fe.png';
import RealtimeChatImg from '../assets/img/realtime-chat.png';
import DeliveryAppImg from '../assets/img/delivery-app.png';
import QlBidaImg from '../assets/img/ql-bida.png';
import ShrimpImg from '../assets/img/shrimp-management.png';

export interface ProjectType {
  id: number;
  title: string;
  category: string;
  technologies: string;
  image: string;
  description: string;
  repo: string;
  demo?: string;
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'Hệ Thống Quản Lý Tôm Giống',
    category: 'Web Application / Supply Chain & Inventory',
    technologies: 'Java 17, Spring Boot 3.x, Spring Security & JWT, SQL Server (JPA/Hibernate), MapStruct, Lombok, Maven',
    image: ShrimpImg,
    description: 'A comprehensive management system for shrimp breeding farms. Features include real-time inventory tracking by batch, supplier importing, sales/export management, KPI dashboard statistics, and role-based security.',
    repo: 'https://github.com/ltchieu/quan-ly-mua-ban-tom-giong',
  },
  {
    id: 2,
    title: 'Quản Lý Trung Tâm Ngoại Ngữ (Admin)',
    category: 'Web Application / Admin Dashboard',
    technologies: 'TypeScript, React (Create React App), Material UI, Axios, RESTful API',
    image: QlttAdminImg,
    description: 'Admin dashboard for managing classrooms, students and categories. Includes refresh-token handling and admin features for room management.',
    repo: 'https://github.com/ltchieu/quan-ly-trung-tam-ngoai-ngu-fe-admin',
    demo: 'https://quan-ly-trung-tam-ngoai-ngu-admin.vercel.app/',
  },
  {
    id: 3,
    title: 'Quản Lý Trung Tâm Ngoại Ngữ (Frontend)',
    category: 'Web Application / Student Portal',
    technologies: 'TypeScript, React, TailwindCSS, Axios',
    image: QlttFeImg,
    description: 'Public frontend for the language center. Contains teacher introduction pages, schedule views, course catalogs, and student account management UI.',
    repo: 'https://github.com/ltchieu/quan-ly-trung-tam-ngoai-ngu-fe',
    demo: 'https://quan-ly-trung-tam-ngoai-ngu.vercel.app/',
  },
  {
    id: 4,
    title: 'Realtime Chat App',
    category: 'Web Application / Real-time',
    technologies: 'HTML/CSS/JS (Frontend), Java, Socket.io, Node.js (Backend)',
    image: RealtimeChatImg,
    description: 'A real-time chat application with rooms, user presence, file uploads, and contact search functionality.',
    repo: 'https://github.com/ltchieu/realtime-chat-app',
  },
  {
    id: 5,
    title: 'Delivery App',
    category: 'Mobile & Web App',
    technologies: 'Flutter, Firebase Authentication, Cloud Firestore',
    image: DeliveryAppImg,
    description: 'A Flutter-based delivery application (mobile + web) providing user authentication, real-time delivery orders, and order status updates.',
    repo: 'https://github.com/ltchieu/Delivery-App',
  },
  {
    id: 6,
    title: 'Quản Lý Quán Bida',
    category: 'Desktop Application',
    technologies: 'C#, .NET, Windows Forms, SQL Server, Entity Framework',
    image: QlBidaImg,
    description: 'A C#/.NET desktop solution for managing a billiards club, handling tables, session timing, billing, inventory, and room management.',
    repo: 'https://github.com/ltchieu/quan-ly-quan-bida',
  },
];
