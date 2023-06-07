import request from 'supertest';
import { app } from '../../app';


it('Returns a 201 on Successful Sign Up', async () => {

    return await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: '123'
        })

        .expect(201);

});


it('Returns a 400 with an invalid email', async () => {

    return await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test.com',
            password: '123'
        })

        .expect(400);

});


it('sets a cookie after successful signup', async () => {

    const response = await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: '123'
        })

        .expect(201);


    expect(response.get('Set-Coookie')).toBeDefined();



});
