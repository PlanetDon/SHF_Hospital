
import Layout from '@/components/layout/Layout';
import DashboardCard from '@/components/dashboard/DashboardCard';
import RecentPatients from '@/components/dashboard/RecentPatients';
import UpcomingAppointments from '@/components/dashboard/UpcomingAppointments';
import QuickActions from '@/components/dashboard/QuickActions';
import { 
  Users, 
  CalendarClock, 
  Stethoscope, 
  FileText, 
  TrendingUp, 
  PieChart,
  LineChart 
} from 'lucide-react';

const Dashboard = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to Saint Hermanguild Hospital Management System
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <DashboardCard
          title="Total Patients"
          value="2,549"
          icon={<Users size={20} />}
          trend={{ value: 12, isPositive: true }}
        />
        <DashboardCard
          title="Appointments Today"
          value="42"
          icon={<CalendarClock size={20} />}
          trend={{ value: 8, isPositive: true }}
        />
        <DashboardCard
          title="Doctors Available"
          value="18"
          icon={<Stethoscope size={20} />}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="hospital-card h-[300px] flex justify-center items-center">
          <LineChart className="h-36 w-36 text-muted-foreground" />
          <p className="mt-4 text-muted-foreground">Patient Admissions Chart</p>
        </div>
        <div className="hospital-card h-[300px] flex justify-center items-center">
          <PieChart className="h-36 w-36 text-muted-foreground" />
          <p className="mt-4 text-muted-foreground">Department Distribution</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2">
          <RecentPatients />
        </div>
        <div>
          <UpcomingAppointments />
        </div>
      </div>
      
      <div className="mb-6">
        <QuickActions />
      </div>
    </Layout>
  );
};

export default Dashboard;
