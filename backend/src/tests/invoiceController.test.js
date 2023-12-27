const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../services/server'); // Update the path accordingly
const expect = chai.expect;

chai.use(chaiHttp);

describe('Invoice Controller', () => {
  it('should get invoice data', (done) => {
    chai.request(app)
      .get('/api/invoiceData')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should download a file', (done) => {
    chai.request(app)
      .get('/download/testfile.pdf') // Change the filename accordingly
      .end((err, res) => {
        expect(res).to.have.status(200);
        // You can add more assertions based on your requirements
        done();
      });
  });
});
