
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Mock data for doctors
const doctors = [
  { id: "D1", name: "Dr. Adebayo", specialization: "Cardiology" },
  { id: "D2", name: "Dr. Okonkwo", specialization: "General Medicine" },
  { id: "D3", name: "Dr. Adeyemi", specialization: "Gynecology" },
  { id: "D4", name: "Dr. Nnamdi", specialization: "Pediatrics" },
  { id: "D5", name: "Dr. Yusuf", specialization: "Orthopedics" },
];

// Mock data for appointment types
const appointmentTypes = [
  "Consultation",
  "Follow-up",
  "Physical Examination",
  "Vaccination",
  "Prenatal Checkup",
  "Surgical Consultation",
  "Lab Result Review",
  "Procedure"
];

const AppointmentForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [patientSearchValue, setPatientSearchValue] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, we would save the appointment data here
    
    toast({
      title: "Success!",
      description: "Appointment scheduled successfully.",
    });
    
    navigate("/appointments");
  };
  
  // Generate available time slots
  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 8; // 8:00 AM
    const endHour = 17; // 5:00 PM
    
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const hourFormatted = hour > 12 ? hour - 12 : hour;
        const period = hour >= 12 ? "PM" : "AM";
        const minuteFormatted = minute === 0 ? "00" : minute;
        
        slots.push(`${hourFormatted}:${minuteFormatted} ${period}`);
      }
    }
    
    return slots;
  };
  
  const timeSlots = generateTimeSlots();
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Schedule Appointment</CardTitle>
        <CardDescription>
          Book a new appointment for a patient at Saint Hermanguild Hospital
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="patientSearch">Patient</Label>
            <Input 
              id="patientSearch" 
              placeholder="Search by name or ID" 
              value={patientSearchValue}
              onChange={(e) => setPatientSearchValue(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Enter patient name or ID to search in the system
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="appointmentType">Appointment Type</Label>
              <Select>
                <SelectTrigger id="appointmentType">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  {appointmentTypes.map((type) => (
                    <SelectItem key={type} value={type.toLowerCase()}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="doctor">Doctor</Label>
              <Select>
                <SelectTrigger id="doctor">
                  <SelectValue placeholder="Select Doctor" />
                </SelectTrigger>
                <SelectContent>
                  {doctors.map((doctor) => (
                    <SelectItem key={doctor.id} value={doctor.id}>
                      {doctor.name} - {doctor.specialization}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" min={new Date().toISOString().split('T')[0]} />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Select>
                <SelectTrigger id="time">
                  <SelectValue placeholder="Select Time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="reasonForVisit">Reason for Visit</Label>
            <Textarea 
              id="reasonForVisit" 
              placeholder="Enter brief description of the reason for this appointment"
              rows={3}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea 
              id="notes" 
              placeholder="Enter any additional information or special instructions"
              rows={3}
            />
          </div>
          
          <div className="flex justify-end gap-2">
            <Button 
              type="button" 
              variant="outline"
              onClick={() => navigate("/appointments")}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-hospital-500 hover:bg-hospital-600"
            >
              Schedule Appointment
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AppointmentForm;
