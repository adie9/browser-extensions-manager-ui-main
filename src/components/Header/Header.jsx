import './header.css';
export default function Header() {
    return (
        <>
            <div className="header-container">
                <img className='logo' src='src\assets\images\logo.svg' alt='logo'></img>
                <img className='gradient-toggle' src='src\assets\images\icon-moon.svg' alt='moon'></img>
            </div>
        </>
    )
}