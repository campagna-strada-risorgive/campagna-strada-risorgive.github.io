const subjects = [
    'Urgente: Sistemazione strada bianca Risorgive del Bacchiglione',
    'Segnalazione degrado percorsi Villaverla - Area Risorgive',
    'Richiesta manutenzione straordinaria strade Risorgive',
    'Pericolo buche e dissesto stradale - Via Risorgive'
];

function sendEmail() {
    const now = new Date();
    const dateStr = now.toLocaleDateString('it-IT');
    const timeStr = now.toLocaleTimeString('it-IT', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const subject = `${randomSubject} (${dateStr} ore ${timeStr})`;
    const body = `Spettabili Enti competenti,

con la presente segnalo il grave stato di dissesto della strada bianca e dei percorsi di accesso nell'area delle Risorgive del Bacchiglione a Villaverla.

Le profonde buche rendono il transito difficoltoso e pericoloso per residenti, ciclisti e camminatori. È necessario un intervento urgente di ripristino per garantire la sicurezza e il decoro di questa area naturalistica.

Certo di un vostro riscontro, porgo cordiali saluti.
[Firma l'email qui se desideri]

---
Segnalazione inviata il ${dateStr} alle ore ${timeStr}`;

    const recipient = "test@test.it";
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}