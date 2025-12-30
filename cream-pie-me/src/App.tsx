import { useState } from 'react'
import { ThemeHelper, useThemeDetector } from './tools/ThemeDetector';

function App() {
    const [count, setCount] = useState(0);
    const theme = useThemeDetector();
    const [darkMode, setDarkMode] = useState(true);
    theme.bindedUpdater = () => setDarkMode(!darkMode);

    return (
        <>
            <div className='font-extrabold  text-2xl ' onClick={theme.trigger}>1</div>
        </>
    )
}

export default App
