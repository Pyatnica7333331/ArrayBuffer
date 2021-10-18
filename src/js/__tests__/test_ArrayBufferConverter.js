import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('Успешная загрузка данных в буфер', () => {
  const bufferConverter = new ArrayBufferConverter();
  bufferConverter.load(getBuffer());
  expect(bufferConverter.buffer).toEqual(getBuffer());
});

test('Успешный возврат строки из буфера', () => {
  const bufferConverter = new ArrayBufferConverter();
  bufferConverter.load(getBuffer());
  expect(bufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
