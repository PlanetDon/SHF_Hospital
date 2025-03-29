
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import PatientRecord from '@/components/ehr/PatientRecord';

const PatientDetailPage = () => {
  const { id } = useParams();
  
  return (
    <Layout>
      <PatientRecord />
    </Layout>
  );
};

export default PatientDetailPage;
