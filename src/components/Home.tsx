import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { SignInButton } from './SignInButton'

export function Home() {
  const [user] = useAuthState(auth)
  return (
    <div>
      {user ? (
        <>
        </>
      ) : (
        <SignInButton></SignInButton>
      )}
    </div>
  )
}
