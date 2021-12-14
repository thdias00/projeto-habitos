import { AuthProvider } from "./auth";
import { HabitsProvider } from "./habits";
import { GroupsProvider } from "./groups";
import { GoalsProvider } from "./goals";
import { ActivitiesProvider } from "./activities";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <HabitsProvider>
        <GroupsProvider>
          <GoalsProvider>
            <ActivitiesProvider>
              {children}
            </ActivitiesProvider>
          </GoalsProvider>
        </GroupsProvider>
      </HabitsProvider>
    </AuthProvider>
  )
}

export default Providers