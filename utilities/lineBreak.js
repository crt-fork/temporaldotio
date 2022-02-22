// Add line breaks to text string based on double space
const lineBreak = (string = '') => {
  let modified = []
  modified = string.split('  ')
  return modified.map((e,i) => {
    return <span className='block' key={e+i} dangerouslySetInnerHTML={{ __html: e }}/>
  })
}

export default lineBreak;
