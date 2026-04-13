import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register'

// Register service worker - auto-updates silently
const updateSW = registerSW({
  onNeedRefresh() {
    // New content available - show a subtle refresh banner
    const banner = document.createElement('div')
    banner.id = 'sw-update-banner'
    banner.innerHTML = `
      <span>New questions available!</span>
      <button onclick="document.getElementById('sw-update-banner').remove(); updateSW(true)">Update</button>
      <button onclick="document.getElementById('sw-update-banner').remove()">✕</button>
    `
    banner.style.cssText = `
      position:fixed; bottom:16px; left:50%; transform:translateX(-50%);
      background:#1a1a2e; border:1px solid rgba(155,127,255,0.4);
      border-radius:10px; padding:10px 16px; display:flex; gap:12px;
      align-items:center; z-index:9999; font-family:monospace; font-size:12px;
      color:#C4B5FD; box-shadow:0 4px 24px rgba(0,0,0,0.5);
    `
    banner.querySelector('button:first-of-type').style.cssText = `
      background:#6B5FFF; border:none; border-radius:6px;
      padding:4px 12px; color:#fff; cursor:pointer; font-size:11px;
    `
    banner.querySelector('button:last-of-type').style.cssText = `
      background:none; border:none; color:#555; cursor:pointer; font-size:14px;
    `
    document.body.appendChild(banner)
  },
  onOfflineReady() {
    console.log('[CCA Exam] App ready to work offline')
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
