import './header.css';
export default function Header({handleThemeChange}) {
    return (
        <>
            <div className="header-container shadow">
                <img className='logo' src='src\assets\images\logo.svg' alt='logo'></img>
                <a className='gradient-toggle' onClick={handleThemeChange}><img src='src\assets\images\icon-moon.svg' alt='moon'></img></a>
            </div>
        </>
    )
}