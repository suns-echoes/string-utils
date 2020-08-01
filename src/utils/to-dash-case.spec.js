import { toDashCase } from './to-dash-case.js';


describe('StringUtils.toDashCase', () => {
	it('returns dash case string', () => {
		const string = 'ThisIsTheCase';

		expect(toDashCase(string)).to.be.equal('this-is-the-case');
	});

	it('returns dash case string (with upper group)', () => {
		const string = 'ThisISTheCase';

		expect(toDashCase(string)).to.be.equal('this-is-the-case');
	});

	it('returns dash case string (with numbers)', () => {
		const string = 'This01ISTheCase1';

		expect(toDashCase(string)).to.be.equal('this-01-is-the-case-1');
	});

	it('returns dash case string (with numbers)', () => {
		const string = '01IsTheCase1';

		expect(toDashCase(string)).to.be.equal('01-is-the-case-1');
	});

	it('returns dash case string (conservative)', () => {
		const string = 'THISIsCASE';

		expect(toDashCase(string, true)).to.be.equal('t-h-i-sis-c-a-s-e');
	});

	it('returns dash case string (conservative with numbers)', () => {
		const string = 'THISIs01CASE';

		expect(toDashCase(string, true)).to.be.equal('t-h-i-sis-01-c-a-s-e');
	});

	it('throws if argument is not string type', () => {
		const string = null;

		function fail() {
			toDashCase(string);
		}

		expect(fail).to.throw(TypeError);
	});
});
