import { auth } from "../firebase";

export function SignOutButton() {
  return (
    <button onClick={() => auth.signOut()}>
      <p>logout</p>
    </button>
  )
}

