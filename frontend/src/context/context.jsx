import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);


 

  return (
    <TaskContext.Provider value={{ loading,setLoading }}>
      {children}
    </TaskContext.Provider>
  );
};
