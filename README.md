install

cd ~/MagicMirror/modules
git clone https://github.com/sdetweil/birthdaylist
cd birthdaylist
npm install


reads from CSV

2 columns

birthday , name 
07/21/76  , Fred


birthday can be any form of  mm/dd/yyyy or yyyy/mm/dd
using any separator
(all the same format) 

u can set colors in CSS. 
sample provided in bdl.css

config  params, and defaults

    language: "de",
		dimmEntries: false,  // true: dims entries and the associated
							 //       symbol when the date has expired.
							 // false: dont display entries and the associated
							 //        symbol when the date has expired.
	  debug:false,
		initialLoadDelay: 0, // How many seconds to wait on a fresh start up.
							 // This is to prevent collision with all other modules also
							 // loading all at the same time. This only happens once,
							 // when the mirror first starts up.
		updateDelay: 5       // How many seconds after midnight before a refresh
						     // This is to prevent collision with other
							 // modules refreshing at the same time.
