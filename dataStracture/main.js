// // insert: O(1)
// people["a0x3"] = { name: "Candice", age: 23 }
// people["q113z"] = { name: "Jay", age: 16 }
// people["kl1991"] = { name: "Drew", age: 31 }

// // //find: O(1)
// const findPerson = function (personID) {
//     return people[personID]
// }

// //update: O(1)
// const updatePerson = function (personID, newName) {
//     return people[personID].name = newName
// }

// //remove: O(1)
// const removePerson = function (personID) {
//     delete people[personID]
// }

///---------------------------------------------------------------------------///
// class SillyArray {
//     constructor() {
//         this.sillyStuff = []
//         this.sillyLength = 0
//     }

//     print() {
//         console.log(this.sillyStuff)
//     }

//     push(stuff) {
//         this.sillyStuff[this.sillyLength] = stuff
//         this.sillyLength++

//         this.sillyStuff[this.sillyLength] = stuff
//         this.sillyLength++
//     }

//     annihilate() {
//         this.sillyStuff = []
//     }
// }

// let myStuff = new SillyArray()
// myStuff.push("Roger")
// console.log(myStuff.sillyLength) //prints 2
// myStuff.print() //prints ["Roger", "Roger"]
// myStuff.push("Rabbit")
// console.log(myStuff.sillyLength) //prints 4
// myStuff.print() //prints [ 'Roger', 'Roger', 'Rabbit', 'Rabbit' ]
// myStuff.annihilate()
// myStuff.print() // prints []


//-------------------------------------------------

//**exe 1 */
class UniqueArray {
    constructor(){
        this.item = []
        this.length = 0
    }

    showAll() { // done
        console.log(this.item)

    }

    exists (item) { //done
        for (let i = 0 ; i < this.length ; i++) {
            if (this.item[i] == item) {
                return false
            }
        }
        return true
    }

    add (item) { //done
        if (this.exists(item)) {
            this.item[this.length] = item
            this.length ++
        }
    }

    get(index) {
        if (this.item[index]) {
            return this.item[index]
        } else {
            return -1
        }
    }
}


const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
