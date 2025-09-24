import './button.css';
export default function Button({id, label, active, onClick, className = ""}) {
    return(
        <>
            <button
             onClick={() => onClick(id)}
             className={`btn shadow ${active ? "btn-active" : ""} ${className}`}>
                {label}
            </button>
        </>
    )
}