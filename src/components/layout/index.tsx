import styled, { css } from 'styled-components'
import { size, breakpoint } from '../theme'

type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14

type Props = {
	gapDefault?: string
	marginDefault?: string
	gapMedium?: string
	marginMedium?: string | number
	gapSmall?: string
	marginSmall?: string
	columns?: GridSize
}

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

	columns?: GridSize
}

// large 12 cols
// medium 6 cols
// small 6 cols
export const Grid = styled.div<Props>`
	// default
	display: grid;
	grid-template-columns: 1fr repeat(12, minmax(auto, 8rem)) 1fr;
	grid-template-rows: max-content;
	grid-auto-rows: auto;
	gap: ${(props) =>
		props.gapDefault ? props.gapDefault : `${size.s} ${size.s}`};
	margin: ${(props) => (props.marginDefault ? props.marginDefault : 0)};

	@media ${breakpoint.m} {
		grid-template-columns: 2rem repeat(6, 1fr) 2rem;
		gap: ${(props) =>
			props.gapMedium ? props.gapMedium : `${size.xs} ${size.xs}`};
		margin: ${(props) => (props.marginMedium ? props.marginMedium : 0)};
	}

	@media ${breakpoint.s} {
		grid-template-columns: 1rem repeat(6, 1fr) 1rem;
		gap: ${(props) =>
			props.gapSmall ? props.gapSmall : `${size.xs} ${size.xs}`};
		margin: ${(props) => (props.marginSmall ? props.marginSmall : 0)};
	}
`

export const MaxWidthSection = styled.section<Props>`
	// default
	grid-column: 2 / span 12;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: max-content;
	/* grid-auto-rows: auto; */
	gap: ${(props) =>
		props.gapDefault ? props.gapDefault : `${size.s} ${size.s}`};
	margin: ${(props) => (props.marginDefault ? props.marginDefault : 0)};

	@media ${breakpoint.m} {
		grid-column: 2 / span 6;
		grid-template-columns: repeat(6, 1fr);
		gap: ${(props) =>
			props.gapMedium ? props.gapMedium : `${size.xs} ${size.xs}`};
		margin: ${(props) => (props.marginMedium ? props.marginMedium : 0)};
	}

	@media ${breakpoint.s} {
		gap: ${(props) =>
			props.gapSmall ? props.gapSmall : `${size.xs} ${size.xs}`};
		margin: ${(props) => (props.marginSmall ? props.marginSmall : 0)};
	}
`

export const FullWidthSection = styled.section<Props>`
	// default
	grid-column: 1 / span 14;
	display: grid;
	grid-template-columns: 1fr repeat(12, minmax(auto, 4fr)) 1fr;
	grid-template-rows: max-content;
	gap: ${(props) =>
		props.gapDefault ? props.gapDefault : `${size.s} ${size.s}`};
	margin: ${(props) => (props.marginDefault ? props.marginDefault : 0)};

	@media ${breakpoint.m} {
		grid-column: 1 / span 8;
		grid-template-columns: 2rem repeat(6, 1fr) 2rem;
		gap: ${(props) =>
			props.gapMedium ? props.gapMedium : `${size.xs} ${size.xs}`};
		margin: ${(props) => (props.marginMedium ? props.marginMedium : 0)};
	}

	@media ${breakpoint.s} {
		grid-template-columns: 1rem repeat(6, 1fr) 1rem;
		gap: ${(props) =>
			props.gapSmall ? props.gapSmall : `${size.s} ${size.s}`};
		margin: ${(props) => (props.marginSmall ? props.marginSmall : 0)};
	}
`

export const Row = styled.div<RowProps>`
	// default
	${({ columns }) =>
		columns &&
		css`
			display: grid;
			grid-template-columns: repeat(${columns}, 1fr);
		`}
	grid-column-start: ${(props) => (props.ds ? props.ds : 1)};
	grid-column-end: span ${(props) => (props.de ? props.de : 12)};

	@media ${breakpoint.m} {
		grid-column-start: ${({ ms }) => (ms ? ms : 1)};
		grid-column-end: span ${({ me }) => (me ? me : 6)};
	}

	@media ${breakpoint.s} {
		grid-column-start: ${({ ss }) => (ss ? ss : 1)};
		grid-column-end: span ${({ se }) => (se ? se : 6)};
	}
`
