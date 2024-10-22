import { MdDashboard, MdTask } from "react-icons/md";

export const taskPriority = [
  {
    taskPriorityName: "Low",
    dotClass: "text-green-500",
  },
  {
    taskPriorityName: "Moderate",
    dotClass: "text-blue-500",
  },
  {
    taskPriorityName: "Extreme",
    dotClass: "text-red-500",
  },
];

export const menuItems = [
  {
    label: "Dashboard",
    icon: <MdDashboard />,
    href: "/dashboard",
  },
  {
    label: "My Tasks",
    icon: <MdTask />,
    href: "/my-task",
  },
  {
    label: "Task Categories",
    icon: "📊",
    href: "/task-categories",
  },
  {
    label: "Settings",
    icon: "⚙️",
    href: "/settings",
  },
  {
    label: "Help",
    icon: "❓",
    href: "/help",
  },
  
];
