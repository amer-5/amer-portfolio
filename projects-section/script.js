const pageBody = document.getElementsByClassName("page-body")[0];

const projects = [
  {
    title: "Vlašić Gradnja",
    description: `Vlasić Gradnja d.o.o. je vaš partner za građevinske projekte visoke kvalitete! 🏗️💼 \n
      Naš tim stručnjaka s dugogodišnjim iskustvom posvećen je vašim potrebama. 🌟 \n
      S ponosom ističemo naše usluge: renoviranje, adaptaciju, i izgradnju objekata. 🏠🔨 \n
      Pogledajte naše prethodne projekte i uvjerite se u kvalitetu našeg rada! 📸👀 \n
      Započnite svoj sljedeći građevinski projekt s nama! Kontaktirajte nas putem web stranice. 📧🤝`,
    shortDescription: "Vlašić gradnja je građevinska firma u Travniku.",
    image: "../sources/vlasic.png",
    icon: "../sources/vlasic-icon.png",
  },
];

const listProjects = (projects) => {
  const wrapper = document.getElementById("wrapper");
  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "card rounded-xl";
    const popUp = document.createElement("div");
    popUp.className =
      "hidden flex-col fixed inset-0 left-1/2 -translate-x-[calc(50%+.25rem)] md:-translate-x-[calc(50%+2rem)] z-50 w-screen md:w-full box-border outline-none mx-1 my-1 sm:mx-6 sm:my-16 max-w-2xl md:rounded-xl md:max-h-[calc(100%-7.5rem)] border-[#292f46] bg-[#2f3a4c] text-[#fff] mt-0 xs:mt-20";

    function openPopUp() {
      pageBody.style.opacity = "0.5";
      popUp.style.display = "flex";
    }
    function closePopUp() {
      popUp.style.display = "none";
      pageBody.style.opacity = "1";
    }

    popUp.innerHTML = `
    <header class="py-4 px-6 flex-initial text-large font-semibold border-b-[1px] border-[#292f46] flex flex-col gap-1">
      <p class="text-[#999] text-sm">Title:</p>
      <p>${project.title}</p>
      <button id="closePopUpButton-${index}" class="absolute appearance-none select-none top-1 right-1 p-2 text-foreground-500 rounded-full tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 hover:bg-white/5 active:bg-white/10"><svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="1em"><path d="M18 6L6 18M6 6l12 12"></path></svg></button>
    </header>
    <div class="flex flex-1 flex-col gap-3 px-6 overflow-y-auto py-6">
      <div class="relative shadow-black/5 shadow-none rounded-large">
        <img class="rounded-xl" src="${project.image}">
      </div>
      <p class="text-[#999] text-sm">
        Description:
      </p>
      <p>${project.description}</p>
    </div>
    `;

    document.body.appendChild(popUp);

    card.innerHTML = `
      <div class="flex flex-col box-border relative w-full rounded-xl">
        <img src="${project.image}" class="object-cover aspect-[4/3] rounded-xl">
        <div class="rounded-b-xl p-3 h-auto flex w-full items-center overflow-hidden backdrop-blur absolute bottom-0 bg-black/40">
          <div class="flex items-center flex-grow gap-2" id="cardFooter-${index}">
            <div class="relative shadow-black/5 shadow-none" style="max-width: fit-content;">
              <img src="${project.icon}" class="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 object-cover rounded-full w-14 h-14" data-loaded="true">
            </div>
            <div class="flex flex-col rounded-xl">
              <p class="font-mono text-[0.8rem] text-white/60">${project.title}</p>
              <p class="font-mono text-[0.65rem] text-white/60">${project.shortDescription}</p>
            </div>
          </div>
        </div>
      </div>`;
    wrapper.appendChild(card);

    const openPopUpButton = document.createElement("button");
    openPopUpButton.textContent = "Read More";
    card.querySelector(`#cardFooter-${index}`).appendChild(openPopUpButton);
    openPopUpButton.addEventListener("click", openPopUp);

    const closePopUpButton = document.getElementById(
      `closePopUpButton-${index}`
    );
    closePopUpButton.addEventListener("click", closePopUp);
  });
};

listProjects(projects);
