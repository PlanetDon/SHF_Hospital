
import Layout from '@/components/layout/Layout';
import PatientList from '@/components/patients/PatientList';

const PatientsPage = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Patient Management</h1>
        <p className="text-muted-foreground">
          View and manage all patients in the Saint Hermanguild Hospital system
        </p>
      </div>
      
      <PatientList />
    </Layout>
  );
};

export default PatientsPage;
