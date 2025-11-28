import { SignIn } from "@stackframe/stack";
import Link from "next/link";


const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
            <SignIn />

            <Link href="/" className="mt-4 inline-block text-indigo-500 hover:underline">
                &larr; Back to Home
            </Link>
        </div>
    </div>
  )
}

export default SignInPage;