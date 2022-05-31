import { MintArt } from "../Mint.art";
import { ArtworkMain } from "./Artwork.main";

export const MainRight = () => {
    return (
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
            <ArtworkMain />
            <MintArt />
        </div>
    );
};
