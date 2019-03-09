import chai from 'chai'
import chaiHttp from 'chai-http';
import app from '../../src/app'
import { model } from 'mongoose'
import { ITask, Taskmodel, IProject, Projectmodel } from "../../src/database/db";
import { Task, Project } from "../../src/models/task-model";
import { DB_deleteTask } from '../../src/DAL/task-acces';

let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);


describe('Testing taskcontroller', () => {

    // Clear DB before use
    before((done) => {
        Taskmodel.deleteMany({}, (err) => {
            console.log("Works")
            seedTasks().then(() => {
                done();
            });
        })
    })

    describe('Verify getAllTasks endpoint', () => {
        it('testing response', () => {
            return chai.request(app)
                .get('/task')
                .then(res => {
                    chai.expect(res).to.have.status(200)
                    chai.expect(res.body.count).to.equal(3)
                })
        })
    })

    describe('Verify getTask endpoint', () => {
        it('testing response', (done) => {
            Taskmodel.findOne({}).exec().then((data) => {
                let url = '/task/' + data._id
                return chai.request(app)
                    .get(url)
                    .then(res => {
                        if (data.name == res.body.name) {
                            done()
                        }
                    })
            })
        })
    })

    describe('Verify deleteTask', () => {
        it('testing task deletion', () => {
            Taskmodel.findOne({}).exec().then((data) => {
                let url = '/task/' + data._id
                return chai.request(app)
                    .del(url)
                    .then(res => {
                        chai.expect(res).to.have.status(204)
                        Taskmodel.find({}).exec().then(tmp => {
                            chai.expect(tmp.length).to.equal(2)
                        })
                    })
            })
        })
        it('Wrong id in request throws error', () => {
            let url = '/task/6699Wrong'
            return chai.request(app)
                .del(url)
                .then(res => {
                    chai.expect(res).to.have.status(404)
                })
        })
    })

    describe('Verify updateTask', () => {
        it('testing task update status code (correct)', () => {
            Taskmodel.findOne({}).exec().then((data) => {
                let url = '/task/' + data._id
                let name = 'New Task'
                return chai.request(app)
                    .put(url)
                    .send({ name: name, description: 'This is a description' })
                    .then(res => {
                        chai.expect(res).to.have.status(204)
                        Taskmodel.findById(data._id).exec().then(tmp => {
                            chai.expect(tmp.name).to.equal(name)
                        })
                    })
            })
        })
    })

    describe('Verify createTask', () => {
        it('StatusCode correct', () => {
            let url = '/task'
            return chai.request(app)
                .post(url)
                .send({ name: "POST task", description: 'This is a post task' })
                .then(res => {
                    chai.expect(res).to.have.status(201)
                })
        })
    })
})


/**
 * Internal methods
 */
function seedTasks() {

    /**
     * Seed tasks for db
     */
    console.log('Seeding database')

    return new Promise((resolve, reject) => {
        Taskmodel.insertMany([{
            name: "Clean my home",
            description: "You are supposed to clean our home",
        }, {
            name: "Work out",
            description: "You should work out",
        }, {
            name: "Work out",
            description: "You should work out",
            estimated_time: 7,
        }]).then((data) => {
            resolve(data)
        })
    })
}
