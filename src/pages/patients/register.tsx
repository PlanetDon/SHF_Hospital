
import Layout from '@/components/layout/Layout';
import PatientRegistrationForm from '@/components/patients/PatientRegistrationForm';

const PatientRegistrationPage = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Register New Patient</h1>
        <p className="text-muted-foreground">
          Add a new patient to the Saint Hermanguild Hospital system
        </p>
      </div>
      
      <PatientRegistrationForm />
    </Layout>
  );
};

export default PatientRegistrationPage;
