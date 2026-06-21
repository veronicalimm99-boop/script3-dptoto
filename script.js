(function() {
    var done = false;

    function injectStyle() {
        if (document.getElementById('rt-footer-css')) return;
        var style = document.createElement('style');
        style.id = 'rt-footer-css';
        style.textContent = `
            .homepage__footer-content--collapsed {
                max-height: none !important;
                height: auto !important;
                overflow: visible !important;
                display: block !important;
            }
            .homepage__footer-button {
                display: none !important;
            }
            #rt-footer-content {
                width: 100%;
                box-sizing: border-box;
                margin-top: 16px;
                text-align: center;
            }
            .rt-section {
                width: 100%;
                box-sizing: border-box;
                margin-bottom: 20px;
            }
            .rt-section__header {
                display: block !important;
                margin-bottom: 12px;
                width: 100% !important;
                text-align: left !important;
            }
            .rt-section__header img {
                width: 35% !important;
                height: auto !important;
                display: inline-block !important;
                margin: 0 !important;
            }
            .rt-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 10px;
                text-align: left;
            }
            .rt-card {
                border-radius: 8px;
                overflow: hidden;
                display: block;
                cursor: pointer;
                transition: transform 0.2s ease, box-shadow 0.2s ease;
            }
            .rt-card:hover {
                transform: scale(1.04);
                box-shadow: 0 0 16px rgba(0, 180, 255, 0.5);
            }
            .rt-card img {
                width: 100%;
                height: auto;
                display: block;
                border-radius: 8px;
            }
            @media (max-width: 600px) {
                .rt-grid { grid-template-columns: repeat(2, 1fr); gap: 6px; }
                .rt-section__header img { width: 60%; }
            }
        `;
        document.head.appendChild(style);
    }

    function run() {
        if (done) return;
        if (document.getElementById('rt-footer-content')) { done = true; return; }

        var anchor = null;
        var all = document.querySelectorAll('h1');
        for (var i = 0; i < all.length; i++) {
            if (all[i].textContent.indexOf('DPTOTO') !== -1) {
                anchor = all[i];
                break;
            }
        }
        if (!anchor) return;

        done = true;
        injectStyle();

        var wrap = document.createElement('div');
        wrap.id = 'rt-footer-content';
        wrap.innerHTML = `
            <div class="rt-section">
                <div class="rt-section__header">
                    <img src="https://imgstorage.site/view/yuyu/livecasino.webp" alt="Live Games">
                </div>
                <div class="rt-grid">
                    <a href="/" class="rt-card"><img src="https://imgstorage.site/view/plotwis/idn-live-icon-24d.png" alt="IDN Live 24D" loading="lazy"></a>
                    <a href="/" class="rt-card"><img src="https://imgstorage.site/view/plotwis/idn-live-icon-3d-shio.png" alt="IDN Live 3D Shio" loading="lazy"></a>
                    <a href="/" class="rt-card"><img src="https://imgstorage.site/view/plotwis/idn-live-icon-baccarat.png" alt="IDN Live Baccarat" loading="lazy"></a>
                    <a href="/" class="rt-card"><img src="https://imgstorage.site/view/plotwis/idn-live-icon-billiard.png" alt="IDN Live Billiard" loading="lazy"></a>
                    <a href="/" class="rt-card"><img src="https://imgstorage.site/view/plotwis/idn-live-icon-dragon-tiger.png" alt="IDN Live Dragon Tiger" loading="lazy"></a>
                    <a href="/" class="rt-card"><img src="https://imgstorage.site/view/plotwis/idn-live-icon-monopoly.png" alt="IDN Live Monopoly" loading="lazy"></a>
                    <a href="/" class="rt-card"><img src="https://imgstorage.site/view/plotwis/idn-live-icon-roulette.png" alt="IDN Live Roulette" loading="lazy"></a>
                </div>
            </div>
            <div class="rt-section">
                <div class="rt-section__header">
                    <img src="https://imgstorage.site/view/yuyu/slotgames1.webp" alt="Slot Games">
                </div>
                <div class="rt-grid">
                    <a href="/" class="rt-card"><img src="https://imgstorage.site/view/plotwis/slot-games-icon-pragmatic.png" alt="Pragmatic Play" loading="lazy"></a>
                    <a href="/" class="rt-card"><img src="https://imgstorage.site/view/plotwis/slot-games-icon-pgsoft.png" alt="PG Soft" loading="lazy"></a>
                    <a href="/" class="rt-card"><img src="https://imgstorage.site/view/plotwis/slot-games-icon-habanero.png" alt="Habanero" loading="lazy"></a>
                    <a href="/" class="rt-card"><img src="https://imgstorage.site/view/plotwis/slot-games-icon-no-limit.png" alt="Nolimit City" loading="lazy"></a>
                    <a href="/" class="rt-card"><img src="https://imgstorage.site/view/plotwis/slot-games-icon-micro-gaming.png" alt="Microgaming" loading="lazy"></a>
                    <a href="/" class="rt-card"><img src="https://imgstorage.site/view/plotwis/slot-games-icon-toptrend.png" alt="Microgaming 2" loading="lazy"></a>
                    <a href="/" class="rt-card"><img src="https://imgstorage.site/view/plotwis/slot-games-icon-idn-slot.png" alt="Microgaming 3" loading="lazy"></a>
                    <a href="/" class="rt-card"><img src="https://imgstorage.site/view/plotwis/slot-games-icon-gmw.png" alt="GMW" loading="lazy"></a>
                </div>
            </div>
        `;

        anchor.insertAdjacentElement('afterend', wrap);
    }

    var obs = new MutationObserver(function() {
        if (!done) {
            run();
            if (done) obs.disconnect();
        }
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });

    setTimeout(run, 1000);
    setTimeout(run, 2500);
    setTimeout(run, 4500);
})();
