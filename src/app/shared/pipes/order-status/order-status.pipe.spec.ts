import { Status } from '../../data/status';
import { OrderStatusPipe } from './order-status.pipe';

describe('Pipe: Default', () => {
  let pipe: OrderStatusPipe;

  beforeEach(() => {
    pipe = new OrderStatusPipe();
  });

  it('providing default valu on null', () => {
    expect(pipe.transform(null)).toBe('Brak danych');
  });

  it('providing accepted value', () => {
    expect(pipe.transform(Status.ACCEPTED)).toBe('Zaakceptowane');
  });

  it('providing error value', () => {
    expect(pipe.transform(Status.ERROR)).toBe('Błąd systemu');
  });

  it('providing rejected value', () => {
    expect(pipe.transform(Status.REJECTED)).toBe('Odrzucone');
  });

  it('providing realising value', () => {
    expect(pipe.transform(Status.WAITING)).toBe('W trakcie realizacji');
  });

});
