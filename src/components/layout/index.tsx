import styled from 'styled-components'
import { breakpoint } from '../theme'

export type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14

export type RowProps = {
	// default start/end
	ds?: GridSize
	de?: GridSize
	// small start/end
	ss?: GridSize
	se?: GridSize
	// medium start/end
	ms?: GridSize
	me?: GridSize
}

export const Grid = styled.div`
	// default
	display: grid;
	grid-template-columns: 1fr repeat(10, 8rem) 1fr;
	grid-template-rows: max-content;
	grid-auto-columns: auto;
	grid-auto-rows: auto;
	gap: 2rem;
	@media ${breakpoint.m} {
		grid-template-columns: 2rem repeat(6, 8rem) 2rem;
	}

	@media ${breakpoint.s} {
		grid-template-columns: 1rem repeat(6, 8rem) 1rem;
	}
`

export const MaxWidthSection = styled.section`
	// default
	grid-column: 2 / span 10;
	display: grid;
	grid-template-columns: repeat(10, 8rem);
	grid-template-rows: max-content;
	grid-auto-rows: auto;
	gap: 2rem;
	// TODO adjust for mobile
	@media ${breakpoint.m} {
		grid-column: 2 / span 6;
		grid-template-columns: repeat(6, 8rem);
		gap: 2rem;
	}

	@media ${breakpoint.s} {
		gap: 2rem;
	}
`

export const FullWidthSection = styled.section`
	// default
	display: grid;
	grid-column: 1 / span 12;
	grid-template-columns: 1fr repeat(10, 8rem) 1fr;
	grid-template-rows: max-content;
	gap: 2rem;
	// TODO adjust for mobile
	@media ${breakpoint.m} {
		grid-column: 1 / span 8;
		grid-template-columns: 2rem repeat(6, 8rem) 2rem;
		gap: 2rem;
	}

	@media ${breakpoint.s} {
		grid-template-columns: 1rem repeat(6, 8rem) 1rem;
		gap: 2rem
	}
`

export const Row = styled.div<RowProps>`
	// default
	display: grid;
	align-content: center;
	grid-column-start: ${(props) => (props.ds ? props.ds : 1)};
	grid-column-end: span ${(props) => (props.de ? props.de : 12)};
	// TODO adjust for mobile
	@media ${breakpoint.m} {
		grid-column-start: ${({ ms }) => (ms ? ms : 1)};
		grid-column-end: span ${({ me }) => (me ? me : 6)};
	}

	@media ${breakpoint.s} {
		grid-column-start: ${({ ss }) => (ss ? ss : 1)};
		grid-column-end: span ${({ se }) => (se ? se : 6)};
	}
`
