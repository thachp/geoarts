import { Layout } from "../Layout";
import { MainContent } from "./Content.main";
import { MainRight } from "./Right.main";

interface MainProps {
    name: string;
    description: string;
}

export const Main = (props: MainProps) => {
    return (
        <Layout>
            <main className="my-8">
                <div className="mx-auto max-w-7xl">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <MainContent />
                        <MainRight />
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Main;
