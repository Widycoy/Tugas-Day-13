describe('Reqres API Testing - Create User', () => {
	it('create user', () => {
	  cy.request({
	    method:'POST',
	    url: 'https://reqres.in/api/users',
	    body:{
	      "name": "Widya Aditama",
	      "job": "Quality Assurance"
	    }
	    }).then((response) => {
	      expect(response.status).to.equal(201)
	      expect(response.body).has.property("name","Widya Aditama")
	    })
	})
})
