const extensions = [
    {
        "logo": "./assets/images/logo-devlens.svg",
        "name": "DevLens",
        "description": "Quickly inspect page layouts and visualize element boundaries.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-style-spy.svg",
        "name": "StyleSpy",
        "description": "Instantly analyze and copy CSS from any webpage element.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-speed-boost.svg",
        "name": "SpeedBoost",
        "description": "Optimizes browser resource usage to accelerate page loading.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-json-wizard.svg",
        "name": "JSONWizard",
        "description": "Formats, validates, and prettifies JSON responses in-browser.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-tab-master-pro.svg",
        "name": "TabMaster Pro",
        "description": "Organizes browser tabs into groups and sessions.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-viewport-buddy.svg",
        "name": "ViewportBuddy",
        "description": "Simulates various screen resolutions directly within the browser.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-markup-notes.svg",
        "name": "Markup Notes",
        "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-grid-guides.svg",
        "name": "GridGuides",
        "description": "Overlay customizable grids and alignment guides on any webpage.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-palette-picker.svg",
        "name": "Palette Picker",
        "description": "Instantly extracts color palettes from any webpage.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-link-checker.svg",
        "name": "LinkChecker",
        "description": "Scans and highlights broken links on any page.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-dom-snapshot.svg",
        "name": "DOM Snapshot",
        "description": "Capture and export DOM structures quickly.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-console-plus.svg",
        "name": "ConsolePlus",
        "description": "Enhanced developer console with advanced filtering and logging.",
        "isActive": true
    }
]
const extensionContainer = document.querySelector('.extension-container');
const filterButtons = document.querySelectorAll('.filter-btn');




extensions.forEach(({logo, name, description, isActive}) => {
    extensionContainer.innerHTML += isActive 
        ?    `<div class="extension-item">
                <div class="extension-info">
                    <img src="${logo}" alt="">
                    <div class="extension-info-text">
                        <h1>${name}</h1>
                        <p>${description}</p>
                    </div>
                </div>
                <div class="extension-btn-container">
                    <button class="remove-btn">Remove</button>
                    <button class="activate-toggle active">
                        <div class="circle"></div>
                    </button>
                </div>
            </div>`
        :    `<div class="extension-item">
                <div class="extension-info">
                    <img src="${logo}" alt="">
                    <div class="extension-info-text">
                        <h1>${name}</h1>
                        <p>${description}</p>
                    </div>
                </div>
                <div class="extension-btn-container">
                    <button class="remove-btn">Remove</button>
                    <button class="activate-toggle">
                        <div class="circle"></div>
                    </button>
                </div>
            </div>`
        
})






function setToggleEventListener(extensions) {
    const activateToggles = document.querySelectorAll('.activate-toggle');
    activateToggles.forEach(((toggle, index) => toggle.addEventListener('click', () => {
        toggle.classList.toggle('active')
        extensions[index].isActive = !extensions[index].isActive
        console.log(extensions[index])
    })))
}

setToggleEventListener(extensions)

function filterExtensions(e) {
    filterButtons.forEach(filterButton => filterButton.classList.remove('highlight'))
    e.target.classList.add('highlight')
    extensionContainer.innerHTML = ''
    let filteredExtensions =''
    switch(e.target.value) {
        case 'all':
            filteredExtensions = extensions
            break
        case 'active':
            filteredExtensions = extensions.filter(({isActive}) => isActive === true)
            break
        case 'inactive':
            filteredExtensions = extensions.filter(({isActive}) => isActive === false)
            break
    }
    
    filteredExtensions.forEach(({logo, name, description, isActive}) => {
        extensionContainer.innerHTML += isActive 
            ?    `<div class="extension-item">
                    <div class="extension-info">
                        <img src="${logo}" alt="">
                        <div class="extension-info-text">
                            <h1>${name}</h1>
                            <p>${description}</p>
                        </div>
                    </div>
                    <div class="extension-btn-container">
                        <button class="remove-btn">Remove</button>
                        <button class="activate-toggle active">
                            <div class="circle"></div>
                        </button>
                    </div>
                </div>`
            :    `<div class="extension-item">
                    <div class="extension-info">
                        <img src="${logo}" alt="">
                        <div class="extension-info-text">
                            <h1>${name}</h1>
                            <p>${description}</p>
                        </div>
                    </div>
                    <div class="extension-btn-container">
                        <button class="remove-btn">Remove</button>
                        <button class="activate-toggle">
                            <div class="circle"></div>
                        </button>
                    </div>
                </div>`
            
    })
    setToggleEventListener(filteredExtensions)
}

filterButtons.forEach(filterButton => filterButton.addEventListener('click', filterExtensions))