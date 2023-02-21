import React from 'react'

const Security = () => {
  return (
    <a href="#" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
    {/* <!-- Heroicon name: outline/shield-check --> */}
    <svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
    <div class="ml-4">
      <p class="text-base font-medium text-gray-900">Security</p>
      <p class="mt-1 text-sm text-gray-500">Your customers&#039; data will be safe and secure.</p>
    </div>
  </a>
  )
}

export default Security