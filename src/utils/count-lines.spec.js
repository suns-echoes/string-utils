import { countLines } from './count-lines.js';


describe('StringUtils.countLines', () => {
	it('returns zero for empty string', () => {
		const string = '';

		expect(countLines(string)).to.be.equal(0);
	});

	it('returns one for single line string', () => {
		const string = 'line';

		expect(countLines(string)).to.be.equal(1);
	});

	it('returns n+1 for each "\n"', () => {
		const string = 'line\nline\nline';

		expect(countLines(string)).to.be.equal(3);
	});
});
