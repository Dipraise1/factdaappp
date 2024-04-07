// Use client directive to mark this component for client-side operations
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Heading from '@/components/common/Heading';
import Paragraph from '@/components/common/Paragraph';
import MediumLogo from '@/public/assets/Medium.png'; // Ensure this path matches your file structure

const Tutorials: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      
      
      {/* Example Static Group Creation Form (UI Only) */}
      <div className="flex flex-col gap-4 items-center mb-8">
        <input type="text" placeholder="Enter group name" disabled className="input disabled:opacity-50" />
        <button disabled className="btn disabled:opacity-50">Create Group</button>
      </div>

      {/* Search Bar UI Only */}
      <div className="flex justify-center mb-8">
        <input type="text" placeholder="Search groups" disabled className="input disabled:opacity-50" />
      </div>

      {/* Static List of Groups (Example UI) */}
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <p className="font-semibold">Group Name: Example Group</p>
          
        </div>

        {/* Example usage of the Image component */}
       
      </div>
    </div>
  );
};


export default Tutorials;
