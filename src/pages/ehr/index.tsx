
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const EHRPage = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Electronic Health Records</h1>
        <p className="text-muted-foreground">
          Access and manage patient medical records at Saint Hermanguild Hospital
        </p>
      </div>
      
      <div className="hospital-card mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search records by patient name or ID..."
              className="pl-8"
            />
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="w-full sm:w-auto">
              Advanced Search
            </Button>
            <Button className="w-full sm:w-auto bg-hospital-500 hover:bg-hospital-600">
              Create New Record
            </Button>
          </div>
        </div>
      </div>
      
      <div className="hospital-card h-[500px] flex justify-center items-center">
        <div className="text-center">
          <FileText className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-bold">Search for Patient Records</h2>
          <p className="text-muted-foreground max-w-md mx-auto mt-2">
            Use the search bar above to find patient records, or use the advanced search for more specific filters.
          </p>
          <Link to="/patients">
            <Button className="mt-6 bg-hospital-500 hover:bg-hospital-600">
              View Patient List
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default EHRPage;
