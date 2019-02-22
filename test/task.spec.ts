import chai from 'chai'
import chaiHttp from 'chai-http';
import app from '../src/app'
import { model } from 'mongoose'
import { ITask, Taskmodel, IProject, Projectmodel } from "../src/database/db";
import { Task, Project } from "../src/models/task-model";

let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

/**
 * Database query tests
 */
describe('Tasks', () => {

    // Clear DB before use
    beforeEach((done) => {
        Taskmodel.deleteMany({}, (err) => {
            Projectmodel.deleteMany({}, (err) => {
                done();
            });
        });
    });

    //TODO better naming in here
    describe('Testing task validation', () => {
        it('test should work', () => {
            return chai.request(app)
                .get('/task')
                .then(res => {
                    chai.expect(res).to.have.status(200)
                    chai.expect(res.body.tasks).to.be.a('array')
                    chai.expect(res.body.count).to.equal(0)
                })
        })
        it('max length should not exceed 500', (done) => {
            let text = generateStringWithLength(501)

            let test_task_entry = new Taskmodel({
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

            let test_task_entry = new Taskmodel({
                name: "name",
                description: text
            })

            test_task_entry.save(done)
        })
        it('Description field not filled out (should give error)', (done) => {

            let test_task_entry = new Taskmodel({
                name: "name"
            })
            test_task_entry.save(err => {
                if (err) {
                    return done();
                    throw new Error('No description field error')
                }
            })
        })
        it('Check to see if task can be linked to project)', (done) => {

            let test_project_entry = new Projectmodel({
                name: "name",
                description: "Some good description"
            })

            const test_task_entry = new Taskmodel({
                name: "name",
                description: "this is some description",
                task: [{ test_project_entry }]
            })

            test_task_entry.save(done)

        })
        it('Check if tasks can be pushed to project', () => {

            const test_task_entry = new Taskmodel({
                name: "name",
                description: "this is some description",
            }).save().then((data) => {

                const test_project_entry = new Projectmodel({
                    name: "name",
                    description: "Some good description",
                    tasks: data
                })

                test_project_entry.save().then((data) => {
                    chai.expect(test_project_entry.tasks.length).to.equal(1)
                })
            })

        })
        it('Check Seed method', (done) => {
            seedTasks().then((data) => {
                done();
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

    /**
     * Seed tasks for db
     */
    return new Promise((resolve, reject) => {
        Taskmodel.insertMany([{
            name: "Clean my home",
            description: "You are supposed to clean our home",
        }, {
            name: "Work out",
            description: "Ypu should work out",
        }, {
            name: "Work out",
            description: "Ypu should work out",
        }]).then((data) => {
            resolve(data)
        })
    })
}