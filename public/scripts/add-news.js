const newsForm = document.querySelector("form");
const succesLink = document.querySelector("form p");

// Als er op de submit button wordt geklikt ...
newsForm.addEventListener("submit", async function (event) {
  // Voorkom de standaard submit van de browser
  // Let op: hiermee overschrijven we de default Loading state van de browser...
  event.preventDefault();

  //formdata voorbereiden:
  let formData = new FormData(newsForm);

  // Data fetchen:
  // Doe een fetch naar de server, net als hoe de browser dit normaal zou doen
  // Gebruik daarvoor het action en method attribuut van het formulier
  // Stuur de formulierelementen mee
  const response = await fetch(newsForm.action, {
    method: newsForm.method, //POST dus
    body: new URLSearchParams(formData), // <<< Dit moet omdat server.js anders niet met de formulier data kan werken
  });

  // Data verwerken:
  // Jouw server.js geeft data terug als het posten goed gaat
  const responseData = await response.text();

  // Normaal zou de browser die HTML parsen en weergeven.
  // Maar omdat we dit nu in client-side JS doen moeten we dit zelf doen:
  // Parse de nieuwe HTML en maak onderwater een nieuw Document Object Model aan
  const parser = new DOMParser();
  const responseDOM = parser.parseFromString(responseData, "text/html");

  // add success state
  succesLink.classList.add("succes-animation");
});
