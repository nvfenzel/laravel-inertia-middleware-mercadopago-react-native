import React from 'react'
import { Link, Head } from '@inertiajs/inertia-react';

const SignIn = () => {
  return (
    <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
        <Link href={route('register')}  class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Sign in
            </Link>
        <Link href={route('login')}  class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                Sign up
            </Link>
  </div>
  )
}

export default SignIn