import './button.css';
export default function Button({label}) {
    return(
        <>
            <button className="btn rounded-4px">
                {label}
            </button>
        </>
    )
}