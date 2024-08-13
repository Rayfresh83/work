const links = document.querySelectorAll('.poem');

let poems = {
    'The Provider who Provides': `
    In the dark hallway of life
Shines a ray of light
to dark, the shine arises
by the 'provider who provides'

When you find the provider
no sorrow leaves a trace
problems, all vanish
it all gives life an embrace

But comes a time for him too
when tides take a turn
if destiny, it is to be
all man made tracks disappear

Even the provider who provides
Sometimes too, wanders into a dark hallway
from which he can't escape
from where, escape has no way

And that, provider who provides
when is in the dark himself
there exists no entity
who will provide the same ray of life...
`,

    'A Bankrupt Billionaire' : `
    A man can't be sunken
who's already at the bottom of the ocean
he can't fix any ships
who himself is in one broken

he's filled with knowledge and wit
perhaps, he's someone who's really rare
despite whatever he has done
he's still the bankrupt billionaire

he knows the game of life
how joy turns to sorrow
how legacy meets one today
what fate does to him tomorrow

he went out to solve the issues
to fix all the pain
he could've done it, he swore
if he weren't a bankrupt billionaire

no matter how hard he tried
life was always against him
even if he'd die trying
his own self wouldn't support him

He may be full of wisdom
but he's living in his own fear
so, who was he to help people?
for himself, he was a bankrupt billionaire.
`,

'A Shining Star': `
Look, I might not know
how to get words to rhyme
but you're just like a star in the darkness
that will always shine

you're made of many emotions
strong and weak, through your core and crust
you can be who you want
all you need really is trust

life, is not a piece of cake
it gets dark, so much that you can't see
though the true wonders are hiding behind
the beauty you don't perceive

you are just like this dark hallway
where darkness although lies
but you have the light in you
which makes the demons cry

you are the creation, beauty
upon which I can make a bet
of that your reflection shows a sparkle
of joy and hope, you mustn't forget

I still may not be able to write and ill
forget sometimes how to rhyme
but what I know with a certainty is that
you're a star that always shines.
`,
'An Uncommon Textbook': `
Travelling through the crowded aisle
Something I saw that made me shook
It made me want to learn how to
open this certain closed book

This book is not the one you've seen
with its pages, crusty and aged
It's scent, pulls and devours you
with all the bliss it has encaged

I know not what the book looks like
nor do I know what's the stuff inside
but what I am certain of
is that it knows what's all the right
for it knows how to mend it's ways
and packs knowledge, deep inside like a full moon night

Once you start to flip the pages
you'll feel as if you're hooked in
your hands will move but heart still & stopped
that's the charm it has within

Going through its columns inside
you'll keep falling for the depth
of what all lies inside and it
does infact hold a lot of strength

Now congratulate yourself, poor soul
you've opened its cover page
is what you have been thinking still
being stuck in thoughts the book engaged 

But worry not, be a thinker twice
to know how to love it enough to move inside
of its realm, that it shall possess you in
once you win all its noble fights

It is what I call beauty
but certainly scary at times
how beautiful it makes all seem
how perfectly it rhymes

And now that the cover has opened by
revealing what is inside
it is no ordinary to witness
all the matter that there lies

Zoning back into to the aisle
I still hold this certain book
too powerful it is, I let it down
and through my journey I continue to look

I'm sure someone will have the same of mind
as I had looking at it
someone surely will fall again
and someone will never quit
`,
'A Calm Carnivore':`
I looked out of the window pane
to see a perching eagle.
he stood - not too high above the ariel haven
with a calming flock.

He looked down at the waving trees
and up to see another flock.
He wasn't on a hunt for one
a day it must've took off

He wasn't of a fighter kind
who's searching for a meal
the only sight beyond its eyes
were looking, just for peace

I looked at it a second time
he turned around at me
we held a sight, then it vanished
he just wanted to be free
`

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

