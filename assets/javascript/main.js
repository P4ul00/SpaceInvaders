/**
 * Created by stryker on 2014.03.05..
 */
require(['state/Load','state/Start','state/Play','state/End','lib/phaser-no-physics.min'],function(Load,Start,Play,End){

    var _game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

    
    //carregando
    Load.init(_game,'Start'); 
    _game.state.add('Load',Load.getLoadState()); 
    
    //iniciando o jogo
    Start.init(_game,'Play');
    _game.state.add('Start',Start.getStartState());
    
    //jogando
    Play.init(_game,'End');
    _game.state.add('Play',Play.getPlayState());
    
    //fim de jogo
    End.init(_game,'Play');
    _game.state.add('End',End.getEndState());
    
    //Starting the Load state
    _game.state.start('Load');
    
});
