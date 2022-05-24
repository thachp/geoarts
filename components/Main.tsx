interface MainProps {
    hello: string;
}

export const Main = ({ hello }: MainProps) => {
    return <div>{hello}</div>;
};

export default Main;
