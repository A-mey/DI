import assert from 'assert';
import { describe, it, before, beforeEach, mock } from 'node:test';
import { service } from "../utils/service.util";
import { ClassRegistry } from '../registry/class.registry';
import { Inject } from "../utils/inject.util";
import { getMockInstance } from "../utils/getMockInstance.util";
import { Interface } from "../utils/interface.util";
import { getInstance } from "../utils/getInstance.util";


describe('Register classes', () => {
    const BInterfaceToken = Symbol("BInterface");

    @Interface(BInterfaceToken)
    @service()
    class B implements BInterface {
        constructor () {
            console.log("B instantiated");
        }

        getxyz = () => {
            return "1234";
        }
    }

    @Interface(BInterfaceToken)
    @service("mock")
    class BMock implements BInterface {
        constructor () {
            console.log("B mock instantiated");
        }

        getxyz = () => {
            return "5678";
        }
    }

    interface BInterface {
        getxyz(): string
    }

    @service()
    class D {
        constructor () {

        }

        getPqr = () => {
            return "PQR";
        }
    }

    @Inject([B, D])
    @service()
    class C {
        constructor (public b: B, public d: D) {
            console.log("C instantiated");
        }

        getXYZ = () => {
            return this.b.getxyz();
        }

        getPQR = () => {
            return this.d.getPqr();
        }
    }

    @Inject([BInterfaceToken, D])
    @service()
    class E {
        constructor (public b: BInterface, public d: D) {
            console.log("C instantiated");
        }

        getXYZ = () => {
            return this.b.getxyz();
        }

        getPQR = () => {
            return this.d.getPqr();
        }
    }

    it ('should add and retrive mock classes', () => {
        const y = getMockInstance(E);
        const data2 = y.getXYZ();
        console.log("data2", data2);
        assert.strictEqual(data2, "5678")
    })

    it ('should add and retrieve real classes', () => {
        const y = getInstance(E);
        const data2 = y.getXYZ();
        console.log("data2", data2);
        assert.strictEqual(data2, "1234")
    })
})