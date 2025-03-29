
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
          
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-hospital-500 text-white p-1 rounded-md">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.2" />
                <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h1 className="font-bold text-xl">Saint Hermanguild</h1>
              <p className="text-xs text-muted-foreground">Hospital Management System</p>
            </div>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary">Dashboard</Link>
            <Link to="/patients" className="text-sm font-medium hover:text-primary">Patients</Link>
            <Link to="/appointments" className="text-sm font-medium hover:text-primary">Appointments</Link>
            <Link to="/ehr" className="text-sm font-medium hover:text-primary">Records</Link>
            <Link to="/pharmacy" className="text-sm font-medium hover:text-primary">Pharmacy</Link>
            <Link to="/billing" className="text-sm font-medium hover:text-primary">Billing</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell size={20} />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-hospital-100">
                  <span className="text-sm font-medium text-hospital-700">DR</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden border-t p-4">
          <nav className="flex flex-col gap-4">
            <Link to="/" className="text-sm font-medium hover:text-primary">Dashboard</Link>
            <Link to="/patients" className="text-sm font-medium hover:text-primary">Patients</Link>
            <Link to="/appointments" className="text-sm font-medium hover:text-primary">Appointments</Link>
            <Link to="/ehr" className="text-sm font-medium hover:text-primary">Records</Link>
            <Link to="/pharmacy" className="text-sm font-medium hover:text-primary">Pharmacy</Link>
            <Link to="/billing" className="text-sm font-medium hover:text-primary">Billing</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
