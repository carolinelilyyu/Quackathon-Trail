ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font'
)
.defines(function(){

MyGame = ig.Game.extend({
	background: new ig.Image('media/chatbox.png'),
	font: new ig.Font('media/score.font.png'),
	state:0,
	INTRO:0,
	MENU:1,
	GAME:2,
	INSTRUCTIONS:3,

	init:function(){
		ig.input.bind(ig.KEY._1, '1')
		ig.input.bind(ig.KEY._2, '2')
		ig.input.bind(ig.KEY.ENTER, 'enter');
	},

	update:function(){
	switch(this.state){
		case this.INTRO:
		console.log("in intro");
	if(ig.input.state('enter')){
		this.state=this.MENU;
	}
	break;
	case this.MENU:
		console.log("in menu");
		if(ig.input.state('1')){
			this.state=this.startGame();
		}
		else if(ig.input.state('2')){
		}
	break;
	case this.INSTRUCTIONS:
		console.log("in instructions");
		if(ig.input.state('enter')){
			this.state=this.startGame();
		}
	break;
	case this.GAME:
		console.log("in game");
	}
	this.parent();
	},

	startGame:function(){
		this.state=this.GAME;
	},

	draw(){
		this.parent();
		switch(this.state){
			case this.INTRO:
			this.background.draw(0,0);
			this.font.draw("Welcome To Title! You have 40 hours (5 minutes) to \nmake your game. Press 'ENTER' to continue.", 50, 380, ig.Font.ALIGN.LEFT);
			break;
			case this.MENU:
			this.background.draw(0,0);
			this.font.draw("display screen",50,50);
			break;
		
		}
		//in game
		//if this array is equals to this array, then draw black background
	},

});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 800, 600, 1 );

});
