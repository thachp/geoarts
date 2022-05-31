export const LoginAuth = () => {
    return (
        <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
            <div className="px-4 py-4 sm:px-6">
                <div className="my-2">
                    <div className="space-y-6">
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                            >
                                Sign in with Metamask to Mint
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-6">
                <div className="text-xs leading-5 text-gray-500">
                    By signing in, you agree to the{" "}
                    <a href="#" className="font-medium text-gray-900 hover:underline">
                        Terms
                    </a>
                    ,{" "}
                    <a href="#" className="font-medium text-gray-900 hover:underline">
                        Data Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="font-medium text-gray-900 hover:underline">
                        Cookies Policy
                    </a>
                    .
                </div>
            </div>
        </div>
    );
};
