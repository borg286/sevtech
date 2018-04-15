**SevTech Tips and Tricks**  

Sevtech is currently 3.0.6 : [Get it here !](https://minecraft.curseforge.com/projects/sevtech-ages/files/2549553)

Here is the web view [https://borg286.github.io/sevtech/](https://borg286.github.io/sevtech/) 

Please use this if you don't intend to propose tips.

Feel free to add comments, and propose changes [here](https://docs.google.com/document/d/1HQGPm90MVyieiiEkTPyfXIDBAvSkOAAQOoicTzFpmt0/comment).

### Performance tips:

* Don't allocate more memory than needed.  The standard pack shouldn’t need more than 4GB of RAM allocated.

* Custom java arguments for garbage collection: -XX:+UseG1GC -Dsun.rmi.dgc.server.gcInterval=2147483646 -XX:+UnlockExperimentalVMOptions -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -XX:MaxGCPauseMillis=50 -XX:G1HeapRegionSize=32M

* Disabling certain mods can improve performance:

    * Better foliage - This mod makes leaves and grass appear more complex.

    * Fancy block particles - Replaces breaking blocks into a 3D variant.

    * Smooth font - Replaces the standard font.

* Install optifine to finetune the graphical experience you want to have: [https://optifine.net/downloads](https://optifine.net/downloads)

    * Some people report invisible blocks when using optifine, in **config/thebetweenlands/config.cfg** change **B:fullbright_blocks=true** to **false**.

* Twilight Forest tweaks (config/twilightforest.cfg) :

    * Set **B:leavesFullCube=true** to **false** to decrease FPS stuttering.

### Seeds

-3503285926045735642  (pre 3.0.5)  village (east), bone blocks, river, animals, swamp with shoggoth lair, shadow biome all somewhat near spawn point. 

-115227398    (pre 3.0.5)  Start in AbyssalCraft biome, close village to NW (Another South of that one), nice open area to the east with river biome, large forest and lots of animals. Another village north on other side of tall hills across grassy plains with lots of streaming water..

-8872794606572219902   (3.0.4)  Spawn next to Laketown (village in middle of lake). High flat mountain at your back for strong star light with a tin vein. On other side of lake is a large flat area with **large **bone structure VERY nearby, Eucalyptus and a Mulberry tree, 2 coal, 2 copper veins, 1 gold. Lapis on island next to village. Majority of lake is only 1 block deep, making easy access to gravel, salt, sand, and clay. Nearby big hole(y=51 @ base) with Copper cluster. Snow mountain nearby (Build up 20+ blocks on peak for easy access to ceiling of The Beneath).

### Ore distributions (as of 3.0.6):

<table>
  <tr>
    <td>Material</td>
    <td>Min Y</td>
    <td>Max Y</td>
    <td>Notes</td>
  </tr>
  <tr>
    <td>Aquamarine</td>
    <td>150</td>
    <td>246</td>
    <td>The Beneath only</td>
  </tr>
  <tr>
    <td>Autunite</td>
    <td>8</td>
    <td>33</td>
    <td>Overworld & Twilight Forest</td>
  </tr>
  <tr>
    <td>Azurite (copper)</td>
    <td>12</td>
    <td>44</td>
    <td>Overworld & Twilight Forest</td>
  </tr>
  <tr>
    <td>Bauxite (aluminium)</td>
    <td>45</td>
    <td>79</td>
    <td>Overworld & Twilight Forest</td>
  </tr>
  <tr>
    <td>Beryl</td>
    <td>4</td>
    <td>32</td>
    <td>Overworld & Twilight Forest</td>
  </tr>
  <tr>
    <td>Black Quartz</td>
    <td>2</td>
    <td>100</td>
    <td>The Beneath only</td>
  </tr>
  <tr>
    <td>Casserite (tin)</td>
    <td>44</td>
    <td>68</td>
    <td>Overworld & Twilight Forest</td>
  </tr>
  <tr>
    <td>Cinnabar (redstone)</td>
    <td>5</td>
    <td>12</td>
    <td>Overworld & Twilight Forest</td>
  </tr>
  <tr>
    <td>Coal</td>
    <td>48</td>
    <td>78</td>
    <td>Overworld & Twilight Forest</td>
  </tr>
  <tr>
    <td>Corrallium</td>
    <td>4</td>
    <td>56</td>
    <td>Overworld (Ocean & Swamp) & Twilight Forest</td>
  </tr>
  <tr>
    <td>Galena (silver & lead)</td>
    <td>16</td>
    <td>50</td>
    <td>Overworld & Twilight Forest</td>
  </tr>
  <tr>
    <td>Gold</td>
    <td>5</td>
    <td>30</td>
    <td>Overworld & Twilight Forest</td>
  </tr>
  <tr>
    <td>Hematite (iron)</td>
    <td>32</td>
    <td>60</td>
    <td>Overworld & Twilight Forest</td>
  </tr>
  <tr>
    <td>Kimberlite</td>
    <td>2</td>
    <td>15</td>
    <td>Overworld & Twilight Forest</td>
  </tr>
  <tr>
    <td>Lapis</td>
    <td>10</td>
    <td>24</td>
    <td>Overworld & Twilight Forest</td>
  </tr>
  <tr>
    <td>Limonite (iron & nickel)</td>
    <td>6</td>
    <td>32</td>
    <td>Overworld & Twilight Forest</td>
  </tr>
  <tr>
    <td>Malachite (copper)</td>
    <td>39</td>
    <td>44</td>
    <td>Overworld & Twilight Forest</td>
  </tr>
  <tr>
    <td>Platinum</td>
    <td>3</td>
    <td>25</td>
    <td>Overworld & Twilight Forest</td>
  </tr>
  <tr>
    <td>Quartz</td>
    <td>6</td>
    <td>29</td>
    <td>Overworld & Twilight Forest</td>
  </tr>
  <tr>
    <td>Redstone Ore</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>Twilight Forest in the hollowed out caves</td>
  </tr>
  <tr>
    <td>Sphalerite</td>
    <td>35</td>
    <td>55</td>
    <td>Only blacklisted in the nether & end</td>
  </tr>
  <tr>
    <td>Teallite (tin)</td>
    <td>8</td>
    <td>43</td>
    <td>Overworld, Beneath & Twilight Forest</td>
  </tr>
</table>


# Age 0

## Uncategorized Tips

* You can access the main quest guide by pressing L. Purple quests lead you to the end of the age (If there is no color, this is talking about the ones with  2 round sides. The stars are the final quest in the age).

* If a rock on the ground doesn't break in one click or **sounds like grass** when hitting it, LEAVE IT THERE- it's an ore sample in disguise.

* Carry-On is in the pack, it can pick up most passive mobs (no villagers, buffaloes, horses, or larger mobs). Note your reach is less than right clicking. You can also pick up most chests, and other tile entities like this as well.

* **Lighting fire on cobblestone** for your first kiln to cook your charcoal will last a bit longer then on dirt/grass. 

* Quark's inventory drop-off button allows you to bypass the Stage’s restriction by letting you put unfamiliar items into nearby chests/hoppers

* The world generates in a **logical heat map**. Need snow or a desert? Travel North or South until you find it!

* The carrot in your inventory is where you can view your **nutrition levels**. If you raise the nutrition levels high enough you will get **buffs**. Let them drop too low and you'll have debuffs. See nutrition below for healthy meals below

* You can move **faster** on certain blocks like Grass Paths made by right clicking with a shovel

* Use F7 to see the **light levels** on the ground and F9 to see the **chunk borders**.

* Some blocks are **disguised** as other blocks. They are revealed in the correct stage. Always go back and check out areas you've already explored to see what's new. 

* **Rafts** are an earlier form of water transportation. They are just a bit weaker and slower.

    * Sometimes they sink. Use 'Carry on' (shift+right click) to fetch them.

* Once you've picked a spot for your base and have some food(for regaining your nutrition), pillar up and die to get a **skull compass leading you back to your base**, I mean death point.

* Shift/Sneak on your grave to retrieve your items.

* Once you get a saddle, go tame a horse (repeatedly trying to ride it) to speed up traversing the overworld. He can jump stone fence, but only with you riding. Be sure to bring a fence and lead with you for when you want to get off your high horse. Alternatively live near an ocean and use a raft to visit new places, taking care with the sharks and piranhas that attack when you get to shore. Piranhas jump out at you.

* Be on the lookout for Sakura, Eucalyptus or Dark Oak trees. You'll need the logs to upgrade your work stump into the mk2 version. It can hold full stacks of items for repeated crafting, and takes fewer whacks.

* You can use punji sticks (crafted from sugar cane) to damage mobs. Can place on hoppers for collection, and on walls to deter spiders.

* Lit fibre torches(right click unlit one on fire) are not as good as vanilla torches. They only provide a light level of 10, meaning mobs can still spawn 3 blocks away. Craft them into totem torches using 2 sticks for much better lighting. Note they occupy their square so may get in the way  and be placed on the ceiling. Since the totem torch doesn't require charcoal/coal to make you can get and will need a large supply. Use a Flint Workblade to instantly get sticks from leaves and fibre from weeds. Bring 3 workblades with you if you want to stock up.

* The red cedar tree needed for the fire hopper requires a totemic ceremony to convert any sapling to red cedar sapling.

* If you can't find any sharks use a strainer together with a survivalist’s strainer to collect shark teeth (5% chance over 10 minutes is almost guaranteed).

* If your grave gets removed (eg by the Hydra), you can recover it by using the **/tmg_restore** command from Tomb Many Graves mod.

* Having trouble to orientate yourself? Use the Sun! The sun and moon rise in the east and set in the west. This makes a good early compass to find yourself which way you are traveling.

## Step assist vs. auto-jump

Auto-jump is horrible, we all know. That is not what is on by default in SevTech. Instead we have Cyclic's step assist feature on from the get go. In age 1 after you make the Blood Altar you can craft a special apple (Apple of Lofty Stature) to toggle it. See below for a faster way to disable it.

Here are are a few things that step assist fixes over auto-jump: 

1. You don't jump a full 1.5 blocks, but instead are instantly moved the 1 vertical block needed

2. You don't jump and you don’t land, thus eliminating in-flight time

3. Mobs still need to jump, making mountain climbing a realistic escape strategy

4. You don't ruin farmland climbing out of water sources

5. You can run up mountains covering just as much horizontal distance as if you were running.

6. It doesn't use more hunger than walking

7. When digging diagonally down you don't have to make the pathway 3 tall. A 2 tall stairway allows for fast travel up. Still the same jerkyness going down. But now you don’t have to jump going up.

If this feature is game-breaking and you have control over the configs, go to cyclic's configs and disable stepheightdefault and create a new character. If you’re already established see if the admin can cheat the apple to you.

## When and where to select a first base

### What to look for

* Gravel, sticks, and fibre to bootstrap your first tools. Crafting stump then Flint pickaxe, workblade, shears, upgrading to stone pickaxe and axe  then set out for gathering.

* Fleece: The workblade turns this into string, so you don't have to find cotton plants. Instead of killing sheep for Fleece, use flint shears so the herd doesn’t run away. Make a sleeping mat ASAP.

* Sugarcane: You'll want at least 6 planted to have enough for the totemic tools

* Ink sacks: The atlas, tradable from a white-coat villager, requires feathers and ink sacks

* Feathers: In addition to the atlas, you'll need 16 for the Wild Dog Boots. Use shears to get 4 feathers per chicken, which kills them in the process without them running away

* [Optional] Hemp: Dog Pelt Boots  use hemp to make 2 bundles of 8 feathers each. The hard part is finding fully grown hemp.

* [Optional] Keep all wild dog pelts for Dog Pelt Boots (**run much faster**, good armor, no fall damage).

* Bone blocks: Bone fossils are easily found in plains. Pick up at least 10-30 blocks for quick farming and homesteading

* Black lotus, Dandelion and Rose: The fluid bladder needs these 3 powders

* Clay: You'll need around 30 to get you through Age 0

* 4-7 bone: totemic needs these. Note that animals sometimes drop bones.

* Try to keep to one type of animal for meat and pelts as your initial inventory is scarce when gathering all this stuff.

### Where to set up base

* Water: River and ocean biomes have infinite water. Pulling water from lakes results in annoying but workable whirlpools. Placeable water is pushed out to age 2, so any farm will need to be placed around existing water, or aqueducts. You'll also want your sugarcane planted and nearby so it always grows. Plan your base accordingly

* Forest: You'll be using lots of wood for quite a while, so pick a place with quick access to trees.

* Find a village you can often trade hides for leather so you can skip the lengthy leather making process.

* You can also trade fleece for string with better results than transforming it with work blade.

* Cows: Turning Cows into buffallos is required for progression. You have 3 ways of getting them: Pulling a pied piper with wheat, micromanaging with a handful of leads, or using carry-on to slowly carry them back. Pick a base that isn't too far from a herd of cows.

* When you get into age 1 you can make storage crates which retain their inventory, making moving much easier. So you don't need to find the perfect place. Age 2 opens up the Tinker’s lumber axe, making a nearby forest less critical.

### Where not to set up base

* Areas with mud patches. Mud takes forever to mine even with the shovel. You often dig out animal pens.

* Plains: Early game makes heavy use of wood.

    * On the other hand, when breaking leaves manually, sapplings are VERY easy to come by.  Allowing you to exponentially grow a treefarm.

## Tools

* Flint Hatchet: strictly a gateway into a crafting stump. Upgrade to stone axe ASAP.

* Flint pickaxe: strictly a gateway into a cobble. Upgrade to stone pickaxe ASAP.

* Flint spear: 4 damage as melee and ranged, but throwing it risks breaking it.

* Whittling knife: only used to make totems. Scroll or right click in air to switch selected totem animals.

* Flint workblade:

    * Can be used to instantly cut shrubs and leaves for twine and sticks respectively. 

    * Right-click dirt/wood/stone to make a ladder. Great for animal pens.

        * Takes a random number of tries per block

        * Note you need to be on the side with the ladder else you fall through.

    * Shift-right click wood (logs -- must be upright) to get some bark. Takes a few times of "scraping"

    * Shift-right click on grass path to make grass path stair.

    * Use it in a crafting grid to make many things (press "u" in inventory to see list).

    * Like other flint tools it is not repairable like stone tools are.

    * Makes a good early weapon.

* Stone pickaxe/axe/sword/hoe/shovel: You can repair your stone tools on the go by crafting it with cobble

* Early game AIOT: Try to collect as many as possible bear claws (obtainable from any type of bear, easiest are brown bears on swamps). That will allow you to create bear claw paxel which is the best weapon in Stages 0-1 (good amount of damage, very fast attack), it's also a quicker pickaxe/axe/shovel than stone based tools. Can be repaired with bear claws (that’s why you should collect more of them). It’s extremely useful later as a mining tool.

* Flint shears: cuts leaves (makes totem wind chimes more musical), vine(useful for biome detector in age 1). Prevents Creepers from exploding. Used on chickens drops a feather, damaging but not frightening the chicken. No need to chase to get chicken meat.

* Block rotator: while we don't have access to a tool to rotate blocks just yet, you can press K to toggle how to determine the direction blocks face when placed. Useful for building houses.

* Bladder: entry into leather making. Doesn't place water sources, nor hold lava. Can put water in stirring pot.

* Trowel: like shovel, but digging grass blocks often drop worms, which help getting fish in strainer.

* Stone club: while being a slow yet heavy hitting weapon, it can mine cobblestone (faster than a pickaxe?).

## Totems

When you've decided on a base then make a whittling knife and make 6 high totems. They act like beacons within 13x13x13 (note: zone is a cube, not infinite column). You don't need the totem music for these to function. See rituals below for that. With whittling knife in hand either scroll or right click the air to cycle through the options. 

Start with the totem base on the bottom, and your choice for wood placed on top. All similar totems need to stack on top of each other, ie. 5 wolf totems 1 high only gives strength 1, whereas a 5 high wolf totem gives strength 3.

* Bat - no falling damage (1 second)

* Blaze - Fire Resist (3 second)

* Buffalo - Haste

* Cow - Slowness and Resistance II

* Enderman - Night Vision (14 seconds)

* Horse - Speed

* Ocelot - Creepers don't explode

* Pig - Luck

* Rabbit - Jump Boost

* Spider - Spider (treats blocks as if they had ladders)

* Squid - Water Breathing

* Wolf - Strength

### Totem tips

* Put 6x horse and 1x enderman + 1x ocelot throughout your base. Put 6x high wolf and 6x cow on entrances of base to fend off foes.

* When hunting for Shadow creatures during a night, carve a totem base and Enderman totem into the nearby trees, so that you have constant night vision.  Add in Horse totems if the area is swampy for speed boost. Or Wolf totems if battling the Shadow Beasts.

* When mining underwater for clay, salt, etc. take some wood logs, and make a totem with Squid, Enderman, and Buffalo totems. You'll be able to breathe, see, and mine normally.

## Farming

* While you need to trade bonemeal with the farmer to get farmland for the quest, limit it to once. Craft dirt with bonemeal to get farmland easier.

* Recall that Age 1 opens up the Hoe, so you can keep it small and use bone meal, and leave the large farm for later. Also, villages often have already hoed ground. Although some of it would already be gone when you get there, the ones with tall grass/other plants on it will still be hoed. Break the plant and immediately plant a seed and the plant won't pop off. You can also attach a plow to the end of a horse and plow the ground before Age 1.

* Use a Flint Workblade to instantly clear out shrubs

* Even flowing water hydrates farmland

* Water is only infinite in River and Ocean biomes.

* Don't bother with a shovel: make a garden trowel instead. When it comes time to bait your fisherman's strainer, you'll be glad you did.

* Scout around for a Giant bone skeleton (simply a bunch of bone blocks lying in a formation) and grind them up to get loads of bonemeal.

* Place a Drum near your farm and do the **Zaphkiel Waltz** for crazy fast plant growth out to a **radius of 6**.

* Focus on wheat seeds and cotton, as growing your animals and string surplus is very important.

* You can throw cotton seed on the ground and it will grow a new cotton plant where the seed drop after a little time. It's a easy way to make big cotton farm without farmland.

## Homesteading

* With an empty hand, you can shift+right click animals to pick them up and carry them. (villagers, horses or adult buffalo cannot be picked up, shift-right click for ½ of a second)

* Fencing animals in a pen

    * Wildberry bushes

    * 2 Dirt makes Dirt slabs. Dig 1 block down and surround pen with slabs

    * Stone fence

* You can get 100% hatching rate with the eggs you picked up by dropping them (not throwing them) and performing the Zaphkiel Waltz.

* Collecting chicken drops can be automated by putting a wooden hopper+chest under a chicken.

* Buffalo can be bred with wheat so you don't have to keep finding cows and doing the ritual

* After you've found a few cows and optionally pigs, explore for a Bone blocks in clusters to get loads of bonemeal to get a fast supply of wheat.

* Before killing your buffalo make a full totem of pig to get fortune 3

* Pelts are useful for glue in Age 1. Note: buffalo doesn't melt down into glue, but does make 6 hide.

## Automation

* Place a wood hopper on the opposite side of your chopping block and throw items in to automatically place wood. This works for the stone anvil too.

* You can use Wooden Hoppers to load/unload drying racks for leather (later, also for paper etc..). You have to use MK2 hoppers if you're "chaining" the outputs into a single chest, ie have a single chest for input.

* Instead of using hoppers to automate  drying racks you can increase throughput by parallelizing it at the cost of manually replacing hides. Just make a drying rack wall.

* Wood hoppers are available early on and you'll need about 10-20 of them for a full automated age 0 and 1 setup. Mark 2 hoppers don’t need a chest to pull from, as you can place up to 4 stacks in the top for queuing. Only mark 2 hoppers can be chained together.

* The grill can take up to 16 items for queuing. For automated extraction wait for Age 1 when you get a Dung Pipe to pull items out the side rather than a fire hopper needing to take the job of heating and pulling.

* Upgrade to the craft stump mk. 2, which takes fewer whacks, and can hold stacks in each slot for quick crafting.

* When you want to get into beast of burden power be sure to have a 9x9 wall around the 7x7 area each horse/buffalo/llama needs. Use either stone fence, berry bushes or 2 block high wall. Otherwise after the beast is done working he wanders away and breaks the lead.

* Make sure the horse grindstone is on the TOP layer of the 7x7x2 area (put another block under it so it's at eye-level)

* Wolves and buffalo are about the best for running your machine, bested only by fast horses.

* To make beast's work faster place dirt path by right clicking with a shovel on either dirt or grass.

* The press and grindstone are needed much less often than a heavy supply of planks and sticks. Prioritize the chopper with hopper input and extraction. 

## Nutrition

The Nutrition mod encourages you to eat a balanced diet, giving you relevant buffs for eating food. See farming and homesteading for how to get a healthy supply of ingredients.

* To boost nutrition quickly, use the Millstone[BetterWithMods] to become hungry and chow down your surplus of food. You can use multiple cranks to speed this up.

* If you're unsure which foods you can eat to maximize your bars, you can filter food types by typing the category in JEI.  For instance, searching for fruit will give you all items you have access to that increases your fruit bar.

### Good foods to make:

* Hearty Stew(Baked Potato+Cooked Meat+5 bowls+4 mushroom+Barley/Wheat flour) cooked in a cauldron: **3.5% Grain Protein and Vegetable**

    * Be careful to only put in the minimum carrots as the cauldron cooks any spare carrots. 

    * Some youtubers show that you need a blue flame to stoke the cauldron.  This in fact not needed for (most?/any?) recipes.

* Pork dinner: Cooked Pork+Baked Potato + raw Carrots gives **3% Vegetable, Protein**

* Tasty Sandwich: Cooked Meat of any kind + Bread gives **3% Grain, Protein**

* Rice **(very spammable): 1% Grain**, negligible hunger, 0 saturation

## Combat

* If playing non-peaceful is too stressful for you, you can switch to peaceful for all but 1 part and still get into Age 1. You'll need the shadow gem from Abyssal monsters spawning in an Abyssal biome.

* If you use shears on a creeper, it stops them from exploding.

* Mobs grow in toughness and availability as you progress through the pack

* Attack with a lit torch to set enemies on fire

* A flint workblade is as good as a sword

* A Stone Club is spammable and great against packs of mobs. It is also faster at mining.

* Mud makes for decent early game ranged spammable weapon

* Making a stone-braced wooden shield will make handling darklands combat a lot easier.

* The Stone Axe is the strongest Age 0 weapon.

* Spare Tomahawks auto equips when you throw them, great for killing creepers

* The Totemic whittling knife is available as soon as you open Age 0. Make yourself one, and put down a totem base and an ocelot totem. It has a 5 block in each direction creeper griefing protection. Creepers will not blow up within its range. 

* For on the run buffs focus on nutrition and farming. You can get Speed 3, Strength 1, and Resistance 1, and nourished for healing. Having all 4 nutrition bars up you can get 20 hearts.

* Defeating the Baykok boss from Totemic is highly recommended to do as soon as possible. His behaviour is mostly like that of a standard skeleton so he is easily cheesed by attacking his legs from a 1 block gap. Parrots are found in Jungle, Swamp and Savannah biomes. If you can't find parrots that you need to get the eagle-bone whistle, wait until Age 1 and summon a parrot using an abyssalcraft ritual.

* When questing for the shadow gem set up a full 6 tall (1 totem base + 5 totem) totem of pig (luck 3), another for horse(speed 3) and another for wolf (strength 3). Add in ocelot (creepers are harmless) and endermen (night vision) totem with only 1 needed of each.

* The sacrificial dagger together with a blood altar can be used to instantly kill most enemies.

## Inventory tips

* Make shelves instead of chests. They hold 16 items instead of 12, and are more friendly to an inventory wall. Note: They don't currently work with Quark’s Drop-off button (see below).

* Craft a backpack when you get access to leather to hold your items (recipe is on page 6 of the backpack recipes past all of the dyeing recipes).

* After getting a backpack, tech straight to the Stone Backpack for 36 slots. Craft the leather backpack with a wood upgrade, then craft with stone upgrade

* The Cart functions as a double chest when you sneak-right click on it, making by far it the best Age 0 storage option (if bulky).

    * Attach to a horse with astikoor hotkey, R by default

* You can deposit items in your inventory that are already in chests nearby by holding shift and clicking the drop-off button in your inventory. See Dropoff Button here: https://quark.vazkii.us/ This is great after an expedition to clear out things in your inventory you've already found a place for in your chests.

    * You can also store restricted items. Just don't try to select them in your hot bar or inventory.

* The strainer box acts as a normal chest with hopper attached, so you can throw whatever into the water and store it in there.

## Totem Rituals

Totem rituals allow you to make instruments, play a tune before the timer runs out to get various effects. 

Tutorial video: [https://www.youtube.com/watch?v=NXXumiUuZlw](https://www.youtube.com/watch?v=NXXumiUuZlw) 

Start a ritual by shift clicking the instruments in certain orders. After the ritual is started just hit the instruments in the right order.

Each instrument when activating a ritual has a set amount of music it can produce, you need multiple instruments on hand to complete most rituals. Eagle Bone > Jingle Dress = Drum > Rattle = Wind Chime > Flute

The first ritual you should do is the Infused Flute, giving you an infused flute, which makes it randomly perform as well as a drum or rattle each time you play.

You can play the drum with the rattle to activate both instruments at once. In same time you can use flute in offhand.

**Place the instrument set near your farm and do the Zaphkiel Waltz ceremony for crazy fast plant growth.**

Get the Jingle Skirt for a significant boost. (costs 3 bones, 3 sugar cane per jingle item!)

Once you get enough bone and sugarcane, make wind chimes and place under leaves (flint/bone shears cuts leaves) to improve their performance. Enough of them can complete the ritual alone.

Hate the rain? Instead of waiting for the Draconic Evolution block or cheating with admin commands, just do the dry ritual. Wonderfully low tech way to shut up that gloomy and loud rain.

# Age 1

This age is focused on Prospecting for Bronze(tin and copper), 2 magic mods: Blood magic and AbyssalCraft, and having a minimal Better With Mods setup.

## What you can do now

* In addition to a crafting table, make a crafting table on a stick.

* Vanilla chests are open so it is time to reorganize your stuff. Recall the drop-off button above can help keep things organized and your personal inventory clean.

* You've unlocked the Hunting Dimension. Use sneak to enter the Hunting Dimension. Creeping moss changes what mobs spawn. Use the above soundproofing block to stop getting scared from the background noise it makes

* You can place water with chisels and bits. Likely to get fixed in the future.

* Aqueducts tutorial: [https://www.youtube.com/watch?v=S7lRbhtiluw](https://www.youtube.com/watch?v=S7lRbhtiluw) 

* You can make an infinite water source with 3 aqueduct blocks in a line and placing water sources on the 2 ends. The middle will become a water source.

* Several items like Gears have easier to craft recipes now, be sure to double-check recipes for items from previous ages that were difficult to craft.

* Stone wand lets you build out platforms quickly.

* Replace your horse with Wild Dog Pelt Boots (Speed boost, no fall damage, 2 3 armor)

* A cauldron/crucible can turn zombie flesh and hide into glue. Useful for making torches throwable, crafting Better with Mods Wooden gears and Slime boots. Keep 16 around for Blood Magic

* Use storage crates (not to be confused with wooden crate). It's also silent and it can be gathered with all the items using shift right click. Can be used as a limited version of backpack. Ideal for resource processing or builds. Note that the drop-off button doesn't work with them, so shouldn't be used for primary storage.

    * Another problem: Unable to place a sign onto them, as shift+right click picks them up instead

* When you remove a single bit (chisel&bits) out of a plank, it will not catch fire. Useful to prevent your base from burning to the ground by your fireplace.

## Hunting Dimension

Craft 8 wood with a stone sword to get the portal frame blocks. Make a portal and activate with your sword. This world only spawns selected types of mobs. Entering the portal then **sneak to enter** the Hunting dimension.

Note: Mobs have more health here.

### Creeping Moss

Creeping moss is a craftable item that allows the player to change the type biome of a chunk in the hunting dimension. Creeping moss can be crafted by surrounding a block of mossy cobblestone (just cobble crafted with vine) with 8 vines, leaves(use flint shears) or saplings. Once you have crafted the creeping moss, you can sneak and right click to set the moss to the biome you are currently standing in. Once the desired biome has been set, you can go into the hunting dimension and right click with moss (without sneaking) to apply the biome changes. Keep in mind that creeping moss can only change the biome of a chunk in the hunting dimension. Also some of the biomes that are harder to find, like ice plains, can be obtained using some special crafting recipes.

Additionally, you can use the moss to **find out what biome you are currently in**, as it spits out the selected biome into chat. This can be helpful because the F3 screen does not show biome in age 1.

* Make a mob grinder by placing a spider + ocelot totem, 1 layer for you to walk, then a wall of fence, with punji sticks the next layer out. The spider totem lets you climb up the walls of your tower![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_0.jpg)

* Punji sticks (sugar cane) make effective mob killer. They can be placed on the sides of blocks to prevent spiders from climbing over, as [well as hoppers](https://i.imgur.com/VP5pTO9.png) to automate collection

* **Surround this base with 1 layer of Mk2 hoppers, then a layer of wooden hoppers to collect the drops**

* If breeding a bunch of animals for pelts isn't your thing you can AFK and Farm for quite a bit of zombie flesh, melt it down to blood (16 flesh per block) and get some slime boots.

## Prospecting

* Having trouble finding ore? If you have a desert nearby, every stone you find on surface is a ore cluster. Mine it with a pickaxe to get the underlying cluster. Find the center of the chunk and dig down.

* Every ground stone in a desert is an ore sample. Remember that deserts are north/south.

* The Ore is setup in large veins, think 16x16ish. Locate the chunk a vein is in by finding a Sample on the surface. F9 to see the chunk borders. Use the prospectors ore and right click on a block. If an interesting ore is within 48 blocks straight down, then the prospector's tool tells you how many it encountered along that path. Mine in that direction and prospect around to hone in on where the ore is.  As of 3.0.4 ores are positioned in any of the four corners of the chunk.  To find the ore more easily, look up the max Y position it can spawn at, and mine out the chunk at that level. (Use the depth meter.)  Then point the dowsing rod straight down in the four corners until you get  hit on the ore.

* Make a 6 high **buffalo totem** when you find the vein to get **haste 3.**

* To make Tin, Copper, and Bronze you can either make a porcelain melter or a seared melter, the former is easier. You need to pour them into either type of casting basin, then use the stone anvil to get ingots. These melters don't make alloys and can be automated with hoppers, to the point of only manual activation of the faucet.

* Place a hopper above the stone anvil to automate placing ingots.

* Bronze leggings give armor 5 over leather's 2. But bronze chestplate has diminishing returns, only improving leather’s 3 to a mere 4.

* You do not need to go ahead and mine every ore sample you find. If your inventory is full, or you have another plan in your head, then mark the sample using your Atlas for future collection.

## Automation

* A dung pipe can pull out items from the side and drops them as items. Use this on a grill instead of a Flame hopper. Just have the dung pipe drop items into a wooden hopper.

* Make a hoe, plant a garden. Remember the worms you find from hoeing grass will die after some time, so the hydration they provide is temporary.

    * **Prioritize Cotton** **(string) and hemp (Hemp Fiber) and**** carrots/wheat(your favorite protein)**

## Blood magic

Blood magic mod is based on Life Points earned through sacrifice by blood. Initially you'll use your own HP to power it, and if you continue further into Blood Magic you can set up animal grinders.

* After crafting the Blood Altar make a sacrifice dagger and stab yourself to fill altar with blood.

* You can put rotten flesh in the Melter to get liquid blood, 16 rotten flesh gives you a block which crafts into 4 blood balls. This is helpful bootstrapping in to Blood Magic as you don't need to create a full smeltery to stand in.

* When crafting the blank runes to upgrade the blood altar, the weak blood orbs don't get consumed when crafting. So you only need one block of congealed blood.

* Place the 8 blank runes 1 block lower than the altar and around it. This makes a tier 2 alter.

* If you want to continue further in Blood Magic follow the steps in this [lets player's video](https://youtu.be/Q0GNRxIy-1Y?t=27m57s)

## AbyssalCraft

AbyssalCraft is a large mod opening 4 dimensions, growing knowledge about the great old gods. As you progress through the mod item's names will unlock. Its power source is received from statues that direct power into firstly your necronomicon, then later you can store it into containers.

* First and easiest is finding an abyssal biome and killing shadow monsters for the gem shards.

    * To make farming these gem shards easier bring wood for 3-4 totems, each 6 tall.

    * You can also use your hunting dimension with some creeping moss to quickly access an Abyssal biome.

* Next and hardest is finding and farming a Shoggoth lair. They seem more likely around river biomes.![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_1.png)

* They seem to climb similar to spiders. They don't deposit their sludge on bottom half slabs or string. They require a 3x3 hallways to move. However a bunch of them can shove one into a 2x3 hallway. If you are quick you can build a wall right at the bottom of the stairs leading into their lair before they manage to escape. You will get hit at least once since they can hit through a 1 block thick wall but focus on establishing a wall first and pretty it up later. You can build a 3x3 killing chamber at the top of your wall. Use bottom half slabs for the floor and don't bust the wall leading to the lair until your ready for them to come through. Opposite of the wall you can build a 2 block thick wall with a 1 block high slit to slash at them through it. To collect the drop swing underneath and bust out one slab, replace it and repeat until you have all the drops. Mk2 hoppers can suck the items through the slabs for a much safer alternative.

* An image of the possible killing chamber (as described above): [https://i.imgur.com/QmraP58.png](https://i.imgur.com/QmraP58.png)

As long as you don't go in far enough to attract the attention of the Shoggoth in the back, you should have a endless supply of them. My first attempt I went for a killing hole in the floor and it didn't work out very well since that angered all of them which meant no new Shoggoth could spawn after they were all dealt with.

Punji sticks don't work on them since they climb walls. Lighting them on fire with fiber torches is very slow. Slashing them is slow and consumes roughly 6 swords to get 1 stack of their drops.

* If you're playing on a server and the Shoggoth lairs have been emptied, you can trade for flesh with villagers, or with the Farming for Blockheads Market

* Video tutorial on finding and dealing with Shoggoth: [https://www.youtube.com/watch?v=mORTlnKoqHQ](https://www.youtube.com/watch?v=mORTlnKoqHQ) 

    * Alternatively you can mine out a 1 block wide path into their spawn area and then make room behind you for 3 totems, 6 high pig for luck, 6 high wolf for strength, and 6 high cow for resistance, and 1 high endermen. Combine with bronze leggings and any available armor and you should be able to withstand their heavy blows.

    * Other method is to block exit of theirs room on stairs, leaving a space to smash them with spear, while having totems on top of blocking blocks.

    * Their hitbox is small and closer to the back of their skull. I guess this was to say the only way to deal with them is to out-smart them, namely by attacking their intelligence directly.

    * Spear has a bigger range than other weapons and it can be used to punch them without being touched even once. Combined with wolf totem it does a massive damage.

* There is a common bug where Shoggoth either do not spawn or spawn unhittable. If this happens, you can craft the Market block cheaply, and then mine their bases to trade for Sloggoth Flesh. 24 Monolith Stone will get you one flesh, and 8 Sloggoth Flesh will get you a statue. 

* After crafting the statue place it **away from your base** and hold the necronomicon. The statue will send power into your necronomicon at 5 PE / 5 seconds taking about 15 minutes to get the 1000 needed. Randomly you may get struck by lightning and even explosive lightning, and sometimes wither effect. After getting 1000 points that area will have gotten tainted and will produce abyssal mobs. A shovel can quickly remove sludge produced by Shoggoths. They don't poop ooze on half slabs.

* The negative effects increase with how much charge is in the necronomicon.

* To find Corallium look around for a biome looking like this or at least 40 ground level or below and then use a Weak Dowsing rod until it reports with finding Corralium.

 ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_2.png)

* Regarding Corallium, You do not *need *to find the Corallium biome, they spawn, albeit rarely in Swamp and Ocean biomes. Strip mining such is a slow but surefire way to get early Corallium.

* When progressing in Abyssalcraft, beware the second dimension, the Dreadlands. Mobs there apply Dread Plague on hit, which while painful, will also convert the biome of the x/z point you are standing on to Dreadlands whenever it does damage to you. It also likes to refresh itself often. Try to avoid bringing the Dread Plague out of the Dreadlands, as if you bring it to the overworld and dreadlands enemies spawn in an un-torched spot, you might have a problem. For this reason, I would not recommend making Tinker's weapons out of dreadium, as that’ll spread the plague to enemies on a critical hit.

## The Beneath

Your goal is to get a handful of Black Quartz (for actually additions) and Aquamarine (for Astral Sorcery)

* While the Melter can't alloy tin and copper, you can use the kiln to get bronze, then melt it down, and pour into a block.

* Darkness in the beneath hurts, so take a couple stacks of torches. Recall that coal doesn't spawn everywhere, and for every charcoal you take bring equal twine. Alternatively take a flint workblade to shrubs and leaves to get loads of twine and sticks. Craft fibre torches, light them, then craft with 2 sticks to make Totem torches, ie. bypassing charcoal altogether.

* Your "Beneath" teleporter can be moved. Either dig down or pillar up before placing and entering the Beneath. See next note to know when to stop.

    * It is better to pillar up in the Overworld rather than the beneath as spirits can push you off ladders and pillars.

    * Remember to use cobblestone for your pillar as you can use a Flint Workblade to carve out a ladder when you climb back up. Obviously you can drop into water for a quick decent.

    * You can pin torches to a side of ladder blocks making it safe from pushing you off by spirits. It's better than pillaring up in the Overworld.

* Black Quartz can be found from y = 2 to y = 100, Aquamarine can be found from y = 150 to y = 246 

* Before digging to a set Y area dig up till you see a cave. On the top of the caves you have a good chance of finding a few patches of ores. Aquamarine comes in veins of 12.

* You can get throwable torches by crafting 8 regular torches with glue. This is great for handling dungeons and areas with spawners.

* When you first get into the beneath, mark your spot, because it is a pain finding your way home

* You can speed down a strip mine by running and jumping the whole way

* 11 Black quartz can be used to make black quartz AIOT

    * It is all the tools combined and the best age 1 weapon. 

    * Has **1100 durability**

    * **Can be repaired** with 3 Black quartz, a real bargain!

* Upgrade your chestplate and helmet to black quartz, and if you didn't get Bronze leggings, upgrade those too.

* Don't convert all of your Crushed Black Quartz into Black Quartz.  You’ll need some of the dusts later to create Black Iron Ingots.

* If you have a problem in finding caves on bottom of beneath while searching for black quartz just dig down below y=20 and do the normal branch mining.

## Better With Mods

* Before we get into Astral Sorcery we need a Saw to get the bark off of Mulberry wood.  Here is what a Mulberry tree looks like:

 ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_3.png)

* After making the Saw you'll need to get started on the water wheel, as the hand crank doesn’t work on the saw. You’ll need ~36 hemp. Get the top of hemp plant but leave the base planted. Or just use a half stack of bonemeal. Know that breaking the hemp plant in the bone mealed state has 100% of dropping 1 seed and 0% chance of 2 seeds. (Or take advantage of Totemic "Zaphkiel Waltz" Ceremony)

* Follow the main quest Guide to a waterwheel and gearbox and make 3 wooden axles (1 for the water wheel to be based on, 1 to connect to the gearbox, and one to deliver power to the saw.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_4.png)

* You can tell the gearbox and axle are connected right by seeing the axle turn.

* Making a 4th axle allows the mill stone (power must come from top/bottom of millstone) to be powered here instead of by hand.

* You don't need the axle between the gearbox and waterwheel, but is helpful later when needing the space to surround the mill stone with Mk2 hoppers.

* Mechanical power is binary, it's either on or off. You can split power as many times as you want to power your stuff.

* Because Better With Mods drops all products on the ground, Mk2 hoppers are your friend since they can be chained together (unlike Mk1 hoppers, because they don't have an internal inventory). Alternately,  put it over some water you've removed, thus creating a natural whirlpool into a strainer which stores items, or like this when you can place water.![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_5.png)

* Completing the saw also makes Wooden gears much cheaper.

### Astral Sorcery beginnings

Astral sorcery is based on star light feeding into bigger and bigger altars and actual star gazing. Getting the luminous crafting table opens the next age. This mod is gated on aquamarine whis is configured to come only from the top of the Beneath world, and Mulberry bark which can only be scraped off with a Better with Mods Saw, and a Necronomicon Ritual taking 1000 PE (waiting in front of statue with book in hand for 15 minutes, or with a Energy Pedestal).

* Need bronze tier pickaxe or claw paxel to pick up the luminous crafting table.

* The meat of astral sorcery is covered in [Age 2: Astral Sorcery](#heading=h.q8tahli9nh0b)

# Age 2

## Uncategorized Tips

* You can store Improved Backpacks' backpacks inside Iron Backpacks’ backpacks.

* Not all of these baubles need to be equipped to work.  Most will work as long as they're in the inventory.

* If you want to harvest any of the Low Grade Charcoal blocks, do so before entering the next age as this will cause them to turn into netherrack.

* Torch launcher : Provides a large supply of throwing torches

* Monster spawners generate mossy cobblestone from regular cobble, making the mossy variant renewable. (possibly age 2 needed, can't confirm)

* SevTech contains the mod "Despawnable Spawners".  This mod is set up to destroy spawners (the cage block) after it has spawned 400 mobs.

* Well Bucket - Creates water if next to a source block. Combine with liquid hopper to automate into a tank

* Think big, plan ahead, don't get stuck in a small base in ages 1 and 2 since age 3 involves a lot of multi block machines that will require a lot of space.

* Save your iron, you will need a lot of it and it's not as common as in regular modded mc.

### Things to look out for

* If you see an Enderman you should absolutely try to kill him. If you can you should make a Luck 3 totem pole as well. Ender pearls are important.  Endermen will only drop ender dusts.  You can smelt these in the melter and cast them to ender pearls using the pan cast.

## What you can do now

* Tinker's Crafting Station

* Boat

* Books

* Slime Sling, and obviously the Slime boots you had available in age 1, so you don't die from flinging yourself

* Quartz Grindstone [Applied Energistics 2]

* Framed Storage Drawer

* Mine Iron, Gold, Lapis

* Ranged weapon, See Tinkers construct right below

* Transport NPCs (excluding most mounts) without leads [Interdimensional Cage]

* Tinker's Tank

* Create Speed, Nightvision, Healing and Regeneration Potions with Rustic [Alchemy](https://github.com/the-realest-stu/Rustic/wiki/Alchemy).

## Baubles

* Climbing Gloves : Let's you climb vertical walls.

* [Gluttony Charm](https://ftb.gamepedia.com/Gluttony_Charm) : Consume food instantly

* [Sleep Charm](https://ftb.gamepedia.com/Sleep_Charm) : Sleeping is instantaneous

* [Portal Charm](https://ftb.gamepedia.com/Portal_Charm)  Allows for instantaneous travel through dimensional portals

* Compass : The X and Z of the player

* Stopwatch : The movement speed of the player

* Depth Meter : The Y of the player

* Slimey Compass : Whether or not the player is in a slime chunk

* Chunker : The Chunk's X and Y coordinate

* Calendar : 

* Biomealyzer : Displays the name of the biome you're in.

* Super Sound Muffler : Allows for the muffling of certain categories of sounds

## Automating a Melter

* Now that we have access to a lever, a dependable clock can be created using the turntable.  Put a block on the (working) turntable, attach a lever to it.  Activate the lever.  Then make sure the faucet is on the other side of the lever.  The rotation of the turntable will send a pulse to the faucet.  Select the wanted speed by right clicking the turntable with an empty hand.  There are four sides, so a single turntable can cycle four smelters/spigots.

* In the picture below, the turntable rotates the switch so all four melters are emptied automatically.  On top of the windmill's gearbox is a bamboo chime.  This block will emit a redstone signal when it rains, making sure the gearbox doesn’t get damaged.

*  ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_6.png)

## Which pickaxe to pick

There are at least 2 items that require either the claw paxel or a bronze pickaxe to pickup: astral sorcery altars, and the Carminite reactor in the urgast towers. 

### Tinker's Construct

These tools allow you to swap out parts, gain modifier slots the more you use them, and have a very large selection of materials to use. There are lots of abilities tied to each modifier, allowing a great deal of customization to fit your needs.

A bronze pickaxe (Bronze head, bone handle, iron binding) has diamond mining level, 578 durability, and Dense, and Magnetic. 2 bronze ingots makes a repair kit, repairing X durability.

Dense uses less durability the more damaged it is. Later can be combined with reinforced modifier and it will reach a point that it is infinite. In age 3 you can get the Excavation modifier to quickly level it up.

### Black Quartz

While a black quartz pickaxe isn't much to write home about, combining with the hoe, sword, axe, and shovel gives an AIOT tool (All In One Tool) with X durability, and great damage. 1 black quartz repairs 370 durability.

### Betweenlands

Octine tools are better than iron: Mining Speed 6, 900 durability, can be enchanted

Valonite are as good as steel: Diamond mining, Mining speed 8, 2500 durability, can be enchanted

### Twilight Fortress

Ironwood Pick: Diamond level, Mining speed 6.5, 512 durability

Mazebreaker: Diamond level, Mining Speed 8, 1561 durability, Efficiency 4, Unbreaking 3, Fortune 2

## Interdimensional Cage

The Interdimensional Cage from Abyssalcraft allows you to transport Villagers, Mobs and Animals for a small P.E. cost. 

* The cage must be charged before use in an Energy Pedestal. 

* Right click to capture most NPCs, right click again to release.

* Villagers require a shift-right click for capture.

* Horses and Llamas cannot be captured.

* Each capture requires about 30 P.E. and the cage capacity is 1,000 P.E.

* Only one NPC may be caged at a time.

Materials

1000 P.E. + 8 Iron Bars + Shard of Oblivion(4 Shadow Gem + Transmutation Gem)

Transmutation Gem (10 uses, 1 is used in crafting the shard):

* 300 P.E.

* 2 Ender Pearl

* 2 Transformation Powder from the Twilight Forest

* 4 Aquamarine from the Beneath

* Coralium Pearl

## Tinkers Construct

Note: Blank patterns require Sidings from the Saw instead of sticks.

* Make sure the pattern chest is touching both the pattern table and the part builder, otherwise you have to access it by clicking on the pattern chest tab.

* The crafting station is the block that allows the rest to be accessed as tabs in one UI.

* You can make **one-use-****casts by Melting clay** and pouring it over astone part. Melting metal, and pouring it onto a  clay cast, consumes the cast in the process.

* Lasting casts can be made by pouring gold over a stone part.  These casts won't be consumed by future use.

* Make a stone nugget to create the nugget cast.

* Use a (clay, mud, seared) brick to create the ingot cast.  You could use an ingot as well, but that seems wasteful.

* Best bow

    * Crossbows and longbows can't be created until age 3 so shortbows are the only solution.

    * Wood bows have nerfed durability, so green slime arms are the way to go. 

        * Get **green slime crystals **by taking either glue or blood balls and crafting a slime cube -> green slime balls + dirt, sand --furnace-> green slime crystal (no cast needed)

    * Damage arrows (**3.67 hearts** average observed, 50 arrows): **Bone **arrowhead, reed shaft, feather fletching.

        * This is easier to repair on the go than a slime arrow.

    * Endurance arrows (1.9 hearts average observed, **170 arrows**): Green slime crystal arrowhead, reed shaft, feather fletching

* Melee: A bone and flint mattock with bone handle does **as much damage as a diamond sword**

* Bronze heads are the best material for pickaxes, hammers, and things that need both speed and durability.

* [Here](http://tinkers-construct.wikia.com/wiki/Material_Stats) are the modifiers and descriptions

* Note that sharpening kits only repair. **Don't plan on getting obsidian sharpening kits** to upgrade your mining level

### [Optional] Tool Forge

You can make a Tool forge by burning grout into seared stone and 4 tin/copper blocks.

* Bronze is the only liquid metal worth making casts for at the moment.

* Stone on the other hand, doesn't require casts, and can be repaired easily. Recall parts can be swapped out when you get a full smeltery for better parts.

* Make a **Bronze-Stone Hammer** and Stone Lumber Axe for quick mining and felling.

    * You can use a bronze head and a stone and/or wood plate to get the benefit of speed, durability, and Dense modifier while still easily repairing your tool.  You can upgrade once you have it unbreakable.

* The materials used in faceplates and heads can be used for repairing.

    * A wood faceplate gives ecological (self repairing) and is cheap to repair, at the cost of max durability

    * Stone is a bit faster and as common when mining

    * Iron gives magnetic (pull drops towards you)

    * Slime gives high durability, sporadically spawn slimes when mining, useful for the excavation modifier next age.

    * Stone makes it mine faster the lower the durability.

* Shuriken: these are reserved for age 3. 

## Getting Iron

Iron is now open, but your melter isn't going to get hot enough. In addition to tracking it down and mining it, you’ll need lava in either a porcelain or seared tank (matching your melter)

### Handling lava

Before venturing out to find Hematite, make a couple Seared Tanks or Seared Gauges.

Pick one of the following for holding lava:

*  As many clay buckets as lava you need

* A Between lands Bucket![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_7.png) made from Syrmorite holds lava

* Wood Barrels can hold up to 8000mb of Lava and can be shift-right clicked to store in your inventory. Lava will burn the barrel if left in the Overworld. It will also burn you if you stand next to the burning barrel (oops).
Placing a lid on the wooden barrel lets you pick it up into inventory.

### Hematite

* A 6 high buffalo gives you haste 3.

* If you got a Tinker's stone hammer, you can speed up mining Hematite by placing cobble and mining that.![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_8.png)

* You can melt iron by reconfiguring your melter to be heated by a Seared Gauge. Note the automation section above to automate the faucet.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_9.png)![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_10.png)

* Make a stone bucket and place in a table, then melt 2 clay and pour to make a bucket cast. Pouring 3 iron gives you a bucket. Use gold instead of clay if you think you'll need more buckets.(the watering can consumes the bucket in its recipe)

## The Between Lands

Before we can make a smeltery, we need to take the side quest of the Between Lands. Because it has its own wood and tool tech tree, you'll need to start from roughly scratch.

Goal: Obtaining a Aqua Middle gem found in Sludge Plains lakes

* The druids spawn when you enter the ritual area, giving you time to prep before the battle.

* Take the time to get slime boots when fighting the Druids. It turns their offensive spell against them. Alternatively make a Bat totem pole (along with Pig for luck) near the circle where you are fighting them. Furthermore carrying a dagger of sacrifice with a blood altar allows dealing with druids very quickly as they die in 1 hit. This same strategy also works on many other enemies in the betweenlands except bosses.

* The Betweenlands is a very large mod, consult [http://the-betweenlands.wikia.com/wiki/Basic_Guide_to_Survival](http://the-betweenlands.wikia.com/wiki/Basic_Guide_to_Survival) for some starting tips.

* Take neither non-cooked food (berries -> rotten, hearty stew is fine), bedding, Vanilla Torches nor weak weapons (overworld diamond < between wood sword)

* Totem torches work normally in the Between lands. Furthermore the torch launcher also works but this could be considered cheating as the world uses you placing torches to trigger making them damp, and the launcher doesn't hit the same codepath.

* Setting the spawn point with a sleeping bag apparently works.

* Find Bushes to get Weedwood sticks. The SevTech recipe killed weedwood planks -> weedwood sticks

* ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_11.png)

* Hunt down a Weedwood tree and make a base in it ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_12.png)

* Instead of making 2 Sulfur furnaces, craft a single one with 8 betweenstone for a double furnace.

* This has been fixed. You spawn at the portal unless you reset it  Your spawnpoint in the Betweenlands is not set when you enter through a portal. So setting your spawn should be high priority. The first thing to make with your Syrmorite ingots is shears, to get moss, to get a moss bed and set your spawnpoint. 

* Food is hard. Cook Swamp Reed ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_13.png) into donuts for 6 hunger bars.

* Be on the lookout for Syrmorite ingots![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_14.png) in pot![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_15.png) inside Fortresses to get early access to lava-capable Syrmorite Bucket![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_16.png).

* To make a full smeltery, you will need to go to the Betweenlands and find a Aqua Middle Gem. To find it easily craft a betweenlands boat and row around until you find one, they glow in the dark and the boat bugs the water texture to be see-through. Remember to take a bucket of swamp water with you. The purifier needs it and the normal fuel to run.

* You can avoid using glass by using the silt glass from betweenlands instead. Its crafting recipe to glass and panes aren't modified. This avoids having to use the smeltery to create glass and glass panes.

* Syrmorite hopper is just as good as a regular hopper and is easier to make.

* Syrmorite armor and weapons are just as good as iron ones.

* For easier travel, you can tame a [Harlequin Toad](http://the-betweenlands.wikia.com/wiki/Harlequin_Toad) with Dragonfly Wings. As with other minecraft mounts, they require a lead and fencepost when you aren't riding them. The toad is able to swim and traverse Sludge Plains.

## Tinkers Construct Smeltery

Prerequisite: Turntable[Better with mods], Aqua Middle gem[Betweenlands] or wait till the nether for blaze powder.

Note that ore doubling from tech mods has been nerfed greatly. Even Mekanism is delayed until age 5, and it won't process your ores. A smeltery will be your go-to tool for ore processing for quite a while.

* A bucket cast is made from a stone bucket, not a clay one. You still need a clay bucket to get lava for the seared/porcelain tank under a melter.

    * Note that a seared tank won't work with a porcelain melter.

* You can make casts out of Gold, Brass, or Aluminum brass(1 copper+3 aluminium). Seems you only have access to gold right now.

* The smeltery controller can be made with blaze powder, allowing you to bypass the betweenlands altogether.

* A tinkers smeltery can be as small a base of 1 square, but the primary use case for the smeltery is to be the main ore processor you should just start making a larger one.

* Smelteries can share sides, but not the tank nor controller. This helps avoid unwanted alloys.

* Smelteries can **not** share sides with Tinker's Tanks or Seared Furnaces

* Note: **Obsidian doesn't form** in the smeltery, so you won’t have quick and easy access to Obsidian yet.

* Use Liquid hoppers to mostly automate pouring out blocks/ingots/plates. Fill up your smeltery with stuff to smelt, then use the faucet once to pour it into the very large internal tank of the Liquid Hopper. Then let the hopper take care of filling the cast/basin.

* ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_17.png)

## Twilight Forest

* The portal to the twilight forest is built in the same way as usual. Because you do not have access to diamonds it is opened with a Starmetal Ingot.

* When teleporting between worlds with a magic map, it might stop updating in the Twilight Forest.  Save, quit & reload while in TF solves this.  Storing the maps in a chest inside the Twilight Forest doesn't bypass this issue.

* Vanilla ore veins spawn in the Twilight Forest, and due to the dimension's lower surface height can be a lot easier to reach, or in some cases even be found right at the surface.

* If you notice a lot of FPS lag while in Twilight Forest, try reducing your view distance.  This kind of stuttering is usually related to minecraft trying to render too many textures.

* Hedge Mazes may contain a hostile wolf spawner, which if left intact may provide you with an easy source of pelts to craft into leather or glue if you have not yet started breeding animals at this point.

* Medium and large hollow hills, as well as hydra lairs contain Redstone Ore, as well as Coal, Iron, Gold, and Lapis.

* Maze wafers are a decent source of grain nutrients and can be found in Labyrinths and other dungeons later in the progression.

* In later dungeons, a food called experiment 115 can also be found which gives protein nutrients.

* A more invasive alternative to getting at the Labyrinth's secret vault for the Mazebreaker is using the old fashioned method: explosives. Angry Pebbles from Betweenlands towers works/TNT/letting creepers blow up.

* Ensure that you collect as many steeleaf as you can (at least 4) from the labyrinth so that you can craft the coal engine to move towards age 3. You do not want to have to find you way back into the labyrinth later.

* Dark Towers have plenty of useful items to loot, including Brewing Stands, Anvils, and Pistons, as well as the Carminite Reactor you will need at the end of this age, in addition to this there will be plenty of spawners that will spawn carminite ghasts which you can kill for ghast tears, and there are a lot of chests to loot for other goodies like Redstone Lamps, glowstone dust, and Experiment 115

* The Carminite reactor required a bronze pickaxe to pickup. TODO: see if a claw paxel can pick it up too.

* Dark Towers also can contain Blaze spawners, though Blazes don't actually seem to spawn in age 2 or 3.

* Take some bones to the doggos in TF to tame them, and carry them back to your base. They'll run faster than the horses for your machines.

* Cave Illuminators (from Astral Sorcery) allow you to clear Mazes and Hollow Hills more easily.

## Astral sorcery

* Star light increases with Y level, up to 120. Higher than that doesn't matter. Once you get more advanced altars this benefit doesn't matter.

* Need bronze tier pickaxe or claw paxel to pick up the luminous crafting table

* Mischief of Mice's [top tips](https://www.youtube.com/watch?v=i22YPsbfego) and a [playlist of astral sorcery - bit by bit](https://www.youtube.com/watch?v=9uU67eYK_Mc&list=PLQzDSnrhrcyyZKmHp1zdj03jRbuZN7NOh)

* The Resonating Wand does not make the Crystal Rock Samples more visible, like it does in the standard mod with Starmetal Ore.

* Crystal rock samples look like:![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_18.png)

* When making a crystal grow by soaking it in starlight, if you continue past the maximum size there is a 1/6th chance that a second crystal will form with higher purity (this is also the only way to increase purity). See [here](https://youtu.be/i22YPsbfego?t=5m23s) for example

* You ALWAYS want to use perfect crystals for rituals and collector crystals, and preferably celestial crystals

* Place your lightwells near your tier 1 altar to speed up production of starlight, as well as providing more light to the altar.

* For the most part ones with poor stats are garbage and only really useful in lightwells and things that don't care about quality (which you can tell by checking if the output item has stats in the tooltip, eg. Mantle of Stars or Altars do not care about crystal stats as a part of their crafting component)

* Liquid hoppers can pull from all 6 sides, helpful for automating extraction from lightwells: ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_19.png)

* Rock Crystal ore is not mineable with a stone pickaxe, you need something with mining level diamond to harvest it (like an iron or bronze pickaxe from tinkers or claw paxel available starting from Age 0).

* In regards to liquid starlight generation in a lightwell: Aquamarine < Resonant Aquamarine < Rock Crystal < Celestial Crystal < Attuned Rock Crystal < Attuned Celestial Crystal

* Celestial Gateways allow for inter-dimensional transport, you can set up gateways to travel to the end, nether (ceiling), or even other GalaticCraft planets - the multiblocks can be built in stage 2

* Crystal tools are very effective, for example the highest quality sword does 7 full hearts of damage, (double that of a diamond sword) The quality of a tool depends on the stats of the crystals used. Higher size/cutting means more efficiency. However they slowly decrease these stats over time when used. These can be gained back by putting them in liquid starlight or on a grinding stone. Later they can be infused to make them more durable and effective.

* You can attune yourself to a constellation for all kinds of bonuses. This requires the attunement altar and a rather large multi block structure (using 225 sooty marble alone) it also requires some spectral relays.

    * Discida gives all kinds of damage buffs

    * Armara provides a multitude of damage reducing buffs

    * Vicio increases speed, places lights, reduces hunger and grants temporary lava immunity.

    * Aevitas provides increased reach, natural armor regen and turning stone around you into ore. However turning stone into ores will break the progression of the pack by giving you many ores before you can normally find them.

    * Evorsio gives mixed mining speed and damage increases as well as disarming your opponent's armor.

    * To find where to place spectral relays for a constellation. Hold the paper of that constellation in your offhand (shift right click your astral tome to take the papers out). Spots where to place the spectral relays glow blue.

* Fluid Hoppers into a Tinker's Tank makes for a great way to store all that precious Liquid Starlight. Later a containment chalice can be used. Putting one near a infusion structure drastically reduces starlight usage.

# Age 3

**Ores:** Galena (Silver and Lead), Limonite (Iron and Nickel), Platinum, Cinnabar (Redstone), Bauxite (Aluminum), Nether Quartz, Nether Amethyst.

**Tools:**** **

**Key Items:**

### Obsidian

* Obsidian is now available. It used to be cracked basalt but now appears in the world.

    * Though obsidian is available earlier by using an Astral Sorcery pick.

* Some pickaxes like the Black Quartz AIOT can mine obsidian but will not drop it. A different pickaxe is needed to obtain it.

    * Tinkers hammers won't easily work right now until you obtain steel which requires a blast furnace.

    * The swift pick from the betweenlands is highly recommended due to its insanely high mining speed. It breaks obsidian in a rate of about 1 a second.

* Obsidian can also be made in the cauldron completely avoiding having to mine it but is slow and requires a lot of fluid management. (A lot? Specifics?)

* Obsidian can be made with astral sorcery and magma blocks but require collector crystals which require a further upgraded altar and another structure for the infuser. Also this places the obsidian in the world so it still needs to be mined.

### Nether

* You can cast yourself a nether portal out of lava: ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_20.png)

* When turning into hellfire dust know that the 8th dust spawns a ghast if you don't have a vase under the hopper. If the hopper is receiving mechanical power, it also wont spawn a ghast or break when trying to create large amounts of hellfire dust.

* Nether Amethyst Ore only spawns in the vanilla Hell biome (get a Biomeanalyzer). It's rare, so Fortune III is recommended

* When farming a blaze spawner don't forget to make yourself some totems (fire protection). **Note luck doesn’t work on blazes**

* Blood Magic's Sigil of the Phantom Bridge lets you get around easily, avoiding Thornstalks and Soul Sand

* Spawners can normally be picked up with the Carry On mod (shift+right click with an empty hand **But** this doesn't work in this pack.

Food

* Fish n' chips. This food restores 9+ full hunger bars and saturation. It requires the knife which costs 2 iron, 1 leather, 1 flint and 1 stick (very cheap). Every fish n’ chips also requires one cooked potato cut up into fries, 1 cooked fish and 1 paper cone made of 3 paper. You get the cone back after eating it. Note, this recipe uses only age 2 and lower materials but is only obtainable in age 3

* Cooked ghast meat. This food restores 4 full hunger bars and 5+ saturation Raw ghast meat can be obtained in large quantities in a ur ghast tower in the twilight forest. Note that ghast spawners despawn after 400 spawns. Raw ghast meat can be obtained in age 2 but only cooked in age 3

    * **Important**, eating ghast meat gives levitation 2 for 10 seconds, this could be beneficial or not depending on the situation

* Astral sorcery aevitas cloak. This cloak is available in stage 2 but requires the highest tier altar and by that time most players would have reached at age 3, this cloak rapidly regenerates your hunger and saturation while equipped to the point where the player never has to eat again, gaining lots of health regen in the meantime due to the saturation. Just beware for reaching low nutrient levels.

Storage

* Obsidian chests are the best one block storage options for its price, each having enough space equal to 3 large chests (108 slots)

* You gain access to tanks, specifically from Immersive Engineering. While this multiblock is non-portable, it is very useful for storing large amounts of fluids. This is good for creosote, lava (though this might be difficult to collect), and water. These liquids have been, and will continue to be very useful (well you just gained access to creosote but it applies to it as well) so it is recommended to store up on them.

## Teleportation

There's some methods of teleportation available.

### Astral Sorcery Method

Astral sorcery's celestial gateway can be used to teleport to a different altar.

* Pros: Very easy to use, works across different dimensions and over long range as well

* Cons: requires 2 starmetal ingots and 8 stardust to create 2 of them and both require a marble structure.

### Betweenlands Method

Furthermore you can link betweenlands portals with the swamp talisman

* Pros: Can be used as soon as the swamp talisman is obtained, new portals are very cheap to make

* Cons: Can only teleport up to 1500 blocks away and exactly one portal MUST be in the betweenlands so you need to use 2 portals to reach a different place in the overworld.

* Also it takes a while for the teleporter to function and the world to load.

## Tinker's Construct Tools:

* Shuriken: The upper left-hand corner determines what material repairs it.

    * 3 hearts average observed, **107 ammo**: 1 Bone in upper left, 3 slime. Repairs with bonemeal, marginally less damage than bone and cactus shuriken, but way more ammo

* Note that sharpening kits only repair. **Don't plan on getting obsidian sharpening kits** to upgrade your mining level

* The silky touch modifier uses betweenlands gems rather than emeralds. This is useful for getting the ore itself, needed for a few recipes later and ore doubling

* You gain access to the Ore Excavation modifier in this age (alongside the ability to add modifiers in general). Check options for the keybindings available. Ctrl+OreEx keybind opens up a GUI that allows you to edit shapes if you want.

* OreEx will continue mining blocks with your tool even if it breaks, it only stops when one of the following happens:

    * Your hunger hits zero

    * You let go of the excavation key

* If you hold food in your offhand and have a gluttony charm equipped you can eat while ore excavating, allowing you to mine the max 4000 blocks all at once.

* You can swap parts on your tinker tools without any penalty. This lets you do something like create a pickaxe with a stone head, add the ore excavation modifier to it, and then mine through huge amounts of stone, repairing the tool as you go (make sure to have a Tool Station on hand and a LOT of food) in order to level it up very quickly. A good way to do this is to add, in order, the ore excavation modifier, 5 reinforcement modifiers (ASAP as soon as you get the levels, to make the tool's durability last longer than your hunger) to make it unbreakable, and then Luck III. Due to Ore Excavation, redstone (Haste) isn’t as important, so it can wait. Also, since you can replace parts without penalty, you can keep this pickaxe/axe/shovel/whatever for the rest of the game, replacing any part on it whenever something better shows up without having to worry about ever repairing it.

* Absolutely make yourself a Luck III pick (even 1 lapis + time or forking up the 360 lapis to quickly get to Luck III), either on your main pick or keep a spare just for the ores that are annoying to find (nether amethyst, aquamarine, ...) (Just by adding only 1 Lapis will help, it slowly increases when used.)

    * Most geolosys ores are not affected by Luck, the ones affected by Fortune/Luck will be noted above in the Ore Distribution chart

    * Mobs with modified drop tables such as Blazes and Endermen are not affected by Luck/Looting

* Magma block/Netherrack over a Lightwell generates Lava for your furnace.

* You can easily get repairable tinkers tools with mending moss (right click a moss ball on a bookcase + have 10 levels to give up) and copper parts which causes lots of exp drops (when mining stone for example)

* You can clear out huge swaths of cobblestone using the Excavation + Blasting modifier + Gluttony charm + lots of food. Blasting 3 destroys all the cobble you mine. After blasting the stone you are left with easy to find veins. If you use Copper you get tons f XP as you're doing it. 100+ levels in 10 minutes.

## Stoked Fire

* Make a Hibachi and Bellows, plug bellows onto an axle and create a [redstone clock](https://minecraft.gamepedia.com/Clock_circuit#Repeater_clock) (or make a timer) that turns of/on the gearbox. Put a redstone torch next to the Hibachi and you should see a blue flame - stoked fire. This unlocks many new cool things.![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_21.png)![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_22.png)

* When you put [4 bricks above the stoked fire](http://sargunster.com/btw/index.php?title=Kiln) you will get a Kiln. You can make nether bricks in it - this unlocks the blast furnace from Immersive Engineering, therefore Steel and this will unlock doing most of the IE things in this Age.

* In a kiln you can make Melon Pie(2 watermelon+egg+sugar): **4% Fruit**

* When you put a Better with mods Crucible above the stoked fire you can melt down armor (gold and iron) to ingots and nuggets. Combo this with the hunting dimension and a mob grinder there to get infinite gold and iron.

## Immersive Engineering/Tech/Petroleum

* Put a crafting station next to your coke oven to easily make treated wood. The bucket input and output slots are visible as attached inventory slots in the crafting station.

* Except power, first thing you should make is a Metal Press (more efficient rods and wires).

* The main quest progresses through the Immersive Petroleum and a part of the Immersive Tech questline, you will need a lot of steel to complete it, but otherwise it is fairly straightforward.

* In Immersive Petroleum, you will be required to find (using the Core Sampler) and create an Oil Pumpjack. The oil will go through the Distillation Tower, which will turn it into Naphtha and Diesel. Additionally, the tower will spit out Bitumen as another byproduct. Both the Naphtha and the Diesel have their uses, so be sure to store them.

* The Pumpjack can also be used to collect non-oil liquids from the core (beneath bedrock), such as water and lava. This is one method of collecting the liquids for crafting uses, though do note that just like the oil this is finite.

* All machines in the 3 mods (Immersive Engineering, Tech, and Petroleum) use up a good amount of power. You want a just as effective power generation to power these machines, especially the constantly active ones. The strongest power generation possible at this level is Biodiesel, which produces 4096 rf/t with a upkeep requirement (due to the machines required to get the biodiesel) of 904 rf/t (wiki says Fermenter requires 8rf/t. Will double check because that seems really low).

* Try to get the Crusher, Squeezer, and Arc furnace as early as possible. These three machines are the key components to ore doubling (finally!) and will be very helpful in the long run. Make sure to have the power to maintain these though, as they do use up a fair amount of power.

* You have access to Garden Cloches. Use Pumpjack for the water (again, finite), and make sure to have the power to maintain them. These are very useful farms which also take up a very minimal space.

* You can attach a capacitor directly to your kinetic generator, no connectors needed

* The portable generator is a cheap and easy way to produce power, once you've acquired gasoline

* Just make a boiler (not solar) and then only long enough to get two buckets of steam. That'll be enough to get to age 4, then you can use a heat exchanger (advanced generators) to get cheap steam. One bucket of lava makes at least 6x more steam than a bucket of diesel (and you can use the diesel for power or kerosene instead).

## Airship

* Even though the airship looks cool, it's not on the main questline and it’s very expensive to make. It requires you to upgrade the extended crafting table, and then make the airship using a lot of resources. Prioritize other progression before making it.

## Astral Sorcery

* Don't waste time on a Mineralis ritual yet, it’s been reported and the configs need to be altered so it doesn’t break pack progression, same goes with Aevitas perk. Mining with this method results in a break in progression, as it can provide ores from GalactiCraft planets / Asteroids, this nullifying most of intended GalactiCraft methods.

* The Armara perks make you extremely hard to kill, and several of the perks work on damage that doesn't seem to be affected by armor. For example, the Dread Plague from Abyssalcraft is reduced in damage significantly by the 'No armor is more armor’ perk, making the Dreadlands much easier than otherwise. Armara also almost reduces fall damage to 0, allowing you to use the slimesling without the boots.

* Blood Magic's Lapis Lazuli ritual (only needs an Imperfect Ritual Block) advances day to night, the setup below is a ghetto time machine if you want to advance nights for constellations

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_23.png)

* Get an aevitas astral sorcery cloak and you'll never have to worry about hunger again (or health for that matter because of saturation)

* The aevitas skill tree has a natural armor regen perk. Take it, get your strongest armor and put some middle gems from betweenlands on them for maximum power. Don't forget to put some on your weapon as well and take a amulet.

* A mineralis cloak allows for easier ore finding once you get silk touch as it highlights any ores you are holding.

* Liquid Hoppers and BC Tanks let you collect large amounts of Liquid Starlight quickly

* If you want to minimize your time hunting for rock crystal samples, rush Starlight Infusion - that lets you create Stardust out of crushed Nether Quartz

### Stellar Refraction Table Constellation Effects source

(Sourced from [Mischief of Mice's video here](https://www.youtube.com/watch?v=LOtA7MZC2-M&list=PLQzDSnrhrcyyZKmHp1zdj03jRbuZN7NOh&index=6))

<table>
  <tr>
    <td>Constellation</td>
    <td></td>
    <td>Potion</td>
    <td>Weapons</td>
    <td>Armor</td>
    <td>Tools</td>
    <td>Book</td>
  </tr>
  <tr>
    <td>Aevitus</td>
    <td></td>
    <td>Regeneration</td>
    <td>Mending</td>
    <td>Mending</td>
    <td>Mending</td>
    <td>Mending</td>
  </tr>
  <tr>
    <td>Discidia</td>
    <td></td>
    <td>Strength</td>
    <td>Sharpness
Power</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>Sharpness
Power</td>
  </tr>
  <tr>
    <td>Armara</td>
    <td></td>
    <td>Resistance</td>
    <td>Protection</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>Protection</td>
  </tr>
  <tr>
    <td>Vicio</td>
    <td></td>
    <td>Speed</td>
    <td>N/A</td>
    <td>Feather Falling</td>
    <td>N/A</td>
    <td>Feather Falling</td>
  </tr>
  <tr>
    <td>Evorcio</td>
    <td></td>
    <td>Haste
Attack Speed</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>Efficiency</td>
    <td>Efficiency</td>
  </tr>
  <tr>
    <td>Mineralis</td>
    <td></td>
    <td>Haste
Attack Speed</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>Fortune</td>
    <td>Fortune</td>
  </tr>
  <tr>
    <td>Fornax</td>
    <td></td>
    <td>Fire Resist</td>
    <td>Fire Aspect
Flame</td>
    <td>N/A</td>
    <td>Scorching Heat</td>
    <td>Fire Aspect
Flame
Scorching Heat</td>
  </tr>
  <tr>
    <td>Octans</td>
    <td></td>
    <td>Water Breathing</td>
    <td>N/A</td>
    <td>Respiration</td>
    <td>N/A</td>
    <td>Respiration</td>
  </tr>
  <tr>
    <td>Lucerna</td>
    <td></td>
    <td>Night Vision</td>
    <td>N/A</td>
    <td>Night Vision</td>
    <td>N/A</td>
    <td>Night Vision</td>
  </tr>
  <tr>
    <td>Bootes</td>
    <td></td>
    <td>Saturation</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>Silk Touch</td>
    <td>Silk Touch</td>
  </tr>
  <tr>
    <td>Pelotrio</td>
    <td></td>
    <td>Regeneration
Absorbtion</td>
    <td>Mending</td>
    <td>Mending</td>
    <td>Mending</td>
    <td>Mending</td>
  </tr>
  <tr>
    <td>Horologium</td>
    <td></td>
    <td>Speed
Haste
Atk Spd</td>
    <td>Looting</td>
    <td>N/A</td>
    <td>Fortune</td>
    <td>Fortune
Looting</td>
  </tr>
</table>


# Age 4

**Ores:** Assorted Quartz (affected by Fortune)

**Tools:**

**Key Items: **

## Uncategorized Tips

* IF's Rancher gets around BWA’s Fleece and harvests wool from sheep directly, this can also occasionally be a source of powdered dye production from further processing the coloring byproducts from crushing wool

* IF's Water Condenstrator produces about 100mb/t of water per water source block adjacent to it

* Spawner Agitators get around the despawning spawners limit

* A fairly cheap way to get fast transportation from your base to the end is to make a Astral Sorcery Dimensional Gateway. The Dimensional Gateway needs sky above it to operate, so place it above the stronghold (or make a skylight down to the End portal). You can also make the gateway directly in the End.

* After going to the End, you can use the Ender Utilities' portal (portal frame blocks + 1 or more portal control panels with 1-8 linking crystals in each panel) to easily set up cost-free teleportation to wherever you want (cross-dimensional), as long as you’ve linked the location to a linking crystal. You can pair this with an Ender Porter with it’s own linking crystal to go back to your base from anywhere (Advanced Ender Porter needed for the teleport back to be cross-dimensional). The Porter needs an ender capacitor, but the portal multiblock does not.

* The only pre-cobalt pickaxe head able to mine cobalt is obsidian and Abyssalcraft metals (abbysalnite, refined coralium, dreadium). Abyssalnite is found in Darklands biomes below Y = 32. It's VERY rare. Refined coralium is made by smelting down Liquified Coralium, found at Y = 22 and below in the Abyssal Wasteland dimension (not too hard to find, definately easier then abyssalnite). Note that the Abyssal Wastelands have a bunch of shrine looking things with ladders underneath them (you need to break a block to open the passage) with chests very often containing abyssalnite and other goodies. Dreadium ingots can be acquired in the Dreadlands most easily by using the Transmutator on certain mob drops from that dimension. Just don’t use a tool made from Dreadium as a weapon, as explained above.
 

# Age 5 

**Tools: **

**Key Items: **See individual Galacticraft section

Stage 5 really opens to be a kitchen sink pack with a lot of default recipes and minimal tweaks in configs. The only real big recipe changes are the creative items.

## Power

* RFTools Powercells transport power interdimensionally

## Ore Processing

* Mekanism Metallurgic infusers have a 1:5 tin to copper ratio for making bronze

## Storage

* Quantum Storage Disks (from Quantum Storage compat with Refined Storage) store 2.14B items of any types and are very cheap, it trivializes most other storage options in the pack

## Space

Note that galaticC

### Moon

* Can trade for the Tier 2 Rocket schematics with villagers if you don't feel dungeon crawling for one

* GalactiCraft ores are not staged, and therefore fake players can quarry them

    * For quarrying, the two best options are RFtools Builders with a storage filter module (for blacklisting) or a Mekanism Digital Miner

    * Note that the ingots are not the same as the ones you've created up till now, so you may find crafting recipes don’t work with them.

* Use Meteoric Iron sparingly until you get to the Asteroid belt as it's generation requires waiting in either the moon or mars

* Dungeon generation is different than before, dungeons do not share the same coordinates going from one planet to another

### Mars

* Has a higher meteor rate than the Moon

### Mercury

* One of the few GalactiCraft planets where you actually need the pressure suit as Armara + natural food regen cannot out heal the damage from this planet's environment

### Jupiter

* The dungeon is a little bit harder to find due to the fog, lightning storm, and monotone color palette of Jupiter, this was a screenshot of the dungeon entrance that I almost missed

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_24.png)

* Saturn

    * Saturn Slime Ore has incorrect localization, in-world WAILA will recognize it as Saturn Surface Rock, and needs to be silk touched to get the ore itself (easily found on the surface in large patches of Saturn Infected Rock

* Uranus, Neptune

    * Same as the others, quarry it, loot it's dungeon

# Creative tips

You can complete all the quests by using the following command (Note severe lag)

/advancement grant playerName everything

You can revert to the beginning with 

/gamestage clear PlayerName

You can complete individual quests with the following command followed by one of the below quests (prerequisite in parenthesis). Note this is a dump (minecraft/config/triumph/script/...) from 3.0.4 so may be outdated.

/advancement grant playerName only triumph:stageX/(some triumph from below)

<table>
  <tr>
    <td>stage0</td>
    <td>stage1</td>
    <td>stage2</td>
    <td>stage3</td>
    <td>stage4</td>
    <td>stage5</td>
  </tr>
  <tr>
    <td>kiln</td>
    <td>claybarrel</td>
    <td>stevescarts</td>
    <td>crudeoil</td>
    <td>silicon</td>
    <td>wirelesscharger</td>
  </tr>
  <tr>
    <td>saltflats</td>
    <td>tin</td>
    <td>market</td>
    <td>iehammer</td>
    <td>ardite</td>
    <td>creativemodifer</td>
  </tr>
  <tr>
    <td>horsechopper</td>
    <td>woodbasin</td>
    <td>depth</td>
    <td>drawercontroller</td>
    <td>rsgrid</td>
    <td>creativeenergycube</td>
  </tr>
  <tr>
    <td>tipi</td>
    <td>gearbox</td>
    <td>smeltertank</td>
    <td>blazerod</td>
    <td>cobalt</td>
    <td>emerald</td>
  </tr>
  <tr>
    <td>grill</td>
    <td>prospector</td>
    <td>lapis</td>
    <td>projector</td>
    <td>launchpad</td>
    <td>diamond</td>
  </tr>
  <tr>
    <td>workblade</td>
    <td>parchment</td>
    <td>gold</td>
    <td>rails</td>
    <td>blockheads1</td>
    <td>inferiumessence</td>
  </tr>
  <tr>
    <td>flintknapp</td>
    <td>cart</td>
    <td>stopwatch</td>
    <td>steel</td>
    <td>amadrontablet</td>
    <td>prospectorstage5</td>
  </tr>
  <tr>
    <td>chestupgrade</td>
    <td>stepup</td>
    <td>resonatingwand</td>
    <td>oreprospector</td>
    <td>manyullyn</td>
    <td>diamondjetpack</td>
  </tr>
  <tr>
    <td>fish</td>
    <td>bloodaltar</td>
    <td>mapping</td>
    <td>circuitboard</td>
    <td>solidendereye</td>
    <td>t2rocket</td>
  </tr>
  <tr>
    <td>melterbase</td>
    <td>parrot</td>
    <td>paper</td>
    <td>bauxite</td>
    <td>printedcircuitboard</td>
    <td>charger3</td>
  </tr>
  <tr>
    <td>atlas</td>
    <td>beneath</td>
    <td>piston</td>
    <td>liquidplastic</td>
    <td>endercrafter</td>
    <td>osmium</td>
  </tr>
  <tr>
    <td>farmland</td>
    <td>astable</td>
    <td>wool</td>
    <td>vacuumtube</td>
    <td>certusquartz</td>
    <td>spacesuit4</td>
  </tr>
  <tr>
    <td>woodhopper2</td>
    <td>dung</td>
    <td>starpowder</td>
    <td>standardhull</td>
    <td>moon</td>
    <td>neptune</td>
  </tr>
  <tr>
    <td>lead</td>
    <td>chest</td>
    <td>skywave</td>
    <td>netherbrick</td>
    <td>enderalloy3</td>
    <td>ultimateingot</td>
  </tr>
  <tr>
    <td>charcoal</td>
    <td>alloykiln</td>
    <td>extendedcraftingbasic</td>
    <td>creosote</td>
    <td>pressurechamberwall</td>
    <td>creativefluidtank</td>
  </tr>
  <tr>
    <td>wheel</td>
    <td>crafting</td>
    <td>betweenlands</td>
    <td>filteredhopper</td>
    <td>inscriber</td>
    <td>electrumjetpack</td>
  </tr>
  <tr>
    <td>flamehopper</td>
    <td>hoe</td>
    <td>bucket</td>
    <td>platinum</td>
    <td>extendedcraftingelite</td>
    <td>scanner</td>
  </tr>
  <tr>
    <td>workstump</td>
    <td>axle</td>
    <td>enderman</td>
    <td>iebook</td>
    <td>spacesuit</td>
    <td>cheese</td>
  </tr>
  <tr>
    <td>abyssalgem</td>
    <td>huntingdim</td>
    <td>twilight</td>
    <td>conveyorbelt</td>
    <td>machinecasing</td>
    <td>prosperityshard</td>
  </tr>
  <tr>
    <td>weaponize</td>
    <td>furnace</td>
    <td>tcontable2</td>
    <td>woodhull</td>
    <td>compressor</td>
    <td>desh</td>
  </tr>
  <tr>
    <td>upgrade</td>
    <td>turntable</td>
    <td>weedwoodsticks</td>
    <td>galgadorian</td>
    <td>laserassembly</td>
    <td>mars</td>
  </tr>
  <tr>
    <td>fiber</td>
    <td>coal</td>
    <td>weedwoodsword</td>
    <td>redstone</td>
    <td>plasticmixer</td>
    <td>creativecompressor</td>
  </tr>
  <tr>
    <td>woodenbarrel</td>
    <td>bucket</td>
    <td>rockcrystal</td>
    <td>naphtha</td>
    <td>ae2panel</td>
    <td>skystone</td>
  </tr>
  <tr>
    <td>totemic</td>
    <td>blackquartz</td>
    <td>compass</td>
    <td>workbench</td>
    <td>compressediron</td>
    <td>emeraldjetpack</td>
  </tr>
  <tr>
    <td>horsepower</td>
    <td>tchannel</td>
    <td>drawertable</td>
    <td>amethyst</td>
    <td>t1rocket</td>
    <td>creativejetpack</td>
  </tr>
  <tr>
    <td>lowgradecharcoal</td>
    <td>statue</td>
    <td>biomealyzer</td>
    <td>oreexcavation</td>
    <td>prospector4</td>
    <td>ultimatecraftingtable</td>
  </tr>
  <tr>
    <td>handgrind</td>
    <td>pedestal</td>
    <td>wateringcan</td>
    <td>steam</td>
    <td>fuelloader</td>
    <td>marsrover</td>
  </tr>
  <tr>
    <td>collectplank</td>
    <td>plumbline</td>
    <td>dowsingrod</td>
    <td>bellows</td>
    <td>enderalloy1</td>
    <td>saturn</td>
  </tr>
  <tr>
    <td>tomahawk</td>
    <td>stoneanvil</td>
    <td>iron</td>
    <td>propene</td>
    <td>blockheads3</td>
    <td></td>
  </tr>
  <tr>
    <td>melter</td>
    <td>aqueduct</td>
    <td>conpaper</td>
    <td>sampledrill</td>
    <td>enderalloy2</td>
    <td></td>
  </tr>
  <tr>
    <td>abyssalbiome</td>
    <td>necro</td>
    <td>lightwell</td>
    <td>windmill</td>
    <td>blockheads2</td>
    <td></td>
  </tr>
  <tr>
    <td>mill</td>
    <td>leafbed</td>
    <td>glass</td>
    <td>modularmachinery</td>
    <td>theend</td>
    <td></td>
  </tr>
  <tr>
    <td>buffalo</td>
    <td>extension</td>
    <td>tcontable1</td>
    <td>hibachi</td>
    <td>nasaworkbench</td>
    <td></td>
  </tr>
  <tr>
    <td>firsttool</td>
    <td>aquamarine</td>
    <td>controller</td>
    <td>silverlead</td>
    <td>presses</td>
    <td></td>
  </tr>
  <tr>
    <td>saddle</td>
    <td>journal</td>
    <td>tcontable3</td>
    <td>distillation2</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>firepit</td>
    <td>bronze</td>
    <td>astable2</td>
    <td>extendedcrafting1</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>spear</td>
    <td>waterwheel</td>
    <td>weird</td>
    <td>netherexbiome</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>firstbreak</td>
    <td>copper</td>
    <td></td>
    <td>viescraft</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>baykok</td>
    <td></td>
    <td></td>
    <td>waterwheel</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>firstchest</td>
    <td></td>
    <td></td>
    <td>stevescartsassembler</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>mesh</td>
    <td></td>
    <td></td>
    <td>potash</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>fluidbladder</td>
    <td></td>
    <td></td>
    <td>plastic</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>mat</td>
    <td></td>
    <td></td>
    <td>bonehoe</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>leather</td>
    <td></td>
    <td></td>
    <td>compactmachines</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>woodhopper1</td>
    <td></td>
    <td></td>
    <td>netherwart</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>fire</td>
    <td></td>
    <td></td>
    <td>nether</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>gear</td>
    <td></td>
    <td></td>
    <td>buildcraft</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>stonetools</td>
    <td></td>
    <td></td>
    <td>nickel</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>soundmuffler</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>


