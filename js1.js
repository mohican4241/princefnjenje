 // Short helper utilities
        const email = "prince.njenje@example.com";

        // Download a simple CV text file built from the profile
        document.getElementById('downloadCv').addEventListener('click', () => {
            const txt = [
                "Prince F Njenje",
                "Computer Engineering Student — Chinhoyi University",
                "",
                "Skills:",
                "- Web Development (HTML/CSS/JS)",
                "- Graphic Design (Branding, Ads)",
                "- Embedded Systems & Prototyping",
                "",
                "Contact: " + email,
                "Phone: +263 77 000 0000",
                "Website: https://princenjenje.dev",
                "",
                "Portfolio: local files or links"
            ].join("\n");
            const blob = new Blob([txt], {type: "text/plain;charset=utf-8"});
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = "Prince-F-Njenje-CV.txt";
            a.click();
            URL.revokeObjectURL(url);
        });

        // Contact form: open mail client with content
        document.getElementById('contactForm').addEventListener('submit', function(e){
            e.preventDefault();
            const n = document.getElementById('name').value.trim();
            const em = document.getElementById('email').value.trim();
            const sub = document.getElementById('subject').value.trim() || "Contact from portfolio";
            const msg = document.getElementById('message').value.trim();

            const body = encodeURIComponent("From: " + n + " <" + em + ">\n\n" + msg);
            const mailto = `mailto:${email}?subject=${encodeURIComponent(sub)}&body=${body}`;
            window.location.href = mailto;
        });

        // Copy form content to clipboard
        document.getElementById('copyBtn').addEventListener('click', () => {
            const n = document.getElementById('name').value.trim();
            const em = document.getElementById('email').value.trim();
            const sub = document.getElementById('subject').value.trim();
            const msg = document.getElementById('message').value.trim();
            const content = `Name: ${n}\nEmail: ${em}\nSubject: ${sub}\nMessage:\n${msg}`;
            navigator.clipboard?.writeText(content).then(() => {
                alert('Message copied to clipboard.');
            }).catch(() => {
                prompt('Copy the message below:', content);
            });
        });

        // Hire button fallback (already an href)
        document.getElementById('hireBtn').addEventListener('click', (e) => {
            // default anchor will open mail client; keep this handler for consistency
        });

        // Contact mail quick link (href already set)
        document.getElementById('contactMail').addEventListener('click', (e) => {
            // default anchor opens mail client
        });

        // Export portfolio as a simple HTML snapshot
        document.getElementById('portfolioPdf').addEventListener('click', (e) => {
            e.preventDefault();
            const title = "Prince F Njenje — Portfolio Snapshot";
            const html = `
                <html>
                <head><meta charset="utf-8"><title>${title}</title></head>
                <body style="font-family:Arial,sans-serif;color:#0b1220;padding:20px;">
                    <h1>${title}</h1>
                    <p>Generate portfolio snapshot from profile page.</p>
                </body></html>`;
            const blob = new Blob([html], {type: 'text/html'});
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;a.download = 'portfolio-snapshot.html';a.click();
            URL.revokeObjectURL(url);
        });

        // Small accessibility improvement: focus outlines for keyboard users
        (function(){
            let mouse = false;
            window.addEventListener('mousedown',()=>{ mouse=true; document.documentElement.style.setProperty('--focus-style','none'); });
            window.addEventListener('keydown',(e)=>{ if(e.key === 'Tab'){ mouse=false; document.documentElement.style.setProperty('--focus-style','auto'); }});
        })();