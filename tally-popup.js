import { h, render } from 'preact'

const popup = document.querySelector('#scite-popup')

const rowClasses = type => `icon icon-${type}`

const Row = ({ type, count }) => (
  <div className='scite-tally-row'>
    <i className={rowClasses(type)} />
    <span className='count'>{count}</span>
  </div>
)

const Tally = ({ doi, total, supporting, contradicting, mentioning }) => (
  <div className='scite-tally'>
    <span className='title'>scite_</span>

    <Row type='supporting' count={supporting} />
    <Row type='contradicting' count={contradicting} />
    <Row type='mentioning' count={mentioning} />
  </div>
)

if (window.__SCITE) {
} else {
  console.log(window.__SCITE)
}

