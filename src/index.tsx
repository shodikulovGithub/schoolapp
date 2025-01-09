// Suggested code may be subject to a license. Learn more: ~LicenseLog:1603314497.
import React from 'react';
//@ts-expect-error
import { createRoot } from 'react-dom'
import { App } from './App'


const root = createRoot(
    document.getElementById('root')
)

root.render(<App />)