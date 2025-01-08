'use client';
import { useState } from 'react';
import { employees } from '@/data/employees.data';
import TabButton from '@/components/tab-button';
import DetailsInput from '@/components/details-input';
import ProfilePhoto from '@/components/profile-photo';

function formatDate(dateString) {
  if (!dateString) return 'N/A';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export default function Employees() {
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="flex min-h-screen bg-gray-500">
      <aside className="w-1/4 bg-slate-300 p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 m-2 text-gray-800">
            <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
            <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
          </svg>
          Employees</h2>
        <ul className="space-y-4">
          {employees.map((employee) => (
            <li
              key={employee.id}
              className={`p-4 rounded-lg cursor-pointer transition-colors flex items-center ${selectedEmployee.id === employee.id ? 'bg-gray-200' : 'hover:bg-gray-100'
                }`}
              onClick={() => setSelectedEmployee(employee)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#0f172a" className="size-6 m-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <span className="text-lg font-medium text-slate-700">{employee.personalInfo.firstName} {employee.personalInfo.lastName}</span>
            </li>
          ))}
        </ul>
      </aside>
      <main className="w-3/4 p-5 bg-slate-100">
        <h2 className="text-3xl font-semibold mb-6 text-slate-900">Employee Details</h2>
        <div className="flex items-start mb-6">
          <section className="my-4 ml-0 py-4 flex flex-col justify-center">
            <ProfilePhoto src={selectedEmployee.profilePhoto} alt={`${selectedEmployee.firstName} ${selectedEmployee.lastName}`} size={200} />
            <button className="mt-4 mx-auto px-4 py-2 bg-blue-700 text-white rounded-md w-3/4 font-bold">Edit Profile</button>
            <button className="mt-2 mx-auto px-4 py-2 bg-blue-900 text-white rounded-md w-3/4 font-bold" type="file">Upload photo</button>
          </section>
          <div className="w-3/4 m-2">
            <section id="tabButtons" className="mb-0">
              <TabButton activeTab={activeTab} setActiveTab={setActiveTab} tabName="personal" displayTxt="Personal Info" />
              <TabButton activeTab={activeTab} setActiveTab={setActiveTab} tabName="company" displayTxt="Company Info" />
              <TabButton activeTab={activeTab} setActiveTab={setActiveTab} tabName="contact" displayTxt="Contact Info" />
            </section>

            <main className="bg-white p-6 shadow-md rounded-lg">
              {selectedEmployee ? (
                <div>
                  {activeTab === 'personal' && (
                    <section className="space-y-4">
                      <DetailsInput displayTxt="First Name" value={selectedEmployee.personalInfo.firstName} />
                      <DetailsInput displayTxt="Last Name" value={selectedEmployee.personalInfo.lastName} />
                      <DetailsInput displayTxt="Date of Birth" value={formatDate(selectedEmployee.personalInfo.dateOfBirth)} />
                    </section>
                  )}
                  {activeTab === 'company' && (
                    <section className="space-y-4">
                      <DetailsInput displayTxt="Employee ID" value={selectedEmployee.id} />
                      <DetailsInput displayTxt="Department" value={selectedEmployee.companyInfo.department} />
                      <DetailsInput displayTxt="Position" value={selectedEmployee.companyInfo.jobTitle} />
                      <DetailsInput displayTxt="Start Date" value={formatDate(selectedEmployee.companyInfo.startDate)} />
                      <DetailsInput displayTxt="End Date" value={selectedEmployee.companyInfo.endDate ? formatDate(selectedEmployee.companyInfo.endDate) : 'N/A'} />
                    </section>
                  )}
                  {activeTab === 'contact' && (
                    <section className="space-y-4">
                      <DetailsInput displayTxt="Email" value={selectedEmployee.contactInfo.email} />
                      <DetailsInput displayTxt="Phone" value={selectedEmployee.contactInfo.phone} />
                      <DetailsInput displayTxt="Address" value={selectedEmployee.contactInfo.address} />
                    </section>
                  )}
                </div>
              ) : (
                <p className="text-lg text-gray-600">Select an employee to see their details.</p>
              )}
            </main>
          </div>
        </div>


      </main>
    </div>
  );
}