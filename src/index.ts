
export class TestPackage {
    secret: string;
    constructor() {
        this.secret = '$up3r$3cr3t'
    }

    test(test: string) : boolean {
        return (this.secret === test ? true : false)
    }
}