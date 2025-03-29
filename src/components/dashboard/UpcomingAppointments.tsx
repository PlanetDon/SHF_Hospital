
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronRight, Clock } from 'lucide-react';

const appointments = [
  {
    id: "A-1001",
    patient: "Blessing Ibrahim",
    type: "Prenatal Checkup",
    date: "Today",
    time: "02:30 PM",
    doctor: "Dr. Adeyemi"
  },
  {
    id: "A-1002",
    patient: "Emeka Obi",
    type: "Post-Surgical Follow-up",
    date: "Today",
    time: "03:15 PM",
    doctor: "Dr. Nnamdi"
  },
  {
    id: "A-1003",
    patient: "Fatima Mohammed",
    type: "Vaccination",
    date: "Tomorrow",
    time: "09:00 AM",
    doctor: "Dr. Adebayo"
  },
  {
    id: "A-1004",
    patient: "Oluwaseun Adegoke",
    type: "Cardiology Consultation",
    date: "Tomorrow",
    time: "10:30 AM",
    doctor: "Dr. Okonkwo"
  }
];

export default function UpcomingAppointments() {
  return (
    <div className="hospital-card">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Upcoming Appointments</h2>
        <Link to="/appointments">
          <Button variant="ghost" size="sm" className="gap-1 text-hospital-500 hover:text-hospital-600">
            View Calendar <ChevronRight size={16} />
          </Button>
        </Link>
      </div>
      
      <div className="mt-4 space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="flex items-start gap-4 rounded-md border p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-hospital-100 text-hospital-500">
              <Calendar size={20} />
            </div>
            
            <div className="flex-1">
              <h3 className="font-medium">{appointment.patient}</h3>
              <p className="text-sm text-muted-foreground">{appointment.type}</p>
              <div className="mt-2 flex items-center gap-3">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock size={12} />
                  <span>{appointment.date}, {appointment.time}</span>
                </div>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{appointment.doctor}</span>
              </div>
            </div>
            
            <div>
              <Button size="sm" variant="outline" className="text-xs">
                Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
