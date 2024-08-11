const links = document.querySelectorAll('.poem');

let poems = {
    'The provider who provides': 'In the dark hallway of life\nShines a ray of light\nto dark, the shine arises\nby the \'provider who provides\'\n\nWhen you find the provider\nno sorrow leaves a trace\nproblems, all of them vanish\nit all gives life an embrace\n\nBut comes a time for him too\nwhen tides take a turn\nif destiny is to be followed\nall man made tracks disappear\n\nEven the provider who provides\nSometimes too, wanders into a dark hallway\nfrom which he can\'t escape\nfrom where, escape has no way\n\nAnd that, provider who provides\nwhen is in the dark himself\nthere exists no entity\nwho will provide the same ray of life...\n',

    'A Bankrupt Billionaire' : 'A man can\'t be sunken\nwho\'s already at the bottom of the ocean\nhe can\'t fix any ships\nwho himself is in one broken\n\nhe\'s filled with knowledge and wit\nperhaps someone who\'s really rare\ndespite whatever he has done\nhe\'s still the bankrupt billionaire\n\nhe knows every game of life\nhow it turns joy into sorrow\nhow fate meets someone today\nwhat legacy does to him tomorrow\n\nhe went out to solve the issues\nto fix all the pain\nhe could\'ve done it, he sweared\nif he weren\'t a bankrupt billionaire\n\nno matter how hard he\'d try\nlife was always against him\neven if he\'d die trying\nhis own self wouldn\'t support him\n\nHe may be full of wisdom\nbut he\'s living in his own fear\nso, who was he to help people?\nfor himself, he was a bankrupt billionaire.\n',

    'I\'ve lost \'me\'': 'Life of mine is broken down\nlike broken twigs of a tree\nI don\'t have any ties that are healthy\nBecause I\'ve lost me.\n\nThe wires of my heart\nconnect in search of electricity\nof love and hope and light and care\nbut it forms circuits of pity\n\nTo all my friends I talk to\nsay I\'ve vented and ranted\nI needed someone to fill my gap\nbut made me feel unwanted\n\nTrust of mine was broken\nby someone who I haven\'t known\nI don\'t have any hope in myself\nor in a friend or a foe\n\nI don\'t know what will happen today or tomorrow\nbecause of what happened yesterday\nthe only thing I wanted was love\nsomeone who cared about me everyday\n\nI wish something would fix this\nget me back on the track that\'s right\nI\'ve wanted a real connection\none that would show me a ray of light\n\nI\'ve lost my only companion\nwho was lovely and was free\nI don\'t have any ties that are healthy\nBecause I\'ve lost \'me\'.',

    'A star that will always shine': 'Look, I might not know\nhow to get words to rhyme\nyou\'re just like a star in the darkness\nwhich will always shine\n\nyou\'re made of emotions\nstrong and weak, core and crust\nyou can be anyone you want\nall you need to do is trust\n\nlife is not always easy\nit gets dark so much you can\'t see\nstill the true wonders are hiding behind\nand the beauty you don\'t perceive\n\nyou are just like a dark hallway\nwhere darkness all lies\nbut you have the light inside you\nwhich makes the demons cry\n\nyou are a creation of beauty\nupon which I can make a bet\nyour reflection shows sparkle\nof joy and hope, you mustn\'t forget\n\nI may be dumb enough\nthat I forget sometimes to rhyme\nbut you\'re a star in the darkness\nwhich will always shine.\'',
}

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const poemId = event.target.id;
        const poemTitle = document.getElementById(poemId).innerHTML;
        const poemText = poems[poemTitle].replace(/\n/g, '<br>');
        window.open('poem_display.html','_self');
        localStorage.setItem('poemData', poemText);
        localStorage.setItem('poemName', poemTitle);
        console.log(poemText, poemTitle);

    });
});

