
export default function TabButton({ activeTab, setActiveTab, tabName, displayTxt }) {
  return (
    <button
      className={`px-4 py-2 rounded-md ${activeTab === tabName ? 'text-blue-700 font-bold' : 'text-gray-500'}`}
      onClick={() => setActiveTab(tabName)}
    >
      {displayTxt}
    </button>
  );
}