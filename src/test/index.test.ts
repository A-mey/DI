import "reflect-metadata";
import assert from 'assert';
import { describe, it, before, beforeEach, mock } from 'node:test';
import { service } from "../utils/service.util";
import { getInstance } from "../utils/getInstance.util";
import { ClassRegistry } from '../registry/class.registry';
import { Interface } from "../utils/interface.util";
import { Inject } from "../utils/inject.util";
import { getMockInstance } from "../utils/getMockInstance.util";


describe('Register classes', () => {
    it ('should add and retrive class', () => {

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


        // @service()
        // class A {

        //     // b: B;

        //     constructor(@Inject(BInterfaceToken) public b: BInterface) {
        //         // this.b = b;
        //         console.log("A instantiated with B");
        //     }

        //     xyz = () => {
        //         return this.b.getxyz();
        //     }
        // }

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

        @Inject(["BInterfaceToken", D])
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

        // const x = getInstance("A");
        const y = getMockInstance(C);
        // console.log("x", x, typeof x);
        console.log("y", y, typeof y);
        // console.log("x123", x.b);
        console.log("y123", y.b);
        // console.log("data", x.xyz());
        console.log("data2", y.getXYZ());

        // const z = getInstance("C");
        // console.log("z", z, typeof z);
        // console.log("data", z.getXYZ());
    });
});