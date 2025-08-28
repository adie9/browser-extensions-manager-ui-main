
import { useState } from 'react';

export default function Switch() {
    const [isChecked, setIsChecked] = useState(false);

    const toggleSwitch = () => {
    setIsChecked(!isChecked);
    };
    
    return (
        <>
            <label className='switch'>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={toggleSwitch}
                />
            </label>
        </>
    )
}