'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import AJ from '../assets/AJ.jpg'
export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    console.log("Mobile Menu Open State: ", !mobileMenuOpen);
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <header className="bg-white relative">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-7 relative z-20">
      <div className="flex lg:flex-1">
  <a href="#" className="-m-1.5 p-1.5">
    <span className="sr-only">Your Company</span>
    <img
      alt=""
      src={AJ} // Make sure AJ is the correct path to your logo image
      className="h-10 w-10 rounded-full object-cover" // Adjust size and make it round
    />
  </a>
</div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={toggleMenu}  // Trigger the toggle function
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#about" className="text-sm font-semibold text-gray-900">About me</a>
          <a href="#skills" className="text-sm font-semibold text-gray-900">Skills</a>
          <a href="#projects" className="text-sm font-semibold text-gray-900">Projects</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#Contact" className="text-sm font-semibold text-gray-900">Contact me</a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <div className="fixed inset-0 z-30 bg-gray-900/50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-40 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#about" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Logo"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href="#about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">About</a>
                <a href="#skills" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Skills</a>
                <a href="#projects" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Projects</a>
              </div>
              <div className="py-6">
                <a href="#Contact" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50">Contact me</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
