import request from 'supertest';
import app from '../../src/app';

describe('POST to /customers', () => {
  it('should return 201 and a message when creating a customer', async () => {
    const response = await request(app).post('/customers').send({
      name: 'John Doe',
      email: 'john_doe@test.com',
      cpf: '123.456.789-00',
      phone: '(11) 9998-8743',
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
        email: 'john_doe@test.com',
        cpf: '123.456.789-00',
        phone: '(11) 9998-8743',
        status: 'active',
      },
    });
  });
});

describe('GET to /customers', () => {
  it('should return 200 and a message when fetching customers', async () => {
    const response = await request(app).get('/customers');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveLength(1);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0]).toHaveProperty('name');
    expect(response.body.data[0]).toHaveProperty('email');
    expect(response.body.data[0]).toHaveProperty('cpf');
    expect(response.body.data[0]).toHaveProperty('phone');
    expect(response.body.data[0]).toHaveProperty('status');
    expect(response.body).toStrictEqual({
      message: 'Customers fetched successfully',
      data: [
        {
          id: 1,
          name: 'John Doe',
          email: 'john_doe@test.com',
          cpf: '123.456.789-00',
          phone: '(11) 9998-8743',
          status: 'active',
        },
      ],
    });
  });
});

describe('PUT to /customers/:id', () => {
  it('should return 200 and a message when updating a customer', async () => {
    const response = await request(app).put('/customers/1').send({
      name: 'John Doe Updated',
      email: 'john_doe@test.com',
      cpf: '123.456.789-00',
      phone: '(11) 9998-8743',
      status: 'inactive',
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('id');
    expect(response.body.data).toHaveProperty('name');
    expect(response.body.data).toHaveProperty('email');
    expect(response.body.data).toHaveProperty('cpf');
    expect(response.body.data).toHaveProperty('phone');
    expect(response.body.data).toHaveProperty('status');
    expect(response.body).toStrictEqual({
      message: 'Customer updated successfully',
      data: {
        id: 1,
        name: 'John Doe Updated',
        email: 'john_doe@test.com',
        cpf: '123.456.789-00',
        phone: '(11) 9998-8743',
        status: 'inactive',
      },
    });
  });
});
