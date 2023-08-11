import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { UserInfo } from './UserInfo'
import { SignInButton } from './SignInButton'
import { SignOutButton } from './SignOutButton'

export function Home() {
  const [user] = useAuthState(auth)
  return (
    <div>
      {user ? (
        <>
          <UserInfo></UserInfo>
          <SignOutButton></SignOutButton>
        </>
      ) : (
        <SignInButton></SignInButton>
      )}
    </div>
  )
}
