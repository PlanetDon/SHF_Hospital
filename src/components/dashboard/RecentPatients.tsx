
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ChevronRight, ExternalLink } from 'lucide-react';

const patients = [
  {
    id: "P-12345",
    name: "Chioma Okafor",
    age: 42,
    gender: "Female",
    reason: "Hypertension Follow-up",
    doctor: "Dr. Adebayo",
    status: "Checked In",
    time: "09:30 AM"
  },
  {
    id: "P-12346",
    name: "Emmanuel Nwachukwu",
    age: 35,
    gender: "Male",
    reason: "Annual Physical",
    doctor: "Dr. Okonkwo",
    status: "In Progress",
    time: "10:15 AM"
  },
  {
    id: "P-12347",
    name: "Blessing Ibrahim",
    age: 28,
    gender: "Female",
    reason: "Prenatal Visit",
    doctor: "Dr. Adeyemi",
    status: "Waiting",
    time: "11:00 AM"
  },
  {
    id: "P-12348",
    name: "Taiwo Adeleke",
    age: 65,
    gender: "Male",
    reason: "Diabetes Management",
    doctor: "Dr. Adebayo",
    status: "Completed",
    time: "08:45 AM"
  },
  {
    id: "P-12349",
    name: "Ngozi Eze",
    age: 7,
    gender: "Female",
    reason: "Vaccination",
    doctor: "Dr. Nnamdi",
    status: "Waiting",
    time: "12:30 PM"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Checked In":
      return "bg-blue-100 text-blue-800";
    case "In Progress":
      return "bg-yellow-100 text-yellow-800";
    case "Waiting":
      return "bg-orange-100 text-orange-800";
    case "Completed":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function RecentPatients() {
  return (
    <div className="hospital-card">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Today's Patients</h2>
        <Link to="/patients">
          <Button variant="ghost" size="sm" className="gap-1 text-hospital-500 hover:text-hospital-600">
            View All <ChevronRight size={16} />
          </Button>
        </Link>
      </div>
      <div className="mt-4 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Patient</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Doctor</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Time</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell className="font-medium">{patient.id}</TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">{patient.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {patient.age} yrs, {patient.gender}
                    </p>
                  </div>
                </TableCell>
                <TableCell>{patient.reason}</TableCell>
                <TableCell>{patient.doctor}</TableCell>
                <TableCell>
                  <span className={`rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(patient.status)}`}>
                    {patient.status}
                  </span>
                </TableCell>
                <TableCell>{patient.time}</TableCell>
                <TableCell>
                  <Link to={`/patients/${patient.id}`}>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink size={14} />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
