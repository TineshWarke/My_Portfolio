import React, { useEffect } from 'react'
import { useTheme } from "next-themes";

const Theme = () => {
    const { theme, setTheme } = useTheme()
    useEffect(() => setTheme('light'), [])

    return (
        <ul className="bg-base-100 dark:bg-black/50 dark:text-white p-2 rounded-box z-[1] w-35 shadow-2xl">
            <li>
                <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Synthwave"
                    value="synthwave"
                    onChange={() => setTheme('light')}
                />
            </li>
            <li><input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Luxury"
                value="luxury"
                // onChange={() => setTheme('dark')}
                onChange={() => setTheme('light')}
            />
            </li>
            <li>
                <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Sunset"
                    value="sunset"
                    onChange={() => setTheme('light')}
                />
            </li>
            <li>
                <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Coffee"
                    value="coffee"
                    onChange={() => setTheme('light')}
                />
            </li>
            <li>
                <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Cyberpunk"
                    value="cyberpunk"
                    onChange={() => setTheme('light')}
                />
            </li>
            <li>
                <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Winter"
                    value="winter"
                    onChange={() => setTheme('light')}
                />
            </li>
            <li>
                <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Forest"
                    value="forest"
                    onChange={() => setTheme('light')}
                />
            </li>
        </ul>
    )
}

export default Theme
