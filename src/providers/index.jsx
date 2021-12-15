import { AuthProvider } from "./auth";
import { HabitsProvider } from "./habits";
import { GroupsProvider } from "./groups";
import { GoalsProvider } from "./goals";
import { ActivitiesProvider } from "./activities";
import { ColorsProvider } from "./colors";

const Providers = ({ children }) => {
  return (
    <ColorsProvider>
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
    </ColorsProvider>
  )
}

export default Providers