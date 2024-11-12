"use client";
import React from 'react'
import Link from 'next/link';

function Tabs() {
  return (
   <>
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li className="me-2"  role="presentation">
                    <Link href="/about/aboutTrust">
                            <button className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">AboutTrust</button>
                    </Link>
                    
                </li>
                <li className="me-2" role="presentation">
                        <Link href="/about/Chairman_Desk">
                            <button className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Chairman_Desk</button>
                            </Link>
                </li>
                <li className="me-2" role="presentation">
                            <Link href="/about/Trustee">
                                <button className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Manageing Trustee</button>
                            </Link>
                </li>
                <li role="presentation">
                    <Link href="/about/our_mission" >
                            <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Our mission</button>
                    </Link>
                </li>
            </ul>
        </div>
        
   </>
  )
}

export default Tabs