import "../styles/overlay.scss";

interface Props {
    show: boolean,
    clicked: any
}

const Overlay = (props: Props) => {
    return (
        <div className="overlay" onClick={props.clicked} style={{
            opacity: props.show ? 0.85 : 0,
            zIndex: props.show ? 100 : -1,
        }}></div>
    );
}

export default Overlay;