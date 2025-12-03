import { AccountSettings } from '@stackframe/stack'
import React from 'react'

const SettingsPage = async () => {
  return (
    <div className="min-h-screen bg-gray-50 text-black">
        <main className="p-8">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div className='mb-8'>
                        <h1 className="font-semibold text-2xl text-gray-900">Settings</h1>
                        <p className="text-sm text-gray-500">Manage your account and preferences.</p>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-6xl">
                    <div className='bg-black rounded-lg border border-gray-200 p-6'>
                        <AccountSettings fullPage/>
                    </div>
                </div>
            </div>

        </main>
    </div>
  )
}

export default SettingsPage;