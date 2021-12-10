import { AuthProvider } from "./auth";
import { HabitsProvider } from "./habits";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <HabitsProvider>
        {children}
      </HabitsProvider>
    </AuthProvider>
  )
}

export default Providers