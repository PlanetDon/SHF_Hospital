
import Layout from '@/components/layout/Layout';
import AppointmentForm from '@/components/appointments/AppointmentForm';

const NewAppointmentPage = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Schedule Appointment</h1>
        <p className="text-muted-foreground">
          Book a new appointment for a patient at Saint Hermanguild Hospital
        </p>
      </div>
      
      <AppointmentForm />
    </Layout>
  );
};

export default NewAppointmentPage;
