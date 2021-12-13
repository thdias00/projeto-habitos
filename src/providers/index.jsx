import { AuthProvider } from "./auth";
import { HabitsProvider } from "./habits";
import { GroupsProvider } from "./groups";
import { GoalsProvider } from "./goals";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <HabitsProvider>
        <GroupsProvider>
          <GoalsProvider>
            {children}
          </GoalsProvider>
        </GroupsProvider>
      </HabitsProvider>
    </AuthProvider>
  )
}

export default Providers