import Profile from "./Profile.jsx";
import ProfileAddress from "./ProfileAddress.jsx";
import ProfileForm from "./ProfileForm.jsx";

export default function ProfileApp() {
  return (
    <>
      <h1>Profile App</h1>
      <ProfileForm />
      <Profile />
      <ProfileAddress />
    </>
  );
}
