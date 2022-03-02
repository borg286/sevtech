**SevTech Tips and Tricks**

Sevtech is currently 3.2.3 : [Get it here !](https://www.curseforge.com/minecraft/modpacks/sevtech-ages/files/3569915)

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_0.png)

Here is the web view [https://borg286.github.io/sevtech/](https://borg286.github.io/sevtech/) 

Please use this if you don't intend to propose tips.

Feel free to add comments, and propose changes [here](https://docs.google.com/document/d/1CSVTuVD59676TQkjwyPqY8zjTPCpKONYXtxenJ-qub8/edit#).

### Version History

1. Diff between March 1 2022 and October 31 2019: Added new seed and cleared the defunct ones and updated link to 3.2.3

2. Diff between [October 31 and October 7](https://drive.google.com/open?id=1YArnaRjxNOVYz-yO4Gmmv6_HtFlYlIqG)

3. Diff between [August 8 and October 7](https://drive.google.com/open?id=1vHraaoosT4qYSL5fPMntIgqf94a89YIJ)

4. Diff between [July 17 and August 8](https://drive.google.com/open?id=1iUIK6yUnpyqcd9cGvM_ZW00OHIgbBZoA)

5. Diff between [June 25 and July 17](https://drive.google.com/open?id=1WudKOZ9BO6hl960VTAg3v11yVvKeC15O)

6. Diff between [June 14 and June 25](https://drive.google.com/open?id=1X7BmdhedgI2tPnKT8XdV4W7ixEHz7SEC)

7. Diff between [June 10 and June 14](https://drive.google.com/open?id=15xDmxcEqxKuvyDR0GRiyzHIRCUTDb4fN)

8. Diff between [June 6 and June 10](https://drive.google.com/open?id=1Xw0065eIW0yck-Wbetml00HROXfRxvII)

9. Diff between [May 18 and June 6](https://drive.google.com/open?id=1j2IXmzuFCeosuq07z-pMCv4WxBzikRT4)

10. Diff between [May 12 and May 18](https://drive.google.com/open?id=1QyL_zWwchtsIxUAdLIy4wPisX5TplQJa)

11. Diff between 3.0.6 and [May 12 2018](https://drive.google.com/open?id=1KQ2RqrPF2Kuze9beV3ZEdSWoC4y9Su4-)

### Performance tips:

* The modpack creator intended only needing 4 GB of ram allocated, but YMMV.

* Custom java arguments for garbage collection: -XX:+UseG1GC -Dsun.rmi.dgc.server.gcInterval=2147483646 -XX:+UnlockExperimentalVMOptions -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -XX:MaxGCPauseMillis=51 -XX:G1HeapRegionSize=32M

* Disabling certain mods can improve performance:

    * Better foliage - This mod makes leaves and grass appear more complex.

    * Fancy block particles - Replaces breaking blocks into a 3D variant.

    * Smooth font - Replaces the standard font.

* Install optifine (max D3) to finetune the graphical experience you want to have: [https://optifine.net/downloads](https://optifine.net/downloads)

    * Some people report invisible blocks when using optifine, in **config/thebetweenlands/config.cfg** change **B:fullbright_blocks=true** to **false**.

* Twilight Forest tweaks (config/twilightforest.cfg) :

    * Set **B:leavesFullCube=true** to **false** to decrease FPS stuttering.

* Do not put PrimalCore logs in a Cyclic block placer. This will cause a 'ticking tile entity' crash and potentially corrupt your save.

* Same goes for "Ore Dict Filter"+Hemp Seeds in BloodMagic Router -> ticking tile entity error

### Seeds

-1717583552609621523 (3.2.3) Spawn on large open field. 4 Shoggoth lairs nearby, Bone Structure, Rock Crystals and lava a hop away. Village over the river. All needed metals nearby. Darklands X=-1500,Z=-750 (1 nights journey by raft) with darkland cobblestone village. 35k buckets of Oil in chunks N,E, & W of squat tree nearest Sakura trees.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_1.png)

-7757505388919135334  (3.2.3) Spawn in Village, next to flat plains, Large bone structure and Shoggoth lair within 200 blocks of spawn. Rock Crystals just outside of town. Lava. 

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_2.jpg)

4685753669571566503 (3.2.3) Spawn near Village and Hut each with Cartographer, large lava pit, large bone structure and nearby river for gravel and sand. 2x Shaggoth lair in river to the south. Super dense starlight at top of tall spike mountain just behind village, perfect for Astral Sorcery. Mulberry tree at base of same spike mountain. Lots of Iron veins on outskirts of village. Menril trees to the north (good for Menril berries). Rock crystal is found by going to the Lake Town directly south of the above village, walk the south pier to the end, then head directly east. 2x Rock Crystal Samples are in the shallow water (You’ll need to direct a floating crystal at an Iron Ore block to make more starlight dust). Careful not to fall into a lava lake directly under you. The Rock crystals are in a vein safely under that lava lake.

# Age 0

## Uncategorized Tips

* You can access the main quest guide by pressing L. Purple quests lead you to the end of the age (If there is no color, this is talking about the ones with  2 round sides. The stars are the final quest in the age).

* If a rock on the ground doesn't break in one click or **sounds like ****dirt/grass** when hitting it, LEAVE IT THERE- it's an ore sample in disguise.

* Carry-On is in the pack, it can pick up most passive mobs (no villagers, buffaloes, horses, or larger mobs). Note your reach is less than right clicking. You can also pick up most chests, and other tile entities like this as well.

* **Lighting fire on cobblestone** for your first kiln to cook your charcoal will last a bit longer than on dirt/grass. 

* Quark's inventory drop-off button allows you to bypass the Stage’s restriction by letting you put unfamiliar items into nearby chests/hoppers

* You can keep items from being [dropped off](https://quark.vazkii.us/#module-management) by favoriting them. Alt+right clicking an item will make it a "Favorite Item". Go to Inventory tweaks settings (3 dots at top right) and turn off shortcuts.

* The world generates in a **logical heat map**.[ (Breakdown of the heatmap and where to find biomes.)](https://www.reddit.com/r/feedthebeast/comments/8crpq4/sevtech_heatmap_breakdown/) Need snow or a desert? Travel North or South until you find it! See the Heatmap section below

* The carrot in your inventory is where you can view your **nutrition levels**. If you raise the nutrition levels high enough you will get **buffs**. Let them drop too low and you'll have debuffs. See nutrition below for healthy meals below

* You can move **faster** on certain blocks like Grass Paths made by right clicking with a shovel or trowel

* Use F7 to see the **light levels** on the ground and F9 to see the **chunk borders**.

* Some blocks are **disguised** as other blocks. They are revealed in the correct stage. Always go back and check out areas you've already explored to see what's new. 

* **Rafts** are an earlier form of water transportation. They are just a bit weaker and slower.

    * Sometimes they sink. Use 'Carry on' (shift+right click) to fetch them.

* Once you've picked a spot for your base, reset your spawn point and have some food(for regaining your nutrition), pillar up and die to get a **skull compass leading you back to your base**, I mean death point.

* Shift/Sneak on your grave to retrieve your items.

* Once you get a saddle, go tame a horse (repeatedly trying to ride it) to speed up traversing the overworld. He can jump stone fence, but only with you riding. Be sure to bring a fence and lead with you for when you want to get off your high horse. Alternatively live near an ocean and use a raft to visit new places, taking care with the sharks and piranhas that attack when you get to shore. Piranhas jump out at you.

* Hunting sharks is easy; if you have a one block deep strip of water to stand in, you can just spear them to death without them being able to reach you.

* Be on the lookout for Sakura, Eucalyptus or Dark Oak trees. You'll need the logs to upgrade your work stump into the mk2 version. It can hold full stacks of items for repeated crafting, and takes fewer whacks.

* You can use punji sticks (crafted from sugar cane) to damage mobs. Can place on hoppers for collection, and on walls to deter spiders. 

* Lit fibre torches(right click unlit one on fire) are not as good as vanilla torches. They only provide a light level of 10, meaning mobs can still spawn 3 blocks away. Craft them into totem torches using 2 sticks for much better lighting. Since the totem torch doesn't require charcoal/coal to make you can get and will need a large supply. Use a Flint Workblade to instantly get sticks from leaves and fibre from weeds. Bring 3 workblades with you if you want to stock up.

* The red cedar tree needed for the fire hopper requires a totemic ceremony to convert any sapling to red cedar sapling.

* If you can't find any sharks use a strainer together with a survivalist’s strainer to collect shark teeth (5% chance over 10 minutes is almost guaranteed).

* If your grave gets removed (eg by the Hydra), you can recover it by using the **/tmg_restore** command from Tomb Many Graves mod.

* Having trouble to orientate yourself? Use the Sun! The sun and moon rise in the east and set in the west. This makes a good early compass to find yourself which way you are traveling.

* The drop off button merges stuff in your inventory into nearby chests. Ie. if you have a nearby chest with cobble this dropoff button will push any cobble you have into that chest. If you're not already storing it then it should remain in your inventory.

* FindMe lets you hover your mouse over an item in JEI, press 'Y' and any nearby chest with that item will smoke.

* The Atlas (map) is now craftable for cases when you can't find a librarian, completing the quest at the same time.

* You can place Wood/Planks in your off-hand slot and right click a chopping block to place it, making chopping much faster. This works for the stone anvil later.

* Cactus can grow adjacent to sugarcane, making your farm more compact.

## Step assist vs. auto-jump

Auto-jump is horrible, we all know. That is not what is on by default in SevTech. Instead we have Cyclic's step assist feature on from the get go. In age 1 after you make the Blood Altar you can craft a special apple (Apple of Lofty Stature) to toggle it. See below for a faster way to disable it.

Here are are a few things that step assist fixes over auto-jump: 

* You don't jump a full 1.25 blocks, but instead are instantly moved the 1 vertical block needed

* You don't jump and you don’t land, thus eliminating in-flight time

* Mobs still need to jump, making mountain climbing a realistic escape strategy

* You don't ruin farmland climbing out of water sources

* You can run up mountains covering just as much horizontal distance as if you were running.

* It doesn't use more hunger than walking

* When digging diagonally down you don't have to make the pathway 3 tall. A 2 tall stairway allows for fast travel up. Still the same jerkiness going down. But now you don’t have to jump going up.

If this feature is game-breaking and you have control over the configs, go to cyclic's configs and disable stepheightdefault and create a new character. If you’re already established see if the admin can cheat the apple to you.

## When and where to select a first base

### What to look for

* Gravel, sticks, and fibre to bootstrap your first tools. Crafting stump then Flint pickaxe, workblade, shears, upgrading to stone pickaxe and axe  then set out for gathering.

* Fleece: The workblade turns this into string, so you don't have to find cotton plants. Instead of killing sheep for Fleece, use flint shears so the herd doesn’t run away. Make a sleeping mat ASAP.

* Sugarcane: You'll want at least 6 planted to have enough for the totemic tools

* Ink sacks: The atlas, tradable from a white-coat villager, requires feathers and ink sacks

* Feathers: In addition to the atlas, you'll need 16 for the Wild Dog Boots. Use shears to get 4 feathers per chicken, which kills them in the process without them running away

* [Optional] Hemp:  use hemp to make 2 bundles of 8 feathers each. The hard part is finding fully grown hemp.

* [Optional]Dog Pelt Boots: Keep all wild dog pelts for Dog Pelt Boots (**run much faster**, jump much higher, good armor, no fall damage).

* Bone blocks: Bone fossils are easily found in plains. Pick up at least 10-30 blocks for quick farming and homesteading

* Black lotus, Dandelion and Rose: The fluid bladder needs these 3 powders

* Clay: You'll need around 30 to get you through Age 0

* 4-7 bone: totemic needs these. Note that animals and zombies sometimes drop bones.

* Try to keep to one type of animal for meat and pelts as your initial inventory is scarce when gathering all this stuff.

* Villages have stone slabs at the smithery. Find a leatherworker to trade pelts for leather strips, bypassing that tedious process. Trade in fleece for string while you're here.

### Where to set up base

* Waterfall will have fish generate in it, they will flop out the edge of the water and expire on the ground, easy access to protein.

* Water: River and ocean biomes have infinite water. Pulling water from lakes results in annoying but workable whirlpools. Placeable water is pushed out to age 2, so any farm will need to be placed around existing water, or aqueducts. You'll also want your sugarcane planted and nearby so it always grows. Plan your base accordingly

* Forest: You'll be using lots of wood for quite a while, so pick a place with quick access to trees.

* Find a village you can often trade hides for leather so you can skip the lengthy leather making process.

* You can also trade fleece for string with better results than transforming it with work blade.

* Cows: Turning Cows into buffallos is required for progression. You have 3 ways of getting them: Pulling a pied piper with wheat, micromanaging with a handful of leads, or using carry-on to slowly carry them back. Pick a base that isn't too far from a herd of cows.

* When you get into age 1 you can make storage crates which retain their inventory, making moving much easier. So you don't need to find the perfect place. Age 2 opens up the Tinker’s lumber axe, making a nearby forest less critical.

### Where not to set up base

* Areas with mud patches. Mud takes forever to mine even with the shovel. You often dig out animal pens.

* Plains: Early game makes heavy use of wood.

    * On the other hand, when breaking leaves manually, saplings are VERY easy to come by.  Allowing you to exponentially grow a tree farm.

## Tools

* Trowel: digs gravel super fast

* Flint Hatchet: strictly a gateway into a crafting stump. Upgrade to stone axe ASAP.

* Flint pickaxe: strictly a gateway into a cobble. Upgrade to stone pickaxe ASAP.

* Flint spear: 4 damage as melee and ranged, but throwing it risks breaking it.

* Whittling knife: only used to make totems. Scroll or right click in air to switch selected totem animals.

* Flint workblade:

    * Can be used to instantly cut shrubs and leaves for twine and sticks respectively. 

    * Shift-right click dirt/wood/stone to make a ladder. Great for animal pens.

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

* Stone club: It is  an average damage, very fast-hitting weapon, it can also mine cobblestone faster than a pickaxe, and also dig dirt and gravel faster than a shovel. You still need a pickaxe for special rocks like greenschist and limestone though.

## Totems

When you've decided on a base then make a whittling knife and make 6 high totems. They act like beacons within 13x13x13 (note: zone is a cube, not infinite column). You don't need the totem music for these to function. See rituals below for that. With whittling knife in hand either scroll or right click the air to cycle through the options. 

Start with the totem base on the bottom, and your choice for wood placed on top. All similar totems need to stack on top of each other, ie. 5 wolf totems 1 high only gives strength 1, whereas a 5 high wolf totem gives strength 3.

* Bat - no falling damage (1 second)

* Blaze - Fire Resist (3 second) and minor healing while burning

* Buffalo - Haste

* Cow - Slowness and Resistance II

* Enderman - Night Vision (14 seconds): Note the flashing is warning you that night vision is about to end.

* Horse - Speed

* Ocelot - Creepers don't explode

* Pig - Luck (Should affect endermen and mob drops now)

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

* Scout around for a giant bone skeleton (simply a bunch of bone blocks lying in a formation) and grind them up to get loads of bonemeal.

* Place a drum near your farm and do the **Zaphkiel Waltz** for crazy fast plant growth out to a **radius of 6**.

* Focus on wheat seeds and cotton, as growing your animals and string surplus is very important.

* You can throw cotton seed on the ground and it will grow a new cotton plant where the seed drop after a little time. It's a easy way to make big cotton farm without farmland.

## Homesteading

* With an empty hand, you can shift+right click animals to pick them up and carry them. (villagers, horses or adult buffalo cannot be picked up, shift-right click for ½ of a second)

* Place a raft on the ground and lure or place two animals near it and they'll mount the raft. This prevents them from moving around while allowing you to still breed them. (Warning: This may or may not cause some lag)

* Fencing animals in a pen

    * Wildberry bushes (Note: At times the animals can glitch past the bushes.)

    * 2 Dirt makes Dirt slabs. Dig 1 block down and surround pen with slabs

    * Stone walls

    * Leaf blocks

* You can get 100% hatching rate with the eggs you picked up by dropping them (not throwing them) and performing the Zaphkiel Waltz.

* The Rite of spring works on villagers, animals and plants up to 8 blocks out in all directions.

* Collecting chicken drops can be automated by putting a wooden hopper+chest under a chicken.

* Buffalo can be bred with wheat so you don't have to keep finding cows and doing the ritual

* After you've found a few cows and optionally pigs, explore for a Bone blocks in clusters to get loads of bonemeal to get a fast supply of wheat.

* Pelts are useful for glue in Age 1.

## Automation

* Place a wood hopper on the opposite side of your chopping block and throw items in to automatically place wood. This works for the stone anvil too.

* You can use Wooden Hoppers to load/unload drying racks for leather (later, also for paper etc..). You have to use MK2 hoppers if you're "chaining" or “piping” the outputs into a single chest, ie have a single chest for input.

* Instead of using hoppers to automate  drying racks you can increase throughput by parallelizing it at the cost of manually replacing hides. Just make a drying rack wall.

* Wood hoppers are available early on and you'll need about 10-20 of them for a full automated age 0 and 1 setup. Mark 2 hoppers don’t need a chest to pull from, as you can place up to 4 stacks in the top for queuing. Only mark 2 hoppers can be chained together to create a "pipe" of sorts.

* The grill can take up to 16 items for queuing. For automated extraction wait for Age 1 when you get a Dung Pipe to pull items out the side rather than a fire hopper needing to take the job of heating and pulling.

* Upgrade to the craft stump mk. 2, which takes fewer whacks, and can hold stacks in each slot for quick crafting. Prematurely empty it by breaking it or shift right clicking each item with an empty hand.

* When you want to get into beast of burden power be sure to have a 9x9 wall around the 7x7 area each horse/buffalo/llama needs. Use either stone fence, berry bushes or 2 block high wall. Otherwise after the beast is done working he wanders away and breaks the lead.

* Make sure the horse grindstone is on the TOP layer of the 7x7x2 area (put another block under it so it's at eye-level). It takes some fiddling but you can automate input and output of the chopper, grinder, and pressing blocks with mk2 hoppers and chests (both the ones you can see into, and normal minecraft chests). Just make sure it is not in the path of the horse as it goes around.

* Vanilla Wolves and Buffalo are about the best for running your machine, bested only by fast horses.

* To make beast's work faster place dirt path by right clicking with a shovel on either dirt or grass.

* The press and grindstone are needed much less often than a heavy supply of planks and sticks. Prioritize the chopper with hopper input and extraction. 

* Leather gets a bit faster with the  wooden basins(?) But is still manual. But you can do 6 basins in parallel while you wait for each to go through the stirring animation.

* For leather making in the basin, you only need 1 salt to 3 hide each time you make it. Same goes for when you tan it later; you only need one resin per 3 dried hide.

## Nutrition

The Nutrition mod encourages you to eat a balanced diet, giving you relevant buffs for eating food. See farming and homesteading for how to get a healthy supply of ingredients.

* To boost nutrition quickly, use the Hand Crank with a Millstone[BetterWithMods] to become hungry and chow down your surplus of food. You can use multiple cranks to speed this up.

* If you're unsure which foods you can eat to maximize your bars, you can filter food types by typing the category in JEI.  For instance, searching for fruit will give you all items you have access to that increases your fruit bar.

* Rice bread can be eaten even when full, making it very useful for keeping saturation up during a fight or boosting your grain nutrition. 

* In the same way making leather is easier with the basin, dough is 3 flour and 1 salt per batch.

* It's useful for when you want to make bigger meals with the cauldron to make lots and lots of bowls for the chicken stews, and other things that it can make. They don’t stack, so it should really only be eaten when you’re in your base, to save on inventory space.

### Good foods to make:

* Pork dinner: Cooked Pork+Baked Potato + raw Carrots gives **3% Vegetable, Protein**

    * Be careful to only put in the minimum carrots as the cauldron cooks any spare carrots. 

    * Some youtubers show that you need a blue flame to stoke the cauldron.  This in fact not needed for (most?/any? ( This is needed for the potash recipe - at least the one with logs-) ) recipes.

* Tasty Sandwich: Cooked Meat of any kind + Bread gives **3% Grain, Protein**

* Rice **(very spammable): 1% Grain**, negligible hunger, 0 saturation

* Cooked Shark Meat: although it fills only **Protein (3.5%)**, it has no saturation cap and can be eaten at any time, even if you food bar is full. Good if you need constant HP regen in battles.

## Combat

* If playing non-peaceful is too stressful for you, you can switch to peaceful for all but 1 part and still get into Age 4. You'll need the shadow gem from Abyssal monsters spawning in an Abyssal biome.

* If you use shears on a creeper, it stops them from exploding.

* Mobs grow in toughness and availability as you progress through the pack

* Attack with a lit torch to set enemies on fire

* The best weapon is a Bear Claw Paxel with 6 damage and 5 attack speed (higher is better).

* 2nd to the Paxel is a Stone Club at 3 damage and 5 attack speed (spammable). It is also faster at mining.

* Tying at 3rd place is a flint workblade which is as good as a sword

* Mud makes for decent early game ranged spammable weapon

* Making a stone-braced wooden shield will make handling darklands combat a lot easier.

* The Totemic whittling knife is available as soon as you open Age 0. Make yourself one, and put down a totem base and an ocelot totem. It has a 5 block in each direction creeper griefing protection. Creepers will not blow up within its range. 

* For on the run buffs focus on nutrition and farming. You can get Speed 3, Strength 1, and Resistance 1, and nourished for healing. Having all 4 nutrition bars up you can get 20 hearts.

* Defeating the Baykok boss from Totemic is highly recommended to do as soon as possible. His behaviour is mostly like that of a standard skeleton so he is easily cheesed by attacking his legs from a 1 block gap. Parrots are found in Jungle, Swamp and Savannah biomes. If you can't find parrots that you need to get the eagle-bone whistle, wait until Age 1 and summon a parrot using an abyssalcraft ritual.

* When questing for the shadow gem set up a full 6 tall (1 totem base + 5 totem) totem of pig (luck 3), another for horse(speed 3) and another for wolf (strength 3). Add in ocelot (creepers are harmless) and endermen (night vision) totem with only 1 needed of each.

* The sacrificial dagger together with a blood altar can be used to instantly kill most enemies.

## Inventory tips

* Make shelves instead of chests. They hold 16 items instead of 12, and are more friendly to an inventory wall. Note: They don't currently work with Quark’s Drop-off button (see below).

* Craft a backpack when you get access to leather to hold your items.

* After getting a backpack, tech straight to the Stone Backpack for 36 slots. Craft the leather backpack with a wood upgrade, then craft with stone upgrade

* The Cart functions as a double chest when you sneak-right click on it, making by far it the best Age 0 storage option (if bulky).

    * Attach to a horse with astikoor hotkey, R by default.

    * Note:Open its inventory to use Drop off after expedition.

    * Note that Carts are **not protected** by claim protection in multiplayer.

* You can deposit items in your inventory that are already in chests nearby by holding shift and clicking the drop-off button in your inventory. See Dropoff Button here: https://quark.vazkii.us/ This is great after an expedition to clear out things in your inventory you've already found a place for in your chests.

    * You can also store restricted items. Just don't try to select them in your hot bar or inventory.

* The strainer box acts as a normal chest with hopper attached, so you can literally throw whatever into it.

## Totem Rituals

Totem rituals allow you to make instruments, play a tune before the timer runs out to get various effects. 

Tutorial video: [https://www.youtube.com/watch?v=NXXumiUuZlw](https://www.youtube.com/watch?v=NXXumiUuZlw) 

You need a **totem near your instrument setup**, otherwise rituals never start.

Start a ritual by shift clicking the instruments in certain orders. After the ritual is started just hit the instruments in the right order.

* Each instrument when activating a ritual has a set amount of music it can produce, you need multiple instruments (ie. make 6+ drums and 2+ chimes) on hand to complete most rituals. Eagle Bone > Jingle Dress = Drum > Rattle = Wind Chime > Flute

* After being played for a few times that instrument becomes 'boring' but still contributes ¾ of its peak ‘music’ thereafter.

* The first ritual you should do is the Infused Flute ritual, giving you an infused flute, which makes it randomly perform as well as a drum or rattle each time you play.

* Each instrument has a cooldown before it can be played again. While juggling 3+ flute/rattles isn't feasible, you can have multiple drums around while you wait for the others to cool down. 

* You can play the drum with the rattle to activate both instruments at once. In same time you can use flute in offhand.

* **Place the instrument set near your farm and do the Zaphkiel Waltz ceremony for crazy fast plant growth.**

* Get the Jingle Skirt for a significant boost. (costs 3 bones, 3 sugar cane per jingle item!) It activates with movement, so placing your drums in a row and strafing is optimal. You also feel really tribal running around.

* Once you get enough bone and sugarcane, make wind chimes and place under leaves (flint/bone shears cuts leaves) to improve their performance.

* Hate the rain? Instead of waiting for the Draconic Evolution block or cheating with admin commands, just do the dry ritual. Wonderfully low tech way to shut up that gloomy and loud rain.

* Most animals can be bred using the **Rite of Spring ceremony,** including** horses.** You cannot use golden carrots or apples to breed animals.

* Newly created buffalo's are not full-grown so you can’t breed them straight away

## Abyssalcraft

* Darkland oaks are found in 4 darkland biomes, each of which are found beyond 5000 blocks south of spawn.

* Go during the day and set up endermen totems, full wolf totems, and preferably a full pig totem to increase drop rates.

* The Shadow monster's darkness ability is very blinding. Best to lure him to your bunker and hack at his knees.

# Age 1

This age is focused on Prospecting for Bronze(tin and copper), 2 magic mods: Blood magic and AbyssalCraft, and having a minimal Better With Mods setup.  If you want ideas on planning a good base with room to put your stuff check out this [server tour from To Asgard](https://www.youtube.com/watch?v=Lowt8ttvr8Q).

## What you can do now

* In addition to a crafting table.

* Vanilla chests are open so it is time to reorganize your stuff. Recall the drop-off button above can help keep things organized and your personal inventory clean. Crates and storage drawers do not support the drop-off function.

* You've unlocked the Hunting Dimension. Use sneak to enter the Hunting Dimension. Creeping moss changes what mobs spawn. Use the above soundproofing block to stop getting scared from the background noise it makes, or build it a ways away from your base.

* Craft a Chilel and Bits chisel with a tin ingot

* You can place water with chisels and bits by finding ice and taking/replacing a bit. 

* Aqueducts tutorial: [https://www.youtube.com/watch?v=S7lRbhtiluw](https://www.youtube.com/watch?v=S7lRbhtiluw) 

* You can make an infinite water source with 3 aqueduct blocks in a line and placing water sources on the 2 ends. The middle will become a water source.

* Several items like Gears have easier to craft recipes now, be sure to double-check recipes for items from previous ages that were difficult to craft.

* Stone wand lets you build out platforms quickly.

* For quickly getting around you can replace your horse with Wild Dog Pelt Boots (Speed boost, added jump height, no fall damage, 2 3 armor)

* A crucible can turn zombie flesh and hide into glue. Useful for making torches throwable, crafting Better with Mods Wooden gears and Slime boots. Keep 16 flesh around for Blood Magic though, as it can be used to create a blood block in a casting basin, which you will need for blood orbs.

* Use storage crates (not to be confused with wooden crate). It's also silent and it can be gathered with all the items using shift right click. Can be used as a limited version of backpack. Ideal for resource processing or builds. Note that the drop-off button doesn't work with them, so shouldn't be used for primary storage.

    * Another problem: Difficult to place a sign onto them, as shift+right click picks them up instead. You need to place a sign elsewhere, then move it onto the crate using Carry On.

* When you remove a single bit (chisel & bits) out of a plank, it will not catch fire. Useful to prevent your base from burning to the ground by your fireplace.

## Automation

* A dung pipe can pull out items from the side and drops them as items. Use this on a grill instead of a Flame hopper. Just have the dung pipe drop items into a wooden hopper.

    * Dung pipes work on both parts of a double chest

* Use a snowman and a melter to automate filling many basins quickly [https://m.imgur.com/a/A21bgOM](https://m.imgur.com/a/A21bgOM)

* Make a hoe, plant a garden. Remember the worms you find from hoeing grass will die after some time, so the hydration they provide is temporary.

    * Prioritize Cotton (string) and hemp (Hemp Fiber) and** carrots/wheat(your favorite protein)**

## Hunting Dimension

Craft 8 wood with a stone sword to get the portal frame blocks. Make a portal and activate with your sword. This world only spawns selected types of mobs. Entering the portal then **sneak to enter** the Hunting dimension.

Note: Mobs have more health here.

### Creeping Moss

Creeping moss is a craftable item that allows the player to change the type biome of a chunk in the hunting dimension. Creeping moss can be crafted by surrounding a block of mossy cobblestone (just cobble crafted with vine) with 8 vines, leaves(use flint shears) or saplings. Once you have crafted the creeping moss, you can sneak and right click to set the moss to the biome you are currently standing in. Once the desired biome has been set, you can go into the hunting dimension and right click with moss (without sneaking) to apply the biome changes. Keep in mind that creeping moss can only change the biome of a chunk in the hunting dimension. Also some of the biomes that are harder to find, like ice plains, can be obtained using some special crafting recipes.

Additionally, you can use the moss to **find out what biome you are currently in**, as it spits out the selected biome into chat. This can be helpful because the F3 screen does not show biome in age 1.

* Make a mob grinder by placing a spider + ocelot totem, 1 layer for you to walk, then a wall of fence, with punji sticks the next layer out. The spider totem lets you climb up the walls of your tower![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_3.jpg)

* Punji sticks (sugar cane) make effective mob killer. They can be placed on the sides of blocks to prevent spiders from climbing over, as [well as hoppers](https://i.imgur.com/VP5pTO9.png) to automate collection

* **Surround this base with 1 layer of Mk2 hoppers, then a layer of wooden hoppers to collect the drops**

* If breeding a bunch of animals for pelts isn't your thing you can AFK and Farm for quite a bit of zombie flesh, melt it down to blood (16 flesh per block) and get some slime boots.

## Prospecting

* Having trouble finding ore? If you have a desert nearby, every stone you find on surface is a ore cluster. Mine it with a pickaxe to get the underlying cluster. Find the center of the chunk and dig down.

* Every ground stone in a desert or under water is an ore sample. Remember that deserts are north/south.

* The Ore is setup in large veins, think 16x16ish. Locate the chunk a vein is in by finding a Sample on the surface. F9 to see the chunk borders. Use the prospectors ore and right click on a block. If an interesting ore is within 48 blocks straight down, then the prospector's tool tells you how many it encountered along that path. Mine in that direction and prospect around to hone in on where the ore is.  As of 3.0.4 ores are positioned in any of the four corners of the chunk.  To find the ore more easily, look up the max Y position it can spawn at, and mine out the chunk at that level. (Use the depth meter.)  Then point the dowsing rod straight down in the four corners until you get  hit on the ore.

* Make a 6 high **buffalo totem** when you find a vein to get **haste 3.**

* To make Tin, Copper, and Bronze you can either make a porcelain melter or a seared melter, the former is easier. You need to pour them into either type of casting basin, then use the stone anvil to get ingots. These melters don't make alloys and can be automated with hoppers, to the point of only manual activation of the faucet.

* Place a hopper above the stone anvil to automate placing ingots.

* Bronze leggings give armor 5 over leather's 2. But bronze chestplate has diminishing returns, only improving leather’s 3 to a mere 4.

    * You do not need to go ahead and mine every ore sample you find. If your inventory is full, or you have another plan in your head, then mark the sample using your Atlas for future collection.

## Blood magic

Blood magic mod is based on Life Points earned through sacrifice by blood. Initially you'll use your own HP to power it, and if you continue further into Blood Magic you can set up animal grinders.

* After crafting the Blood Altar, make a sacrifice dagger and stab yourself to fill altar with blood.

* You can put rotten flesh in the Melter to get liquid blood, 16 rotten flesh gives you a block which crafts into 4 blood balls. This is helpful bootstrapping in to Blood Magic as you don't need to create a full smeltery to stand in.

* If you want to store Life Essence in buckets later on, you are able to transfer, store & pour blood out of wooden barrels with faucets.

* When crafting the blank runes to upgrade the blood altar, the weak blood orbs don't get consumed when crafting. So you only need one block of congealed blood.

* Place the 8 blank runes 1 block lower than the altar and around it. This makes a tier 2 alter.

* If you want to continue further in Blood Magic follow the steps in this [lets player's video](https://youtu.be/Q0GNRxIy-1Y?t=27m57s)

* To automate crafting blank slates place a wooden hopper under the altar feeding into a primal chest where all slots are filled with other things (cobble for example) other than 1 slot which has a blank slate. Thus when you place stone in the altar the hopper fails to pull the smooth stone out, and instead only pulls blank slates. You can now feed the altar with a chest+hopper that inserts smooth stone. Know that the altar has a cap on blood but it is automation nonetheless.

* Advancing into Blood magic requires having tartaric gems with lots of will. You'll want to make a sentient sword which acts like a snare to capture will. This sword does more damage when you have captured more will, so expect a bit of investment at first. 

* When you upgrade to higher tier tartaric gems you can pour the old will into the bigger gem by holding and right clicking the smaller gem. This sucks out the will and places it into any available tartaric gem you have in your inventory.

* Know that the sentient bow can do great damage, but uses normal arrows. Follow this path if you feel comfortable with your supply of feathers and inventory space.

* The Beneath is a great place to farm mobs. Use totems to offset their doubled health.

## AbyssalCraft

AbyssalCraft is a large mod opening 4 dimensions, growing knowledge about the great old gods. As you progress through the mod item's names will unlock. Its power source is received from statues that direct power into firstly your necronomicon, then later you can store it into containers.

* First and easiest is finding an abyssal biome (head north) and killing shadow monsters for the gem shards.

    * To make farming these gem shards easier bring wood for 3-4 totems, each 6 tall.

    * You can also use your hunting dimension with some creeping moss to quickly access an Abyssal biome.

* Next is finding and farming a Shoggoth lair. They seem more likely around river and swamps

* Alternatively there is a villager trade to get you shoggoth flesh

.![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_4.png)

* Shoggoths break blocks of less than 4 hardness. Make some sturdy stone to block the in 4 cobble + 4 stone = 4 sturdy stone.

* They seem to climb similar to spiders. They don't deposit their sludge on bottom half slabs or string. They require a 3x3 hallways to move. However a bunch of them can shove one into a 2x3 hallway. If you are quick you can build a wall right at the bottom of the stairs leading into their lair before they manage to escape. You will get hit at least once since they can hit through a 1 block thick wall but focus on establishing a wall first and pretty it up later. You can build a 3x3 killing chamber at the top of your wall. Use bottom half slabs for the floor and don't bust the wall leading to the lair until your ready for them to come through. Opposite of the wall you can build a 2 block thick wall with a 1 block high slit to slash at them through it. To collect the drop swing underneath and bust out one slab, replace it and repeat until you have all the drops. Mk2 hoppers can suck the items through the slabs for a much safer alternative.

* As long as you don't go in far enough to attract the attention of the Shoggoth in the back, you should have a endless supply of them. My first attempt I went for a killing hole in the floor and it didn't work out very well since that angered all of them which meant no new Shoggoth could spawn after they were all dealt with.

* Punji sticks don't work on them since they climb walls. Lighting them on fire with fiber torches is very slow. Slashing them is slow and consumes roughly 6 swords to get 1 stack of their drops.

* If you're playing on a server and the Shoggoth lairs have been emptied, you can trade for flesh with villagers, or with the Farming for Blockheads Market

* Dealing with Shoggoth

    * Since they spit acid, which can possible destroy your grave it is best to deal with them in water

    * Make a squid totem and lure them into the depths where their slime has no effect.

    * Spear has a bigger range than other weapons and it can be used to punch them without being touched even once. Combined with wolf totem it does a massive damage.

* There is a common bug where Shoggoth either do not spawn or spawn unhittable. If this happens, you can craft the Market block cheaply, and then mine their bases to trade for Sloggoth Flesh. 24 Monolith Stone will get you one flesh, and with 8 Shoggoth Flesh you can craft a statue.

* When there are six shoggoths outside, they will erect a monolith with a statue on top. Beware! These towers will summon shoggoths on their own! You can break the statues on top to stop this.

* After crafting the statue place it **away from your base** and hold the necronomicon. The statue will send power into your necronomicon at 5 PE / 5 seconds taking about 15 minutes to get the 1000 needed. Randomly you may get struck by lightning and even explosive lightning, and sometimes wither effect. After getting 1000 points that area will have gotten tainted and will produce abyssal mobs. A shovel can quickly remove sludge produced by Shoggoths. They don't poop ooze on half slabs or Abyssalcraft blocks.

* The negative effects increase with how much charge is in the necronomicon. Crafting an energy pedestal so you don't need to be around the statues while charging is recommended.

* The lightning effect destroys weak blocks like the shoggoth. Build a cage around your statue setup out of monolith stone.

* Need to collect a lot of shadow gems, but hunting shadow monsters is too slow? One of the negative effects of charging your Necronomicon causes many such creatures to spawn. If you built your energy pedestal in a hole in the ground, some monsters might even spawn inside the walls and suffocate. Their drops will then bubble to the surface, where you can collect them for free!

* To find Corallium look around for a biome looking like this or in a water biome and at least 40 ground level or below and then use a Weak Dowsing rod until it reports with finding Corralium.

*  ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_5.png)

* Another trick is to look out for bits of solid land that the Atlas reports as being Ocean. The Atlas looks at the biome of the chunk, and those bits of land are actually Ocean biomes, where Coralium spots, but that you can nonetheless safely explore and dowse on foot.

* When progressing in Abyssalcraft, beware the second dimension, the Dreadlands. Mobs there apply Dread Plague on hit, which while painful, will also convert the biome of the x/z point you are standing on to Dreadlands whenever it does damage to you. It also likes to refresh itself often. Try to avoid bringing the Dread Plague out of the Dreadlands, as if you bring it to the overworld and dreadlands enemies spawn in an un-torched spot, you might have a problem. For this reason, I would not recommend making Tinker's weapons out of dreadium, as that’ll spread the plague to enemies on a critical hit.

* The dreadlands infused powerstone require a refined coralium pickaxe to mine.

## The Beneath

Your goal is to get a handful of Black Quartz (for actually additions) and Aquamarine (for Astral Sorcery)

* To get the needed Bronze Block know that the Melter can't alloy tin and copper. You can however use the kiln to get bronze, then melt it down in the Melter, and pour into a block.

* Darkness in the beneath hurts, so take a couple stacks of torches. Take a flint workblade to shrubs and leaves to get loads of twine and sticks. Craft fibre torches, light them on a fire, then craft with 2 sticks to make Totem torches (brighter). You'll also want a fair bit of throwable torches (Glue + normal torch).

* It can be helpful to keep multiple totem whittling knives on your hotbar in dangerous areas like The Beneath. Keep each one set to a different aspect. Being able to make wolf and cow totems quickly and easily while kiting mobs around can be a life saver.

* Your "Beneath" teleporter can be moved. Either dig down or pillar up before placing and entering the Beneath. See next note to know when to stop.

    * It is better to pillar up in the Overworld rather than the beneath as spirits can push you off ladders and pillars.

    * Remember to use cobblestone for your pillar as you can use a Flint Workblade to carve out a ladder when you climb back up. Obviously you can drop into water for a quick decent or carve a totem base and bat totem five or more blocks above the floor (to give it time to activate before impact)

    * You can pin torches to a side of ladder blocks making it safe from pushing you off by spirits. It's better than pillaring up in the Overworld.

* Black Quartz can be found from y = 2 to y = 100, Aquamarine can be found from y = 150 to y = 246 

* Before digging to a set Y area dig up till you see a cave. On the top of the caves you have a good chance of finding a few patches of ores. Aquamarine comes in veins of 12. Use a Night Vision totem to more easily see the patches on the ceiling.

* When you first get into the beneath, mark your spot on your atlas, because it is a pain finding your way back.

* You can speed down a strip mine by running and jumping the whole way

* 11 Black quartz can be used to make black quartz AIOT

    * It is all the tools combined and the best age 1 weapon. 

    * Has **1100 durability**

    * **Can be repaired** with 3 Black quartz, a real bargain!

* Upgrade your chestplate and helmet to black quartz, and if you didn't get Bronze leggings, upgrade those too.

* Don't convert all of your Crushed Black Quartz into Black Quartz.  You’ll need some of the dusts later to create Black Iron Ingots.

* If you have a problem in finding caves on bottom of beneath while searching for black quartz just dig down below y=20 and do the normal branch mining. You can save some digging if you use your dowsing rod to target your branch mining.

* In age 2 you'll have access to the Astral Sorcery Cave Illuminator (doesn’t require anything more than the luminous crafting table and some resources). It places light source with some radius, which don’t go away if the illuminator gets moved.

## Better With Mods

* Before we get into Astral Sorcery we need a BetterWithMods Saw to get the bark off of Mulberry wood.  Here is what a Mulberry tree looks like:

 ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_6.png)

* After making the Saw you'll need to get started on the water wheel, as the hand crank doesn’t work on the saw. You’ll need ~36 hemp. Get the top of hemp plant but leave the base planted. 

    * You can use a half stack of bonemeal. Know that breaking the hemp plant in the bone mealed state has 100% of dropping 1 seed and 0% chance of 2 seeds.

    * Or take advantage of Totemic "Zaphkiel Waltz" Ceremony to grow a long-lasting supply of them

    * Gears are really cheap now. Simply saw planks -> panel -> siding -> corner -> gear

* Follow the main quest Guide to a waterwheel and gearbox and make 3 wooden axles (1 for the water wheel to be based on, which can connect directly to the gearbox (image shows an axel between them, useful later on), one to deliver power to the saw.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_7.png)

* Completing the saw also makes Wooden gears much cheaper as you can now make them from wooden corners (process a plank, then the sidings, then the mouldings. 16 gears from a single plank!).

* The saw also kills mobs dropping player-only drops.

* You can tell the gearbox and axle are connected right by seeing the axle turn. Right click the gearbox to move the input side (the one with the cross on it) to face the waterwheel.

* Making a 4th axle allows the mill stone (power must come from top/bottom of millstone) to be powered here instead of by hand.

* You don't need the axle between the gearbox and waterwheel, but is helpful later when needing the space to surround the mill stone with Mk2 hoppers.

* Mechanical power is binary, it's either on or off. You can split power as many times as you want to power your stuff.

* Because Better With Mods drops all products on the ground, Mk2 hoppers are your friend since they can be chained together (unlike Mk1 hoppers, because they don't have an internal inventory). Alternately,  put it over some water you've removed, thus creating a natural whirlpool into a strainer which stores items, or like this when you can place water.
![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_8.png)

### Astral Sorcery beginnings

Astral sorcery is based on star light feeding into bigger and bigger altars and actual star gazing. Getting the luminous crafting table opens the next age. This mod is gated on aquamarine which is configured to come only from the top of the Beneath world, and Mulberry bark which can only be scraped off with a Better with Mods Saw, and a Necronomicon Ritual taking 1000 PE (waiting in front of statue with book in hand for 15 minutes, or with a Energy Pedestal).

* The meat of astral sorcery is covered in [Age 2: Astral Sorcery](#heading=h.q8tahli9nh0b)

# Age 2

## Uncategorized Tips

* Not all of the [below](#heading=h.s3hykq23gasz) baubles need to be equipped to work.  Most will work as long as they're in the inventory.

* If you want to harvest any of the Low Grade Charcoal blocks, from the Dark Tower in the Twilight Forest for instance, do so before entering the next age as this will cause them to turn into netherrack.

* Torch launcher : Provides a large supply of throwing torches

* Monster spawners generate mossy cobblestone from regular cobble, making the mossy variant renewable.

* SevTech contains the mod "Despawnable Spawners".  This mod is set up to destroy spawners (the cage block) after it has spawned 400 mobs.

* Well Bucket - Creates water if next to a source block. Combine with liquid hopper to automate into a tank

* Think big, plan ahead, don't get stuck in a small base in ages 1 and 2 since age 3 involves a lot of multiblock machines that will require a lot of space.

* Save your iron, you will need a lot of it and it's not as common as in regular modded mc.

* Once you unlock JourneyMap, which is possible this Age, you can shift+right click  (NOT WITH AN EMPTY HAND, BUT WITH SOMETHING IN IT) on an ore sample to automatically create a waypoint. No more marking your veins manually in the atlas!

* If JourneyMap does not show up immediately after eating the JourneyMap Token, press 'CTRL+J'

* Sludge jello + pears(both betweenlands) makes amazing food(5% fruit, full saturation)

* A feeding trough (see if it can be fed with a hopper) will automatically breed animals until it is somewhat crowded

* There are three different backpacks (iron backpack, improved backpack, lurker skin pouch) and they all have their own hotkey. Use all three of them for quick access to your items.

* Nocturnal powder right clicked on the ground spawns lots of mobs, handy with vector plates in a mob grinder.

### Things to look out for

* If you see an Enderman you should absolutely try to kill him. Ender pearls are important.  Endermen will only drop ender dusts. You can smelt these in the melter and cast them to ender pearls using the pan cast.

## What you can do now

* Tinker's Crafting Station

* Armor Station

* Boat

* Books

* Slime Sling, and obviously the Slime boots/Wild Dog Pelt Boots you had available in age 1, so you don't die from flinging yourself

* Poor-mans flight via slime boots bounce + the charge ability from the tinkers longsword.

* Quartz Grindstone [Applied Energistics 2]

* Framed Storage Drawer

* Mine Iron, Gold, Lapis

* Ranged weapon, See Tinkers construct below

* Transport NPCs (excluding most mounts) without leads [Interdimensional Cage]

* Tinker's Tank

* Create Speed, Night Vision, Healing and Regeneration Potions with Rustic [Alchemy](https://github.com/the-realest-stu/Rustic/wiki/Alchemy).

* While a bucket of lava in the Melter won't melt Iron, it will melt gold. Pour that over a dirt chest to get a Gold Chest. Poor man’s ME system.

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

* Calendar : Month, day and year of the world

* Biomealyzer : Displays the name of the biome you're in.

* Super Sound Muffler : Allows for the muffling of certain categories of sounds

## Automating a Melter

* Use a simple Chest + wooden hopper to feed a Melter

* Get a Liquid Hopper to pull molten metal from the Melter

* Use a Lever to control multiple hoppers feeding into dedicated casts

## Liquid management

* A tower of clay barrels can hold 20 buckets

* A tower of porcelain barrels can hold 30 buckets

* A wooden barrel can hold 8 buckets. Place a lid and shift right click to put in your inventory. Doing so without a lid falls back to carry-on. It will collect rain water if left open to the rain. Breaking it empties the liquid.

* Liquid hopper has a 16 bucket buffer and retains liquid.

* Seared tank holds 4 buckets

## Which pickaxe to pick

To mine the Carminite reactor in the urgast towers you may need a diamond-level pickaxe.

### Tinker's Construct

These tools allow you to swap out parts, gain modifier slots the more you use them, and have a very large selection of materials to use. There are lots of abilities tied to each modifier, allowing a great deal of customization to fit your needs. These modifiers are not available until you reach age 3. [Here](#heading=h.ynpqna7qajwe) are useful parts listed and described.

#### 
Black Quartz

While a black quartz pickaxe isn't much to write home about, combining with the hoe, sword, axe, and shovel gives an AIOT tool (All In One Tool) with 1120 durability, and great damage. 1 black quartz repairs 370 durability.

### Betweenlands

Octine tools are better than iron: Mining Speed 6, 900 durability, can be enchanted

Valonite are as good as steel: Obsidian mining, mining speed 8, 2500 durability, can be enchanted

The Swift Pick: Obsidian mining, mining speed unknown, 2500 durability, can be enchanted

### Twilight Fortress

Ironwood Pick: Diamond level, Mining speed 6.5, 512 durability

Mazebreaker: Diamond level, Mining Speed 8, 1561 durability, Efficiency 4, Unbreaking 3, Fortune 2

Steeleaf Pick gets Fortune II, if crafted from Steeleaf (instead of finding it in chests). Nice to have before Tinker's Construct modifiers are unlocked. 131 durability.

## Best melee weapon

Astral sorcery crystal sword

Requires investing into building up 2 nearly perfect rock crystals. But this sword is as fast as a Tinker's construct rapier (crystal stats don’t affect the speed), can be enchanted with books and the refracting table, Infused for delivering a AoE  once every few seconds. Sadly must be repaired by soaking in starlight.

* Twice the damage of an iron sword.

* When combined with Power V, Sharpness V and elixir of strength[Betweenlands] vs full valonite dummy dealt 19 dps, or 17 times as much damage as an iron sword

### Enchanting

While the enchanting table is gated for later ages, the refracting table from astral sorcery is available. This let's you pick what enchants as well as making sharpness VII, power V available (higher than normal loot).

### Attunement

Astral sorcery let's you attune yourself with one of the conselations, 2 of which are good for battle: Amara and Decidio. See the astral sorcery section for how to level up in their perk trees for even more defense and damage

## Tinkers Construct

Note: Blank patterns require Sidings from the Saw instead of sticks.

* Make sure the pattern chest is touching both the stencil table and the part builder, otherwise you have to access it by clicking on the pattern chest tab.

* The crafting station is the block that allows the rest to be accessed as tabs in one UI.

* You can make **one-use-****casts by Melting clay** and pouring it over a stone part. Melting metal, and pouring it onto a  clay cast, consumes the cast in the process.

* Lasting casts can be made by pouring gold over a stone part.  These casts won't be consumed by future use.

* Make a stone nugget to create the nugget cast.

* Use a (clay, mud, seared) brick to create the ingot cast.  You could use an ingot as well, but that seems wasteful.

* Best bow

    * Crossbows and longbows can't be created until age 3 so short bows are the only solution.

    * Wood bows have nerfed durability, so Iron arms are the way to go. 

    * Damage arrows (**3.67 hearts** average observed, 50 arrows): **Bone **arrowhead, reed shaft, feather fletching.

        * This is easier to repair on the go than a slime arrow.

    * Endurance arrows (1.9 hearts average observed, **170 arrows**): Green slime crystal arrowhead, reed shaft, feather fletching

* Melee: A bone and flint mattock with bone handle does **as much damage as a diamond sword**

* [Here](http://tinkers-construct.wikia.com/wiki/Material_Stats) are the modifiers and descriptions

* Note that sharpening kits only repair. **Don't plan on getting obsidian sharpening kits** to upgrade your mining level

* Craft a battlesign with **cactus **as the tool rod to deal damage while blocking. Pair this with a **steeleaf** sign and a stack of steeleaf in your hotbar to become almost invincible to any attack.

#### Head 

**Bronze:** This is the first head you would want. It has a mining speed of 6.8 and the modifier 'dense' which together with a reinforced modifier(age 3) can give the pickaxe infinite durability.
**Naga Scale:** The drops from the first Twilight Forest boss can be crafted into a pickaxe with a mining speed of 8.9, but with a mining level of iron.
**Knightly:** This material is harder to get, but with a decent mining level and a mining speed of 8 and the highest durability: 1200. 
**Abyssalnite:** Abyssalnite is found in the many little shrines scattered across the Abyssal Wasteland (dimension). Once you reach this dimension these buildings are easily found and inside you will find one grey block with a ladder underneath it that leads to a chest with loot (mainly abyssalnite). It has a mining speed of 10.
**Refined Coralium:** Rarely found in the same structures as abyssalnite but can also be found underground as Liquified Coralium Ore. The veins are very small and very hard to find. The mining speed is 12. This material has the modifier ‘Coralium-Plagued’ which inflicts the Coralium Plague (not to be confused with the Dreaded Plague) on critical hits. Don’t use it as a weapon!

#### Blade

**Iron: **Easy to get with an attack damage of 4.**
Prismarine: **Prismarine offers 6.2 attack damage, but requires you to clear an ocean monument.**
Fiery: **Only available after defeating the Hydra or the Ur-Ghast in the Twilight Forest, but it is the blade with the highest damage: 7.6.

#### Binding/guard and tool rod

**Wood:** Wood repairs itself, but very slowly.

**Steeleaf:** Repairs tools with about 4 durability per second. It requires steeleaf to be in the hotbar (not consumed and the more the better!).
**Knightly:** The binding has a very high durability.
**Bronze: **Dense (see the Head section above).
**Sponge:** Gives silk touch. It's found in vanilla ocean monuments. 
**Prismarine: **Faster underwater mining. Watch out! The tool rod lowers durability drastically.
**Bone:** Gives bonus damage

### [Optional] Tool Forge

You can make a Tool forge by burning grout into seared stone and 4 Iron/Copper/Tin/Bronze blocks (Note: JEI only lists recipe with iron blocks, but the other metals do work).

* Stone on the other hand, doesn't require casts, and can be repaired easily. Recall parts can be swapped out when you get a full smeltery for better parts.

* Once in the twilight forest, steeleaf is a good material to use as it gives the tool a self repair when you have stealeaf on your hotbar with the tool (working for arrows as well). The speed of this increases as you gave more steeleaf on your hotbar, getting to the point where the tool can repair faster than you can damage it at this age.

* Make a **Bronze-Stone Hammer** and Stone Lumber Axe for quick mining and felling.

    * You can use a bronze head and a stone and/or wood plate to get the benefit of speed, durability, and Dense modifier while still easily repairing your tool.  You can upgrade once you have it unbreakable.

* The materials used in faceplates and heads can be used for repairing.

    * A wood faceplate gives ecological (self repairing) and is cheap to repair, at the cost of max durability

    * Stone is a bit faster and is common when mining

    * Iron gives magnetic (pull drops towards you)

    * Slime gives high durability, sporadically spawn slimes when mining, useful for the excavation modifier next age.

    * Stone makes it mine faster the lower the durability.

* Shuriken: these are reserved for age 3. 

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

## Blood magic

* The tier 3 altar requires either flowstone or sea lanterns, the latter is available to you in this age found in the oceans. Don't forget the totem with squid for water breathing.

* Sadly there is not much unlocked for you to make in blood magic in age 2, but the altar is technically buildable.

## Getting Iron

Iron (Hematite which has a brown color; Malachite (copper) is green) is now open, but your melter isn't going to get hot enough. In addition to tracking it down and mining it, you’ll need lava in either a porcelain or seared tank (matching your melter)

### Handling lava

Before venturing out to find Hematite, make a couple Seared Tanks or Seared Gauges.

Pick one of the following for holding lava:

*  As many clay buckets as lava you need

* A Between lands Bucket![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_9.png) made from Syrmorite holds lava

* Wood Barrels can hold up to 8000mb of Lava and can be shift-right clicked to store in your inventory. Lava will burn the barrel if left in the Overworld. It will also burn you if you stand next to the burning barrel (oops).
Placing a lid on the wooden barrel lets you pick it up into inventory.

### Hematite

* A 6 high buffalo totem gives you haste 3.

* If you got a Tinker's stone hammer, you can speed up mining Hematite by placing cobble and mining that.![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_10.png)

* You can melt iron by reconfiguring your melter to be heated by a Seared Gauge.  Seared tank won't work with porcelain melter, material type must match.  Note the automation section above to automate the faucet.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_11.png)![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_12.png)

* Make a stone bucket and place in a table, then melt 2 gold or clay and pour to make a bucket cast. Pouring 3 iron gives you a bucket. Use gold instead of clay if you think you'll need more buckets.(the watering can consumes the bucket in its recipe)

## The Between Lands

Before we can make a smeltery (required for age 3 alloys, useful for efficient and mass processing of ores), we need to take the side quest of the Between Lands. Because it has its own wood and tool tech tree, you'll need to start from roughly scratch.

Goal: Obtaining a Aqua Middle gem found in Sludge Plains lakes

* Ring of Ascent to 100% chance drop from Betweenlands Bosses & will help you if you get overwhelmed by a swarm of mobs later on, especially wights. It basically provides creative-mode-flying but if you jump off a high ledge, gravity forces you downwards like a chicken, and you slowly float to the ground but with a cool leafy effect around you. You can also slowly float upwards but this is counter productive if you've kept the step-up ability to move up one block steps instead of jumping. **The Ring of Ascent relies on XP levels to function**, so if you have none, you will not fly. If you have many levels, you will fly for a while but it gets used up fast.

* The druids spawn when you enter the ritual area, giving you time to prep before the battle.

* Take the time to get slime boots when fighting the Druids. It turns their offensive spell against them. Alternatively make a Bat totem pole (along with Pig for luck) near the circle where you are fighting them. Furthermore carrying a dagger of sacrifice with a blood altar allows dealing with druids very quickly as they die in 1 hit. This same strategy also works on many other enemies in the betweenlands except bosses.

* The Betweenlands is a very large mod, consult [http://the-betweenlands.wikia.com/wiki/Basic_Guide_to_Survival](http://the-betweenlands.wikia.com/wiki/Basic_Guide_to_Survival) for some starting tips.

* To enter betweenlands, plant a sapling in a wide open area and right click on it with talisman.

	If you have problems entering the portal; you have to wait in the portal for a few seconds still to enter.

* Take neither non-cooked food (berries -> rotten, hearty stew is fine), bedding, Vanilla Torches nor weak weapons (overworld diamond < between wood sword)

* Totem torches work normally in the Between lands. Furthermore the torch launcher also works but this could be considered cheating as the world uses you placing torches to trigger making them damp, and the launcher doesn't hit the same codepath. Blood magic’s Sigil of the blood lamp works here as well, and lets you throw light.

* Setting the spawn point with a sleeping bag apparently works. Death in the between lands respawns you back in the betweenlands and not necessarily at the portal.

* A chopping block can split weedwood into weedwood sticks, otherwise find bushes and break for sticks. 

* Hunt down a Weedwood tree and make a base in it ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_13.jpg)

* Find a Sap Tree and chop the wood to get balls of sap.  Eat this to fill up your decay bar.  When the decay bar gets low your max health and speed are decreased making you very easy to kill.  ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_14.png)

* Instead of making 2 Sulfur furnaces, craft a single one with 8 betweenstone for a double furnace.

* Upon death, you will respawn near the portal unless you have reset your spawn point using the Moss Bed.

* Food is hard. Cook Swamp Reed ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_15.png) into donuts for 6 hunger bars.

* Be on the lookout for Syrmorite ingots![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_16.png) in pots![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_17.png) inside Fortresses to get early access to lava-capable Syrmorite Bucket![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_18.png).

* The syrmorite bucket can hold lava, possibly earlier than going through a tinkers smeltery and stone bucket. Use this on rubber trees and make rubber shoes. These let's you walk on marshes at normal speed.

* ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_19.png)

* To make a full smeltery, you will need to go to the Betweenlands and find a Aqua Middle Gem found in lakes on the surface. Remember to take a bucket of swamp water with you. The purifier needs it and the normal fuel to run.

* The Betweenlands boat is tricky to operate. Left and right arrows operate each oar, similar to QWOP. In other words you must hold both left and right arrows to row forward. Holding only 1 lets you turn. Don't get stuck in the cavity of a tree, as you will suffocate if your head is not in open space.

* You can avoid using glass by using the silt glass from betweenlands instead. Its crafting recipe to glass and panes aren't modified. This avoids having to use the smeltery to create glass and glass panes.

* Syrmorite hopper is just as good as a regular hopper and is easier to make.

* Syrmorite armor and weapons are just as good as iron ones.

* For easier travel, you can tame a [Harlequin Toad](http://the-betweenlands.wikia.com/wiki/Harlequin_Toad) with Dragonfly Wings. As with other minecraft mounts, they require a lead and fencepost when you aren't riding them. The toad is able to swim and traverse Sludge Plains.

* Don't forget to craft a betweenlands bow before venturing into the fortress as you'll face ranged mobs in there.

* Life crystals are harvested from stalactites that have a white band on them.![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_20.png)

* Life crystals are found by some to be underwater in the cave system, so if you are able to acquire sea lanterns, use them to light your way as you swim around to find them, as the caves are dark, but the water in the caves is darker.

    * Can also use jack'o'lanterns underwater, and harvest glowing betweenstone or cragrock tiles from dungeons for underwater lighting

    * For emergency air, place a torch on the block next to your head.  The torch will pop off the wall but your air bubbles will be refilled.  Works with sulfur torches.

* Middle gems (red, green, and blue) can be applied to weapons and armor to enhance them, even stuff from other mods, just not tinkers. You can stack the same gem to make the chance the gem activates greater. Be aware that mobs spawn enhanced with these gems. If you have green enhanced armor a red swamp hag will do more damage to you. The tables are turned if you wore a blue gem. Blue imbued swords would do more damage to red mobs.

* Farming Lurkers gives Lurker skin. The full armor set gives awesome water-focused perks. Movement, mining speed, sight and greatly extended breathing boosts makes farming middle gems much easier.

* Lurker skin also gives you a pouch, which is a backpack that doesn't take a hotbar slot

* Sneaking near wights makes you undetectable by them as they use echolocation for targeting.

    * However, beware that the wight's 'special attack’ (becoming a mist and attacking you) deals **magic damage**, bypassing armour. Either eat food to combat with regen or drink cider from Rustic to gain magic resistance.

* Betweenlands armor, tools, and weapons corrode while in your inventory and simply moving around in the betweenlands (haven't tested in overland). Water corrodes it faster. Moving it into a backpack blocks the corrosion.

* It's extremely useful to purify your weapons & tools often, especially if you cannot find any scabist to coat them. Purification requires buckets of water and sulfur to power it.

* The purifier helps with keeping your tools working in top notch order. Finding **Scabyst** while mining will help stave off the corrosion for a long period of time.

* It is also extremely useful to put to work an animator, especially if you have found at least one life crystal in your travels, which can have its power replenished with wight hearts in the same way you use scabyst. Use the animator to animate any item scrolls you find (this requires a LOT of sulfur) to acquire any item like the swift pick, hag hacker, critter cruncher, and wight's bane. The chance of receiving these items is random but these weapons one-hit mobs in this dimension when they are fully charged, and even after they’re broken, as long as you purify them of their corrosion, it still only takes at least 2 hits with the weapon of its respective mob to kill it, which is a lot easier than with other tools.

* The Blue Middle Gem is great for ranged weapons (chance to weaken).

* Green Middle Gem is great for Armor (absorb damage)

* Valenite sword(2500 durability, 7 damage, 1.6 speed) can heal you when you attack.

* The end boss has a nasty wight attack. Run in circles and wait it out. Especially make sure you have a wight's bane for this fight, as it will save you a lot of headache even with a sword as useful as the Shockwave Sword.

* The voodoo dolls are really OP, bypassing armor and do damage in an AoE. Really helpful for abyssalcraft bosses

* Sulfur torches provide a great source of light, much like totem torches, so be sure to bring them with you even when you're done with the Betweenlands.

* If you can handle the stress of looking for, and fighting a few Wight Fortress buildings, the Shockwave Sword is especially useful for fighting Naga in the Twilight Forest, and lasts a heck of a long time, and would be great to have a few more of when one runs out, if it doesn't act like the other betweenlands weapons and continue working after being broken.

* Angry pebbles are something you can find while exploring, activating some item scrolls, and in pots. You right click with it in your hand to charge it up, and then throw it somewhere, causing an explosion somewhat like a throwable TNT.

* Always keep balls of sap or weeping blue petals on you to decrease the decay. Once the bar is empty, your health bar will decrease and you will die.

* Peat mummies are terrifying and when they roar it will shake your screen. If you happen to have a ring of ascent, it will help you fight them from above, and if you have a shimmerstone, you can throw that to distract them. You will be able to retrieve the shimmer stone back from the mummy once it is defeated.

* To get weedwood sticks faster for tool making and recipes, get as much as you can of it, bring it back into the overworld and place it in a horse chopper. It will make weedwood planks and sticks for you like normal planks and sticks so you can focus on other stuff. Unfortunately despite being a mountable creature, you cannot use Harlequin toads as horses to a chopper (leads break after a few seconds if you attach them to a post, but you can lead them around), or any other mob in the betweenlands unfortunately.

Betweenlands Farm

* It makes sense when you enter the betweenlands to create a farm for what you may need the most. Reeds are most needed, especially if you want to make caving ropes. 

* Invest time into the purifier for your farm, to purify your farmland so that it doesn't decay and need to be redone later on. 

* You cannot automate compost bins but everything around you is most likely compostable whether punched or collected with the sickle. 

* Almost any item you may need or want more of can be farmed; all you really need is a few pieces of farmland and to place the item you want more of on it. An example would be the blue petal flower; harvest it with shears (to get the 3D version of it) and place on one piece of farmland, and then over time it will spread to the blocks around it.

* White pear seeds can only be harvested from the hangers that hang from a giant weedwood tree, so if you find one early on, that's a great fruit source.

* Sometimes when you travel between the overworld and the betweenlands, your crops may disappear. So if you don't want to go through the trouble of searching for seeds to the stuff you want to grow more of in the future, think ahead and save some in a chest, just in case the plants do decay over time.

* Nettle soup is a great source of vegetable and jam donuts are an easy way to consume grain and fruit. 

### Betweenlands alchemy

Potion brewing is more complex, versatile and powerful than vanilla. [Here](https://youtu.be/b5FxMjufCtw) is a great tutorial for how to get into alchemy.

* Betweenlands plants have different aspects based on the seed, making each playthrough unique. ie. There isn't a fixed set of plants that will give a healing potion on all world seeds.

* Alchemy is gated on having a sickle from valonite (diamond equivalent) to harvest the various plants.

* Dedicate a gold backpack for gathering the ingredients

* You can stack power 5 potion and haste 3 potion and do 18 damage with your fist or a tcon dagger, which has no cool down, resulting in absurdly high DPS

* To help organize your alchemy research have 1 chest with a sample of your ingredients and a primal shelf holding your stock. This let's you hold shift to see the quantity. Do alphabetize the shelf to make finding the ingredient faster.

* Some ingredients for alchemy cannot be used in their dropped form, they have to be harvested with the sickle. If you try to use them in the pestle & mortar, they will not grind until you replant them and harvest them with a sickle. (example, golden club flowers has two forms when you search it, but the one that can be ground is not the one you can punch to harvest)

* Geckos cannot be placed in cages with the Carry On mod; you need to collect the gecko with a net, and you will receive a 2D item in your inventory that will become the gecko again when you click on a cage with it.

* Geckos do not last through tons of experiments so gather a few.

* If you want Potency V potion to last longer (30-60 secs) invest into wine. Find grapes, make stomping box, stomp, put 1 bucket in a brewing barrel and let ferment for 1/2 day. Pick quality of 0.6 (max:0.75). Use bottle to extract. Destroy other cultures and put best wine in far left slot. Added wine will get better values.

As you progress through the Betweenlands, you will encounter a Wight Fortress eventually. You need to be prepared for the battle ahead as the boss is very difficult to defeat on your own, so any aid in alchemy is really necessary here, as well as the best armor and weapons available, amulets, and rings if found. Set up base around or inside the fortress once you get through it so that if it is too far away from your home base, you don't need to travel a million years just to get back to your grave. See here for more information: http://the-betweenlands.wikia.com/wiki/Wight_Fortress

## Tinkers Construct Smeltery

Prerequisite: Turntable[Better with mods], Aqua Middle gem[Betweenlands] or wait till the nether for blaze powder.

Note that ore doubling from tech mods has been nerfed greatly. Even Mekanism is delayed until age 5, and it won't process your ores. A smeltery will be your go-to tool for ore processing for quite a while.

* A bucket cast is made from a stone bucket, not a clay one. You still need a clay bucket to get lava for the seared/porcelain tank under a melter.

    * Note that a seared tank won't work with a porcelain melter.

* You can make casts out of Gold, Brass, or Aluminum brass(1 copper+3 aluminium). Seems you only have access to gold right now.

* To stock up on lava either jump into the betweenlands for a syrmorite bucket or use a clay bucket to bootstrap the smeltery and cast gold on a stone bucket, then pour iron to get a vanilla bucket. Then use barrels (8 bucket capacity) and a lid to store lava (lidded wood barrels don't catch fire).

* A tinkers smeltery can be as small a base of 1 square, but the primary use case for the smeltery is to be the main ore processor, so you should just start making a larger one.

* Smelteries can share sides, but not the tank nor controller. This helps avoid unwanted alloys.

* A liquid hopper feeding into an ingot cast automated processing but is tricky to place. You need to be on the side of the block you want the hopper to pull from.

* Note: **Obsidian doesn't form** in the smeltery, so you won’t have quick and easy access to Obsidian yet.

* The pictured smeltery is fed by an upper from the ironwood crate. The basin/table are using wooden hoppers to extract items and blocks into an upper below the gold chest.The fluid hoppers are set to work on a high redstone signal from a lever above them.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_21.png)

## Twilight Forest

* The portal to the twilight forest is built in the same way as usual (12 flowers around a 2x2 pool of water). Because you do not have access to diamonds it is opened with a Starmetal Ingot dropped into the pool.

* Take climbing gloves with you as there are many quests made easier when you can climb their structures.

* Vanilla ore veins spawn in the Twilight Forest, and due to the dimension's lower surface height can be a lot easier to reach, or in some cases even be found right at the surface.

* Redstone is available but you can't make redstone torches nor comparators. While you can craft redstone blocks, placing them makes it look like granite, but rest assured it functions as a redstone block, giving you a poor-man's redstone torch. Mining it returns granite.

* If you notice a lot of FPS lag while in Twilight Forest, try reducing your view distance.  This kind of stuttering is usually related to minecraft trying to render too many textures.

* Hedge Mazes may contain a hostile wolf spawner, which if left intact may provide you with an easy source of pelts to craft into leather or glue if you have not yet started breeding animals at this point.

* The lich's shields can be destroyed with the Betweenlands Voodoo doll. This doll also easily handles the horde found in the mounds.

* Medium and large hollow hills, as well as hydra lairs contain Redstone Ore, as well as Coal, Iron, Gold, and Lapis.

* Maze wafers are a decent source of grain nutrients and can be found in Labyrinths and other dungeons later in the progression.

* While you are in the Goblin Stronghold, make sure to collect Knightmetal as it will prove very useful later on. 9 Armor shards make one ingot, two ingots make a pickaxe head, and a pickaxe head is the easiest and earliest way to get cobalt-level mining (expect Obsidian). It's also a great material in general and you might benefit from getting yourself some extra. A knightly sword has great durability, deals extra damage outside the Twilight Forest (from a base of 7), and will occasionally give Resistance III in combat.

* In later dungeons, a food called experiment 115 can also be found which gives all 4 nutrient types

* Ensure that you collect as many steeleaf as you can (at least 4) from the labyrinth so that you can craft the coal engine to move towards age 3. You do not want to have to find you way back into the labyrinth later.

* Dark Towers have plenty of useful items to loot, including Brewing Stands, Anvils, and Pistons, as well as the Carminite Reactor you will need at the end of this age, in addition to this there will be plenty of spawners that will spawn carminite ghasts which you can kill for ghast tears, and there are a lot of chests to loot for other goodies like Redstone Lamps, glowstone dust, and Experiment 115

* Do NOT activate the Carminite Reactor in the Dark Tower. This would be accomplished by triggering the pistons surrounding it and is a bad idea.

* The Carminite reactor required a bronze pickaxe to pickup. Claw paxel works as well.

* Dark Towers also can contain Blaze spawners, though Blazes don't actually seem to spawn in age 2. However moving blaze spawner to overworld makes it spawn blazes even in age 2.

* Take some bones to the doggos in TF to tame them, and carry them back to your base. They'll run faster than the horses for your machines.

* Cave Illuminators (from Astral Sorcery) allow you to clear Mazes, Hollow Hills, Labyrinths, and Goblin Knight Strongholds much more easily.

* In the Twilight Forest, many ores tend to spawn in the South East corner of a chunk near bedrock regardless of standard Y level spawning tendencies. (This is especially useful in Age 5 when you need diamonds to craft the Prospector to help find diamonds)

* The knights in the urghast tower give awesome loot including a chance to get excavation on a knightly pick. Use an anvil to join it with mending.

* When facing the urghast you might want to replace the pressure plate near the ghast buster traps with a lever so that it activates when you want it not by accident.

* Twilight Forest chest loot can contain tools with enchantments such as Excavation and Silk touch

* You can mine the glass from the snow queen's biome and craft the shards into glass, helpful for liquid hoppers.

* The Hydra is a fierce foe who may break your grave. The easiest way to kill it is to break cobble into stones, and throw them nonstop at the Hydra's open mouths. Bonus damage for hitting the incoming fireballs back into the beast with the rocks.

* The twilight quest to eat 6 twilight foods include: venison, need, stroganoff, Hydra chop, maze wafer, experiment 626.

* Charm of life acts like a Totem of undying that resurrects you if you die.  Even if you have them, gather all you find to make the Journey Map token.

* When you have the Journey Map you can shift-right-click on an ore sample to create a waypoint named after that ore type

## Teleportation

Here are some methods of teleportation available.

### Astral Sorcery Method

Astral sorcery's celestial gateway can be used to teleport to a different altar. Remember to use an anvil to name the gateway block itself.

* Pros: Very easy to use, works across different dimensions and over long range as well

* Cons: requires 2 starmetal ingots and 8 stardust to create 2 of them and both require a marble structure.

### Betweenlands Method

Furthermore you can link betweenlands portals with the swamp talisman

* Pros: Can be used as soon as the swamp talisman is obtained, new portals are very cheap to make

* Cons: Can only teleport up to 1500 blocks away and exactly one portal MUST be in the betweenlands so you need to use 2 portals to reach a different place in the overworld.

* Also it takes a while for the teleporter to function and the world to load.

* Additional Portals can be made with wood harvested from a portal tree then ignited with a talisman. A full portal tree is not needed.

## Blood Magic

* You can progress your altar to a tier 3 by going to an ocean monument and getting sea lanterns (silk touch or via getting prismarine).  You can silk touch glowstone blocks from twilight forest but they will not be placeable until age 3. 

* ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_22.png)

## Astral sorcery

* Start by making some lightwells, preferably with liquid hoppers pulling from the bottom and pushing into wooden barrels. You only need 1 bucket of starlight to upgrade to the next tier of altar.

* All Astral Sorcery recipes require a minimum amount of starlight. Early items often need so little starlight that you can craft them during the day. Upgrading your alter probably needs to wait till nightfall. Star light increases with Y level, up to y=120. If making the next item in AS needs more starlight than you have at your base then move your AS stuff into the mountains. Use a bronze or claw pickaxe to pick up the luminous crafting table and find a higher place or different chunk. Higher than 120 doesn't matter. Once you get more advanced altars this benefit doesn't matter.

    * If you are struggling to get a bit more starlight for the altar, you can craft **spectral relays** to boost the altar. When placed in a multiblock structure (look in the book) with a clear view of the sky and a **Glass lens** put into it, the Spectral Relay will bring more starlight to the closest Luminous Crafting Table (or any upgraded altar) in a **16 blocks radius** around itself. However, multiple Relays in a 16 block radius will have **diminishing **effects.

* Mischief of Mice's [top tips](https://www.youtube.com/watch?v=i22YPsbfego) and a [playlist of astral sorcery - bit by bit](https://www.youtube.com/watch?v=9uU67eYK_Mc&list=PLQzDSnrhrcyyZKmHp1zdj03jRbuZN7NOh)

* For a more concise, text and image based guide see [minecraftguides.net's Astral Sorcery Guide](https://minecraftguides.net/AS/index).

    * Notable differences between vanilla Astral Sorcery and Sevtech Astral Sorcery are the lack of world-generated Temples, the source of Rock Crystals, and the source of Aquamarine. Constellation paper is obtained via Abyssalcraft Ritual, Aquamarine is mined in The Beneath, and Collector Crystals must be crafted.

### Finding Rock Crystals

* The Resonating Wand does not make the Crystal Rock Samples more visible, like it does in the standard mod with Starmetal Ore.

* Take 6-10 crates with you, because rock crystals don't stack(due to unique stats on each crystal), and it’s nice having a healthy supply, though you don’t strictly need more than 3 chest’s of rock crystals.

* Crystal rock samples look like:![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_23.png) These produce starmetal dust; used below. You only need ~3 of them to do the needed steps for AS, but would want closer to 7 to get to the OP stuff AS provides in this age. 

* Sevtech changes iron access to make stardust generation more tricky. Getting Iron Ore requires a trip to the Ore cavern in twilight, which also gives access to redstone. Alternatively you can slowly get more via celestial rock crystal farming below. 

* Once you find a Rock Crystal Sample, you need to look at the outer corner the chunk it's in (just outside of it). Press F9 to see the limit of the chunk. Unlike the vanilla version it will be a big cluster of crystal and it can be hidden under lava (mine was). The Tough Dousing Rod will detect it if you are lower than y 48.

* Rock Crystal ore is not mineable with a stone pickaxe, you need something with mining level diamond to harvest it (like an iron or bronze pickaxe from tinkers or claw paxel available starting from Age 0).

* Getting lapis on a tinkers pickaxe before mining rock crystal is nice, as looting works on Rock Crystal Ore.

* You can also use a pig totem to get Luck 3 and get more rock crystals.

### Starlight Generation and rock crystal stats

* If you have time then only liquify a handful of rock crystals into starlight. Turn the rest into celestial rock crystals, described below, which are better in all respects.

* When siphoning starlight from rock crystals into lightwells start this process at nightfall, as daylight reduces the amount of liquid starlight generated.

* ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_24.png)

* Barrels (8 buckets) provide cheap portable liquid storage, or the Rustic Barrel if you want 16 buckets of portable storage (2 iron for 2 barrels). Use carry-on to rotate out full barrels. An empty barrel exposed to rain gets water. Mining it empties the barrel. Stack the barrels with the top one having a lid. Use a Fluid Hoppers to pull from the bottom of the lightwell to automate extraction. A Tinker's Tank makes for a great way to store all that precious Liquid Starlight. Later a containment chalice can be used. Putting a chalice near a infusion structure **drastically reduces** starlight usage.

* The following items can be placed in a lightwell, which locks it into melting into liquid starlight: Aquamarine < Resonant Aquamarine < Rock Crystal < Celestial Crystal < Attuned Rock Crystal < Attuned Celestial Crystal

* Liquid starlight that touches water creates ice. Speed up your horse-powered machines by making an ice track. It is also great for the heat generator in Age 3.

* You can drop a rock crystal and a stardust in a pool of liquid starlight. If you unintentionally pick the crystals up just back up some more. This will grow a celestial crystal cluster. Don't spend your time trying to get a normal rock crystal to 100% purity. Just go for the celestial right off the bat.  When full grown (white sparks will show) you can break this to get at least one, often two, stardusts back. Make a pig totem to increase these chances.
 ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_25.png)

* Use the stardust to turn more of your rock crystals into celestial rock crystals, which produce more liquid starlight, and letting you roll again on getting a high purity celestial rock crystal. You'll end up with an overabundance of liquid starlight, so just toss the celestial crystals back in with stardust to get more dust and trying to get a better crystal.

* Grow celestial crystals on starmetal ore, making the chance they drop an additional stardust increase as well as making them grow faster (.5 to .8).

* When you get a celestial collector crystal you can direct its starlight at the cluster to speed up growth.

    1. Note that if you split the light to multiple destinations the light delivered gets divided/reduced as though it is being used for something or not, thus focus your light and babysit it.

* Note that you need a linking tool to send the collector crystal's light to your altar or an iron ore block (found inside mounds near the minotaur lairs) which turns into a stardust ore block. Note that if you link the collector crystal to multiple things the light always gets divided, even when not used. Best to keep it on 1 thing at a time. 

* Collector crystals are better when made from crystals with bigger size and higher purity. Cut doesn't matter.

* The multiblocks that collector crystals and spectral relays can share edges, allowing you to put 3 collector crystals on one side of your crafting altar.

* Your goal is to get 95%+ purity celestial rock crystal, with the rest going to liquid starlight and recipes.

* Growing crystals and rock crystal tools by soaking in starlight grows durability while decreasing the cutting. Place in a grindstone to increase cutting at the cost of durability. Purity makes the durability fee cost less. Using a tool doesn't use up durability but rather the cutting.

* When making a rock or celestial crystal grow by soaking it in starlight, if you continue past the maximum size there is a 1/6th chance that a second crystal will form with higher purity (this is also the only way to increase purity). See [here](https://youtu.be/i22YPsbfego?t=5m23s) for example

* You want to use 90%+ purity crystals and get their size as large as you have patience for rituals and collector crystals, and preferably celestial crystals

* Crystal tools are very effective, for example the highest quality sword does 7 full hearts of damage, (double that of a diamond sword). The quality of a tool depends on the stats of the crystals used. Higher size/cutting means more efficiency. However they slowly decrease these stats over time when used. These can be gained back by putting them in liquid starlight or on a grinding bench. Later they can be infused to make them more durable and effective.

### Tier 1 altar

* Use a Fosic resonator to find patches of dark blue mist. Must be within ~3 chunks to see it and somewhat close to the ground, so don't go too high on your slimesling. These areas are great for starlight. Pillar up and build your altars there.

* Place your lightwells near your tier 1 altar to speed up production of starlight, as well as providing more light to the altar.

* While the Starlight crafting altar in JEI shows an iron bucket, the book correctly reflects that a clay bucket of starlight works just fine.

* Spectral Relay bases can share blocks, allowing you to pack the relays in a smaller area. The Relay simply needs line of sight to its nearest alter crafting table.

* When creating Lenses ignore the cutting. Purity affects how much starlight passes through. Size impacts the yield of the recipe (5 for size 400 ).

### Other altars

* The 5 chapters in the Astral Tome are unlocked by manually upgrading the second most advanced alter you can see in the Astral Tome to the next tier (ie. if you can see the Attunement chapter then make the Starlight Crafting alter and its multiblock structure, then fill in the items for the Celestial Altar and then right click with the resonating wand). If you are in creative mode it may mean you must build the multiblock structure appropriate for that altar.

* To tech up to a Collector Crystal, which can turn Iron Ore found in Twilight Forest mounds, into starmetal ore, you'll need 64 aquamarine, 15 stardust, and 11 stacks of Marble with an assortment of liquid starlight, wood and so forth.

* To upgrade to the next tier alter you'll need to get some easy twilight forest items and kill the naga and lich, which lets you enter the maze. On the Magic map the maze looks like this![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_26.png). The mazestone just takes a long time to mine. You don’t need to kill the boss. If you want you can get the maze map, which will show where a solid square is which contains a trapped room with the mazebreaker. But that is optional.

* While the Naga is straightforward, the Lich's 5 shields need to be eliminated first. See the Twilight Forest section for tips on defeating him.

* Silt from the Betweenlands smelts into silt glass which easily crafts into silt panes for lens crafting.

* Celestial Gateways allow for inter-dimensional transport, you can set up gateways to travel to the end, nether, or even other GalaticCraft planets - the multiblocks can be built in stage 2. Even if the destination is at a lower Y value the "star" won't go below the horizon.

### Attunement

Attunement is learning about the constellations, constructing the attunement altar area and table, and imbuing yourself when desired constellations are out. This imbues you with powers and starts you on a progression tree to get more perks.  You can use a shifting star item to reset your attunement, thus losing all progress. Crystals can also be attuned required for special items later. You are limited the the following 5, but crystals have more.

* The hand telescope sucks. Upgrade to the normal telescope ASAP. You don't need to fine tune centering on the constellation. Keep it near the attunement area. Note that not all constellations show up all the time.

* Put the Constellation paper in your offhand so the attunement area stays lit up while you place the relays with your main hand.Spots where to place the spectral relays glow blue.

* You can attune yourself to a constellation for all kinds of bonuses. This requires the attunement altar and a rather large multi block structure (using 225 sooty marble alone) it also requires some spectral relays.

    2. **Discida** gives all kinds of damage buffs

    3. **Armara** provides a multitude of damage reducing buffs. Progress by taking damage.

    4. **Vicio** increases speed, places lights, reduces hunger and grants temporary lava immunity. Progress by moving.

    5. **Aevitas** provides increased reach, natural armor regen and turning stone around you into ore. Animals are frisky and plants grow faster. Progress by having things grow around you.

    6. **Evorsio** gives mixed mining speed and damage increases as well as disarming your opponent's armor.

* The Armara perks make you extremely hard to kill, and several of the perks work on damage that doesn't seem to be affected by armor. For example, the Dread Plague from Abyssalcraft is reduced in damage significantly by the 'No armor is more armor’ perk, making the Dreadlands much easier than otherwise. Armara also almost reduces fall damage to 0, allowing you to use the slimesling without the boots.

* The aevitas skill tree has a natural armor regen perk. Take it, get your strongest armor and put some middle gems from betweenlands on them for maximum power. Don't forget to put some on your weapon as well and take a amulet.

* A mineralis cloak allows for easier ore finding once you get silk touch as it highlights any ores you are holding.

* Vicio attuned Mantle of Stars and Resonating Wand allow infinite flight (elytra style flight).

#### Tips for leveling attunements

* There are 30 levels max, so spend your points wisely. It is easy getting to level 10, tedious getting to 20, and hard getting to level 30, so only invest into "Increased Perk Experience Gained" if you're shooting for level 30 more quickly.

* A shifting star held with right click will clear your attunement and put you at level 1.

* A Irradiant star of your will refund your perk points and attune you with the star's constellation. Thus pick Vicio to level, then reattune yourself with the desired constellation.  When leveling in this way be sure to pick the 2 nearby "Increased experience Gained" nodes first, then path out to Epiphany nodes. Note that you need to get the 3 surrounding nodes before you can get the center epiphany one, but then simply using a single point to get another epiphany node grants you all of its 3 surrounding experience nodes.

**Vicio:** Gain XP by walking, sprinting, swimming and flying. The wild dog boots, and preferably potion of nimbleness from The Betweenlands, and running on the top of the canopy of the Phantom zone in Twilight Forest will let you get to level 25 in roughly 15 minutes. Creative flight is bugged so the Vicio elytra mantle is recommended if you must fly, but sprinting with the wild dog boots gets you leveled faster.

**Amara:** Level with the amount of damage you take. Armor will get hosed, so focus on some healing trick to level quickly. Craft a betweenlands potion of healing with max potency(V), disrobe yourself, drink the potion and stand next to the saw [Optionally put Spikes beneath you for more damage]. This gets you leveled from 1->11 with potion 1, 11->20 with potions 2,3,4, and 5, each potion lasting 2 minutes.  Note: Don't get Added Armor, nor Bulwark while leveling as it reduces damage taken.  Another approach is to do the Sun Dance from Totemic which won’t kill you, but still do damage.

**Aevitas:** Placing blocks gives you experience, the harder the better. Wood has a hardness of 2, same as cobble (see [this table](https://minecraft.gamepedia.com/Breaking#Blocks_by_hardness)). Get a lumber axe from Tinkers Construct, mine big trees and place the logs. If you've automated obsidian farming then they are worth 25 logs in XP.  280 wood logs placed gets you to level 2. Use an iron wand to speed up placing blocks. An iron wand maxes out at 9 blocks placed. Wait for a diamond wand for faster XP gains.

**Evorsio:** Gain XP by mining blocks. A tinker's construct lumber axe working away on Twilight Forest giant trees are your path forward. An axe with the Dense property and 8500 durability and 3 giant trees gets you to level 16.

### Rituals

* The Attunement, Size and Purity of the crystal are all that matter. Cutting doesn't matter.

* Don't waste time on a Mineralis ritual yet, it’s been reported and the configs need to be altered so it doesn’t break pack progression. Mining with this method results in a break in progression, as it can provide ores from GalactiCraft planets / Asteroids, this nullifying most of intended GalactiCraft methods.

### Misc

* Having two Chalice of Containments one with lava and one with starlight will mostly make sand, but will also give you aquamarine shale and the rare rock crystal. While the aquamarine found in the beneath is not affected by luck, aquamarine shale made this way is. You average 3 shale per bucket of lava and starlight and if you use resonating gems you typically get more than a bucket of starlight. Recommend using an ender hopper or similar to collect items. Note if your server is using Sponge, the two chalice thing is bugged. Blood magic Senade of the nether is a great way to get lava.

* You can build yourself an indestructible chamber with the Illumination wand. Inside you place any kind of stone. When you wear Mantle of Stars attuned to Fornax and set yourself on fire (e.g. with flint & steel) you melt the stone to lava source blocks.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_27.png)

### Stellar Refraction Table Constellation Effects source

(Sourced from [Mischief of Mice's video here](https://www.youtube.com/watch?v=LOtA7MZC2-M&list=PLQzDSnrhrcyyZKmHp1zdj03jRbuZN7NOh&index=6))

Infused Wood is made by throwing oak logs into starlight. 

The drawing table works by placing a special glass sheet on top and etching it with 1-3 constellations. You first etch it by placing the astral sorcery parchment in the lower section, opening the UI and dragging 3 constellations onto the main area. There is a chance that the paper gets burned up. We don't yet know why, just try again. While you can place the constellations anywhere, their location doesn’t matter, nor does aligning any of the points. Only the overlap. There is some funky math it does behind the scenes, but the easiest is to just have them completely overlap each other.

You can only select constellations that are in the sky, so you may have to wait. After placing your 3 constellations, it will etch the glass with that selection. Take out the paper and place items that can be enchante

<table>
  <tr>
    <td>Constellation</td>
    <td>Potion</td>
    <td>Weapons</td>
    <td>Armor</td>
    <td>Tools</td>
    <td>Book</td>
  </tr>
  <tr>
    <td>Aevitas</td>
    <td>Regeneration I-IV</td>
    <td>Mending</td>
    <td>Mending</td>
    <td>Mending</td>
    <td>Mending</td>
  </tr>
  <tr>
    <td>Discidia</td>
    <td>Strength I-IV</td>
    <td>Sharpness III-VII
Power III-VII</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>Sharpness III-VII
Power III-VII</td>
  </tr>
  <tr>
    <td>Armara</td>
    <td>Resistance I-III</td>
    <td>N/A</td>
    <td>Protection III-V</td>
    <td>N/A</td>
    <td>Protection III-V</td>
  </tr>
  <tr>
    <td>Vicio</td>
    <td>Speed II-IV</td>
    <td>N/A</td>
    <td>Feather Falling III-V</td>
    <td>N/A</td>
    <td>Feather Falling III-V</td>
  </tr>
  <tr>
    <td>Evorcio</td>
    <td>Haste VI-IX
Attack Speed II-V</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>Efficiency III-V</td>
    <td>Efficiency III-V</td>
  </tr>
  <tr>
    <td>Mineralis</td>
    <td>Haste I-IV
Attack Speed</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>Fortune I-III</td>
    <td>Fortune I-III</td>
  </tr>
  <tr>
    <td>Fornax</td>
    <td>Fire Resist I</td>
    <td>Fire Aspect I-III
Flame I-II</td>
    <td>N/A</td>
    <td>Scorching Heat</td>
    <td>Fire Aspect I-III
Flame I-II
Scorching Heat</td>
  </tr>
  <tr>
    <td>Octans</td>
    <td>Water Breathing III-V</td>
    <td>N/A</td>
    <td>Respiration II-IV</td>
    <td>N/A</td>
    <td>Respiration II-IV</td>
  </tr>
  <tr>
    <td>Lucerna</td>
    <td>Night Vision I-III</td>
    <td>N/A</td>
    <td>Night Vision</td>
    <td>N/A</td>
    <td>Night Vision</td>
  </tr>
  <tr>
    <td>Bootes</td>
    <td>Saturation III-VI</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>Silk Touch</td>
    <td>Silk Touch</td>
  </tr>
  <tr>
    <td>Pelotrio</td>
    <td>Regeneration
Absorption</td>
    <td>Mending</td>
    <td>Mending</td>
    <td>Mending</td>
    <td>Mending</td>
  </tr>
  <tr>
    <td>Horologium</td>
    <td>Speed II-V
Haste VI-IX
Atk Spd</td>
    <td>Looting III-V</td>
    <td>N/A</td>
    <td>Fortune IV-VI</td>
    <td>Fortune IV-VI
Looting III-V</td>
  </tr>
</table>


# Age 3

**Ores:** Galena (Silver and Lead), Limonite (Iron and Nickel), Platinum, Cinnabar (Redstone), Bauxite (Aluminum), Nether Quartz, Nether Amethyst.

**Tools:**** **

**Key Items:**

## Uncategorized Tips

* If you want to minimize your time hunting for rock crystal samples, rush Starlight Infusion - that lets you create Stardust out of crushed Nether Quartz

* If you don't want to wait until the next age for wireless redstone, try using Cyclic’s Password Trigger. It will either toggle or emit a pulse when you type a certain message in chat (which it will also prevent from appearing). Just don’t lose track of your passwords.

## What you can do now:

* Vanilla Enchanting (including Ore Excavation/Veinminer)

* Buildcraft Pipes

* Storage Drawers Controller and Compacting Drawer

* Tinker's Construct modifiers

* Vanilla redstone circuits (repeaters, observers, comparators)

* Automated farming via Garden Cloches

* Automated Animal farming via Mob Filters combined with the [Feeding Trough]

* Vacuum/Ender Hopper

* Minecarts (Vanilla and Steve's Carts 2)

* Infinite water: A better with mods well bucket next to a water source can give you infinite water. A fluid hopper pulls it out.

## Obsidian

* Obsidian is now available. It used to be cracked basalt but now appears in the world.

    * Astral Sorcery crystal pick can mine obsidian very quickly

    * The swift pick from the betweenlands is highly recommended due to its insanely high mining speed. It breaks obsidian in a rate of about 1 a second.

    * The Bound Pickaxe from Blood magic is relatively cheap if you have a tier 3 blood altar established and has a cobalt mining level and mining speed of 10.

        * the only downside is that you have to have LP in your network when it is activated or you will take damage every so often

* Once you get access to excavation on a sufficient pick, use it on Obsidian! You only need to break one block for all the others to be mined almost instantly, making collection much easier. 

## Nether

* You can cast yourself a nether portal out of lava: ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_28.png)

* When turning netherrack into hellfire dust know that the 8th dust spawns a ghast if you don't have a urn under the hopper. If the hopper is receiving mechanical power, it also wont spawn a ghast or break when trying to create large amounts of hellfire dust.

* Nether Amethyst Ore only spawns in the vanilla Hell biome (get a Biomeanalyzer). It's rare, so Fortune III is recommended

* When farming a blaze spawner don't forget to make yourself some totems (fire protection). 

* Blood Magic's Sigil of the Phantom Bridge lets you get around easily, avoiding Thornstalks and Soul Sand

* Spawners can normally be picked up with the Carry On mod (shift+right click with an empty hand)

    * The Sack of Holding can also be used to pick up and move spawners without the drawbacks of Carry On

* Magma block/Netherrack over a Lightwell generates Lava for your furnace.

* To grow Nether Wart, you need Ichor (red liquid in arctic abyss biome) next to tilled soul sand.

## Better WIth Addons

* The ancestral infuser must sit on soul sand with the sand having nothing else adjacent, even diagonal. As it must also be dark, use an ender totem to give yourself night vision in a dark room.

* To make bamboo slats you need a soaking unit. The multiblock structure should look like this

* ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_29.jpg)

## Food

* Fish n' chips. This food restores 9+ full hunger bars and saturation. Every fish n’ chips also requires 1 paper cone made of 3 paper(recall the easier recipe for paper in this age). You get the cone back after eating it, so keep a slot dedicated for holding paper cones else you’ll drop them if your inventory is full. Note, this recipe uses only age 2 and lower materials but is only obtainable in age 3. 

    * The 2 best ways of getting lots of fish is either a waterfall or the strainer which needs worms to run. Worms come from using a trowel on dirt.

* French Fries (5% grain) made with potatoes.

* Cooked ghast meat. This food restores 4 full hunger bars and 5+ saturation Raw ghast meat can be obtained in large quantities in a ur ghast tower in the twilight forest. Note that ghast spawners despawn after 400 spawns. Raw ghast meat can be obtained in age 2 but only cooked in age 3

    * **Important**, eating ghast meat gives levitation 2 for 10 seconds, this could be beneficial or not depending on the situation

## Blood magic cont.

* To help provide more blood (beyond what the blood alter normally has capacity for, is. You can have a tier 2 alter take on transmutations that would normally require the capacity for a tier 3 or 4) make a ritual altar and attach a collector Crystal attuned to Aevitas. This gives you regeneration 2 while close by. Amplify the effect by having a collector crystal, also attuned to Aevitas, with the collector multiblock base then link it to the ritual pedastal. Before setting up the lenses place a ritual anchor 4 blocks above the center crystal. Then deal with the Beams of light which will then point out. Use lenses to redirect them back using the linking tool to link the lens back to the ritual pedastal. More beams will come out, repeat. Then put the other ritual anchor at your blood altar area. Then link the 2 anchors together. This brings the Regen into your blood altar area. With this super Regen start the transmutation and stab yourself till the transmutation is done.

* Another way to generate tons of blood is to have a ritual of sacrifice damaging zombies, then heal them with graveyard soil.

## Storage

* Obsidian chests are the best one block storage options for its price, each having enough space equal to 3 large chests (108 slots)

* You gain access to tanks, specifically from Immersive Engineering. While this multiblock is non-portable, it is very useful for storing large amounts of fluids. This is good for creosote, lava (though this might be difficult to collect), and water. These liquids have been, and will continue to be very useful (well you just gained access to creosote but it applies to it as well) so it is recommended to store up on them.

## Tinker's Construct Tools:

* Shuriken: The upper left-hand corner determines what material repairs it.

    * If you have access to obsidian and therefore Reinforcement modifiers, you can make a shuriken that's unbreakable (**infinite ammo**) right out of the gate by using one paper part. One paper, 2 bone, and one iron part gives 7 hearts of damage, increasing with number of hits. This can probably be increased further by replacing the iron with prismarine or firewood if you have access to those. The paper part can be replaced after leveling up twice.

* Note that sharpening kits only repair. **Don't plan on getting obsidian sharpening kits** to upgrade your mining level

* The silky touch modifier uses betweenlands gems rather than emeralds. This is useful for getting the ore itself, needed for a few recipes later and ore doubling

* You gain access to the Ore Excavation modifier in this age (alongside the ability to add modifiers in general). Check options for the keybindings available. Ctrl+OreEx keybind opens up a GUI that allows you to edit shapes if you want.

* OreEx will continue mining blocks with your tool, it only stops when one of the following happens:

    * Your hunger hits zero

    * You let go of the excavation key

* If you hold food in your offhand and have a gluttony charm equipped you can eat while ore excavating, allowing you to mine the max 4000 blocks all at once.

* You can swap parts on your tinker tools without any penalty. This lets you do something like create a pickaxe with a stone head, add the ore excavation modifier to it, and then mine through huge amounts of stone, repairing the tool as you go (make sure to have a Tool Station on hand and a LOT of food) in order to level it up very quickly. A good way to do this is to add, in order, the ore excavation modifier, 5 reinforcement modifiers (ASAP as soon as you get the levels, to make the tool's durability last longer than your hunger) to make it unbreakable, and then Luck III. Due to Ore Excavation, redstone (Haste) isn’t as important, so it can wait. Also, since you can replace parts without penalty, you can keep this pickaxe/axe/shovel/whatever for the rest of the game, replacing any part on it whenever something better shows up without having to worry about ever repairing it.

* Absolutely make yourself a Luck III pick (even 1 lapis + time or forking up the 360 lapis to quickly get to Luck III), either on your main pick or keep a spare just for the ores that are annoying to find (nether amethyst,  aquamarine, ...) (Just by adding only 1 Lapis will help, it slowly increases when used.)

    * Most geolosys ores are not affected by Luck, the ones affected by Fortune/Luck will be noted above in 	the Ore Distribution chart

* You can easily get repairable tinkers tools with mending moss (right click a moss ball on a bookshelf + have 10 levels to give up) and copper parts which causes lots of exp drops (when mining stone for example)

* Another alternative to using Mending Moss is to have a part made of Steeleaf, from The Twilight Forest. It's got great stats for Bows and Bolts, and it adds the Modifiers Twilit and Synergy. Twilit buffs damage outside of the Twilight Forest, and Synergy auto-repairs the tool for free as long as there are Steeleafs in your hotbar, with faster repair on how large your stack is. It doesn’t consume them and saves you a modifier slot

* You can clear out huge swaths of cobblestone using the Excavation + Blasting modifier + Gluttony charm + lots of food. Blasting 3 destroys all the cobble you mine. After blasting the stone you are left with easy to find veins. If you use Copper you get tons of XP as you're doing it. 100+ levels in 10 minutes.

## Stoked Fire

* Make a Hibachi and Bellows, plug bellows onto an axle and create a [redstone clock](https://minecraft.gamepedia.com/Clock_circuit#Repeater_clock) (or make a timer) that turns of/on the gearbox. Put a redstone torch next to the Hibachi and you should see a blue flame - stoked fire. This unlocks many new cool things, 

    * Note the bellows can breath on all Hibachis in a 3x3 in front of it.  More fire = faster crafting.

    * Nether bricks for the blast furnace (probably the most important thing to get as of now)

        * Note: don't put nether sludge in a crucible while it is heated with a stoked fire. It will explode.

        * Best way for potash is the sawdust from your saw.

    * The kiln is also another required machine. Note that to cook the unfired crucible the fire under the kiln needs to be red, not blue. Simply turn off the bellows and the crucible will start to cook.

* ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_30.png)![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_31.png)

* When you put [4 bricks above the stoked fire](http://sargunster.com/btw/index.php?title=Kiln) you will get a Kiln. You can make nether bricks in it - this unlocks the blast furnace from Immersive Engineering, therefore Steel and this will unlock doing most of the IE things in this Age.

* Nether Sludge can be hand crafted to Unfired Netherbrick that can be placed into the cyclic block placer as a way to automate the creation of nether bricks in the kiln. You can then use the Dark Utilities Ender Hopper to automatically pick the dropped Netherbrick up of the ground into a chest, just place the chest under the hopper.

    * Vanilla Dispenser works in place of Cyclic Block placer and is much cheaper to produce

    * Vanilla Upper works in place of Ender Hopper and does not require Nether materials, [like so](i.imgur.com/ipS8GCM.png).

* In a kiln you can make Melon Pie(2 watermelon+raw egg+flour+sugar): **4% Fruit**

* When you put a Better with mods stoked Crucible above the stoked fire you can melt down armor (gold and iron) to ingots and nuggets. Combo this with the hunting dimension and a mob grinder there to get infinite gold and iron.

## Water

* Be prepared to run utilities to various corners of your base. Organising "steam tunnels" under your base will make routing water and other liquids between machines less tedious, leaving the sky available for "dire wires".

* Make sure to build a cactus zone for easy harvesting of cactus if you plan to use buildcraft pipes. Make sure you can walk away with at least a stack each harvest. (See also: sugar cane, swamp reed for doughnuts). 

* A redstone engine pumping water out of a Better with Mods Well Bucket surrounded on all sides with water blocks will serve your resource needs well. (Note that the water bucket is available in age 2, but if you've settled near a river or ocean, this problem only becomes fraught at this age.)

* Another reason to run a *single* water network around your base is that the buildcraft fluid transport pipes have a non-trivial amount of fluid storage inside of them. While they do not have nearly the same transport rate as Immersive Engineering pipes, the virtues of cheapness and a water buffer are good. (The buffer is only useful insofar as you have some pipes exposed so you can see if there is a problem when walking past. Build diagnostic pipe sections accordingly.) For steam tunnels, know that you can disconnect immersive engineering fluid pipes with a hammer (in case of junctions) and that stone and cobblestone fluid pipes do not connect to each other. Next age you'll want a fluid pump (make sure to supply it redstone and power, and have at least one input (hit with hammer) open to 3 or more tiles of water source.

* Running power in your "steam tunnels" is not an awful idea, and will reduce the amount of incidental shocks occurring, but requires pre-planning.

* See [this imgur post](https://imgur.com/r/feedthebeast/e0rgiiR) for a Age 2 water tower distribution network. 

## Immersive Engineering/Tech/Petroleum

* Put a crafting station next to your coke oven to easily make treated wood. The bucket input and output slots are visible as attached inventory slots in the crafting station. You can also use a Jerrycan to do 10x crafting recipes at once.

* After making the Engineer Manual and Workbench, focus on shooting for Thermo electric generators. Put ~6 of them diagonal to eachother. Down 1 bishop's line put lava (the hottest liquid you have). In the next bishop’s row put Liquid starlight (the coldest liquid you have). Repeat for each bishop’s line making opposite sides of the generator with maximum extremes of temperature liquids.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_32.jpg)

* Except power, first thing you should make is a Metal Press (more efficient rods and wires).

    * Have the press feed into a chest.

* Craft capacitors to store power. Put LV Wire Connectors on the generators. Use LV Wire to connect to a central LV Wire relay, then connect that to a capacitor. Make sure the capacitor has a blue ring to receive power.  Now you can pick it up and power the Core Sampler. Once you've found oil you are going to want to string power to the Pump Jack (an LV capacitor powers it for 30 seconds, not enough time). You can either connect the capacitor with wire to the Core Sampler or use the hammer to make one side of the Capacitor orange (output power) and place the Core Sampler on that side to power it directly.  Create 4-5 capacitors and stack them end to end, so the input is coming in the top, and you power your stuff from the bottom. This gives you a deep buffer to power your machinery.

* The main quest progresses through the Immersive Petroleum and a part of the Immersive Tech questline, you will need a lot of steel to complete it, but otherwise it is fairly straightforward.

* Wire Connectors can pass power through a block by putting a connector on the opposing side and right clicking with a hammer.

* Engineering components are cheaper in the workbench than in the crafting grid.

* In Immersive Petroleum, you will be required to find (using the Core Sampler) and create an Oil Pumpjack. The oil will go through the Distillation Tower, which will turn it into Naphtha and Diesel. Additionally, the tower will spit out Bitumen as another byproduct. Both the Naphtha and the Diesel have their uses, so be sure to store them.

* The Pumpjack can also be used to collect non-oil liquids from the core (beneath bedrock), such as water and lava. This is one method of collecting the liquids for crafting uses, though do note that just like the oil this is finite.

* When you need power on the go, the terminals of an HV capacitor can connect directly to contacts of the core drill (and charging station) saving quite a lot of fiddly setup and teardown of wires. Make sure the capacitor is showing an orange face on the side you place adjacent to the drill/charger.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_33.png)

* If you navigate to a multiblock in the engineers manual then craft the book with the projector, it will make the projector project that multiblock. Crafting it with anything else removes the ghost from the world. You can rotate the projection by middle clicking.

* All machines in the 3 mods (Immersive Engineering, Tech, and Petroleum) use up a good amount of power. You want a just as effective power generation to power these machines, especially the constantly active ones. The strongest power generation possible at this level is Biodiesel, which produces 4096 rf/t with a upkeep requirement (due to the machines required to get the biodiesel) of 904 rf/t (wiki says Fermenter requires 8rf/t). You can also wait until Age 4 and use a different powergen option, like the ones from Advanced Generators.

* Having 2 garden cloche feeding melon slices to the fermenter and 3 garden cloches feeding melon seeds to the squeezer should maintain 2 diesel generators working giving a constant 8192 rf/t.  Industrial hemp seeds, which you can get from the market and then grow in a cloche, are another good option for the squeezer.

* Try to get the Crusher, Squeezer, and Arc furnace as early as possible. These three machines are the key components to ore doubling (finally!) and will be very helpful in the long run. Make sure to have the power to maintain these though, as they do use up a fair amount of power.

    * Enchant the electrodes with Unbreaking to greatly extend their lifetime

    * Use a wooden hopper to place 1 item at a time, thus spreading out ores over the 12 input slots.

* You have access to Garden Cloches. Use Pumpjack for the water (again, finite), and make sure to have the power to maintain them. These are very useful farms which also take up a very minimal space. Alternatively, you can use a well bucket and a liquid hopper as an infinite water source.

* You can attach a capacitor directly to your kinetic generator, no connectors needed

* The portable generator is a cheap and easy way to produce power, once you've acquired gasoline. However, it's rather inefficient, and isn’t viable for building a self-sustaining oil industry. 

* You can have a 2x2 solar tower grid with each tower sharing 2 solar panels with its neighbors. Only the top block of the solar panel needs access to the sky.

* Just make a boiler (not solar) and then only long enough to get two buckets of steam. That'll be enough to get to age 4, then you can use a heat exchanger (advanced generators) to get cheap steam. One bucket of lava makes at least 6x more steam than a bucket of diesel (and you can use the diesel for power or kerosene instead). As of 3.0.8, lava doesn't seem to work in a boiler.  Biodiesel does, however.

* If you are just rushing to Age 4, then consider re-using your modular machinery blocks to switch between the three modular machines required to make plastic. You only have to switch out one or two blocks to switch between chemical mixer to liquid processor and etc. But there won't be an alternative way to make plastic in Age 4, so you’ll need a full setup sooner or later.

### Metal Press Automation

Metal presses are slow, and feeding them by hand is tedious. A slightly more sophisticated configuration makes it possible to batch arbitrary amounts of ingredients, even if the (gears) contain multiple input ingots.

* *Single-ingredient automation:* A hopper inputting *directly* into the input belt of the machine press, and some sort of inventory directly on the output will feed single ingots into the machine as they become available.

* *Multi-ingredient automation*:  You will need four things: an extracting conveyor belt attached to a chest or similar inventory, wirecutters, and a redstone clock from the cyclic mod. Position the extracting belt such that items falling off of the belt will fall onto the input belt of the press (you may need to upgrade to caged belts or glass walls if you are wearing magnetic armour), and the redstone clock immediately adjacent to the belt. The belt will stop extracting when it gets a redstone signal. With the wirecutters you can adjust the extraction timing of the belt to 4 ticks. You can then set the redstone clock with a duration (redstone on) around 64, and a delay (redstone off) of 4 times the number of ingots to drop. This will eliminate huge item spewing issues and offers a way to set-and-forget large item pressing batches. Once you advance into the next age, you can run belts or simple inventory managers to the output of the machine to have these resources automatically move into storage. Using the extracting belt means that extracted items can fall onto the metal press. Using a hopper (base 8 ticks) would require an extra belt to insert onto in any event.

## ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_34.png)![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_35.png)

## Airship

* Even though the airship looks cool, it's not on the main questline and it’s very expensive to make. It requires you to upgrade the extended crafting table, and then make the airship using a lot of resources. Prioritize other progression before making it.

## Blood Magic

While normal spawners only spawn 400 mobs, Betweenlands spawners are infinite. Use them below your blood alter and harvest spawns with 

## Infinite Ores

Mark/Ritual of the Falling Tower is a high tier Blood Magic ritual requiring 1M blood and summons a meteor directly from the sky. Put an obsidian block 20 blocks above the center to catch the meteor.  Use Ritual of Magnetism to pull the meteor's ores into a 3x3x3 and the Ritual of the Crusher to mine it.

This mining process bypasses SevTech's mining, allowing you infinite access to diamonds.

The best bang for the buck is using a gold block to initiate the Ritual of the Falling Tower.

Steve's carts

# Age 4

**Ores:** Assorted Quartz (affected by Fortune), Silicon Ore, Ardite Ore (Nether normal gen) and Cobalt Ore (Nether normal gen)

**Tools:**** **If you didn't unlock Journeymap in Age 2 or 3, it will automatically unlock on entering Age 4.

**Key Items: **

## Uncategorized Tips

* In Age 4 you unlock the Large Storage Crate from Actually Additions, which gives you three pages of 13x9 storage (351 stacks in total) in a single block. This is just over 3 times as efficient as the obsidian chests, and the best part is that they still work with crafting stations for easy one-click recipe crafting. Until you have a decent gui storage method, this is a very viable solution to overly complicated chest layouts.

* Ender Utilities is now open. Tooltips are super informative.

    * Note: The Ender Bag only works with vanilla chests

* Hopping Bonsai pot lets you farm wood easily and is cheap

* The Enchantment Extractor lets you pull "Experience Boost" enchant and put it onto a sword. Combine with the Mob Imprisonment Tool (which remembers mob HP when captured) to make an XP/Loot farm.

    * Enchantment Applicator can boost Astral Sorcery enchants which are higher than vanilla versions. Use the Fluid Converter to change out Cyclic XP for Essence.

    * The Mob Duplicator has a range of 1, ie. on top. No need to blow/push mobs into your grinder.

* IF's Rancher gets around BWA’s Fleece and harvests wool from sheep directly, this can also occasionally be a source of powdered dye production from further processing the coloring byproducts from crushing wool

* IF's Water Condensator produces about 100mb/t of water per water source block adjacent to it

* A fairly cheap way to get fast transportation from your base to the end is to make a Astral Sorcery Celestial Gateway. The Celestial Gateway needs sky above it to operate, so place it above the stronghold (or make a skylight down to the End portal). You can also make the gateway directly in the End. *you can name the gateway in an anvil and the name will appear above the star.

* After going to the End, you can use the Ender Utilities' portal (portal frame blocks + 1 or more portal control panels with 1-8 linking crystals in each panel) to easily set up cost-free teleportation to wherever you want (cross-dimensional), as long as you’ve linked the location to a linking crystal. You can pair this with an Ender Porter with it’s own linking crystal to go back to your base from anywhere (Advanced Ender Porter needed for the teleport back to be cross-dimensional). The Porter needs an ender capacitor, but the portal multiblock does not.

* There are several pre-cobalt pickaxe heads able to mine cobalt. These are: Obsidian, Twilight Forest's Knightmetal, Blood Magic’s Bound Pickaxe, and Abyssalcraft metals (abbysalnite, refined coralium, dreadium). Abyssalnite is found in Darklands biomes below Y = 32. It’s VERY rare. Refined coralium is made by smelting down Liquified Coralium, found at Y = 22 and below in the Abyssal Wasteland dimension (not too hard to find, definitely easier then abyssalnite). Note that the Abyssal Wastelands have a bunch of shrine looking things with ladders underneath them (you need to break a block to open the passage) with chests very often containing abyssalnite and other goodies. Dreadium ingots can be acquired in the Dreadlands most easily by using the Transmutator on certain mob drops from that dimension. Just don’t use a tool made from Dreadium as a weapon, as explained above. 

* Refined Storage can be connected to a drawer controller via a [External Storage](https://refinedstorage.raoulvdberge.com/wiki/external-storage) connector.

* Combine an XP Tap, Ariel interface, and liquid hopper to recycle XP. This let's you recharge items with the Mending enchant for free.

* Applied Energistics Storage Bus can also be attached to a drawer controller. Set the priority high to automatically store items in the assigned drawers connected to the drawer controller. This is a great way have your favourite items like ingots on display and be connected to your ME network.

* Before going to the moon bring either a Celestial Gateway or the ender utilities portal setup. The age advancement freezes your game for a little bit and can cause you to crash before the game unfreezes. If you get stuck, you can use the command /gchouston to return to the world spawn point on Earth.

* To get rocket fuel (just called fuel) you need to make an Oxygen collector and pipe the oxygen into an IE refinery with Kerosene.

* Remember a parachute when traveling in the rocket, this isn't advance rocketry where the engine control the landing. You need a parachute or you will crash land. Note that when you travel to the moon it resets your spawn and you’ll be in a death loop as you respawn without your spacesuit.

* To get a very cheap and easy supply of wood, sticks, and fruit, set up a Bonsai Hopper with your choice of sapling

    * Bonsai trees void all surplus production, so if you don't want a specific product (like leaves or sticks), put a drawer under a bonsai hopper and place in the materials you want to keep

    * You can use both Oak and Menril saplings to get an infinite and cheap supply of Fruit nutrition with apples or Menril Berries (Menril Berries can also be crafted into Menril Torch)

* Alien Villagers use Lunar Sapphires as currency. You can find these in dungeon chests, or trade them for Jungle Saplings.

* As of Version 3.0.8, currently unresolved, the Mechanical Squeezer will drain an infinite amount of power constantly. To counter this, use a LV or MV capacitor to reduce the power transfer rate and a breaker switcher or switchable aluminium wire to turn it on and off as required. 

* Don't bother with compacting drawers to store ingots, they do not convert between blocks and ingots.

## Storage

There are 3 main ME systems available: Refined Storage, Applied Energistics, and Simple Storage.

Refined and Applied don't yet have the ability to do automated crafting, nor deep storage. Thus all 3 are at best a way to sort your junk into a central system that can make crafting much easier.  Use a Junk Storage to store your non-stackable items and useless junk.

### Simple Storage

This mod allows you to connect the core storage block to your existing storage chest layout, as well as a tablet for remote access. The tablet comes in 2 flavors, a 64 block radius, and an advanced one for multi-dimensional access. At this point in your progression the advanced tablet is not that expensive. The Large Storage Crate mentioned earlier will also connect to this network for easy mass storage. Combine this ability with the advanced tablet for all the storage you'd ever need and the ability to craft anything with your items anywhere in the game. 

### Refined Storage

SevTech has gated refined storage on the same inscription plates that AE has, requiring a fair bit of tech either way. Thankfully you can craft them instead of exploration for meteors and a high tier pick. 

The primary purpose in going this route is if you plan on upgrading to the computation plate in age 5 for auto-crafting.

Because you don't have much in terms of storage, using obsidian chests and external storage busses will be the way to go for storage.

#### Tips

* Grab the wrench made out of quartz to rotate the inscriber, allowing you to use a hopper for all 3 inputs, thus automating circuits.

* Actually Additions Large Crates hold considerably more items than obsidian chests and can interact with the external interface

### Applied Energistics

See refined storage above. SevTech has both mods with enough item gating that both paths are equivalent.
 	

## Power Generation

* You have a few options for power generations at this point, most of which are connected to diesel.

* Immersive Engineering: Having 4 garden cloche with melon seeds feeding melon slices to the fermenter and hemp fiber seeds to the squeezer can maintain 2 diesel generators working, giving a constant 8192 rf/t, use MV connections and not LV.

    * For infinite water use an Immersive Engineering Pump connected to a 2x2x2 or 1x3x1 hole full of water sources, use the hammer to set input to one side facing the water and output to the side facing the pipe. Needs energy and a redstone signal to work. A well next to a single water source block will also provide enough water for around 9-10 Garden Cloches without a problem, and doesn't require power.

    * Adding a tank between the refinery and the generator can give a Biodiesel buffer

    * For crafting melon into melon slices use an Automatic Crafter from Inductive Logistics, set them to craft 4 (1 from each garden cloche)  items at a time to speed them up.

        * Alternatively a compacting drawer will also convert a melon to 9 slices. You'll need to filter the output to only the slices (easiest way is to another locked drawer with slices), and the compacting drawer is a little expensive at this stage, but might be worth considering.

    * The Automatic crafter takes inputs from an adjacent inventory and you need pipes to extract the output.

    * Any pipe should work, I like the Inductive logistic ones (Extraction, Transport and Injection).

    * The Obsidian chest is fairly cheap (8 obsidian blocks and a chest) and has plenty of inventory.

    * When out of energy a few watermills can "Jump Start" the setup.

* An alternative source is a Steam Turbine + Alternator connected to a solar tower (or more than one). With the only input being water, you get a steady stream of RF and a peak output of 24kRF/t (6 4kRF HV lines). A 512B tank holds enough steam to run an arc furnace through 24 stacks of steel (12 at a time) with no buffering (see below). Once setup, there is no upkeep required. Each bucket of steam produces about 1.25MRF, or 2.6 seconds of 24kRF/t. Note: This can be lossy as the steam turbine outputs 24kRF/t on demand, regardless of actual power draw. So building a buffer and running it only when your buffer is low is highly recommended.

     ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_36.jpg)      ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_37.png)

* Advanced Generators: A Gas turbine feed with Kerosene and with an Air/Gas Mixer for efficiency can give nice power output.

    * To output RF from it use a Forge Generator connected to a Power Adapter.

    * Adding a Gas Mix Compressor when enough ender pearl are available will further enhance the efficiency.

### Schmitt Triggers

A schmitt trigger is something that turns on at a certain level, and then turns off at a different level. [This post](https://www.minecraftforum.net/forums/minecraft-java-edition/redstone-discussion-and/2980824-redstone-schmitt-triggers) has a diagram of redstone based schmitt triggers. 

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_38.png)

Building a do-nothing trigger to understand the various components is very important. 

The main insight needed for a schmitt trigger at this tech level is that an HV capacitor can output it's fill-level via a comparator. It is important not to use the wireless transmitter and receiver from cyclic, as they do not preserve the redstone level, but only presence/absence of signal.

* I use the redstone block to indicate a known strong redstone source. In the actual deployment, this is linked to a lever next to an iron door (rotated to be closed when the power is on). 

* The side redstone input represents the signal coming from the singular HV capacitor. As they will tend to drain in series, rather than in parallel, choose a capacitor that is in the "middle of the pack" (of 8) and easy to access as your diagnostic output.

## ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_39.png)![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_40.png)

* It's important to make sure that when the HV capacitor is full, the signal the first subtraction comparator applies zeros out the redstone signal. Some playing with signal strength is warranted. This configuration results in outputting a redstone signal when charge is needed. (I hit my generators with a hammer to have them only turn on when they get a redstone signal)

## Pneumaticcraft

You need to get your hands on compressed iron. The metal press has a plate for that, but it's much more efficient to use TNT for it (Only 20% loss compared to 55%). Angry pebbles from the between lands also provide enough of an explosion to create compressed iron. It’s easy to assemble the pressure chamber 3x3x3. Remember to make 2 interfaces and a valve. The interfaces has an "I" or input side and an “O” side or output. Make sure you have one input and one output on the outside of the chamber. Hook up an air compressor with pipes to the valve and use a lever on the compressor to turn it on and off (you will need to configure it). Note that before turning on pressure into pipes, loop the pipe back onto itself making a closed loop, otherwise your compressed air fizzes out. Place a chest on the output interface and a hopper going into the input interface. You are still able to click on the output interface and you need to setup filters so it won’t pull out the items you are trying to process. Start with filtering for compressed iron and then throwing in iron ingots into the hopper. With pressure adding to the system you should be able to get compressed iron much easier.

**Warning:** pressure has a max and you can have machine blow up if they go into the red. This is why its important to be able to shut off the compressor. Safety valves and security upgrades can be useful in preventing explosions, and you can shut off the compressor using a simple redstone + pressure gauge system.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_41.jpg)

You will need a plastic mixer to get colored plastic (note this plastic is different from the Industrial Foregoing plastic) The mixer requires heat, a torch is very slow to heat, lava is slow and will turn to obsidian after a while. You can use blood magic's serenade of the nether to get lava and place it all around the mixer to speed up the heat. Or you can just use a vortex heater. Using molten plastic from Modular Machines bypasses the need to be heated. It uses red,green, and blue dye powder to color the plastic and if heated high enough can remelt unused plastics.

Compressed iron and green plastic makes a circuit board, which then you place in the UV light (which does require pressure) after it hits 100% throw it in some etching acid (made in the pressure chamber) Note with items floating in this pack make sure you block in your acid completely, half stabs on the bottom will let the board flow out of the acid. 

The tablet needs a charging station like the wrench and when you have a charge, you will need to shift right click on the tank that contains the fluid to sell, or on the chest with the item to sell. And then shift right click on the tank/chest for the sold item to go into. Right click with the tablet, right click to add to your order. Then click the order button for the drones to first take the item, then delivery the item.

When it comes to making the assembling line you will need a pneumatic wrench, right click the IO assembler arm to turn it blue, Blue is the the input and orange is the output

## Initial Automation (and drawbridges)

The lesser-known mod: [Modular Routers](https://github.com/desht/ModularRouters/wiki) can automate PCB, Engineering, and Logic Circuit creation (barring only the manual processing of galacticraft metals). It will be far less tedious to use this mod after you are able to visit the end, as the "Connect to any inventory within 12 blocks" level 2 modules require ender eyes (process ender pearls at a chalice-equipped lightwell for free eyes) to function. 

* The primary constraint of the item router is that it can only buffer a single stack of items internally. To enable batch processing, make sure that each "batched" ingredient is moved around by its own item router. The blocks themselves are cheap, it's the ender eyes for easy routing that are expensive.

* Through strategic pullers, senders, and whitelists, the above is all that's needed for logic and engineering circuits. 

* For PCB automation, having multiple item exporters pulling (filtered) items from your pressure chamber will make automation easier. Then have a buildcraft automated crafter taking finished parts from a modular router adjacent to it, with the router pulling from various chests as appropriate. 

* Modular routers can also place blocks in the world, providing for farming, automatic harvesting of cactus, drawbridges, and secret doors.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_42.png)![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_43.png)

# Age 5 

**Tools: **

**Key Items: **See individual Galacticraft section

Stage 5 really opens to be a kitchen sink pack with a lot of default recipes and minimal tweaks in configs. The only real big recipe changes are the creative items.

Mob duplicator and Mob Crusher can be your friend on getting hard to find mob drops. Any spawner that you can stabilize with spawner agitator (or building in a slime chunk) can get you mob essence which you can use with the mob duplicator to get any mob you have capture in a mob imprisonment tool. Making a RFtools spawner with a wither essence is another good idea as the mob crusher will kill the wither instantly and convert its xp into mob essence.

## Uncategorised Tips

* With your earliest emerald and diamond (use the starlight transmutation to swap their ore blocks around and starlight infusion to get 4 stones per ore) craft an inventory upgrade from cyclic (and maybe crafting table if you do not yet have a simple remote). 

* A powered diamond anvil is a good way to repair your expensive weapons and armour from previous ages if you don't have the mending perk from astral sorcery or steel leaf tinker's items.

* You can upgrade your gold backpack to a diamond backpack for more personal storage if you don't have a universal remote from simple storage.

* The speed charm provides a meaningful (stacking) bonus to speed, even when in astral sorcery creative mode flight. (the spectral wings perk combined with the Vicio mantle of stars provides no-upkeep creative flight.)

## Power

* RFTools Powercells transport power interdimensionally

* Aluminium wires have an unlimited transfer rate and are extremely cheap to make. One of the best power transfer options, especially late game.

* A great early Age 5 power generation is Advanced Generators. You can make Low Grade Charcoal in Kilns, mill it up with a horse powered millstone and then pump into a Syngas producer, use the Syngas in a Gas Turbine Generator and you get 1k+ RF/t easily.

* Alternately, an Advanced Generators Heat Exchanger with a single heat exchanger is sufficient to power an Immersive Tech Steam Turbine/Alternator setup with little water/lava required.   The Alternator can only connect to IE wiring but IE connectors can connect to Mekanism Universal power cables.  The major cost for the setup is the amount of steel required for the turbine/alternator setup. You can connect universal cables to HV capacitors for maximum power output from the alternators.

    * A lava fabricator connected to a MV capacitor to reduce power draw will happily provide a Advanced Generators heat exchanger with enough lava to keep up with steam production demand, and produce a little extra lava on the side. You can increase the power drain by using HV Capacitor or alternate power method to create a supply of lava. A turbine will produce 26k rf/t, and the HV capacitor will only draw 4096 maximum.

    * 3 or 4 wells around a single water source block will provide a heat exchanger with enough water to produce plenty of steam to happily power two Steam Turbines. Very low cost to set up and, doesn't require redstone or power. A basic mechanical pipe from Mekanism set to pull will suck out the water from the well in to the heat exchanger. 

## Ore Processing

* The starlight infuser is excellent for early age 5 diamond duplication, returning 4 diamonds to 1 silk touched ore. Starlight transmutation can make emerald ore out of diamond ore.

* Mekanism Metallurgic infusers have a 1:5 tin to copper ratio for making bronze

* Putting a diamond into the enrichment chamber can get you 8 times the diamonds for the infuser. This is true of any recipe in the infuser that can accept a compressed variety of the item. E.G. Carbon (coal), Redstone, and Refined Obsidian.

* Mekanism Ore quintupling is now available, though very expensive. To get started, you will need a Purification Chamber, Crusher, Enrichment Chamber, and the other machines necessary to get them and to maintain them (P.C. requires Oxygen, created by the electrolytic separator when water is processed). Note that you cannot ore double with Mekanism, as it creates a different type of iron dust that cannot be processed. This forces you to go straight for Ore tripling. After getting this, you can slowly progress towards upgrading your machines and power gen, while working towards ore quadrupling and quintupling (4x and 5x).

* If you silk touch mine Silicon and Redstone, you get Silicon and Redstone Ores. You can crush the ores with a Actually Additions crusher into a lot more resources than you would get if you simply mined the geolosys ores. This can help you get your 64k drive more easily. Other ores this works with is: Lapis, Coal, Nether Quartz (don't silk touch assorted quartz though).

* Once you have decent power generation, a T1 Void miner from EnvironmentalTech is easy to make. It needs about 660RF/t.

    * Make a bee-line for Erodium and upgrade your solar panels to tier 2 erodium panels. A Tier 2 void miner consumes the same energy as Tier 1.

    * A Speed Modifier will double the energy consumption of the void miner.

* The Electric Arc Furnace from Galacticraft will DOUBLE outputs of ordinarily smelted ores. This is extremely useful for Meteoric Iron and Unrefined Desh!

## Storage

* Quantum Storage Disks (from Quantum Storage compat with Refined Storage) store 2.14B items of any types and are very cheap, it trivializes most other storage options in the pack

* As far as item transfer (if you don't count the computer system), unfortunately there is no Ender IO in the pack. The closest thing I could find is Inductive Logistics (and later on xnet might be a better option).

* Modular Routers is also quite effective for item transfer.

## Space

* Consider diving into the astral sorcery teleportation for quick access to oxygen.

* Pressing shift to dismount while in a spaceship is possible, yet your rocket will still fly off. DON'T DISMOUNT.

* You'll want an oxygen collector if you plan on doing anything productive on other planets. Leaves and crops create oxygen for it to collect.

* If you eat the cyclic "Inventory Upgrade" pie you get another backpack-like inventory. There is a key-binding to swap armor sets with the left-most slots. This is helpful when going back and forth between space and the overworld

* Despite the Tooltip saying you don't need RF on your spacesuit, failing to do so makes it get destroyed super quick. Enchant with Unbreaking to reduce this damage.

* If you put mending on your space suit you can repair the durability with XP. Use the XP Spiggot to recycle XP into durability.

* Desh is a critical ingrediant going forward. Use excavation to mine out areas leaving the desh exposed.

* After you obtain Desh on Mars, both the RFTools Matter Transmitter/Receiver and Mekanism Teleporter can be built as well.

* The Slime Sling is a great mode of transportation on the low gravity planets.

* Living armor with Elytra upgrade and air sigil is also great transport

* The weirding gadget only works while you are in space. Slightly helpful to farm meteors.

* The Spawner Seeker from Cyclic can be used to find the dungeons on the planets.  It has a range of 128 blocks and will find the spawners in the dungeon.  You may have to make multiple jumps using the slime sling but it's often easier than searching for the entrances.

* If you get stuck on a planet in a death loop or no way to get home, you can type /gchouston in the chat twice to be sent back to world spawn

* Mercury is the same tier as Asteroids, but offers Solid Meteoric Iron much more easily. You can find both Solid Desh and Solid Meteoric Iron asteroids on the surface of Mercury, each yielding over a stack of the solid block. 

### Moon

* Can trade for the Tier 2 Rocket schematics with villagers if you don't feel dungeon crawling for one

    * Note: you need the buggy schematic to get the rocket and the rocket to get the buggy schematic.

* GalactiCraft ores are not staged, and therefore fake players can quarry them

    * For quarrying, the two best options are RFtools Builders with a storage filter module (for blacklisting)

        * Some ores (ilmenite being one) do have issues with metadata matching with ores. There are some cases where you may not be able to use a filter from RFTools and have to void off the materials you don't need. The Builder has a problem with filtering out the Ilmenite with the base rocks. Storage Drawers with void upgrades work great for this on the other hand.

    * Note that the ingots are not the same as the ones you've created up till now, so you may find crafting recipes don’t work with them.

* Use Meteoric Iron sparingly until you get to the Asteroid belt as it's generation requires waiting in either the moon or mars

* Dungeon generation is different than before, dungeons do not share the same coordinates going from one planet to another

### Mars

* Has a higher meteor rate than the Moon

Asteroid Belt

* Ilmenite (titanium) is found in the asteroids along with meteoric iron.  

### Mercury

* One of the few GalactiCraft planets where you actually need the pressure suit as Armara + natural food regen cannot out heal the damage from this planet's environment.

* Mercury is required, not Venus.

### Venus

* Venus is super corrosive, as are the other gas giants. Sadly this is the only place to get the item that counteracts the corrosion. If you don't have enough regen then you’ll die and respawn on venus forever. So before you go here plan on teching up to fast regen. Probably will need to do the Armara regen, or possibly bring an rftools env controller with remote power to do some regen, or use a nanotech beacon with regen.

* The Tier 4 rocket plan say it's from Venus, but it's really from Mercury.

### Jupiter

* The dungeon is a little bit harder to find due to the fog, lightning storm, and monotone color palette of Jupiter, this was a screenshot of the dungeon entrance that I almost missed

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_44.png)

* Saturn, Uranus, Neptune

    * Same as the others, quarry it, loot it's dungeon

## Automation

* Once you get the calculation plate you can start investing in autocrafting with either Refined Storage or AE2

* Refined storage has the advantage of the quantum storage disks and not needing to worry about channels

* Extended crafting tables have a block to allow for automation, it does take power tho.

* Automating the metal press can be done by adding one extra conveyor belt and a hopper, normally you can just use a hopper, but any recipe that takes more than one item needs an extra belt.  Keep in mind that with this change, the hopper no longer directly inserts items into the conveyor.  This will cause items to despawn when doing large batches.

Astral Sorcery

* To automate getting star metal and stardust, use Refined Storage (or Applied Energistics) Constructors and Destructors with Vanilla Iron Ore linked to a Collector Crystal.

    * You can change Iron Ore Clusters/Space Iron/Abyssalcraft Iron into Vanilla Iron Ore with the Oredictionificator.

## Mystical Agriculture:

Tier 6 seeds work in the Garden Cloche, but don't work with dirt. You'll need the appropriate Crux as the "dirt", or a block of Insanium Essence for the tier 6 Inferium seed.

Garden Cloches are pretty fast with mystical agriculture/other crops, but I found that a 9x9 field surrounded by Cyclic sprinklers + 1 in the center is a bit faster. A Cyclic Harvester set to Area will do the area all at once also. Other alternatives like the AA farmer or IF Plant Gatherer can't keep up with the speed of the overlapping sprinklers. The Harvester does take RF power, even though it looks like it only takes coal as power.

It's possible to begin Mystical Agriculture without going to Space. The Mekanism Oredictionificator is capable of converting Iron and Copper ore into Kepler 22b Iron and Copper ore. This in turn can be used in Starlight Transmutation to create Inferium Ore and Prosperity Ore, thereby bypassing the need for Saturn Slime ore to create your first inferium.  

# Creative age

	Reached by making the Ultimate crafting grid. It doesn't have the normal shape to tell you it unlocks the next age.

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
  </tr>
  <tr>
    <td>kiln</td>
    <td>claybarrel</td>
    <td>stevescarts</td>
  </tr>
  <tr>
    <td>saltflats</td>
    <td>tin</td>
    <td>market</td>
  </tr>
  <tr>
    <td>horsechopper</td>
    <td>woodbasin</td>
    <td>depth</td>
  </tr>
  <tr>
    <td>tipi</td>
    <td>gearbox</td>
    <td>smeltertank</td>
  </tr>
  <tr>
    <td>grill</td>
    <td>prospector</td>
    <td>lapis</td>
  </tr>
  <tr>
    <td>workblade</td>
    <td>parchment</td>
    <td>gold</td>
  </tr>
  <tr>
    <td>flintknapp</td>
    <td>cart</td>
    <td>stopwatch</td>
  </tr>
  <tr>
    <td>chestupgrade</td>
    <td>stepup</td>
    <td>resonatingwand</td>
  </tr>
  <tr>
    <td>fish</td>
    <td>bloodaltar</td>
    <td>mapping</td>
  </tr>
  <tr>
    <td>melterbase</td>
    <td>parrot</td>
    <td>paper</td>
  </tr>
  <tr>
    <td>atlas</td>
    <td>beneath</td>
    <td>piston</td>
  </tr>
  <tr>
    <td>farmland</td>
    <td>astable</td>
    <td>wool</td>
  </tr>
  <tr>
    <td>woodhopper2</td>
    <td>dung</td>
    <td>starpowder</td>
  </tr>
  <tr>
    <td>lead</td>
    <td>chest</td>
    <td>skywave</td>
  </tr>
  <tr>
    <td>charcoal</td>
    <td>alloykiln</td>
    <td>extendedcraftingbasic</td>
  </tr>
  <tr>
    <td>wheel</td>
    <td>crafting</td>
    <td>betweenlands</td>
  </tr>
  <tr>
    <td>flamehopper</td>
    <td>hoe</td>
    <td>bucket</td>
  </tr>
  <tr>
    <td>workstump</td>
    <td>axle</td>
    <td>enderman</td>
  </tr>
  <tr>
    <td>abyssalgem</td>
    <td>huntingdim</td>
    <td>twilight</td>
  </tr>
  <tr>
    <td>weaponize</td>
    <td>furnace</td>
    <td>tcontable2</td>
  </tr>
  <tr>
    <td>upgrade</td>
    <td>turntable</td>
    <td>weedwoodsticks</td>
  </tr>
  <tr>
    <td>fiber</td>
    <td>coal</td>
    <td>weedwoodsword</td>
  </tr>
  <tr>
    <td>woodenbarrel</td>
    <td>bucket</td>
    <td>rockcrystal</td>
  </tr>
  <tr>
    <td>totemic</td>
    <td>blackquartz</td>
    <td>compass</td>
  </tr>
  <tr>
    <td>horsepower</td>
    <td>tchannel</td>
    <td>drawertable</td>
  </tr>
  <tr>
    <td>lowgradecharcoal</td>
    <td>statue</td>
    <td>biomealyzer</td>
  </tr>
  <tr>
    <td>handgrind</td>
    <td>pedestal</td>
    <td>wateringcan</td>
  </tr>
  <tr>
    <td>collectplank</td>
    <td>plumbline</td>
    <td>dowsingrod</td>
  </tr>
  <tr>
    <td>tomahawk</td>
    <td>stoneanvil</td>
    <td>iron</td>
  </tr>
  <tr>
    <td>melter</td>
    <td>aqueduct</td>
    <td>conpaper</td>
  </tr>
  <tr>
    <td>abyssalbiome</td>
    <td>necro</td>
    <td>lightwell</td>
  </tr>
  <tr>
    <td>mill</td>
    <td>leafbed</td>
    <td>glass</td>
  </tr>
  <tr>
    <td>buffalo</td>
    <td>extension</td>
    <td>tcontable1</td>
  </tr>
  <tr>
    <td>firsttool</td>
    <td>aquamarine</td>
    <td>controller</td>
  </tr>
  <tr>
    <td>saddle</td>
    <td>journal</td>
    <td>tcontable3</td>
  </tr>
  <tr>
    <td>firepit</td>
    <td>bronze</td>
    <td>astable2</td>
  </tr>
  <tr>
    <td>spear</td>
    <td>waterwheel</td>
    <td>weird</td>
  </tr>
  <tr>
    <td>firstbreak</td>
    <td>copper</td>
    <td></td>
  </tr>
  <tr>
    <td>baykok</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>firstchest</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>mesh</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>fluidbladder</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>mat</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>leather</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>woodhopper1</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>fire</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>gear</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>stonetools</td>
    <td></td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>stage3</td>
    <td>stage4</td>
    <td>stage5</td>
  </tr>
  <tr>
    <td>crudeoil</td>
    <td>silicon</td>
    <td>wirelesscharger</td>
  </tr>
  <tr>
    <td>iehammer</td>
    <td>ardite</td>
    <td>creativemodifer</td>
  </tr>
  <tr>
    <td>drawercontroller</td>
    <td>rsgrid</td>
    <td>creativeenergycube</td>
  </tr>
  <tr>
    <td>blazerod</td>
    <td>cobalt</td>
    <td>emerald</td>
  </tr>
  <tr>
    <td>projector</td>
    <td>launchpad</td>
    <td>diamond</td>
  </tr>
  <tr>
    <td>rails</td>
    <td>blockheads1</td>
    <td>inferiumessence</td>
  </tr>
  <tr>
    <td>steel</td>
    <td>amadrontablet</td>
    <td>prospectorstage5</td>
  </tr>
  <tr>
    <td>oreprospector</td>
    <td>manyullyn</td>
    <td>diamondjetpack</td>
  </tr>
  <tr>
    <td>circuitboard</td>
    <td>solidendereye</td>
    <td>t2rocket</td>
  </tr>
  <tr>
    <td>bauxite</td>
    <td>printedcircuitboard</td>
    <td>charger3</td>
  </tr>
  <tr>
    <td>liquidplastic</td>
    <td>endercrafter</td>
    <td>osmium</td>
  </tr>
  <tr>
    <td>vacuumtube</td>
    <td>certusquartz</td>
    <td>spacesuit4</td>
  </tr>
  <tr>
    <td>standardhull</td>
    <td>moon</td>
    <td>neptune</td>
  </tr>
  <tr>
    <td>netherbrick</td>
    <td>enderalloy3</td>
    <td>ultimateingot</td>
  </tr>
  <tr>
    <td>creosote</td>
    <td>pressurechamberwall</td>
    <td>creativefluidtank</td>
  </tr>
  <tr>
    <td>filteredhopper</td>
    <td>inscriber</td>
    <td>electrumjetpack</td>
  </tr>
  <tr>
    <td>platinum</td>
    <td>extendedcraftingelite</td>
    <td>scanner</td>
  </tr>
  <tr>
    <td>iebook</td>
    <td>spacesuit</td>
    <td>cheese</td>
  </tr>
  <tr>
    <td>conveyorbelt</td>
    <td>machinecasing</td>
    <td>prosperityshard</td>
  </tr>
  <tr>
    <td>woodhull</td>
    <td>compressor</td>
    <td>desh</td>
  </tr>
  <tr>
    <td>galgadorian</td>
    <td>laserassembly</td>
    <td>mars</td>
  </tr>
  <tr>
    <td>redstone</td>
    <td>plasticmixer</td>
    <td>creativecompressor</td>
  </tr>
  <tr>
    <td>naphtha</td>
    <td>ae2panel</td>
    <td>skystone</td>
  </tr>
  <tr>
    <td>workbench</td>
    <td>compressediron</td>
    <td>emeraldjetpack</td>
  </tr>
  <tr>
    <td>amethyst</td>
    <td>t1rocket</td>
    <td>creativejetpack</td>
  </tr>
  <tr>
    <td>oreexcavation</td>
    <td>prospector4</td>
    <td>ultimatecraftingtable</td>
  </tr>
  <tr>
    <td>steam</td>
    <td>fuelloader</td>
    <td>marsrover</td>
  </tr>
  <tr>
    <td>bellows</td>
    <td>enderalloy1</td>
    <td>saturn</td>
  </tr>
  <tr>
    <td>propene</td>
    <td>blockheads3</td>
    <td></td>
  </tr>
  <tr>
    <td>sampledrill</td>
    <td>enderalloy2</td>
    <td></td>
  </tr>
  <tr>
    <td>windmill</td>
    <td>blockheads2</td>
    <td></td>
  </tr>
  <tr>
    <td>modularmachinery</td>
    <td>theend</td>
    <td></td>
  </tr>
  <tr>
    <td>hibachi</td>
    <td>nasaworkbench</td>
    <td></td>
  </tr>
  <tr>
    <td>silverlead</td>
    <td>presses</td>
    <td></td>
  </tr>
  <tr>
    <td>distillation2</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>extendedcrafting1</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>netherexbiome</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>viescraft</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>waterwheel</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>stevescartsassembler</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>potash</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>plastic</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>bonehoe</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>compactmachines</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>netherwart</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>nether</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>buildcraft</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>nickel</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>soundmuffler</td>
    <td></td>
    <td></td>
  </tr>
</table>


# Cross-age Info

## Ore distributions

*(as of 3.0.6)*

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
    <td>Overworld (All biomes) & Twilight Forest</td>
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
    <td>38</td>
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


## Heatmap biomes

*Credit to /ChaoticNonsense on reddit for **[the researc*h](https://www.reddit.com/r/feedthebeast/comments/8crpq4/sevtech_heatmap_breakdown/)

## Climate:

SevTech does indeed use a heat/humidity grid system for its biome generation. The Z axis determines temperature, and the X axis determines humidity. Both follow a periodic pattern similar to a sine wave, where you move from one extreme to another, and the moderate levels are in between.

There are four Temperature levels, (hot, warm, cool, icy) and three humidity levels (dry, average, wet). As your coordinate values increase (Inc. X is east, Inc Z is south), you get the transitions listed below.

**Z (N/S)**: Warm -> Hot -> Warm -> Cool -> Icy -> Cool ->(repeat).

**X (E/W)**: Avg. -> Wet -> Avg.->Dry -> (repeat).

If one makes the grid of a full cycle in each axis, (now matching the cardinal directions) it looks like the table below. Obviously, the table wraps around when you go off an edge.

<table>
  <tr>
    <td>W/A</td>
    <td>W/W</td>
    <td>W/A</td>
    <td>W/D</td>
  </tr>
  <tr>
    <td>H/A</td>
    <td>H/W</td>
    <td>H/A</td>
    <td>H/D</td>
  </tr>
  <tr>
    <td>W/A</td>
    <td>W/W</td>
    <td>W/A</td>
    <td>W/D</td>
  </tr>
  <tr>
    <td>C/A</td>
    <td>C/W</td>
    <td>C/A</td>
    <td>C/D</td>
  </tr>
  <tr>
    <td>I/A</td>
    <td>I/W</td>
    <td>I/A</td>
    <td>I/D</td>
  </tr>
  <tr>
    <td>C/A</td>
    <td>C/W</td>
    <td>C/A</td>
    <td>C/D
</td>
  </tr>
</table>


There are a few other points/observations worth noting. The first, is that you will always spawn in a Warm Average zone. So generating a bunch of different worlds (as I did before this analysis) will get you nowhere. Also, there are four distinct Warm Average zones in the table; I can't say with certainty, but the settings make me suspect you spawn specifically in the Northwest corner of the table. The configs also specify that a full cycle is about 10k blocks. It didn't specify a direction on that, so I'm assuming the Humidity bands are about 2500 across, and the temperature bands are about 1700 across.

This information, with the classifications below, should be enough to find specific biomes more methodically. Good Luck!

## Biome Classification:

### Hot Dry:

* Red Desert - (Traverse)

* Desert

* Mesa

### Hot Average:

* Plains

* Mutated Plains

* Woodlands - (Traverse)

### Hot Wet:

* Jungle

* Swampland

* Mini Jungle - (Traverse)

### Warm Dry:

* Badlands - (Traverse)

* Savanna

### Warm Average:

* Forest

* Birch Forest

* Mutated Forest

* Mutated Birch Forest

* Autumnal Woods - (Traverse)

* Meneglin - (Integrated Dynamics)

* Meadow - (Traverse)

### Warm Wet:

* Roofed Forest

* Temperate Rainforest - (Traverse)

* Lush Hills - (Traverse)

* Green Swamp - (Traverse)

### Cool Dry:

* Extreme Hills

* Darklands Plains - (Abyssalcraft)

### Cool Average:

* Taiga

* Darklands Forest - (Abyssalcraft)

* Darklands - (Abyssalcraft)

### Cool Wet:

* Coralium Infested Swamp - (Abyssalcraft)

* Mutated Redwood Taiga

* Redwood Taiga

### Icy Dry:

* Ice Flats

* Mutated Ice Flats

### Icy Average:

* Snowy Coniferous Forest - (Traverse)

* Taiga Cold

### Icy Wet:

* Glacier - (Traverse)

* Glacier Spikes - (Traverse)

### Other: 

Oceans can go anywhere, and there are a ton of river/transitional/Hill variants of the above.

# How to replicate this

## Google Docs Tips

* People won't change the overall format even if they have the permission, so think good and hard about having a good high level flow.

* Use header formats rather than Bullet list nesting. Don't let bullets go further than 3 levels deep, pushing for extracting stuff into their own section.

* Enable link sharing with comment permission as the default. You can always add trusted people as direct editors using their **gmail** address.

* Because viewers can't sort by newest you'll have to make a revision history for them. Periodically go to the Version History and make a named version, then click last week's named version to see the diff. Print this diff to PDF. Upload that PDF to Google Docs or github for sharing. Record this link in the Recent Changes section of the Google Docs

* Use the Addon called Gabriel covered later.

* Know that there will be lots of lurkers looking directly at your doc. They will have it open on another screen and forget their focus is not on minecraft. Thus you'll get quite a few edit proposals to add 'e' to some place. This is annoying but worth the price for allowing random people to toss in proposals.

## Github Pages

* Github allows you to host a static website in their repo using Markup. Create a free github repo, go to settings, Choose a theme and have it populate your repo with the needed files. The README seems to be the only Markup file that you can access from the static site. We'll be pushing your above google doc to this README, but we need to do some prep work.

* Find the default.html file that your template uses and wrap the {{content}} section in a section and article. Add the tocible javascript and stylesheet to your page: [https://github.com/borg286/sevtech2/blob/master/_layouts/default.html#L15](https://github.com/borg286/sevtech2/blob/master/_layouts/default.html#L15)

* Add this script section to your page: [https://github.com/borg286/sevtech2/blob/master/_layouts/default.html#L32](https://github.com/borg286/sevtech2/blob/master/_layouts/default.html#L32)

* This will result in a dynamic table of contents that can look at your page and programatically create a table of contents based on the headers of the page. The one I linked above uses H1's as the first level, and H2's as subitems. You can see it in action here: [https://borg286.github.io/sevtech/](https://borg286.github.io/sevtech/)

## [Gabriel](https://chrome.google.com/webstore/detail/gabriel/okimajjeocnndpifeelaajdebkkbckff?utm_source=permalink)

* This is a Google Doc addon that can convert a google doc into markup and push it and images to a github repo.

* Grant access to your github repo, choose the root folder and change the name of the output file to [README.md](https://readme.md/)

* Before doing an export you'll want to download the html export from Google docs and find large images. These large image make the Gabriel exporter take longer pushing to Github. If this is more than about 3-5 MB then Gabriel times out. Find large images, downsize them, then replace them in the Google doc.

* After exporting to your github repo go back to github and edit the [README.md](https://readme.md/). Gabriel adds a heading section that conflicts with Github Pages. Delete the section starting and ending with ====. Sadly Github Pages will return a 404 after this. Simply edit the file again and make a small change and save it. This will trigger a push to the Github Sites caches.

## Alternatives considered

I had considered using Google Doc's native web view and embed the provided iframe into a skeleton site, but the formatting Google provides is so bad it is nigh unusable. The benefit of native web view is that it is always up-to-date. The downside is that we can't change the way it looks. The way browsers handle iframes protects the inner page from any poking from the parent page it is embedded into.

I had considered using Google Doc's native html export and simply uploading that to a static site storage site. The image links would work, and the size limit wouldn't be as much of a problem. The table of contents I wanted to add meant I'd have to either edit the top level html page every time I push, or have a page that uses javascript to pull the html from the same page and inject the javascript added above.

