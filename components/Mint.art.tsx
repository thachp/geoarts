interface MintArtProps {
    address: string;
    balance: number;
    rarities: string[];
}

export const MintArt = ({ address = "0xa8Ebd5233615664cb5FC612288AA1E1D8522DD0D", balance = 10 }: MintArtProps) => {
    return (
        <div className="bg-gray-300 rounded-md">
            <div className="px-4 py-4">
                <div className="my-1">
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-sky-800 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
                    >
                        Mint this artwork for 1 Ethereum
                    </button>
                </div>
            </div>
            <div className="px-4 py-3 bg-gray-200 border-t-2 rounded-t-none border-gray-200 rounded-md">
                <div className="text-xs leading-5 text-gray-500">
                    <span className="text-gray-900">Your wallet address: {address}</span>
                    <br />
                    <span className="text-gray-900">Wallet Balance: {balance} Ethereum</span>
                </div>
            </div>
        </div>
    );
};
