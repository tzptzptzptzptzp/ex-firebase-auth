import { auth } from "../firebase";

export function UserInfo() {
  return (
    <div>
      <img src={auth.currentUser?.photoURL as string} alt="UserIcon" />
    </div>
  )
}

