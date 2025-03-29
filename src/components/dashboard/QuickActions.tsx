
import { Link } from 'react-router-dom';
import { UserPlus, CalendarPlus, FilePlus, Flask, PlusCircle, FileText } from 'lucide-react';

interface QuickActionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const QuickAction = ({ title, description, icon, href }: QuickActionProps) => (
  <Link to={href} className="flex items-start gap-4 rounded-md border p-3 transition-all hover:border-hospital-300 hover:bg-hospital-50">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-hospital-100 text-hospital-500">
      {icon}
    </div>
    
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </Link>
);

export default function QuickActions() {
  const actions = [
    {
      title: "New Patient",
      description: "Register a new patient",
      icon: <UserPlus size={20} />,
      href: "/patients/register"
    },
    {
      title: "New Appointment",
      description: "Schedule an appointment",
      icon: <CalendarPlus size={20} />,
      href: "/appointments/new"
    },
    {
      title: "Create Record",
      description: "Create a medical record",
      icon: <FilePlus size={20} />,
      href: "/ehr/new"
    },
    {
      title: "Lab Request",
      description: "Submit lab test request",
      icon: <Flask size={20} />,
      href: "/laboratory/new-request"
    },
    {
      title: "Prescription",
      description: "Write new prescription",
      icon: <FileText size={20} />,
      href: "/pharmacy/prescribe"
    },
    {
      title: "More Actions",
      description: "View all actions",
      icon: <PlusCircle size={20} />,
      href: "/actions"
    }
  ];

  return (
    <div className="hospital-card">
      <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <QuickAction
            key={index}
            title={action.title}
            description={action.description}
            icon={action.icon}
            href={action.href}
          />
        ))}
      </div>
    </div>
  );
}
