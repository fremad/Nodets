import chai from 'chai'
import chaiHttp from 'chai-http';

import app from '../src/app'
import { model } from 'mongoose'
import { ITask } from '../src/database/db'

let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

const dataEntry = model<ITask>("taskEntry");


describe('API test', () => {
    it('test should work', () => {
        return chai.request(app).get('/task')
            .then(res => {
                chai.expect(res).to.have.status(200)
            })
    })
})


describe('Testing task validation', () => {
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
            if (err) {return done();
            throw new Error('No description field error')}
        })
    })
})

function generateStringWithLength(n: Number) {

    let text: string = ""

    for (var i = 0; i < n; i++)
        text += 'a';

    return text;
}