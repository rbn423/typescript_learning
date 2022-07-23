(() => {

    interface Client{
        name:string,
        edad?:number
        address: Address
        getFullAddress( id: string): Address | null
    }

    interface Address{
        id: number,
        zip: number,
        city: string
    }

    const client: Client = {
        name: "fernando",
        edad: 25,
        address: {
            id: 125,
            zip:124567,
            city: "otawa"
        },
        getFullAddress(id) {
            return this.address
        }
    }

    const client2: Client = {
        name: "melissa",
        edad: 30,
        address: {
            id: 125,
            zip:124567,
            city: "otawa"
        },
        getFullAddress(id) {
            return this.address
        }
    }
})()