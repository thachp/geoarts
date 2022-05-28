interface MainProps {
    name: string;
    description: string;
}

export const Main = ({ description }: MainProps) => {
    return <div>{description}</div>;
};

export default Main;
