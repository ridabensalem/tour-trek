import EmptyState from "@/app/components/elementsUi/EmptyState";
import ClientOnly from "@/app/components/elementsUi/ClientOnly";
import getUserProfile from "@/app/actions/getUserProfile";
import PersonalInfo from "../components/profile/PersonalInfo";
import Sidebar from "../components/profileComponents/Sidebar";
import Security from "../components/profile/security";
import Payments from "../components/profile/Payment";
import Preferences from "../components/profile/Preferences";

const ProfilePage = async () => {
  const userProfile = await getUserProfile();

  if (!userProfile) {
    return (
      <ClientOnly>
        <EmptyState
          title="No profile found"
          subtitle="Please login to view your profile."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
        <div className="container mx-auto max-w-screen-lg flex">
            <Sidebar/>
            <main className="flex-grow">
                  {/* <PersonalInfo user={userProfile} /> */}
                  {/* <Security /> */}
                  {/* <Payments /> */}
                <Preferences />
            </main>
        </div>
    </ClientOnly>
  );
}
export default ProfilePage;