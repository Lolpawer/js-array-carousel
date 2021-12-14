const charName = [
                'Commando', 
                'Huntress', 
                'Bandit', 
                'MUL-T', 
                'Engineer',
                'Artificer', 
                'Mercenary', 
                'REX', 
                'Loader', 
                'Acrid', 
                'Captain'];     

const charDesc = [
                `The soldier ducked, barely getting under cover as the wall behind him exploded. His head was pounding - his muscles aching. But now was not the time for rest.
                <br/>He counted the seconds. The mounted missile launchers always took a few seconds to recalibrate, and if he took advantage of that time...
                <br/>Through the sounds of gunfire and chaos, he heard a small click as the enemy missile platform prepared for a second strike. Recognizing his opportunity, the soldier jumped up from behind the wall and fired his pistol, landing a shot straight between the eyes of the platform’s operator. 
                <br/>His shoulders tightened as he braced for recoil: now was not the time for rest. Glancing down the battlefield, there were only a few more enemy platforms to take, and this front would be secured.
                <br/>But before he could move to join his platoon, he received a notification on the heads-up display in his helmet.
                <br/>YOU HAVE BEEN REASSIGNED. REPORT TO COMMAND FOR YOUR NEW ASSIGNMENT.
                <br/>Looks like the time to rest wasn’t coming any time soon.`, 
                `She gracefully jumped off the roof of the building, plummeting to the alley below. She rolled into a handspring, vaulting through a broken window into the abandoned warehouse inside. Years of navigating the streets kept her body strong - and her mind sharp.
                <br/>She held her breath as police ran past, looking for the jewel thief. She may have to maintain this position for a few hours - but she’s used to it.
                <br/>Amiera was infamous in this city – and for her infamy, she racked up a significant bounty. Was it thirty-thousand credits now? Forty? She let out a small smile. That bounty was nothing compared to the treasure she held in her hands. This jewel could sell for a million credits - no, more. Tens of millions. This was one of the last few prismatic amethysts still left in the world. She clutched the stone closer to her chest.
                <br/>The police seemed persistent this time. Amiera was fine with that - all she had to do was wait. She slowed down the pace of her breathing - she may be here for a few days.
                <br/>At least, that’s what she thought - before a flurry of laser arrows pierced her brain, killing her instantly.
                <br/>/-----------------------------------/
                <br/>20,000 CREDITS HAVE BEEN DEPOSITED TO YOUR ACCOUNT
                <br/>GOOD HUNTING`, 
                `A few drinks here, a few laughs there. A few more drinks. A sleight of hand – and bang, keycard access to the loading bay of the Safe Travels. The camo suit can handle the rest.
                <br/>A secret mission means low profile – and low security. Besides, everyone is wearing environment suits before we leave orbit. How would they know?
                <br/>I mean, it’s the goddamn Contact Light. Think of how much those higher security chests could flip for! And some of the militech on that ship? Howdy hey. That’s probably what some of the other boys were thinking, sneaking onto that ship in the first place.
                <br/>My coat? 
                <br/>I’m a thief - not a plumber. Of course I’m bringing my coat.`, 
                `"OK. Everything checks out. You're free to go, pal."
                <br/>The robot chirped in acknowledgement. It folded neatly unto itself and began rolling down the hangar's exit lane - at a very safe pace.
                <br/>Hiroshi pulled a switch. The ceiling rail sprung to life, with a distinct mechanical chatter.
                <br/>"So, what's wrong with this one?" Rico enquired with minimal interest, seemingly distracted by the novel he had buried himself in.
                <br/>"Looks like cosmetic damage on a MUL-T unit. Got dinged up by another unit in the charging bay that malfunctioned after another power surge. We'll be checking that one out after this. You can thank the electrical crew for that." Hiroshi remarked, either completely disinterested in Rico's disinterest.
                <br/>"Great. How hard is it for them to just keep things stable? They have robots doing 90% of their job anyway." Rico scoffed.
                <br/>"We've got complaints on this unit about poor welding jobs, which might've been the cause. Optical calibration is probably off, so we'll also be taking a look at that while it's here. I'd still put money on it being electrical not keeping up with maintenance. Hey, Rico! Would you put that down and help me out?"
                <br/>The rail brought a bright yellow robot, slumbering, into the hangar. Hiroshi flipped the switch and the rail slowed to a halt, bringing with it silence. He began moving to unhook the robot. Reluctantly, Rico set his book on the work desk and started to help unload. In a few minutes the robot was on the service platform.
                <br/>Hiroshi walked over to one of the tool cabinets and pulled out a strange device. He popped open the access panel to the unit's dented head, and began probing at the damage from the opposite side. In no time at all, the tool beeped and kicked back violently. The dent was gone.
                <br/>"Go put this away while I fix the optics," Hiroshi said, one arm stretched behind his back, device in hand. "I have something I want to show you in a sec."
                <br/>Rico grunted and took the de-denting tool back to the cabinet. Hiroshi was already soldering away with the iron from his pocket.
                <br/>This caught Rico's interest. 
                <br/>"You don't need a soldering iron to fix the calibration. What are you doing?" he asked.
                <br/>"I already fixed the optics. Remember when I said I wanted to show you something cool - the next time we got a MUL-T in the shop? Come here." said Hiroshi, gesturing. "You see these two chips? It’s actually just one chip that's been split. MUL-T’s come with the same cores as those fancy chef bots, but they cut off access to the main learning module."
                <br/>"You don't say," Rico responded, still trying to see the chip Hiroshi was talking about. "Why'd they do something like that?"
                <br/>"It's cheaper to just make all the cores the same way at the factory and alter them later. The manufacturer says it's for safety, but they just use it to sell you the new cores every few years instead of letting you just teach the units to do a new job." Hiroshi explained.
                <br/>"Sounds about right. If it were a safety issue, why don't they do the same thing with the chef bots? They've been super stable. Can't say they've even ever got an order wrong, even if it's totally out there. They even managed to get Ma's Squid Risotto right."
                <br/>"It's what they can get away with. Anyway, that should do it. We'll just sneak a few minutes with this guy. Wake up," he commanded.
                <br/>The robot's relaxed posture disappeared, and it stood fully alert.
                <br/>"Hey pal, you see this thing I'm doing with my hand? Can you do that?"
                <br/>The robot mimicked a rude gesture.
                <br/>"That's fantastic! You're doing great!" Hiroshi was excited, and Rico got a devilish grin. He rushed off to his desk. Hiroshi continued repeating the gesture, and the robot continued mimicking it back with its single functional hand. Rico stepped back into the robot's view, with a picture covered in holes. "Can you remember this man? This is Ron from corporate, and he's a total degenerate."
                <br/>The robot beeped in affirmation.
                <br/>"Can you do that next time you see this man?"
                <br/>The robot beeped in affirmation again.
                <br/>"Rico! He's gonna remember that! MUL-T, forget that."
                <br/>The robot did not respond.
                <br/>"What are you two up to now?" said a grating voice, clearly approaching from no discernable direction. In a panic, Hiroshi slapped the access panel on the unit's head closed and covered its optical sensor.
                <br/>"Just fixing up robots! Doing our job! In fact, we just finished with this one. You're good to go, pal!" Hiroshi exclaimed to Ron, slapping the robot on the back. The machine folded up neatly into itself and began rolling down the hangar's exit lane.
                <br/>"I see. I'd better not catch you two slacking again." Ron said sternly, before turning around and making his usual relieving exit – most likely to pester other workers on his route.
                <br/>They both let out a sigh of relief. Rico stood up. "Well, we're due at the site in about… 13 hours. That's enough time to grab that MUL-T, pop it back open, and reset it."
                <br/>Hiroshi also stood up. “Yeah, I’m not too worried. How much trouble could it cause in 13 hours?”`, 
                `“The future is now! Cybernetic enhancements – buy them cheap and become the person you’ve always dreamed of being!” 
                <br/>Cybernetic enhancements were all the rage these days, especially since they were made available for public use. Initially, only military and commercial projects could license the procedures necessary to install cybernetic implants. But those days were long gone, and the concept of “the new human” was taking the galaxy by storm. 
                <br/>Of course, with any movement, there was backlash.  What of the sanctity of the human body? What about taking pride in your biology? Such arguments were normally laughed off. “Get with the times,” people would say. But one man among many stood out, gaining public attention and starting a counter movement of anti-cybernetics.
                <br/>The man postulated that mankind was walking on a tight rope – when do the cybernetics end, and where does the human begin? Will mankind end up as a machine species, or will we use our new tech to only better ourselves - without losing sight of what makes us human? The words of this man echoed across the galaxy, leaving a trail of revolution in its wake.`, 
                `With the intense belief that heaven is a planet, not a mystical place, the High Court search deep into space for the Promised Land. 
                <br/>Intensely driven by both dogma and science, the High Court holds amazing technological marvels - with nearly all of them hidden deep within their halls. 
                <br/>The House Beyond represents the most ambitious of the High Court's followers, spearheading Zone 5 deep space travel. With the advantage of their unique ENV Suit, the House Beyond have gone deeper in space than any other House in the High Court by an order of magnitude. The ENV Suit, worn by the Artificers of the High Court, is an engineering marvel - able to calibrate to the conditions of any environment. The technology behind the ENV Suit, like all other High Court technology, is still undisclosed.`, 
                `The europian noble paced around in his chambers, nervously glancing at the antique clock adorning his wall. Tick, tock. Tick, tock.
                <br/>The riots had been escalating and showed no signs of slowing down. Effigies burned, statues were torn down, and countless politicians turned their backs on the once-prestigious nobility of Europa. The people have had enough. Tick, tock. Tick, tock.
                <br/>It was only a matter of time– either the noble would have to flee, or the mob would finally breach the palace. Even his bodyguards began to show signs of betrayal. Time, the noble thought, was something he did not have. The antique clock kept ticking, working upon the noble’s mind. Keeping him distracted - just long enough. Tick, tock. Tick, tock.
                <br/>And as the antique clock kept ticking, the noble’s body hit the floor. The Mercenary sheathed his blade. His footsteps were unheard as he left the palace– masked by the rhythmic ticking of the clock. Tick, tock. Tick, tock.`, 
                `/--AUTO-TRANSCRIPTION FROM HYDROPONICS BAY OF UES [Redacted]--/
                <br/>“Status Report on Hydroponics Unit. Serial key begins with 12ea031lsd095a-“
                <br/>“Yes, 12ea03. Tasked with care for the cabbage, lettuce, and mizuna growths. About 250 plants total. Stable, but losing biomass. I think there are issues with the microgravity. ”
                <br/>“Keep an eye on the biomass, we might have to scrap 12ea03 and replace it with one of our evergreen Units. Moving on… serial key crp012d054jd0-“
                <br/>“Crp01 is doing alright. Tasked with corn. About 80 plants total. Lost 6, down to 74.” 
                <br/>“Sustainable, I suppose. What about… serial key rex0ch12d66m-“
                <br/>“Oh, that Unit. Yeah, it was tasked with care for one of our cabbage hybrids. To be quite frank… it turned out terrible. I think we started with 80 units, but we’ve lost 79. The hybrid species just isn’t spliced right, I think. There was no way to sustain them.”
                <br/>“And status report on the Unit?”
                <br/>“Uh, well… it’s out on the star deck. It managed to hoist the last hybrid onto its platform base, and it’s been walking around the ship ever since, chasing down starlight. ”
                <br/>“…What? The Unit left Hydroponics? 
                <br/>“Yes, but-“
                <br/>“So the Unit is disengaging from protocol?”
                <br/>“Well, yes, but-“
                <br/>“And instead of terminating the Unit, you let it roam around the ship unsupervised?”
                <br/>“Just the team, well we just- we just kinda feel bad for the thing, you know. It’s trying really hard to keep that last hybrid alive, and-“
                <br/>“Go terminate the Unit.”
                <br/>“Well, the thing is- Rex is actually doing a great job! The hybrid’s biomass-“
                <br/>“Are you kidding? Terminate the Unit. You have no idea what happens to a robot once it disengages from protocol. You are putting the life of your entire team in danger for the sake of a stray hydroponics unit. This should not even be a discussion.”
                <br/>….
                <br/>“Yes, sir.”
                <br/>Transcriptions complete.`, 
                `A lot of people would say that loading cargo is a dull job. The Loader could not disagree more.
                <br/>Other jobs don’t supply their employees with a fully articulate titanium exoskeleton capable of lifting 250 tons.
                <br/>Other jobs don’t allow their employees to meet the crews of countless starships from across the galaxy.
                <br/>Other jobs don’t let you use your exoskeleton for your own entertainment, much less outfit it with custom-built grappling hooks powered by a winch capable of hauling up to 100 tons.
                <br/>Other jobs don’t involve being approached by a legend among the UES work force, and asked to embark on a classified mission to the Uncharted Territories.
                <br/>Other jobs don’t involve fighting exotic and strange alien creatures, and exploring mystical ruins on another planet.
                <br/>A lot of people would say that loading cargo is a dull job. The Loader could not disagree more.`, 
                `Theoretically, the true contents of the cell were just a mess of atoms. The structure of the contents in each cell – living, weapon, whatever - was categorized, sequenced, and then turned to juice and cured into solid gems. An incredibly efficient and lossless format.
                <br/>And yet when the cell containment broke – and emergency protocols re-sequenced that mess of atoms back into the creature known as Acrid – he already knew. Maybe he was somehow conscious, in his juice-gem state. Maybe they injected him with information. Maybe he was connected to their psionic network. Maybe he just made it up.
                <br/>But he knew – that the strange crustaceans that scrambled his atoms and imprisoned him here, in a place unknown – were panicking. Something had gone wrong, in a world where variables were not allowed.
                <br/>Something was leaking.
                <br/>They may have finally imprisoned something that could not be contained.`, 
                `“A rescue mission?”
                <br/>The old man leaned forward, scanning the document slid over his desk. His eyes paused on a collection of words near the bottom: UES Contact Light.
                <br/>“Yes.”
                <br/>He continued to read the document. The Safe Travels? For a rescue mission? As one of the few surviving captains of the old colony ships, he knew all the designations by memory – and the Safe Travels was not a rescue ship.
                <br/>“Any armaments?”
                <br/>“No.”
                <br/>“We’ll have to fix that.”
                <br/>With a sigh, he stood up. His prosthetics tugged at his joints – despite being lighter than his original limbs, they always felt heavy.
                <br/>“And let me guess - top secret, right?”
                <br/>“Yes.”
                <br/>He gave out another sigh – they’re always top secret - but a small smile crept onto his face. He glanced up to his old radio helmet. He’s been bored in retirement anyways.`
                ];

const charImg = [
                "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/5/50/Commando.png/revision/latest?cb=20200129200647", 
                "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/6f/Huntress.png/revision/latest?cb=20200129200650", 
                "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/1/1f/Bandit.png/revision/latest?cb=20210326045945", 
                "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/6f/MUL-T.png/revision/latest?cb=20200129200652", 
                "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/d/d8/Engineer.png/revision/latest?cb=20200129200649", 
                "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/98/Artificer.png/revision/latest?cb=20200129200643", 
                "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/0/00/Mercenary.png/revision/latest?cb=20200129200651", 
                "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/74/REX.png/revision/latest?cb=20200129200652", 
                "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/25/Loader.png/revision/latest?cb=20200129235338", 
                "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/8/8e/Acrid.png/revision/latest?cb=20200129235326", 
                "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/a/a9/Captain.png/revision/latest?cb=20200811155443"
                ];

let currentIndex = 0;

let imgOutput = document.getElementById('char-img');
imgOutput.src = `${charImg[currentIndex]}`;

let nameOutput = document.getElementById('char-name');
nameOutput.innerHTML = `${charName[currentIndex]}`;

let descOutput = document.getElementById('char-description');
descOutput.innerHTML = `${charDesc[currentIndex]}`;

const buttonPrev = document.getElementById('previous');

buttonPrev.addEventListener('click', function () {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = charName.length - 1;
    }

    imgOutput.src = `${charImg[currentIndex]}`;
    nameOutput.innerHTML = `${charName[currentIndex]}`;
    descOutput.innerHTML = `${charDesc[currentIndex]}`;
});

const buttonNext = document.getElementById('next');

buttonNext.addEventListener('click', function () {
    currentIndex++;

    if (currentIndex > charName.length - 1) {
        currentIndex = 0;
    }

    imgOutput.src = `${charImg[currentIndex]}`;
    nameOutput.innerHTML = `${charName[currentIndex]}`;
    descOutput.innerHTML = `${charDesc[currentIndex]}`;
});