interface MainProps {
    name: string;
    description: string;
}

export const Main = (props: MainProps) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <textarea
                style={{ width: 600, height: 600, border: "1px solid black" }}
                defaultValue={JSON.stringify(props)}
            />
        </div>
    );
};

export default Main;
