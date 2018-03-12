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

Track.destroy_all
blueTrack = Track.create!({
  title: 'Blue (Da Ba Dee)',
  artist: 'Eiffel65',
  album: 'Europop',
  genre: 'pop',
  lyrics: "[Intro]
Yo, listen up, here's a story
About a little guy that lives in a blue world
And all day and all night and everything he sees is just blue
Like him inside and outside
Blue his house with a blue little window and a blue Corvette
And everything is blue for him
And hisself and everybody around
'Cause he ain't got nobody to listen (to listen)

[Hook]
I'm Blue – da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye
I'm Blue – da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye

[Verse 1]
I have a blue house with a blue window
Blue is the color of all that I wear
Blue are the streets and all the trees are too
I have a girlfriend and she is so blue
Blue are the people here that walk around
Blue like my Corvette, it's in and outside
Blue are the words I say and what I think
Blue are the feelings that live inside me

[Hook]
I'm Blue – da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye
I'm Blue – da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye

[Verse 1]
I have a blue house with a blue window
Blue is the color of all that I wear
Blue are the streets and all the trees are too
I have a girlfriend and she is so blue
Blue are the people here that walk around
Blue like my Corvette, it's in and outside
Blue are the words I say and what I think
Blue are the feelings that live inside me

[Hook]
I'm Blue – da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye
I'm Blue – da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye

[Bridge]
Inside and outside
Blue his house with a blue little window and a blue Corvette
And everything is blue for him
And hisself and everybody around
'Cause he ain't got nobody to listen (to listen)

[Hook]
I'm Blue – da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye
I'm Blue – da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye, da ba dee da ba dye
Da ba dee da ba dye",
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
  user_id: user.id
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
  user_id: user.id
  })

countryTrack = Track.create!({
  title: 'Country Song',
  artist: 'Bo Burnham',
  album: 'Make Happy',
  genre: 'Country',
  lyrics:"[Verse 1]
A dirt road
A cold beer
A blue jeans
A red pickup
A rural noun, simple adjective

No shoes
No shirt
No Jews
You didn't hear that
Sort of a mental typo

[Pre-Chorus]
I walk and talk like a field hand
But the boots I'm wearing cost three grand
I write songs about riding tractors
From the comfort of a private jet

[Chorus]
I can sing in Mandarin
And still know I'm pandering
Hunting deer and chasing trout
A Bud Light with the logo facing out

Hear that subtle mandolin
That's textbook panderin'
I own a private ranch that I rarely use
I don't like dirt

[Spoken]
One verse, one chorus in the bag
Now it's time to talk to the ladies
I'm hoping my Southern charm offsets all these rape-y vibes I'm puttin' out

[Verse 2]
Good girl
In a straw hat
With her arms out in a corn field
That is a scarecrow
Thought that was a human woman, sorry

A cold night
A cold beer
A cold jeans
Strike that last one

I'm wanting you
I hope you're feeling me
Subtextually

[Pre-Chorus]
We go to bed, you doze off
So I take your country girl clothes off
I put my hands on your body
It feels like hay, it's a fucking scarecrow again

[Chorus]
Like Mike’s Evander-ing
Fuck your ears, I'm pandering
I write songs for the people who do
Jobs in the towns that I'd never move to

Legalize gerrymandering
Tolerate my pandering
You got a beautiful mouth
I got a beautiful (dick)

Y'all dumb motherfuckers want a key change?

Thematically meandering
Emphatically pandering
I got a tight grip on my demo's balls
Say the word \"truck,\" they jizz in their overalls

You don't know what land you're in
I'm in the land of pandering
And I'll be upfront
I do what I do 'cause I'm a total fuckin' cunt-ry boy",
  user_id: user.id
  })


Annotation.destroy_all
Annotation.create!({body:"Hes about to tell a story and wants you to listen.", start_index:0, end_index:28, user_id:user.id, track_id:blueTrack.id})
Annotation.create!({body:"Dirt road is a common country trope.", start_index:9, end_index:19, user_id:user.id, track_id:countryTrack.id})
Annotation.create!({body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus mi in enim rutrum, vel lobortis nibh facilisis. Integer sit amet suscipit tellus. Nulla sit amet lectus eu orci eleifend fringilla. Maecenas elit dolor, tristique in metus eu, vestibulum varius ante. Nunc mattis tempus augue, vitae fermentum ligula tempus at. Duis vestibulum bibendum nibh, ut viverra massa dictum at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris volutpat, risus ac posuere tristique, eros massa finibus justo, in porttitor mauris orci et nunc. Donec eu sodales lacus, et dictum dolor. Morbi nec facilisis quam. Sed vel iaculis metus, nec suscipit dolor. Donec gravida viverra eros, ac vulputate risus lacinia auctor. Donec mi ante, pharetra vel molestie eu, ultricies vel metus. Sed a nibh lorem.

Cras consequat lorem ac interdum fermentum. Fusce ipsum ex, volutpat sit amet eros sed, placerat suscipit sapien. Donec ullamcorper consectetur nibh, ac semper massa cursus sit amet. Etiam est turpis, blandit sit amet aliquam vel, condimentum at ligula. Quisque erat magna, molestie non aliquet lacinia, malesuada at enim. Nulla a turpis aliquet, molestie nibh imperdiet, dictum turpis. Phasellus gravida est leo, vel vestibulum ipsum maximus quis. Duis blandit nisi a dui dictum, porta ullamcorper nulla rhoncus. Nam convallis, est eu tristique dapibus, elit mauris vehicula leo, vel cursus nisi tellus at purus. Etiam pharetra metus nunc, vel sollicitudin tellus pellentesque vel. Integer eget efficitur ex. Praesent urna eros, rutrum egestas porttitor et, aliquet sed nibh.

Nulla in varius mi. Pellentesque tempus, augue a rutrum euismod, turpis ex fermentum sem, vitae sollicitudin metus ex et libero. Etiam et condimentum sem. Nulla scelerisque rutrum pellentesque. Etiam consequat, mi nec pharetra viverra, massa urna dictum purus, sed pharetra massa quam tincidunt urna. Vivamus hendrerit cursus porta. Vestibulum in nisi sed lacus gravida molestie. Phasellus quis orci sagittis ligula aliquam mattis id eu nibh.", start_index:20, end_index:30, user_id:user.id, track_id:countryTrack.id})
