# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
user = User.create!({
  username: 'SeededUser',
  password: 'seededpass'
  })
user2 = User.create!({
  username: 'RapGod',
  password: 'eminem'
  })

Track.destroy_all
blueTrack = Track.create!({
  title: 'Baby Blue',
  artist: 'Action Bronson',
  album: 'Mr. Wonderful',
  genre: 'Rap',
  lyrics: "[Hook: Action Bronson]
Why you always all on my back?
Why you gotta do me like that?
Why you gotta act like a bitch when I'm with you?
Baby girl I'm blue

[Verse 1: Action Bronson]
Because you treat me like shit
I paid for the bed and never even slept in it
I paid for that crib I never stepped foot in
And now somebody else is eating all the pudding
Things change, now my dashboard wooden
All black Benz, like a young Doc Gooden
Dark shades, cause I'm stone crazy
Girl, we grown, stop playing on my phone, baby
All your childish attempts to make me angry fall short
Which only fuels the rage you have, because you have nothing
Understandable, I'm shining brilliant with five Brazilians
There were times I used to hide my feelings
Now I'm butt naked in the Lamborghini
And motherfuckers can't see me
Wait 'til this chick see me on TV, I make the shit look easy
Who would've thought I hit you right back?

[Hook: Action Bronson]
Why you always all on my back?
Why you gotta do me like that?
Why you gotta act like a bitch when I'm with you?
Baby girl I'm blue

[Verse 2: Action Bronson]
So many women wanna call me baby
And you wonder why the fuck that I ain't call you lately
Some would say that I'm the symbol for sex and uh
Others would hate, but I don't give 'em no breath
Go on a date, I'm at the crib with the chef and uh, that's me
And you could order whatever
The specialty is white snake and underwear sauce
You could probably catch me somewhere where the sun is next
And I understand that's only cause I'm popular
I'm getting topped off in the front row of the opera
As Bocelli sings the celly rings
I gotta go, you'll never know how good it feels to lay in bed with king
I'm not exactly flawless, but I'm gorgeous, just like a horse is
I know the thought of me succeeding makes a lot of people nauseous
Still I'm on the back of the boat taking pictures with the swordfish

[Hook: Action Bronson]
Why you always all on my back?
Why you gotta do me like that?
Why you gotta act like a bitch when I'm with you?
Baby girl I'm blue

[Verse 3: Chance The Rapper]
I hope you get a paper cut on your tongue
From a razor in a paper cup
I hope every soda you drink already shaken up
I hope your dreams dry like raisins in the baking sun
I hope your titties all saggy in your early 20's
I hope there's always snow in your driveway
I hope you never get off Fridays
And you work at a Friday's that's always busy on Fridays
I hope you win the lottery and lose your ticket
I hope it's Ben and Socrates poop all up in your kitchen
I hope the zipper on your jacket get stuck
And your headphones short, and your charger don't work
And you spill shit on your shirt
I hope your tears don't hurt, and I can smile in your face
Cut my losses, how Delilah changed my locks to a fade
I hope you happy, I hope you happy
I hope you ruined this shit for a reason, I hope you happy!

[Hook: Action Bronson]
Why you always all on my back?
Why you gotta do me like that?
Why you gotta act like a bitch when I'm with you?
Baby girl I'm blue",
  user_id: user.id
  })

Track.create!({
  title: 'The Real Slim Shady',
  artist: 'Eminem',
  album: 'Marshall Mathers LP',
  genre: 'Rap',
  lyrics:"[Intro]
May I have your attention, please?
May I have your attention, please?
Will the real Slim Shady please stand up?
I repeat, will the real Slim Shady please stand up?
We're gonna have a problem here

[Verse 1]
Y'all act like you never seen a white person before
Jaws all on the floor like Pam like Tommy just burst in the door
And started whoopin' her ass worse than before
They first were divorced, throwin' her over furniture (Agh!)
It's the return of the \"Ah, wait, no way, you're kidding
He didn't just say what I think he did, did he?\"
And Dr. Dre said… nothing, you idiots!
Dr. Dre's dead, he's locked in my basement (ha ha!)
Feminist women love Eminem
\"Chicka, chicka, chicka, Slim Shady, I'm sick of him
Look at him, walkin' around, grabbin' his you-know-what
Flippin' the you-know-who,\" \"Yeah, but he's so cute though.\"
Yeah, I probably got a couple of screws up in my head loose
But no worse than what's goin' on in your parents' bedrooms
Sometimes I wanna get on TV and just let loose
But can't, but it's cool for Tom Green to hump a dead moose
\"My bum is on your lips, my bum is on your lips\"
And if I'm lucky, you might just give it a little kiss
And that's the message that we deliver to little kids
And expect them not to know what a woman's clitoris is
Of course they're gonna know what intercourse is
By the time they hit fourth grade
They've got the Discovery Channel, don't they?
We ain't nothin' but mammals—well, some of us, cannibals
Who cut other people open like cantaloupes
But if we can hump dead animals and antelopes
Then there's no reason that a man and another man can't elope
But if you feel like I feel, I got the antidote
Women, wave your pantyhose, sing the chorus, and it goes—

[Hook]
I'm Slim Shady, yes, I'm the real Shady
All you other Slim Shadys are just imitating
So won't the real Slim Shady please stand up
Please stand up, please stand up?
'Cause I'm Slim Shady, yes, I'm the real Shady
All you other Slim Shadys are just imitating
So won't the real Slim Shady please stand up
Please stand up, please stand up?

[Verse 2]
Will Smith don't gotta cuss in his raps to sell records
Well, I do, so fuck him and fuck you too!
You think I give a damn about a Grammy?
Half of you critics can't even stomach me, let alone stand me
\"But Slim, what if you win, wouldn't it be weird?\"
Why, so you guys could just lie to get me here?
So you can sit me here next to Britney Spears?
Shit, Christina Aguilera better switch me chairs
So I can sit next to Carson Daly and Fred Durst
And hear 'em argue over who she gave head to first
Little bitch put me on blast on MTV
\"Yeah, he's cute, but I think he's married to Kim, hee-hee.\"
I should download her audio on MP3
And show the whole world how you gave Eminem VD
I'm sick of you little girl and boy groups
All you do is annoy me, so I have been sent here to destroy you
And there's a million of us just like me
Who cuss like me, who just don't give a fuck like me
Who dress like me; walk, talk and act like me
And just might be the next best thing, but not quite me

[Hook]
'Cause I'm Slim Shady, yes, I'm the real Shady
All you other Slim Shadys are just imitating
So won't the real Slim Shady please stand up
Please stand up, please stand up?
'Cause I'm Slim Shady, yes, I'm the real Shady
All you other Slim Shadys are just imitating
So won't the real Slim Shady please stand up
Please stand up, please stand up?

[Verse 3]
I'm like a head trip to listen to, ‘cause I'm only givin' you
Things you joke about with your friends inside your livin' room
The only difference is I got the balls to say it in front of y'all
And I don't gotta be false or sugarcoat it at all
I just get on the mic and spit it
And whether you like to admit it, I just shit it
Better than 90% of you rappers out can
Then you wonder: \"How can
Kids eat up these albums like Valiums?\"
It's funny, ‘cause at the rate I'm going, when I'm 30
I'll be the only person in the nursing home flirting
Pinching nurse's asses when I'm jacking off with Jergens
And I'm jerking, but this whole bag of Viagra isn't working
And every single person is a Slim Shady lurking
He could be working at Burger King, spittin' on your onion rings
Or in the parking lot, circling, screaming, \"I don't give a fuck!\"
With his windows down and his system up
So will the real Shady please stand up
And put one of those fingers on each hand up?
And be proud to be outta your mind and outta control
And one more time, loud as you can, how does it go?

[Hook]
I'm Slim Shady, yes, I'm the real Shady
All you other Slim Shadys are just imitating
So won't the real Slim Shady please stand up
Please stand up, please stand up?
'Cause I'm Slim Shady, yes, I'm the real Shady
All you other Slim Shadys are just imitating
So won't the real Slim Shady please stand up
Please stand up, please stand up?
'Cause I'm Slim Shady, yes, I'm the real Shady
All you other Slim Shadys are just imitating
So won't the real Slim Shady please stand up
Please stand up, please stand up?
'Cause I'm Slim Shady, yes, I'm the real Shady
All you other Slim Shadys are just imitating
So won't the real Slim Shady please stand up
Please stand up, please stand up?

[Outro]
Ha ha, I guess there’s a Slim Shady in all of us
Fuck it, let’s all stand up!",
  user_id: user2.id
  })

Track.create!({
  title: 'Yonkers',
  artist: 'Tyler',
  album: 'Goblin',
  genre: 'Rap',
  lyrics:"[Intro]
Uh, Wolf Haley, Golf Wang

[Verse 1]
I'm a fuckin' walkin' paradox —
No I'm not
Threesomes with a fuckin' triceratops
Reptar
Rappin' as I'm mockin' deaf rock stars
Wearin' synthetic wigs made of Anwar's dreadlocks
Bedrock
Harder than a motherfuckin' Flintstone
Making crack rocks outta pussy nigga fishbones
This nigga Jasper tryin' to get grown
About 5, 7 of his bitches in my bedroom
Swallow the cinnamon
I'ma scribble this sin and shit
While Syd is tellin' me that she's been gettin' intimate with men (Syd, shut the fuck up)
Here's the number to my therapist (Shit!)
You tell him all your problems, he's fuckin' awesome with listenin'

[Hook]
Wolf Haley, Golf Wang
Wolf Haley, Golf fuckin' Wang

[Verse 2]
Jesus called, he said he's sick of the disses
I told him to quit bitchin', this isn't a fuckin' hotline
For a fuckin' shrink, sheesh, I already got mine
And he's not fuckin' workin', I think I'm wastin' my damn time
I'm clockin' three past six and goin' postal
This the revenge of the dicks; that's nine cocks that cock 9's
This ain't no V. Tech shit, or Columbine
But after bowling, I went home for some damn Adventure Time
(What'd you do?) I slipped myself some pink Xannies
And danced around the house in all-over print panties
My mom's gone, that fuckin' broad will never understand me
I'm not gay, I just wanna boogie to some Marvin
(What you think of Hayley Williams?)
Fuck her, Wolf Haley robbin' them
I'll crash that fuckin' airplane that that faggot nigga B.o.B is in
And stab Bruno Mars in his goddamn esophagus
And won't stop until the cops come in
I'm an overachiever, so how about I start a team of leaders
And pick up Stevie Wonder to be the wide receiver? (Cool)
Green paper, gold teeth, and pregnant golden retrievers
All I want – Fuck money, diamonds, and bitches; don't need 'em
But where the fat ones at? I got somethin' to feed 'em
It's some cooking books, the black kids never wanted to read 'em
Snap back, green ch-ch-chia fuckin' leaves
It's been a couple months
And Tina still ain't perm her fuckin' weave
Damn

[Hook]
Wolf Haley, Golf Wang
Wolf Haley, Golf Wang, yeah
Goddamn goblin
Wolf Haley, Golf Wang
Wolf Haley, Golf Wang, yeah

[Verse 3]
They say success is the best revenge
So I beat DeShay up with the stack of magazines I'm in
Oh, not again! Another critic writing report
I'm stabbin' any bloggin' faggot hipster with a Pitchfork
Still suicidal I am
I'm Wolf, Tyler put this fuckin' knife in my hand
I'm Wolf, Ace gon' put that fuckin' hole in my head
And I'm Wolf, that was me who shoved a cock in your bitch
(What the fuck, man?) Fuck the fame and all the hype, G
I just wanna know if my father would ever like me
But I don't give a fuck, so he's probably just like me
A motherfuckin' Goblin
(Fuck everything, man) That's what my conscience said
Then it bunny-hopped off my shoulder, now my conscience dead
Now the only guidance that I had is splattered on cement
Actions speak louder than words, let me try this shit
Dead",
  user_id: user2.id
  })

knowTrack = Track.create!({
  title: 'What You Know',
  artist: 'Two Door Cinema Club',
  album: 'Tourist History',
  genre: 'Pop',
  lyrics:"[Verse 1]
In a few weeks, I will get time to realise
It's right before my eyes
And I can take it if it's what I want to do
I am leaving and this is starting to feel like
It's right before my eyes
And I can taste it, it's my sweet beginning

[Chorus]
And I can tell just what you want
You don't want to be alone
You don't want to be alone
And I can't say it's what you know
But you've known it the whole time
Yeah, you've known it the whole time

[Verse 2]
Maybe next year, I'll have no time
To think about the questions to address
Am I the one to try to stop the fire?
I wouldn't test you, I'm not the best you could have obtained
Why try anything? I will get there
Just remember, I know

[Chorus]
And I can tell just what you want
You don't want to be alone
You don't want to be alone
And I can't say it's what you know
But you've known it the whole time
Yeah, you've known it the whole time",
  user_id: user.id
  })

Track.create!({
    title: 'The Stand',
    artist: 'Mother Mother',
    album: 'Eureka',
    genre: 'Pop',
    lyrics:"Verse 1]
Hey (hey hey)
Tell me your weakness
Oh I keep it a secret
Oh come on just one vice
All right, it's vodka on ice
But then there's women on bikes
Or just the women who straddle
Oh now you are a handful
I forgot about handfuls

[Verse 2]
Tell me your fears
Okay, it's everyone here
You mean just all of the people?
Yeah, and all of their peers
And all of their pets, and their chandeliers
And their cigarettes
I haven't smoked in years!

[Chorus]
I can hardly stand the sight. (Of it all.)
I can hardly stand the sound. (Of it all.)
I can hardly stand the taste. (Of it all.)
I can hardly stand the smell. (Of it all.)

[Verse 3]
Talk about space
Well it's a beautiful place!
But it's so damn cold!
Just for the human race
But for the planets and the stars
And everything else and Mars
It's like paradise
Spread out with a butter knife

[Chorus] X2
I can hardly stand the sight. (Of it all.)
I can hardly stand the sound. (Of it all.)
I can hardly stand the taste. (Of it all.)
I can hardly stand the smell. (Of it all.)

I can hardly stand, I can hardly stand!
Everyone's fucked and they don't even know
Everyone's fucked and they don't even know

[Chorus]
I can hardly stand the sight. (Of it all.)
I can hardly stand the sound. (Of it all.)
I can hardly stand the taste. (Of it all.)
I can hardly stand the smell. (Of it all.)",
    user_id: user.id
    })

Track.create!({
    title: 'Goodbye Weekend',
    artist: 'Mac DeMarco',
    album: 'Salad Days',
    genre: 'Pop',
    lyrics:"[Verse 1]
Goodbye, weekend
So long, darling
Macky's been a bad, bad boy
And when they're preaching
Be sure to change me
Should rearrange me
Or so they thought

[Chorus]
So don't go telling me how this boy should be leading
His own life
Sometimes rough but generally speaking I'm fine
If you don't agree with the things that go on within my life
Well, honey, that's fine just know that you're wasting your time

[Verse 2]
Sort me, place me
Give me a sign
Repeat the mantra
When you're stepping out of line
Give me, a number
Something to be
May help out the country boy
But it won't work out on me

[Chorus]
So don't go telling me how this boy should be leading
His own life
Sometimes rough but generally speaking I'm fine
If you don't agree with the things that go on within my life
Well, honey, that's fine just know that you're wasting your time

Ah, Gigi Bungsu",
    user_id: user.id
    })


Annotation.destroy_all
Annotation.create!({body:"This part of the song is about his internal struggle :(", start_index:250, end_index:310, user_id:user.id, track_id:knowTrack.id})
Annotation.create!({body:"In a few weeks he’ll be able to decide if he wants to seize his opportunity to snatch up his girl he has in mind.", start_index:9, end_index:79, user_id:user2.id, track_id:knowTrack.id})


Comment.destroy_all
Comment.create!({body:'OMG this is the BEST song', user_id:user2.id, commentable:Track.first})
Comment.create!({body:'I love it #ballin', user_id:user.id, commentable:Track.first})
Comment.create!({body:'FANTASTIC!!1!', user_id:user2.id, commentable:Annotation.third})
Comment.create!({body:'This annotation is bad', user_id:user.id, commentable:Annotation.third})
