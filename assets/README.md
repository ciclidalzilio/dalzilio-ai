# assets — immagini del tema Shopify

Nota operativa su come viene gestita la foto hero della home di
ciclidalzilio.com. I file binari non stanno in questo repo: vivono nei
File del negozio Shopify e vengono scritti nel tema via Admin API.

## Hero della home

- Template: `templates/index.liquid`, blocco `<div class="hero-foil">`.
- Asset usato: `assets/hero-corsa.jpg` (foto a tutta altezza sulla destra).
- Stile: `assets/dz-lucidature.css`, regole `.hero-foil` — maschera sfumata
  sul bordo sinistro, `mix-blend-mode: multiply` per fondere la foto nel
  fondale chiaro, versione mobile ancorata in basso.

## Procedura per cambiare la foto

1. Caricare la foto in Shopify: *Admin → Contenuti → File*.
2. Duplicare il tema pubblicato (`themeDuplicate`): sul tema live non si
   scrive, si lavora sempre su una copia `dztema2026-NN (lavoro)`.
3. Scrivere l'immagine nella copia con `themeFilesUpsert`, filename
   `assets/hero-corsa.jpg`, body di tipo `URL` con il link del CDN.
4. Controllare l'anteprima e, se convince, pubblicare dall'admin.

## Storico

- 2026-09-08 — nuova foto hero (Scott Addict Gravel sulla costa, ph. Moritz
  Ablinger) sulla copia `dztema2026-30 (lavoro) — hero gravel`, in attesa
  di conferma prima della pubblicazione.
