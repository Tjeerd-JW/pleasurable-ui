# Pleasurable User Interface

Ontwerp en maak met een team voor een opdrachtgever een interface waar gebruikers blij van worden.

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/pleasurable-ui/blob/main/docs/INSTRUCTIONS.md)

## Inhoudsopgave

- [Beschrijving](#beschrijving)
- [Kenmerken](#kenmerken)
- [Installatie](#installatie)
- [Bronnen](#bronnen)
- [Licentie](#licentie)

## Beschrijving

<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

Ad Connect is een website om meer informatie te krijgen over AD's. Op AdConnect kan je ook het laatste nieuws lezen, kandidaten bekijken voor de talent awards en meer te weten komen over LAdO's. Je kan hem nu [hier](https://pleasurable-ui-vyle.onrender.com/) bekijken.

## Kenmerken

<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->

### LAdO's

### Hamburgermenu

De website heeft voor mobiele gebruikers een mooi hamburger slide menu. Gemaakt met een popover en geanimeerd met css en javascript. De hamburger menu kan gesloten worden door erbuiten te klikken of door op escape te klikken. Als de gebruiker JS aan heeft dan krijgen ze mooie animaties bij het openen en sluiten van het menu.

<img src="public/assets/images/burgermenu.gif" height="250">

### Hero banner
De hero banner is gebouwd als een herbruikbare Liquid partial die op meerdere pagina's gebruikt kan worden met verschillende parameters. De Hero banner is dus een klein stukje code wat op meerdere plekken wordt gebruikt. De partial accepteert een titel, beschrijving, twee optionele knoppen en een optionele afbeelding. De afbeelding kan via een parameter links of rechts geplaatst worden. De partial maakt gebruik van het bestaande image.liquid partial voor responsive images met AVIF en WebP formaten. 

### Back to top

De back to top button is gebouwd als een herbruikbare Liquid partial die onderaan elke pagina geladen wordt. De knop is standaard verborgen en verschijnt pas na het scrollen van 300 pixels. De knop is gebouwd volgens Progressive Enhancement, dus het werkt zonder JavaScript, waar de knop altijd zichtbaar als een gewone link naar de top van de pagina. Met JavaScript verschijnt en verdwijnt de knop op basis van de scroll positie. Het scrollt smooth naar boven als de gebruiker er op drukt. Dit alles om het gebruik van de website pleasurable te maken. De animatie respecteert de prefers-reduced-motion instelling van de gebruiker.

### News

bij de nieuws pagina wordt alle nieuws berichten in een grid met blokken te laten zien.

<img src="public/assets/images/newsgrid.png" height="250">

deze blokken worden herbruikt in de home pagina.

## Installatie

<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->

Om dit project op te starten volg je deze stappen

1. clone het project lokaal
2. installeer het project
   ```bash
   npm install
   ```
3. start het project op
   ```bash
   npm run start
   ```

## Conventions

Read about our code conventions [here](./conventions.md).

## Bronnen

https://ishadeed.com/article/range-syntax/

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
