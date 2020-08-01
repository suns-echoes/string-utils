import { toCamelCase } from './to-camel-case.js';


describe('StringUtils.toCamelCase', () => {
	it('returns dash case string', () => {
		const string = 'this-is-the-case';

		expect(toCamelCase(string)).to.be.equal('thisIsTheCase');
	});

	it('returns dash case string (with numbers)', () => {
		const string = 'this-01-is-camel-case-1';

		expect(toCamelCase(string)).to.be.equal('this01IsCamelCase1');
	});

	it('returns dash case string (starts with numbers)', () => {
		const string = '01-is-camel-case-1';

		expect(toCamelCase(string)).to.be.equal('01IsCamelCase1');
	});

	it('returns dash case string (capital)', () => {
		const string = 't-h-i-sis-c-a-s-e';

		expect(toCamelCase(string, true)).to.be.equal('THISisCASE');
	});

	it('returns dash case string (capital with numbers)', () => {
		const string = 't-h-i-sis-01-c-a-s-e';

		expect(toCamelCase(string, true)).to.be.equal('THISis01CASE');
	});

	it('throws if argument is not string type', () => {
		const string = null;

		function fail() {
			toCamelCase(string);
		}

		expect(fail).to.throw(TypeError);
	});
});
