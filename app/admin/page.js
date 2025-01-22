import PageTitle from "@/components/PageTitle";

function AdminPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-500  text-gray-800">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <PageTitle>Inicio de sesión</PageTitle>
                <form className="mt-6">
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-800">Nombre de usuario</label>
                        <input type="text" id="username" name="username" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-800">Contraseña</label>
                        <input type="password" id="password" name="password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
                </form>
            </div>
        </div>
    );
}

export default AdminPage;
