import "../styles/modal.scss";

interface Props {
    show: boolean,
    children: any
}

const Modal = (props: Props) => {
    return (
        <div className="modal" style={{
            transform: props.show ? 'translate(-50%, 0)' : 'translate(-50%, 500px)'
        }}>
            <p>{props.children}</p>
        </div>
    );
}

export default Modal;