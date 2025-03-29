
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FileText, 
  Pill, 
  CreditCard, 
  FlaskConical,
  BarChart4, 
  MessageSquare,
  Settings 
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  href: string;
  isActive?: boolean;
}

const SidebarItem = ({ icon, title, href, isActive }: SidebarItemProps) => (
  <Link
    to={href}
    className={cn(
      "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
      isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
    )}
  >
    {icon}
    <span>{title}</span>
  </Link>
);

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const sidebarItems = [
    { icon: <LayoutDashboard size={20} />, title: "Dashboard", href: "/" },
    { icon: <Users size={20} />, title: "Patients", href: "/patients" },
    { icon: <Calendar size={20} />, title: "Appointments", href: "/appointments" },
    { icon: <FileText size={20} />, title: "EHR", href: "/ehr" },
    { icon: <FlaskConical size={20} />, title: "Laboratory", href: "/laboratory" },
    { icon: <Pill size={20} />, title: "Pharmacy", href: "/pharmacy" },
    { icon: <CreditCard size={20} />, title: "Billing", href: "/billing" },
    { icon: <BarChart4 size={20} />, title: "Reports", href: "/reports" },
    { icon: <MessageSquare size={20} />, title: "Messages", href: "/messages" },
    { icon: <Settings size={20} />, title: "Settings", href: "/settings" }
  ];

  return (
    <aside className="hidden md:flex h-screen w-64 flex-col border-r bg-sidebar fixed top-0 pt-16">
      <div className="flex-1 overflow-auto py-6 px-4">
        <nav className="flex flex-col gap-1">
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              title={item.title}
              href={item.href}
              isActive={
                currentPath === item.href || 
                (item.href !== "/" && currentPath.startsWith(item.href))
              }
            />
          ))}
        </nav>
      </div>

      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-hospital-100 flex items-center justify-center">
            <span className="text-sm font-medium text-hospital-700">DR</span>
          </div>
          <div>
            <p className="text-sm font-medium">Dr. John Doe</p>
            <p className="text-xs text-sidebar-foreground/60">Cardiologist</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
