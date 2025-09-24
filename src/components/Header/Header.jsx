import './header.css';
import Logo from '/src/assets/images/logo.svg?react';
export default function Header({theme, handleThemeChange}) {
    // Conditionally select toggle icon
    const toggleIconSrc = theme === "light" ? 'src/assets/images/icon-moon.svg' : 'src/assets/images/icon-sun.svg';
    
    return (
        <>
            <div className="header-container shadow">
                <Logo className="logo" />
                <a className='gradient-toggle' onClick={handleThemeChange}><img src={toggleIconSrc} alt={theme === "light" ? "moon" : "sun"}></img></a>
            </div>
        </>
    )
}