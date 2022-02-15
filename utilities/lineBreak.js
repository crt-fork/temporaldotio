// Add line breaks to text string based on double space
const lineBreak = (string) => {
  let modified = []
  modified = string.split('  ')
  return modified.map(e => {
    return <span className='block' dangerouslySetInnerHTML={{ __html: e }}/>
  })
}

export default lineBreak;