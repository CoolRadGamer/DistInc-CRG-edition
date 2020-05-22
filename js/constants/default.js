const DEFAULT_START = {
	tab: "main",
	optionsTab: "saving",
	achievements: [],
	options: {
		sf: 5,
		not: "scientific",
		autoSave: true,
	},
	modes: [],
	time: new Date().getTime(),
	distance: new ExpantaNum(0),
	velocity: new ExpantaNum(0),
	rank: new ExpantaNum(1),
	tier: new ExpantaNum(0),
	rockets: new ExpantaNum(0),
	rf: new ExpantaNum(0),
	automation: {
		unl: false,
		scraps: new ExpantaNum(0),
		intelligence: new ExpantaNum(0),
		robots: {},
		open: "none",
	},
	tr: {
		unl: false,
		active: false,
		cubes: new ExpantaNum(0),
		upgrades: [],
	},
	collapse: {
		unl: false,
		cadavers: new ExpantaNum(0),
		lifeEssence: new ExpantaNum(0),
	},
	pathogens: {
		unl: false,
		amount: new ExpantaNum(0),
		upgrades: {
			1: new ExpantaNum(0),
			2: new ExpantaNum(0),
			3: new ExpantaNum(0),
			4: new ExpantaNum(0),
			5: new ExpantaNum(0),
			6: new ExpantaNum(0),
			7: new ExpantaNum(0),
			8: new ExpantaNum(0),
			9: new ExpantaNum(0),
			10: new ExpantaNum(0),
		},
	},
	dc: {
		unl: false,
		matter: new ExpantaNum(0),
		energy: new ExpantaNum(0),
		fluid: new ExpantaNum(0),
		cores: new ExpantaNum(0),
	},
	inf: {
		unl: false,
		endorsements: new ExpantaNum(0),
		knowledge: new ExpantaNum(0),
		upgrades: [],
	},
}