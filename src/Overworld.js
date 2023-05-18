class Overworld extends Phaser.Scene{
    constructor()
    {
        super({key:'overworldScene'})
    }
    preload(){
        this.load.path = "./assets/"
        this.load.spritesheet = ('slime','slime.png',{
            frameWidth: 16,
            frameHeight:16
        })
        this.load.image('tilesetImage','tileset.png')
        this.load.tilemapTiledJSON('tilemapJSON','area1.json')
    }
    create(){
        const map = this.add.tilemap('tilemapJSON')
        const tileset = map.addTilesetImage('tileset','tilesetImage')
        // add layer
        const bgLayer = map.createLayer('Background',tileset,0,0)
        const terrainLayer = map.createLayer('Terrain',tileset,0,0)
        const treeLayer = map.createLayer('Trees',tileset,0,0)

    }
    update(){
        
    }
}