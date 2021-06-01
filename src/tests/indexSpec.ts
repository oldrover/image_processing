import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
  describe('Tests the / endpoint', () => {
    it('should get Status Code 200', async () => {
      const response = await request.get('/');
      expect(response.statusCode).toBe(200);
    });
  });

  describe('Tests the /api endpoint', () => {
    it('should get Status Code 200', async () => {
      const response = await request.get('/api');
      expect(response.statusCode).toBe(200);
    });
  });

  describe('Test the /api/images endpoint', () => {
    it('should  get Status Code 200', async () => {
      const response = await request.get('/api/images');
      expect(response.statusCode).toBe(200);
    });

    it('should respond: Please add an image filename!', async () => {
      const response = await request.get('/api/images');
      expect(response.text).toBe('Please add an image filename!');
    });

    it('should respond: Please add a width value!', async () => {
      const response = await request.get('/api/images?filename=test');
      expect(response.text).toBe('Please add a width value!');
    });

    it('should respond: Please add a height value!', async () => {
      const response = await request.get('/api/images?filename=test&width=200');
      expect(response.text).toBe('Please add a height value!');
    });

    it('should respond: The Values for width and height have to be number!', async () => {
      const response = await request.get('/api/images?filename=test&width=200&height=no');
      expect(response.text).toBe('The Values for width and height have to be number!');
    });
  });
});
