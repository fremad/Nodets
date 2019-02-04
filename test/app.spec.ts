import chai from 'chai'
import chaiHttp from 'chai-http';

import app from '../src/app'

let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);


describe('This is a test', () => {
    it('It should tell the truth', () => {
        const hello = true;
        expect(hello).to.be.true;
    })
})

describe('API test', () => {
    it('test should work', () => {
        return chai.request(app).get('/')
            .then(res => {
                chai.expect(res.text).to.eql('Hello World!')
            })
    })
})