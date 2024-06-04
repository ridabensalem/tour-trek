import EmptyState from "@/app/components/elementsUi/EmptyState";
import ClientOnly from "@/app/components/elementsUi/ClientOnly";
import getUserProfile from "@/app/actions/getUserProfile";
import ProfileFrameElement from "@/app/components/profile/profileFrame";
import UserProfileCard from "@/app/components/profile/UserProfileCard";

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
      <ProfileFrameElement text="Personalize Your Profile">
        <UserProfileCard user={userProfile} />
      </ProfileFrameElement>
    </ClientOnly>
  );
}
export default ProfilePage;
