import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../firebase"

export function SignInButton() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
  }
  return (
    <button onClick={signInWithGoogle}>
      <p>login with google</p>
    </button>
  )
}
