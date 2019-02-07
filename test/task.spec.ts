import chai from 'chai'
import chaiHttp from 'chai-http';

import app from '../src/app'
import { model } from 'mongoose'
import { ITask } from '../src/database/db'

let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);




// describe('API test', () => {
   
// })



/**
 * Database query tests
 */

describe('Tasks', () => {

    // Clear DB before use
    beforeEach((done) => {
        dataEntry.deleteMany({}, (err) => {
            done();
        });
    });

    //TODO better naming in here
    describe('Testing task validation', () => {
        it('test should work', () => {
            return chai.request(app)
                .get('/task')
                .then(res => {
                    chai.expect(res).to.have.status(200),
                    chai.expect(res.body.tasks).to.be.a('array')
                    chai.expect(res.body.count).to.equal(0)
                })
        })
        it('max length should not exceed 500', (done) => {
            let text = generateStringWithLength(501)

            let test_task_entry = new dataEntry({
                name: "name",
                description: text
            })

            test_task_entry.save(err => {
                if (err) { return done(); }
                throw new Error('Incorrectly stored too long message')
            })
        })
        it('max lenth of 500 should be allowed', (done) => {
            let text = generateStringWithLength(500)

            let test_task_entry = new dataEntry({
                name: "name",
                description: text
            })

            test_task_entry.save(done)
        })
        it('Description field not filled out (should give error)', (done) => {

            let test_task_entry = new dataEntry({
                name: "name"
            })
            test_task_entry.save(err => {
                if (err) {
                    return done();
                    throw new Error('No description field error')
                }
            })
        })
    })
})


/**
 * @param n length of generated string
 * @returns Text with length n
 */

function generateStringWithLength(n: Number) {

    let text: string = ""

    for (var i = 0; i < n; i++)
        text += 'a';

    return text;
}

/**
 * Seeds the database with Task
 */
function seedTasks() {
    let t1 = new dataEntry({
        name: "Task1",
        description: "This is a description"
    })


}