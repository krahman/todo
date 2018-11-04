const mongoose = require('mongoose');
const Todo = require('../src/models/Todo');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/app');
const should = chai.should();

chai.use(chaiHttp);

describe('Todos', () => {
  beforeEach((done) => {
    Todo.remove({}, (err) => {
      if (err) {
        console.log(err);
      }
      done();
    });
  });

  describe('/GET todos', () => {
    it('it should GET all the todos', (done) => {
      chai.request(server)
        .get('/todos')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe('/POST todos', () => {
    it('it should SAVE todo', (done) => {
      chai.request(server)
        .post('/todos')
        .send({
          activity: 'test',
          completed: false,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('activity')
            .eql('test');
          res.body.should.have.property('completed')
            .eql(false);
          done();
        });
    });
  });

  describe('/PUT todos', () => {
    it('it should UPDATE todo', (done) => {
      const todo = new Todo({
        activity: 'test',
        completed: false,
      });

      todo.save((error, data) => {
        chai.request(server)
          .put('/todos')
          .send({ _id: data._id, activity: 'test-update', completed: true })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('activity')
              .eql('test-update');
            res.body.should.have.property('completed')
              .eql(true);
            done();
          });
      });
    });
  });

  describe('/DELETE todos', () => {
    it('it should DELETE todo', (done) => {
      const todo = new Todo({
        activity: 'test',
        completed: false,
      });

      todo.save((error, data) => {
        chai.request(server)
          .delete('/todos')
          .send({ _id: data._id })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('message').eql('Todo has been deleted.');
            done();
          });
      });
    });
  });
});
