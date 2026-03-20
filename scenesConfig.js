const SCENES_DATA = {
    granja: {
        key: 'FarmScene',
        worldWidth: 10000,
        skyGradient: { top: 0x33c4fe, bottom: 0xffffff },
        scrollSpeed: 2.5,
        dir: "granja",
        levelImage: 'images/granja-icon.jpg',
        // Configuramos qué cosas vuelan en esta escena
        skyObjects: {
            clouds: { key: 'cloud', count: 12, speed: 6000 },
            birds: { key: 'bird', count: 5, scale: 0.4 }
        },
        assets: {
            images: [
                { key: 'ground', path: 'images/granja/ground.png', depth: 9, scale: 0.5, height: 121 },
                { key: 'cloud', path: 'images/granja/cloud.png', depth: 9, scale: 0.2 },
                { key: 'sun', path: 'images/granja/sun.png', depth: 9, scale: 0.3 },
                { key: 'hoja', path: 'images/granja/hoja.png', depth: 8, scale: 0.2 },
                { key: 'paja_suelta', path: 'images/granja/paja_suelta.png', depth: 8, scale: 0.2 },
                { key: 'bird', path: 'images/granja/pajaro.png', depth: 9, scale: 0.25 },
                // { key: 'star', path: 'https://png.pngtree.com/png-vector/20220824/ourmid/pngtree-star-png-vector-icon-ui-game-png-image_6121753.png', depth: 9 },
                { key: 'm1', path: 'images/granja/m_1.png', depth: 2, scale: 1, height: 285 },
                { key: 'm2', path: 'images/granja/m_2.png', depth: 3, scale: 1.2, height: 135 },
                { key: 'm3', path: 'images/granja/m_3.png', depth: 1, scale: 1, height: 450 }
            ],
            decorations: [
                { key: 'tree', path: 'images/granja/tree1.png',
                    leafKey: 'hoja', leafConfig: {
                    count: 25,
                    scale: { start: 0.6, end: 0.4 },
                    offsetX: 70,
                    offsetY: { min: 160, max: 190 },
                    gravityY: 300,
                    speed: { min: 100, max: 200 },
                    rotate: { min: 0, max: 360 }
                    },
                count: 7, scale: 1.1, offsetY: -70, type: 'tree', depth: 8 },
                { key: 'tree2', path: 'images/granja/tree2.png',
                    leafKey: 'hoja', leafConfig: {
                    count: 25,
                    scale: { start: 0.6, end: 0.4 },
                    offsetX: 70,
                    offsetY: { min: 120, max: 190 },
                    gravityY: 300,
                    speed: { min: 100, max: 200 },
                    rotate: { min: 0, max: 360 }
                    },
                count: 7, scale: 1, offsetY: -70, type: 'tree', depth: 8 },
                { key: 'tree3', path: 'images/granja/tree3.png',
                    leafKey: 'hoja', leafConfig: {
                    count: 25,
                    scale: { start: 0.6, end: 0.4 },
                    offsetX: 70,
                    offsetY: { min: 120, max: 150 },
                    gravityY: 300,
                    speed: { min: 100, max: 200 },
                    rotate: { min: 0, max: 360 }
                    },
                count: 7, scale: 0.9, offsetY: -70, type: 'tree', depth: 8 },

                { key: 'espantapajaros', path: 'images/granja/espantapajaros.png',
                    leafKey: 'paja_suelta', leafConfig: {
                    count: 25,
                    scale: { start: 0.6, end: 0.4 },
                    offsetX: 70,
                    offsetY: { min: 120, max: 150 },
                    gravityY: 300,
                    speed: { min: 100, max: 200 },
                    rotate: { min: 0, max: 360 }
                    },
                count: 2, scale: 0.7, offsetY: -70, type: 'tree', depth: 8 },

                { key: 'granero', path: 'images/granja/granero.png', count: 1, scale: 0.8, offsetY: -40, type: 'static', depth: 9 },
                { key: 'establo', path: 'images/granja/establo.png', count: 1, scale: 0.8, offsetY: -40, type: 'static', depth: 9 },
                { key: 'casa', path: 'images/granja/casa.png', count: 1, scale: 1.1, offsetY: -65, type: 'static', vol: 1.5, depth: 9 },
                { key: 'silo', path: 'images/granja/silo.png', count: 1, scale: 1.1, offsetY: -45, type: 'static', vol: 1.5, depth: 9 },
                { key: 'monton_paja', path: 'images/granja/monton_paja.png', count: 1, scale: 0.8, offsetY: -35, type: 'static', vol: 1.5, depth: 9 },
                { key: 'tractor', path: 'images/granja/tractor.png', count: 1, scale: 1, offsetY: -65, type: 'vehicle', vol: 2.0, depth: 10 },
                { key: 'coche', path: 'images/granja/coche.png', count: 1, scale: 1, offsetY: -65, type: 'vehicle', vol: 1.5, depth: 10 },
                
            ],
            audio: [
                { key: 'background_music', path: 'sounds/granja/bgmusic.mp3' },
                { key: 'arbol_sound', path: 'sounds/granja/hojas_arbol.mp3' },
                { key: 'tractor_engine_sound', path: 'sounds/granja/tractor_engine.mp3' },
                { key: 'coche_engine_sound', path: 'sounds/granja/coche_engine.mp3' },
                { key: 'jump1', path: 'sounds/beep.mp3' },
                { key: 'jump2', path: 'sounds/pop.mp3' },
                { key: 'jump3', path: 'sounds/boing.mp3' }
            ],
            
        },
        jumpSounds: ['jump1', 'jump2', 'jump3'],
        animals: [
            { key: 'blaky', path: 'images/granja/blaky.png', scale: 0.15, jump: -400, groundRange: [-80, -115], vol: 1.2, depth: 10 },
            { key: 'caballo', path: 'images/granja/caballo.png', scale: 0.6, jump: -400, groundRange: [-80, -115], vol: 0.8, depth: 10 },
            { key: 'chico', path: 'images/granja/chico.png', scale: 0.2, jump: -400, groundRange: [-80, -115], vol: 1.2, depth: 10 },
            { key: 'conejo', path: 'images/granja/conejo.png', scale: 0.5, jump: -400, groundRange: [-80, -115], vol: 1.2, depth: 10 },

            { key: 'gallina', path: 'images/granja/gallina.png', scale: 0.45, jump: -400, groundRange: [-80, -115], vol: 1.2, depth: 10 },
            { key: 'gallo', path: 'images/granja/gallo.png', scale: 0.45, jump: -400, groundRange: [-80, -115], vol: 1.2, depth: 10 },
            { key: 'gato', path: 'images/granja/gato.png', scale: 0.35, jump: -400, groundRange: [-80, -115], vol: 1.2, depth: 10 },
            { key: 'perro', path: 'images/granja/perro.png', scale: 0.4, jump: -400, groundRange: [-80, -115], vol: 1.2, depth: 10 },
            { key: 'pollito', path: 'images/granja/pollito.png', scale: 1.1, jump: -400, groundRange: [-80, -115], vol: 1.2, depth: 10 },
            { key: 'vaca', path: 'images/granja/vaca.png', scale: 1.2, jump: -400, groundRange: [-80, -115], vol: 1.2, depth: 10 },
            { key: 'zorro', path: 'images/granja/zorro.png', scale: 0.4, jump: -400, groundRange: [-80, -115], vol: 1.2, depth: 10 },

        ]
    },

    selva: {
        key: 'selva',
        worldWidth: 10000,
        skyGradient: { top: 0x33c4fe, bottom: 0xffffff },
        scrollSpeed: 2.5,
        dir: "selva",
        levelImage: 'images/selva-icon.jpg',
        
        // Configuramos qué cosas vuelan en esta escena
        skyObjects: {
            clouds: { key: 'cloud', count: 12, speed: 6000 },
            birds: { key: 'bird', count: 5, scale: 0.4 }
        },
        assets: {
            images: [
                { key: 'ground', path: 'images/selva/ground.png', depth: 9, scale: 0.5, height: 121 },
                { key: 'cloud', path: 'images/selva/cloud.png', depth: 9, scale: 0.3 },
                { key: 'sun', path: 'images/selva/sun.png', depth: 9, scale: 0.5},
                { key: 'hoja', path: 'images/granja/hoja.png', depth: 8 },
                { key: 'coco', path: 'images/selva/coco.png', depth: 8 },
                { key: 'bird', path: 'images/selva/loro.png', depth: 9, scale: 0.2},
                // { key: 'star', path: 'https://png.pngtree.com/png-vector/20220824/ourmid/pngtree-star-png-vector-icon-ui-game-png-image_6121753.png', depth: 9 },
                { key: 'm1', path: 'images/selva/m_1.png', depth: 2, scale: 0.55, height: 300 },
                { key: 'm2', path: 'images/selva/m_2.png', depth: 3, scale: 0.4, height: 126},
                { key: 'm3', path: 'images/selva/m_3.png', depth: 1 },
            ],
            decorations: [
                { key: 'palmera', path: 'images/selva/palmera.png', count: 7, scale: 0.9, offsetY: -70, type: 'tree', depth: 9,
                    leafKey: 'coco', leafConfig: {
                    count: 20,
                    scale: { start: 0.06, end: 0.05 },
                    offsetX: 50,
                    offsetY: { min: 120, max: 130 },
                    gravityY: 300,
                    speed: { min: 100, max: 200 },
                    rotate: { min: 0, max: 360 }
                    },
                },

                { key: 'palmera2', path: 'images/selva/palmera2.png', count: 7, scale: 0.8, offsetY: -70, type: 'tree', depth: 9,
                    leafKey: 'hoja', leafConfig: {
                    count: 25,
                    scale: { start: 0.5, end: 0.3 },
                    offsetX: 40,
                    offsetY: { min: 120, max: 130 },
                    gravityY: 300,
                    speed: { min: 100, max: 200 },
                    rotate: { min: 0, max: 360 }
                    },
                },
                { key: 'granarbol', path: 'images/selva/granarbol.png', count: 7, scale: 1.4, offsetY: -45, type: 'tree', depth: 9,leafKey: 'hoja', 
                    leafConfig: {
                    count: 60,
                    scale: { start: 0.6, end: 0.5 },
                    offsetX: 70,
                    offsetY: { min: 230, max: 290 },
                    gravityY: 300,
                    speed: { min: 100, max: 200 },
                    rotate: { min: 0, max: 360 }
                    },
                },
                { key: 'flor', path: 'images/selva/flor.png', count: 25, scale: 0.3, offsetY: -84, type: 'tree', depth: 8 },

                // { key: 'tree3', path: 'images/granja/tree3.png', count: 5, scale: 0.6, offsetY: -70, type: 'tree', depth: 8 },
                { key: 'choza', path: 'images/selva/choza.png', count: 1, scale: 0.75, offsetY: -55, type: 'static', depth: 9 },
                { key: 'templo', path: 'images/selva/templo.png', count: 1, scale: 0.65, offsetY: -55, type: 'static', depth: 9 },
                { key: 'ruina', path: 'images/selva/ruina.png', count: 1, scale: 0.85, offsetY: -58, type: 'static', vol: 1.5, depth: 9 },
                { key: 'quad', path: 'images/selva/quad.png', count: 1, scale: 0.6, offsetY: -55, type: 'vehicle', vol: 2.0, depth: 10 },
                { key: 'todoterreno', path: 'images/selva/todoterreno.png', count: 1, scale: 0.65, offsetY: -55, type: 'vehicle', vol: 1.5, depth: 10 },
                
            ],
            audio: [
                { key: 'background_music', path: 'sounds/selva/bgmusic.mp3' },
                { key: 'arbol_sound', path: 'sounds/granja/hojas_arbol.mp3' },
                { key: 'quad_engine_sound', path: 'sounds/selva/quad_engine.mp3' },
                { key: 'todoterreno_engine_sound', path: 'sounds/selva/coche_engine.mp3' },
                { key: 'jump1', path: 'sounds/beep.mp3' },
                { key: 'jump2', path: 'sounds/pop.mp3' },
                { key: 'jump3', path: 'sounds/boing.mp3' }
            ],
            
        },
        jumpSounds: ['jump1', 'jump2', 'jump3'],

        animals: [
            { key: 'cebra', path: 'images/selva/cebra.png', scale: 0.75, jump: -400, groundRange: [-80, -115], vol: 4.5, depth: 10 },
            { key: 'elefante', path: 'images/selva/elefante.png', scale: 0.85, jump: -400, groundRange: [-80, -115], vol: 2.2, depth: 10 },
            { key: 'gorila', path: 'images/selva/gorila.png', scale: 0.65, jump: -400, groundRange: [-80, -115], vol: 3.2, depth: 10 },
            { key: 'guepardo', path: 'images/selva/guepardo.png', scale: 0.6, jump: -400, groundRange: [-80, -115], vol: 3.2, depth: 10 },
            { key: 'hipo', path: 'images/selva/hipo.png', scale: 0.65, jump: -400, groundRange: [-80, -115], vol: 7.2, depth: 10 },
            { key: 'jirafa', path: 'images/selva/jirafa.png', scale: 0.75, jump: -400, groundRange: [-80, -115], vol: 5.2, depth: 10 },
            { key: 'koala', path: 'images/selva/koala.png', scale: 0.75, jump: -400, groundRange: [-80, -115], vol: 2.2, depth: 10 },
            { key: 'mono', path: 'images/selva/mono.png', scale: 0.55, jump: -400, groundRange: [-80, -115], vol: 2.5, depth: 10 },
            { key: 'leon', path: 'images/selva/leon.png', scale: 0.6, jump: -400, groundRange: [-80, -115], vol: 4, depth: 10 },
            { key: 'panda', path: 'images/selva/panda.png', scale: 0.6, jump: -400, groundRange: [-80, -115], vol: 4.2, depth: 10 },
            { key: 'tigre', path: 'images/selva/tigre.png', scale: 0.6, jump: -400, groundRange: [-80, -115], vol: 3.2, depth: 10 },

        ]
    }
};