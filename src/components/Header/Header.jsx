import './header.css';
export default function Header({theme, handleThemeChange}) {
    // Conditionally select toggle icon
    const toggleIconSrc = theme === "light" ? 'src/assets/images/icon-moon.svg' : 'src/assets/images/icon-sun.svg';
    
    return (
        <>
            <div className="header-container shadow">
                <img className='logo' src='src\assets\images\logo.svg' alt='logo'></img>
                <a className='gradient-toggle' onClick={handleThemeChange}><img src={toggleIconSrc} alt={theme === "light" ? "moon" : "sun"}></img></a>
            </div>
        </>
    )
}