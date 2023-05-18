class Overworld extends Phaser.Scene{
    constructor()
    {
        super({key:'overworldScene'})
    }
    preload(){
        this.load.path = "./assets/"
        this.load.spritesheet = ('slime',slime.png,{
            frameWidth: 16,
            frameHeight:16
        })
        this.load.image('tilesetImage','tileset.png')
        this.load.tilemapTiledJSON('tilemapJSON','area01.json')
    }
    create(){
        const map = this.add.tilemap('tilemapJSON')
        const tileset = map.addTilesetImage('tileset','tilesetImage')
        // add layer
        const bgLayer = map.createLayer('Background',tileset,0,0)

    }
    update(){
        
    }
}