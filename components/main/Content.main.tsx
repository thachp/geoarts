export const MainContent = () => {
    return (
        <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-4xl xl:text-5xl">
                    <span className="md:block">patrick's collections</span>{" "}
                    <span className="text-indigo-400 md:block">Geometric Arts</span>
                </h1>
                <div className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    <p>
                        PC'GA is a collection of 1,000 Geometric Art NFTs—unique digital collectibles publish on the
                        Ethereum blockchain. GeoArt NFTs are back by actual geometric artworks, commission by real
                        contemporary geometric artists worldwide.
                    </p>

                    <h4 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-2xl xl:text-3xl">
                        about this collection
                    </h4>
                    <ul className="text-lg" role="list">
                        <li className="my-4">
                            Artworks in this collection are unique and original with a rarity score based on an uniform
                            formula, made possible with randomization techniques in software engineering and from the
                            perspectives of the artist commission to paint the actual artwork.
                        </li>
                        <li className="my-4">
                            Each NFT has a white box and links to a poetic theme. The white box is intended to be filled
                            by an actual geometric artist, which only the current owner of the NFT can commission
                            approve. The artist must be approved by the founder of this collection.
                        </li>
                        <li className="my-4">
                            I digitally sign each artwork based on asymmetric encryption, where the public key is
                            published on the blockchain, but the private key is stored in a safety deposit box at a
                            well-known bank.
                        </li>
                        <li className="my-4">
                            Only ten artworks have <span className="text-yellow-500">Gold</span> color, only 20 artworks
                            have <span className="text-red-500">Red</span> color, and only 30 artworks have{" "}
                            <span className="text-blue-500">Blue</span> color.
                        </li>
                    </ul>
                </div>
                <div className="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">
                    PC'GA NFTs are available at these marketplaces
                </div>
                <div className="my-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                    <div className="flex flex-wrap items-start justify-between">
                        <div className="flex justify-center px-1">
                            <img
                                className="h-9 sm:h-10"
                                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                                alt="Tuple"
                            />
                        </div>
                        <div className="flex justify-center px-1">
                            <img
                                className="h-9 sm:h-10"
                                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                                alt="Workcation"
                            />
                        </div>
                        <div className="flex justify-center px-1">
                            <img
                                className="h-9 sm:h-10"
                                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                                alt="StaticKit"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
