
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { FileText, Printer, Download, Edit, Plus, Calendar, Pill, FlaskConical } from 'lucide-react';

// Mock patient data
const patientData = {
  id: "P-12345",
  name: "Chioma Okafor",
  dob: "1981-04-15",
  age: 42,
  gender: "Female",
  bloodType: "O+",
  allergies: ["Penicillin", "Peanuts"],
  chronicConditions: ["Hypertension", "Type 2 Diabetes"],
  contactInfo: {
    address: "123 Main St, Owerri, Imo State",
    phone: "+234 802 123 4567",
    email: "chioma@example.com",
    emergencyContact: "Emeka Okafor (Husband) - +234 803 987 6543"
  }
};

// Mock visit history
const visitHistory = [
  {
    date: "2023-10-15",
    doctor: "Dr. Adebayo",
    type: "Regular Checkup",
    chiefComplaint: "Headache and dizziness",
    diagnosis: "Hypertension",
    notes: "Blood pressure is elevated. Recommend lifestyle changes and medication adjustment.",
    vitals: {
      bp: "150/90 mmHg",
      pulse: "88 bpm",
      temp: "36.8°C",
      respRate: "16/min",
      weight: "75 kg",
      height: "165 cm",
      bmi: "27.5"
    }
  },
  {
    date: "2023-07-22",
    doctor: "Dr. Okonkwo",
    type: "Follow-up",
    chiefComplaint: "Routine diabetic check",
    diagnosis: "Type 2 Diabetes - Controlled",
    notes: "Blood sugar levels improved. Continue with current medication regimen.",
    vitals: {
      bp: "140/85 mmHg",
      pulse: "82 bpm",
      temp: "37.0°C",
      respRate: "14/min",
      weight: "76 kg",
      height: "165 cm",
      bmi: "27.9"
    }
  },
  {
    date: "2023-04-05",
    doctor: "Dr. Adebayo",
    type: "Emergency",
    chiefComplaint: "Severe headache, blurred vision",
    diagnosis: "Hypertensive Crisis",
    notes: "Admitted for observation. IV medications administered. Discharged after stabilization.",
    vitals: {
      bp: "190/110 mmHg",
      pulse: "102 bpm",
      temp: "37.2°C",
      respRate: "20/min",
      weight: "77 kg",
      height: "165 cm",
      bmi: "28.3"
    }
  }
];

// Mock medication list
const medications = [
  {
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    startDate: "2023-04-06",
    endDate: null,
    prescribedBy: "Dr. Adebayo",
    purpose: "Hypertension"
  },
  {
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    startDate: "2022-08-15",
    endDate: null,
    prescribedBy: "Dr. Okonkwo",
    purpose: "Type 2 Diabetes"
  },
  {
    name: "Aspirin",
    dosage: "81mg",
    frequency: "Once daily",
    startDate: "2023-04-06",
    endDate: null,
    prescribedBy: "Dr. Adebayo",
    purpose: "Cardiovascular protection"
  }
];

// Mock lab results
const labResults = [
  {
    date: "2023-10-15",
    test: "Complete Blood Count (CBC)",
    result: "Normal",
    notes: "All values within normal range",
    orderedBy: "Dr. Adebayo"
  },
  {
    date: "2023-10-15",
    test: "HbA1c",
    result: "6.8%",
    notes: "Improved from previous value of 7.2%. Diabetes moderately controlled.",
    orderedBy: "Dr. Adebayo"
  },
  {
    date: "2023-10-15",
    test: "Lipid Panel",
    result: "Total Cholesterol: 210 mg/dL, LDL: 140 mg/dL",
    notes: "Slightly elevated. Recommend dietary changes.",
    orderedBy: "Dr. Adebayo"
  },
  {
    date: "2023-07-22",
    test: "Comprehensive Metabolic Panel",
    result: "Normal",
    notes: "All values within normal range",
    orderedBy: "Dr. Okonkwo"
  },
  {
    date: "2023-07-22",
    test: "HbA1c",
    result: "7.2%",
    notes: "Diabetes management needs improvement",
    orderedBy: "Dr. Okonkwo"
  }
];

const PatientRecord = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">{patientData.name}</h1>
          <p className="text-muted-foreground">Patient ID: {patientData.id}</p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Printer size={16} />
            <span className="hidden sm:inline">Print</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Download size={16} />
            <span className="hidden sm:inline">Export</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Edit size={16} />
            <span className="hidden sm:inline">Edit</span>
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Patient Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium">Basic Information</p>
              <div className="mt-1 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Age</p>
                  <p>{patientData.age} years</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Gender</p>
                  <p>{patientData.gender}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">DOB</p>
                  <p>{new Date(patientData.dob).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Blood Type</p>
                  <p>{patientData.bloodType}</p>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <p className="text-sm font-medium">Contact Information</p>
              <div className="mt-1 space-y-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Address</p>
                  <p>{patientData.contactInfo.address}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Phone</p>
                  <p>{patientData.contactInfo.phone}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <p>{patientData.contactInfo.email}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Emergency Contact</p>
                  <p>{patientData.contactInfo.emergencyContact}</p>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <p className="text-sm font-medium">Medical Information</p>
              <div className="mt-1 space-y-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Allergies</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {patientData.allergies.map((allergy, index) => (
                      <span 
                        key={index} 
                        className="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs"
                      >
                        {allergy}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground">Chronic Conditions</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {patientData.chronicConditions.map((condition, index) => (
                      <span 
                        key={index} 
                        className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs"
                      >
                        {condition}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="col-span-1 md:col-span-2">
          <Tabs defaultValue="visits">
            <TabsList className="w-full grid grid-cols-4">
              <TabsTrigger value="visits">Visits</TabsTrigger>
              <TabsTrigger value="medications">Medications</TabsTrigger>
              <TabsTrigger value="labResults">Lab Results</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            
            <TabsContent value="visits" className="space-y-4 mt-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Visit History</h3>
                <div className="flex gap-2">
                  <Button size="sm" className="gap-1 bg-hospital-500 hover:bg-hospital-600">
                    <Plus size={16} />
                    New Visit
                  </Button>
                </div>
              </div>
              
              {visitHistory.map((visit, index) => (
                <Card key={index}>
                  <CardHeader className="p-4">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                      <div>
                        <CardTitle className="text-base">
                          {visit.type} - {visit.diagnosis}
                        </CardTitle>
                        <CardDescription>
                          {new Date(visit.date).toLocaleDateString()} • {visit.doctor}
                        </CardDescription>
                      </div>
                      <Button variant="outline" size="sm" className="gap-1 w-full sm:w-auto">
                        <FileText size={16} />
                        View Full Record
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium">Chief Complaint</p>
                        <p className="text-sm text-muted-foreground">{visit.chiefComplaint}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium">Notes</p>
                        <p className="text-sm text-muted-foreground">{visit.notes}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium">Vitals</p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1">
                          <div className="text-sm">
                            <p className="text-muted-foreground">BP</p>
                            <p>{visit.vitals.bp}</p>
                          </div>
                          <div className="text-sm">
                            <p className="text-muted-foreground">Pulse</p>
                            <p>{visit.vitals.pulse}</p>
                          </div>
                          <div className="text-sm">
                            <p className="text-muted-foreground">Temp</p>
                            <p>{visit.vitals.temp}</p>
                          </div>
                          <div className="text-sm">
                            <p className="text-muted-foreground">Weight</p>
                            <p>{visit.vitals.weight}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="medications" className="space-y-4 mt-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Current Medications</h3>
                <div className="flex gap-2">
                  <Button size="sm" className="gap-1 bg-hospital-500 hover:bg-hospital-600">
                    <Pill size={16} />
                    Prescribe
                  </Button>
                </div>
              </div>
              
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-medium">Medication</th>
                          <th className="text-left p-3 font-medium">Dosage</th>
                          <th className="text-left p-3 font-medium">Frequency</th>
                          <th className="text-left p-3 font-medium">Start Date</th>
                          <th className="text-left p-3 font-medium">Purpose</th>
                          <th className="text-left p-3 font-medium">Prescribed By</th>
                        </tr>
                      </thead>
                      <tbody>
                        {medications.map((med, index) => (
                          <tr key={index} className="border-b last:border-0">
                            <td className="p-3">{med.name}</td>
                            <td className="p-3">{med.dosage}</td>
                            <td className="p-3">{med.frequency}</td>
                            <td className="p-3">{new Date(med.startDate).toLocaleDateString()}</td>
                            <td className="p-3">{med.purpose}</td>
                            <td className="p-3">{med.prescribedBy}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="labResults" className="space-y-4 mt-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Laboratory Results</h3>
                <div className="flex gap-2">
                  <Button size="sm" className="gap-1 bg-hospital-500 hover:bg-hospital-600">
                    <FlaskConical size={16} />
                    Order New Test
                  </Button>
                </div>
              </div>
              
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-medium">Date</th>
                          <th className="text-left p-3 font-medium">Test</th>
                          <th className="text-left p-3 font-medium">Result</th>
                          <th className="text-left p-3 font-medium">Notes</th>
                          <th className="text-left p-3 font-medium">Ordered By</th>
                          <th className="text-left p-3 font-medium"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {labResults.map((result, index) => (
                          <tr key={index} className="border-b last:border-0">
                            <td className="p-3">{new Date(result.date).toLocaleDateString()}</td>
                            <td className="p-3">{result.test}</td>
                            <td className="p-3">{result.result}</td>
                            <td className="p-3">{result.notes}</td>
                            <td className="p-3">{result.orderedBy}</td>
                            <td className="p-3">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="documents" className="space-y-4 mt-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Documents & Attachments</h3>
                <div className="flex gap-2">
                  <Button size="sm" className="gap-1 bg-hospital-500 hover:bg-hospital-600">
                    <Plus size={16} />
                    Upload Document
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center p-12 text-center">
                <FileText size={48} className="text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No Documents Yet</h3>
                <p className="text-muted-foreground mt-1">
                  Upload medical reports, scans, or any other documents related to this patient
                </p>
                <Button size="sm" className="mt-4 gap-1">
                  <Plus size={16} />
                  Add First Document
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PatientRecord;
