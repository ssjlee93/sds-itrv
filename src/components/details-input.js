export default function DetailsInput({ displayTxt, value }) {
    return (
        <div className="mb-4 flex items-center">
            <label className="block text-lg font-medium text-slate-700 mr-4 w-1/4">{displayTxt}</label>
            <input type="text" value={value} readOnly
                className="mt-1 block w-3/4 p-2 border border-gray-300 rounded-md text-gray-500" />
        </div>
    );
}