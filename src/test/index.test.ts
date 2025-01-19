import "reflect-metadata";
import assert from 'assert';
import { describe, it, before, beforeEach, mock } from 'node:test';
import { service } from "../utils/service.util";
// import { getInstance } from "../utils/getInstance.util";
import { ClassRegistry } from '../registry/class.registry';


describe('Register classes', () => {
    // it ('should add and retrive class', () => {

    //     @service()
    //     class B {
    //         constructor () {
    //             console.log("B instantiated");
    //         }

    //         getxyz = () => {
    //             return "1234";
    //         }
    //     }

    //     // @inject("B")
    //     @service()
    //     class A {

    //         b: B;

    //         constructor(b: B) {
    //             this.b = b;
    //             console.log("A instantiated with B");
    //         }

    //         xyz = () => {
    //             return this.b.getxyz();
    //         }
    //     }

    //     console.log(Reflect.getMetadata("design:paramtypes", A));

    //     console.log("Registry", ClassRegistry);
    //     const x = getInstance("A");
    //     console.log("x", x, typeof x);
    //     console.log(x.xyz())

    // });
});