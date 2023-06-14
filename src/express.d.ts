interface User {
    id: string;
    // Include other properties that your User object should have
  }
  
  declare module Express {
    interface Request {
      user?: User;
    }
  }