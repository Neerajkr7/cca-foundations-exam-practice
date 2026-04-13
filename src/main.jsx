import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ── Service Worker registration (vanilla, no Workbox dependency) ──────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register(
        import.meta.env.BASE_URL + 'sw.js',
        { scope: import.meta.env.BASE_URL }
      );

      // Check for updates every 60s while the app is open
      setInterval(() => reg.update(), 60_000);

      reg.addEventListener('updatefound', () => {
        const newSW = reg.installing;
        newSW?.addEventListener('statechange', () => {
          if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
            showUpdateBanner(newSW);
          }
        });
      });

      console.log('[CCA Exam] SW registered, scope:', reg.scope);
    } catch (err) {
      console.warn('[CCA Exam] SW registration failed:', err);
    }
  });
}

function showUpdateBanner(newSW) {
  if (document.getElementById('sw-banner')) return;
  const banner = document.createElement('div');
  banner.id = 'sw-banner';
  banner.innerHTML = `
    <span>✦ New version available</span>
    <button id="sw-update">Update now</button>
    <button id="sw-dismiss">✕</button>
  `;
  Object.assign(banner.style, {
    position: 'fixed', bottom: '20px', left: '50%',
    transform: 'translateX(-50%)', zIndex: '9999',
    display: 'flex', alignItems: 'center', gap: '12px',
    background: '#13112a', border: '1px solid rgba(155,127,255,0.45)',
    borderRadius: '12px', padding: '11px 18px',
    fontFamily: "'JetBrains Mono', monospace", fontSize: '12px',
    color: '#C4B5FD', boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
    whiteSpace: 'nowrap',
  });
  const btnStyle = {
    background: 'linear-gradient(135deg,#6B5FFF,#9B7FFF)',
    border: 'none', borderRadius: '6px', padding: '5px 14px',
    color: '#fff', cursor: 'pointer', fontSize: '11px', fontFamily: 'inherit',
  };
  const dismissStyle = {
    background: 'none', border: 'none', color: '#555',
    cursor: 'pointer', fontSize: '15px', padding: '0 2px',
  };
  Object.assign(banner.querySelector('#sw-update').style, btnStyle);
  Object.assign(banner.querySelector('#sw-dismiss').style, dismissStyle);

  banner.querySelector('#sw-update').onclick = () => {
    newSW.postMessage({ type: 'SKIP_WAITING' });
    navigator.serviceWorker.addEventListener('controllerchange', () => location.reload());
    banner.remove();
  };
  banner.querySelector('#sw-dismiss').onclick = () => banner.remove();
  document.body.appendChild(banner);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
