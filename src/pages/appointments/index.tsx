
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CalendarPlus } from 'lucide-react';

const AppointmentsPage = () => {
  return (
    <Layout>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
          <p className="text-muted-foreground">
            Manage and schedule appointments at Saint Hermanguild Hospital
          </p>
        </div>
        
        <Link to="/appointments/new">
          <Button className="w-full sm:w-auto bg-hospital-500 hover:bg-hospital-600">
            <CalendarPlus className="mr-2 h-4 w-4" />
            New Appointment
          </Button>
        </Link>
      </div>
      
      <div className="hospital-card h-[600px] flex justify-center items-center">
        <div className="text-center">
          <CalendarPlus className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-bold">Calendar View Coming Soon</h2>
          <p className="text-muted-foreground max-w-md mx-auto mt-2">
            The full calendar view is under development. Use the button above to schedule new appointments.
          </p>
          <Link to="/appointments/new">
            <Button className="mt-6 bg-hospital-500 hover:bg-hospital-600">
              Schedule Appointment
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default AppointmentsPage;
