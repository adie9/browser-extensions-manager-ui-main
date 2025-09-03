export default function Switch({active, setActive}) {
    function toggleActive() {
        setActive(!active);
    }

    return (
        <>
            <label className='switch'>
                <input
                    type="checkbox"
                    checked={active}
                    onChange={toggleActive}
                />
            </label>
        </>
    )
}