//Test the GET route
describe('post movies', () => {
    it('it should return movie saved', (done) => {
        chai.request(server)
            .post('/movies')
            .send()
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.have.property('message');
                res.body.message.should.eq('movie saved')
                done();
            })
    })
});