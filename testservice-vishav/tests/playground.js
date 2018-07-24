const expect = require('expect');

describe('Playground Tests', () => {
  const houseForSale = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      area: 20,
      wallColor: 'white'
    }
  };
  const desiredHouse = {
    bath: true,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      wallColor: expect.stringMatching(/white|yellow/)
    }
  };

  it('should tell that the house has my desired features', done => {
    expect(houseForSale).toMatchObject(desiredHouse);
    done();
  });
});
