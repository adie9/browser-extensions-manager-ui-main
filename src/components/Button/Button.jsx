import './button.css';
export default function Button({label}) {
    return(
        <>
            <button className="btn shadow">
                {label}
            </button>
        </>
    )
}