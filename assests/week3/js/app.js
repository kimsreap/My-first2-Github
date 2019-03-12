let lion = {
    home: 'Africa',
    name: 'Derek',
    roar() {
        console.log('ROOAARR!!! I AM ${this.name}! King of $ {this.home}')
    },
    pride: {
        home: 'Africa',
        bane: 'Billy',
        roar () {
            console.log('ROAR! I am ${this.name}!')
        }
    }
}

lion.pride.roar()