// ############################# Responsive head section backgound ################################

const header = document.querySelector('header');
const headlineSection = document.querySelector('section.head');
const headerHelloBg = document.querySelector('.header-background');

const fitTheBgImageToTopSection = () => {
  headerHelloBg.style.height = `${header.offsetHeight + headlineSection.offsetHeight}px`;
};

['DOMContentLoaded', 'resize'].forEach((e) => {
  window.addEventListener(e, fitTheBgImageToTopSection);
});

// ################################ Mobile menu ################################
const MEDIA_BREAKPOINT = 768;
const mobileMenuButton = document.querySelector('button.buttonmobilemenu');
const mobileMenuList = document.querySelectorAll('.mobile-list > li');
const mobileMenu = document.querySelector('div.mobile-menu');

const cancelMobileMenu = document.querySelector('.mobile-menu .cancel');

function showMobileMenu(e) {
  if (e.currentTarget.classList.contains('buttonmobilemenu')) {
    mobileMenu.style.display = 'flex';
    mobileMenu.style['z-index'] = 2;
    document.body.style.overflowY = 'hidden';
  }
}

function hideMobileMenu(e) {
  if (
    e.currentTarget.classList.contains('cancel')
    || e.currentTarget.parentNode.classList.contains('mobile-list')
  ) {
    mobileMenu.style.display = 'none';
    mobileMenu.style['z-index'] = -2;
    document.body.style.overflowY = 'scroll';
  }
}

function hideMobileMenuOnEvent(e) {
  if (mobileMenu.style.display !== 'none') {
    if (e.type === 'resize') {
      if (window.innerWidth > MEDIA_BREAKPOINT) {
        mobileMenu.style.display = 'none';
        mobileMenu.style['z-index'] = -2;
        document.body.style.overflowY = 'scroll';
      }
    } else {
      mobileMenu.style.display = 'none';
      mobileMenu.style['z-index'] = -2;
      document.body.style.overflowY = 'scroll';
    }
  }
}

mobileMenuButton.addEventListener('click', showMobileMenu);
cancelMobileMenu.addEventListener('click', hideMobileMenu);
mobileMenuList.forEach((node) => node.addEventListener('click', hideMobileMenu));
window.addEventListener('resize', hideMobileMenuOnEvent);

// ################################ Dynamic details generation ################################
const speakersData = [
  {
    id: 'speaker1',
    name: 'Dr Adriana Amarilla',
    description1: 'Chair of Committee A, at S. America.',
    description2: 'Virtual   World Health Assembly',
    moreInfoLink: 'https://www.who.int/about/governance/world-health-assembly',
  },
  {
    id: 'speaker2',
    name: 'Mrs Dechen Wangmo',
    description1: 'Assembly President. from Bhutan',
    description2: 'Virtual   World Health Assembly',
    moreInfoLink: 'https://www.who.int/about/governance/world-health-assembly',
  },
  {
    id: 'speaker3',
    name: 'Dr Tedros Adhanom',
    description1: 'WHO Director-General, at Africa.',
    description2: 'World Health Organization Assembly ',
    moreInfoLink: 'https://www.who.int/about/governance/world-health-assembly',
  },
  {
    id: 'speaker4',
    name: 'Dr Tedros Adhanom',
    description1: 'WHO Director-General, at Africa.',
    description2: 'Virtual   World Health Assembly',
    moreInfoLink: 'https://www.who.int/about/governance/world-health-assembly',
  },
  {
    id: 'speaker5',
    name: 'Michael Jerferson ',
    description1: 'Program Director, at N. America.',
    description2: ' World Health Organization Assembly ',
    moreInfoLink: 'https://www.who.int/about/governance/world-health-assembly',
  },
  {
    id: 'speaker6',
    name: 'Christos Giakoumopoulos',
    description1: 'Director General, from Europe.',
    description2: 'Virtual   World Health Assembly',
    moreInfoLink: 'https://www.who.int/about/governance/world-health-assembly',
  },
];

const dynamicSpeakers = document.querySelector('.dynamic-speakers');

const loadSpeakers = () => {
  if (dynamicSpeakers !== null) {
    speakersData.forEach((speaker) => {
      const render = `
            <li class="${speaker.id}">
            <div class="profilepicture">
            </div>
            <div class="profile-info">
              <h3 class="name">${speaker.name}</h3>
              <p class="hall-of-fame">${speaker.description1}<br>${speaker.description2}
              </p>
              <hr>
              <a
                href="${speaker.moreInfoLink}">More
                info</a>
            </div>
            </li>`;
      dynamicSpeakers.innerHTML += `\n ${render}`;
    });
  }
};
document.addEventListener('DOMContentLoaded', loadSpeakers);
