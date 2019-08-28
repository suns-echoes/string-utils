import { insert } from './insert.js';


describe('StringUtils.insert', () => {
	it('inserts new string into original string', () => {
		const string = '123456789';

		expect(insert(string, '+++')).to.be.equal('+++123456789');
		expect(insert(string, '+++', 3)).to.be.equal('123+++456789');
		expect(insert(string, '+++', 99)).to.be.equal('123456789+++');
		expect(insert(string, '+++', -3)).to.be.equal('123456+++789');
		expect(insert(string, '+++', -99)).to.be.equal('+++123456789');
	});
});
