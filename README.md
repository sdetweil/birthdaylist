install

cd ~/MagicMirror/modules <br>
git clone https://github.com/sdetweil/birthdaylist <br>
cd birthdaylist <br>
npm install<br>


reads from bdl.csv in the module data folder, sample provided

2 columns

birthday , name <br>
07/21/76  , Fred


birthday can be any form of  mm/dd/yyyy or yyyy/mm/dd <br>
using any separator <br>
(all the same format) <br>

u can set colors in CSS. <br>
sample provided in bdl.css

config  params, and defaults

		language: "de",
		dimmEntries: false,  // true: dims entries and the associated
				     //       symbol when the date has expired.
			             // false: dont display entries and the associated
				     //        symbol when the date has expired.
		initialLoadDelay: 0, // How many seconds to wait on a fresh start up.
				     // This is to prevent collision with all other modules also
				     // loading all at the same time. This only happens once,
				     // when the mirror first starts up.
		updateDelay: 5,      // How many seconds after midnight before a refresh
				     // This is to prevent collision with other
				     // modules refreshing at the same time.
		debug:false
