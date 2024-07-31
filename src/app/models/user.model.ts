export interface User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    isAdmin: boolean;
    department: 'Marketing' | 'Management' | 'Maintenance';
  }
  
  