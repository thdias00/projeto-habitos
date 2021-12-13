import { AuthProvider } from "./auth";
import { HabitsProvider } from "./habits";
import { GroupsProvider } from "./groups";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <HabitsProvider>
        <GroupsProvider>
          {children}
        </GroupsProvider>
      </HabitsProvider>
    </AuthProvider>
  )
}

export default Providers