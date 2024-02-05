
import { AuthWrapper } from "./auth/AuthWrapper";
import AppRoutes from "./structure/AppRoutes";

function App() {
  return (
   
     <AuthWrapper>
       <AppRoutes />
     </AuthWrapper>
     
   
  );
}

export default App;
