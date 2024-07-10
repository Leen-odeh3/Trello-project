///<reference types="cypress"/>
describe('API Testing', () => {
  it('Get single recourse', () => {
    cy.request('https://reqres.in/api/unknown/2').then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.data.id).to.eq(2);
      expect(res.body.data.name).to.contain('fuchsia rose');
      expect(res.body.support.text).to.contain(
        'To keep ReqRes free, contributions towards server costs are appreciated!'
      );
    });
  });

  it('Create single recourse', () => {
    cy.request('POST', 'https://reqres.in/api/users', {
      name: 'morpheus',
      job: 'leader',
    }).then((res) => {
      expect(res.status).to.eq(201);
      //   cy.log(res);
      expect(res.body.job).to.contain('leader');
    });
  });

  it('Update single recourse', () => {
    cy.request('PUT', 'https://reqres.in/api/users/2', {
      name: 'morpheus',
      job: 'zion resident',
    }).then((res) => {
      expect(res.status).to.eq(200);
      //   cy.log(res);
      expect(res.body.job).to.contain('zion resident');
      expect(res.body.name).to.contain('morpheus');
    });
  });

  it('Delete single recourse', () => {
    cy.request('DELETE', 'https://reqres.in/api/users/2').then((res) => {
      expect(res.status).to.eq(204);
    });
  });
  //
});
