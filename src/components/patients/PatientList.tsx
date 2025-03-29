
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, UserPlus, MoreHorizontal, FileText, Calendar, Mail, Trash } from 'lucide-react';

const patients = [
  {
    id: "P-12345",
    name: "Chioma Okafor",
    gender: "Female",
    dob: "1981-04-15",
    phone: "+234 802 123 4567",
    email: "chioma@example.com",
    lastVisit: "2023-09-15",
    bloodType: "O+",
    status: "Active"
  },
  {
    id: "P-12346",
    name: "Emmanuel Nwachukwu",
    gender: "Male",
    dob: "1988-08-23", 
    phone: "+234 705 987 6543",
    email: "emmanuel@example.com",
    lastVisit: "2023-10-02",
    bloodType: "A+",
    status: "Active"
  },
  {
    id: "P-12347",
    name: "Blessing Ibrahim",
    gender: "Female",
    dob: "1995-12-10",
    phone: "+234 813 456 7890",
    email: "blessing@example.com",
    lastVisit: "2023-10-22",
    bloodType: "B-",
    status: "Active"
  },
  {
    id: "P-12348",
    name: "Taiwo Adeleke",
    gender: "Male",
    dob: "1958-03-30",
    phone: "+234 907 654 3210",
    email: "taiwo@example.com",
    lastVisit: "2023-09-25",
    bloodType: "AB+",
    status: "Active"
  },
  {
    id: "P-12349",
    name: "Ngozi Eze",
    gender: "Female",
    dob: "2016-06-18",
    phone: "+234 803 789 0123",
    email: "ngozi@example.com",
    lastVisit: "2023-10-15",
    bloodType: "O-",
    status: "Active"
  },
  {
    id: "P-12350",
    name: "Oluwaseun Adegoke",
    gender: "Male",
    dob: "1975-11-05",
    phone: "+234 809 234 5678",
    email: "oluwaseun@example.com",
    lastVisit: "2023-08-30",
    bloodType: "A-",
    status: "Inactive"
  },
  {
    id: "P-12351",
    name: "Fatima Mohammed",
    gender: "Female",
    dob: "2019-02-14",
    phone: "+234 812 345 6789",
    email: "fatima@example.com",
    lastVisit: "2023-10-10",
    bloodType: "O+",
    status: "Active"
  },
  {
    id: "P-12352",
    name: "Emeka Obi",
    gender: "Male",
    dob: "1991-09-22",
    phone: "+234 706 543 2109",
    email: "emeka@example.com",
    lastVisit: "2023-09-05",
    bloodType: "B+",
    status: "Active"
  }
];

// Calculate age from date of birth
const calculateAge = (dob: string) => {
  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const PatientList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone.includes(searchTerm) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search patients..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Link to="/patients/register">
          <Button className="w-full sm:w-auto bg-hospital-500 hover:bg-hospital-600">
            <UserPlus className="mr-2 h-4 w-4" />
            Add New Patient
          </Button>
        </Link>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Age/Gender</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Last Visit</TableHead>
              <TableHead>Blood Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPatients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell className="font-medium">{patient.id}</TableCell>
                <TableCell>
                  <Link 
                    to={`/patients/${patient.id}`}
                    className="font-medium text-hospital-700 hover:underline"
                  >
                    {patient.name}
                  </Link>
                </TableCell>
                <TableCell>
                  {calculateAge(patient.dob)} / {patient.gender.charAt(0)}
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="text-xs">{patient.phone}</span>
                    <span className="text-xs text-muted-foreground">{patient.email}</span>
                  </div>
                </TableCell>
                <TableCell>{new Date(patient.lastVisit).toLocaleDateString()}</TableCell>
                <TableCell>{patient.bloodType}</TableCell>
                <TableCell>
                  <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                    patient.status === "Active" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-gray-100 text-gray-800"
                  }`}>
                    {patient.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <FileText className="mr-2 h-4 w-4" />
                        <span>View EHR</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Schedule Appointment</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Send Message</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="mr-2 h-4 w-4" />
                        <span>Delete Record</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PatientList;
