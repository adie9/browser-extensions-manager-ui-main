import './button.css';
export default function Button({id, label, active, onClick}) {
    return(
        <>
            <button
             onClick={() => onClick(id)}
             className={`btn shadow ${active ? "btn-active" : ""}`}>
                {label}
            </button>
        </>
    )
}