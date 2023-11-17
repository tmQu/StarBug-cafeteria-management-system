import { assert } from 'console'
import tea from './raw/tea.json' assert {type: 'json'};
import coffee from './raw/coffee.json' assert {type: 'json'};
import milktea from './raw/milktea.json' assert {type: 'json'};
import cake from './raw/cake.json' assert {type: 'json'};

import fs from 'fs'
// import JSON from 'json'
var list = [tea, coffee, milktea, cake]
var listName = ['fixTea.json', 'fixCoffee.json', 'fixMilktea.json', 'fixCake.json']
var i = 0;
list.forEach(product => {
    var item = product.items;

    function renameKey ( obj, oldKey, newKey ) {
        obj[newKey] = obj[oldKey];
        delete obj[oldKey];
    }
    
    
      
    
    
    item.forEach( obj => {
        renameKey( obj, 'image', 'img' )
        renameKey( obj, 'isTopItem', 'topItem' )
        renameKey( obj, 'avg-rating', 'avgRate' )
    } );
    
    
    item.forEach(i => {
        var temp = [i.img]
        delete i.img
        i.img = temp
        console.log(i.img)
    
        i.description = i.description.heading + '\n' + i.description.title + '\n' + i.description.description
    })
    
    console.log(item);
    
    fs.writeFile("./fixed/" + listName[i], JSON.stringify(item, null, 4), function(err) {
        if (err) {
            console.log(err);
        }
    });
    i = i + 1;
})
