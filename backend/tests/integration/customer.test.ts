import request from 'supertest';
import app from '../../src/app';

describe('POST to /customers', () => {
  it('should return 201 and a message when creating a customer', async () => {
    const response = await request(app).post('/customers').send({
      name: 'John Doe',
      email: 'john@mail.com',
      cpf: '123.456.789-11',
      phone: '1234567891',
      status: 'active',
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('id');
    expect(response.body.data).toHaveProperty('name');
    expect(response.body.data).toHaveProperty('email');
    expect(response.body.data).toHaveProperty('cpf');
    expect(response.body.data).toHaveProperty('phone');
    expect(response.body.data).toHaveProperty('status');
    expect(response.body).toStrictEqual({
      message: 'Customer created successfully',
      data: {
        id: 1,
        name: 'John Doe',
        email: 'john@mail.com',
        cpf: '123.456.789-11',
        phone: '1234567891',
        status: 'active',
      },
    });
  });
});
