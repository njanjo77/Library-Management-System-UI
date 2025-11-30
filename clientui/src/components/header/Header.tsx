
export const Header = () => {
    return (
        <header className="bg-red-400 shadow-sm border-b border-red-300 px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Library Manager</h1>
            <div>
                <input
                 type="text"
                 placeholder="Search books & members"
                 className="w-full outline-1 text-blue-800 p-2" />
            </div>
            <div>
                <button className="border-2 p-1 bg-blue-800 text-white">Search
                </button>
            </div>
        </header>
    )
}