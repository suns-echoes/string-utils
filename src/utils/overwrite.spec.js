import { overwrite } from './overwrite.js';


describe('StringUtils.overwrite', () => {
	it('overwrites new string into original string', () => {
		const string = '123456789';

		expect(overwrite(string, '+++')).to.be.equal('+++456789');
		expect(overwrite(string, '+++', 3)).to.be.equal('123+++789');
		expect(overwrite(string, '+++', 99)).to.be.equal('123456789+++');
		expect(overwrite(string, '+++', -1)).to.be.equal('12345678+++');
		expect(overwrite(string, '+++', -4)).to.be.equal('12345+++9');
		expect(overwrite(string, '+++', -10)).to.be.equal('+++3456789');
		expect(overwrite(string, '+++', -99)).to.be.equal('+++123456789');
	});

	it('throws if argument is not string type', () => {
		const string = null;

		function fail() {
			overwrite(string);
		}

		expect(fail).to.throw(TypeError);
	});
});
